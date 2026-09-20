import axios from "axios";


const api = axios.create({

    baseURL: import.meta.env.VITE_API_URL,

    withCredentials: true,

    headers: {
        "Content-Type": "application/json"
    }

});


let accessToken = null;

let refreshRequest = null;


const refreshAccessToken = async() => {

    if (!refreshRequest) {

        refreshRequest = api.post(
            "/auth/refresh-token"
        ).then((response) => {

            accessToken =
                response.data.data.accessToken;

            return accessToken;

        }).finally(() => {

            refreshRequest = null;

        });

    }

    return refreshRequest;

};


api.interceptors.request.use(
    (config) => {

        if (accessToken) {

            config.headers.Authorization =
                `Bearer ${accessToken}`;

        }

        return config;

    }
);


api.interceptors.response.use(
    (response) => {

        if (
            response.data?.data?.accessToken
        ) {

            accessToken =
                response.data.data.accessToken;

        }

        return response;

    },
    async(error) => {

        const originalRequest =
            error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry &&
            !originalRequest.url.includes(
                "/auth/refresh-token"
            )
        ) {

            originalRequest._retry = true;

            const token =
                await refreshAccessToken();

            originalRequest.headers.Authorization =
                `Bearer ${token}`;

            return api(originalRequest);

        }

        return Promise.reject(error);

    }
);


export default api;
