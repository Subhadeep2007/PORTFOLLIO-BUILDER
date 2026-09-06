import {
    useState
} from "react";

import {
    Link,
    useNavigate
} from "react-router-dom";

import AuthLayout
    from "../../layouts/AuthLayout";

import AuthCard
    from "../../components/auth/AuthCard";

import AuthInput
    from "../../components/auth/AuthInput";

import AuthButton
    from "../../components/auth/AuthButton";

import {
    useAuth
} from "../../context/AuthContext";


const AdminLogin = () => {

    const navigate =
        useNavigate();

    const {
        loginAdmin
    } = useAuth();


    const [form, setForm] = useState({
        email: "",
        password: ""
    });


    const [error, setError] =
        useState("");

    const [loading, setLoading] =
        useState(false);


    const handleChange = (event) => {

        setForm({
            ...form,
            [event.target.name]:
                event.target.value
        });
    };


    const handleSubmit = async (event) => {

        event.preventDefault();

        setError("");


        try {

            setLoading(true);


            const response =
                await loginAdmin(form);


            if (
                response?.data
                    ?.requiresEmailVerification
            ) {

                navigate(
                    "/verify-email",
                    {
                        state: {
                            email:
                                response.data.email,
                            admin: true
                        }
                    }
                );

                return;
            }


            navigate(
                "/admin",
                {
                    replace: true
                }
            );

        } catch (error) {

            setError(
                error?.response?.data?.message ||
                "Admin login failed."
            );

        } finally {

            setLoading(false);
        }
    };


    return (
        <AuthLayout
            title="Admin access"
            subtitle="Sign in to manage the platform."
        >

            <AuthCard>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <AuthInput
                        label="Admin Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="admin@example.com"
                    />


                    <AuthInput
                        label="Password"
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        error={error}
                    />


                    <AuthButton
                        type="submit"
                        loading={loading}
                    >
                        Admin Login
                    </AuthButton>

                </form>


                <p className="mt-6 text-center text-sm text-slate-400">

                    Need an admin account?{" "}

                    <Link
                        to="/admin/register"
                        className="text-cyan-400 hover:text-cyan-300"
                    >
                        Register
                    </Link>

                </p>

            </AuthCard>

        </AuthLayout>
    );
};


export default AdminLogin;