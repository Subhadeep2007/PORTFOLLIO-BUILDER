import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


import Login
    from "../pages/auth/Login";

import Register
    from "../pages/auth/Register";

import AdminLogin
    from "../pages/auth/AdminLogin";

import AdminRegister
    from "../pages/auth/AdminRegister";

import VerifyEmail
    from "../pages/auth/VerifyEmail";

import ForgotPassword
    from "../pages/auth/ForgotPassword";

import ResetPassword
    from "../pages/auth/ResetPassword";

import Dashboard
    from "../pages/dashboard/Dashboard";

import AdminDashboard
    from "../pages/admin/AdminDashboard";


import ProtectedRoute
    from "./ProtectedRoute";

import AdminRoute
    from "./AdminRoute";

import PortfolioEditor
    from "../pages/builder/PortfolioEditor";
const AppRoutes = () => {

    return (
        <BrowserRouter>

            <Routes>

                {/* ================= AUTH ================= */}

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/admin/login"
                    element={<AdminLogin />}
                />

                <Route
                    path="/admin/register"
                    element={<AdminRegister />}
                />

                <Route
                    path="/verify-email"
                    element={<VerifyEmail />}
                />

                <Route
                    path="/forgot-password"
                    element={<ForgotPassword />}
                />

                <Route
                    path="/reset-password"
                    element={<ResetPassword />}
                />


                {/* ================= USER ================= */}

<Route element={<ProtectedRoute />}>

    <Route
        path="/dashboard"
        element={<Dashboard />}
    />

    <Route
        path="/dashboard/portfolio"
        element={<PortfolioEditor />}
    />

</Route>

                {/* ================= ADMIN ================= */}

                <Route element={<AdminRoute />}>

                    <Route
                        path="/admin"
                        element={<AdminDashboard />}
                    />

                </Route>


                {/* ================= FALLBACK ================= */}

                <Route
                    path="*"
                    element={
                        <div className="flex min-h-screen items-center justify-center bg-[#050816] text-white">
                            404 — Page Not Found
                        </div>
                    }
                />

            </Routes>

        </BrowserRouter>
    );
};


export default AppRoutes;