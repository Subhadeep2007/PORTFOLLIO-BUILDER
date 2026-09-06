import {
    useAuth
} from "../../context/AuthContext";


const Dashboard = () => {

    const {
        user,
        logout
    } = useAuth();


    return (
        <main className="min-h-screen bg-[#050816] p-6 text-white">

            <div className="mx-auto max-w-6xl">

                <div className="mb-8 flex items-center justify-between">

                    <div>

                        <p className="text-sm text-cyan-400">
                            USER DASHBOARD
                        </p>

                        <h1 className="mt-2 text-3xl font-bold">
                            Welcome {user?.name || "Creator"}
                        </h1>

                    </div>


                    <button
                        onClick={logout}
                        className="rounded-xl border border-white/10 px-4 py-2 text-sm transition hover:bg-white/5"
                    >
                        Logout
                    </button>

                </div>


                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    {[
                        "Portfolio",
                        "Projects",
                        "Skills",
                        "Posts"
                    ].map((item) => (

                        <div
                            key={item}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
                        >

                            <p className="text-slate-400">
                                {item}
                            </p>

                            <p className="mt-3 text-xl font-semibold">
                                Manage
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </main>
    );
};


export default Dashboard;