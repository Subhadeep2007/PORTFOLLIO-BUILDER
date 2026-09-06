import {
    useAuth
} from "../../context/AuthContext";


const AdminDashboard = () => {

    const {
        user,
        logout
    } = useAuth();


    return (
        <main className="min-h-screen bg-[#050816] p-6 text-white">

            <div className="mx-auto max-w-7xl">

                <header className="mb-10 flex items-center justify-between">

                    <div>

                        <p className="text-sm tracking-widest text-cyan-400">
                            ADMIN PANEL
                        </p>

                        <h1 className="mt-2 text-3xl font-bold">
                            Platform Dashboard
                        </h1>

                        <p className="mt-1 text-sm text-slate-500">
                            Welcome, {user?.name || "Administrator"}
                        </p>

                    </div>


                    <button
                        onClick={logout}
                        className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/5"
                    >
                        Logout
                    </button>

                </header>


                <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    {[
                        ["Users", "0"],
                        ["Portfolios", "0"],
                        ["Published", "0"],
                        ["Views", "0"]
                    ].map(([label, value]) => (

                        <div
                            key={label}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
                        >

                            <p className="text-sm text-slate-400">
                                {label}
                            </p>

                            <p className="mt-3 text-3xl font-bold">
                                {value}
                            </p>

                        </div>

                    ))}

                </section>


                <section className="mt-6 grid gap-4 md:grid-cols-2">

                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">

                        <h2 className="font-semibold">
                            User Management
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            Manage platform users and account status.
                        </p>

                    </div>


                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">

                        <h2 className="font-semibold">
                            Portfolio Management
                        </h2>

                        <p className="mt-2 text-sm text-slate-500">
                            Monitor and control public portfolios.
                        </p>

                    </div>

                </section>

            </div>

        </main>
    );
};


export default AdminDashboard;