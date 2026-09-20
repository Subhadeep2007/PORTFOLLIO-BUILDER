import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


const AppRoutes = () => {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={
                        <div className="flex justify-center items-center h-screen text-3xl font-bold text-amber-300">
                            Home
                        </div>
                    }
                />

            </Routes>

        </BrowserRouter>

    );

};


export default AppRoutes;