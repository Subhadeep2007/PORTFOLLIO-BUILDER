const Metric = ({
    value,
    label
}) => {

    return (

        <div className="border-b border-white/10 px-4 py-6 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">

            <p className="text-xl font-black text-white">
                {value}
            </p>

            <p className="mt-1 text-[10px] text-slate-600">
                {label}
            </p>

        </div>
    );
};


const PreviewBlock = ({
    number,
    title,
    children
}) => {

    return (

        <section className="border-b border-white/10 px-6 py-12 sm:px-12">

            <div className="flex items-start gap-4">

                <div className="shrink-0 text-[10px] font-bold text-cyan-400">
                    {number}
                </div>


                <div>

                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400">
                        {title}
                    </p>

                    <div className="mt-4 text-sm leading-7 text-slate-400">
                        {children}
                    </div>

                </div>

            </div>

        </section>
    );
};


const LivePortfolioPreview = ({
    form,
    user
}) => {

    const name =
        form.title ||
        user?.name ||
        "Your Name";


    const parts =
        name.split(" ");


    const first =
        parts[0];


    const rest =
        parts
            .slice(1)
            .join(" ");


    const socialLinks = [

        [
            "GH",
            form.github
        ],

        [
            "IN",
            form.linkedin
        ],

        [
            "X",
            form.twitter
        ],

        [
            "IG",
            form.instagram
        ],

        [
            "YT",
            form.youtube
        ]

    ].filter(
        ([, value]) => value
    );


    const primary =
        form.customization
            .primaryColor ||
        "#22d3ee";


    return (

        <section className="min-w-0 rounded-3xl border border-white/10 bg-[#070b16] p-3 shadow-2xl sm:p-4">

            <div className="mb-3 flex items-center justify-between px-2">

                <div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                        Live Preview
                    </p>

                    <p className="mt-1 text-xs text-slate-600">
                        Changes appear instantly.
                    </p>

                </div>


                <span className="inline-flex items-center gap-2 text-xs text-emerald-300">

                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                    Live

                </span>

            </div>


            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#020712]">

                {/* NAVBAR */}

                <nav className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-8">

                    <div>

                        <span className="text-sm font-black text-white">
                            {first}
                        </span>

                        <span
                            className="text-sm font-black"
                            style={{
                                color: primary
                            }}
                        >
                            {rest
                                ? ` ${rest}`
                                : ""}
                        </span>

                    </div>


                    <div className="hidden items-center gap-6 text-xs text-slate-500 md:flex">

                        <span>
                            Home
                        </span>

                        {form.showAboutSection && (
                            <span>
                                About
                            </span>
                        )}

                        {form.showSkillsSection && (
                            <span>
                                Skills
                            </span>
                        )}

                        {form.showProjectsSection && (
                            <span>
                                Projects
                            </span>
                        )}

                        {form.showContactSection && (
                            <span>
                                Contact
                            </span>
                        )}

                    </div>


                    {form.showContactSection ? (

                        <a
                            href={`mailto:${
                                form.email ||
                                user?.email ||
                                ""
                            }`}
                            className="rounded-lg px-3 py-2 text-[10px] font-bold text-slate-950"
                            style={{
                                backgroundColor:
                                    primary
                            }}
                        >
                            Let's Connect
                        </a>

                    ) : (

                        <span className="rounded-lg border border-white/10 px-3 py-2 text-[10px] text-slate-500">
                            Portfolio
                        </span>

                    )}

                </nav>


                {/* HERO */}

                <div className="grid gap-10 px-6 py-14 sm:px-12 sm:py-20 lg:grid-cols-2 lg:items-center">

                    <div className="order-2 lg:order-1">

                        <p
                            className="text-sm font-medium"
                            style={{
                                color: primary
                            }}
                        >
                            Hello, I'm
                        </p>


                        <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                            {
                                form.title ||
                                user?.name ||
                                "Your Name"
                            }
                        </h2>


                        <p className="mt-4 text-lg font-semibold text-slate-300">
                            {
                                form.headline ||
                                "Your professional headline"
                            }
                        </p>


                        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                            {
                                form.bio ||
                                "Add your bio from the Basic section."
                            }
                        </p>


                        <div className="mt-6 flex flex-wrap gap-2">

                            {socialLinks.map(
                                ([
                                    label,
                                    value
                                ]) => (

                                    <a
                                        key={label}
                                        href={value}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-[10px] font-bold text-slate-400 hover:border-cyan-400/30 hover:text-cyan-300"
                                    >
                                        {label}
                                    </a>

                                )
                            )}

                        </div>


                        <div className="mt-7 flex flex-wrap gap-3">

                            {form.showContactSection && (

                                <a
                                    href={`mailto:${
                                        form.email ||
                                        user?.email ||
                                        ""
                                    }`}
                                    className="rounded-lg px-5 py-2.5 text-xs font-bold text-slate-950"
                                    style={{
                                        backgroundColor:
                                            primary
                                    }}
                                >
                                    Let's Connect →
                                </a>

                            )}


                            {form.resume.url && (

                                <a
                                    href={
                                        form.resume.url
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-lg border px-5 py-2.5 text-xs font-medium text-cyan-300"
                                    style={{
                                        borderColor:
                                            `${primary}55`
                                    }}
                                >
                                    Download CV
                                </a>

                            )}

                        </div>

                    </div>


                    <div className="order-1 flex justify-center lg:order-2">

                        <div
                            className="relative flex h-56 w-56 items-center justify-center rounded-full border sm:h-72 sm:w-72"
                            style={{
                                borderColor:
                                    `${primary}55`,
                                boxShadow:
                                    `0 0 100px ${primary}22`
                            }}
                        >

                            <div
                                className="absolute inset-5 rounded-full border"
                                style={{
                                    borderColor:
                                        `${primary}22`
                                }}
                            />


                            <div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-full bg-[#0b1222] text-5xl font-black text-cyan-300 sm:h-56 sm:w-56">

                                {form.profileImage ? (

                                    <img
                                        src={
                                            form.profileImage
                                        }
                                        alt={
                                            form.title ||
                                            "Profile"
                                        }
                                        className="h-full w-full object-cover"
                                    />

                                ) : (

                                    (
                                        form.title ||
                                        user?.name ||
                                        "U"
                                    )
                                        .charAt(0)
                                        .toUpperCase()

                                )}

                            </div>

                        </div>

                    </div>

                </div>


                {/* METRICS */}

                <div className="grid grid-cols-2 border-y border-white/10 sm:grid-cols-4">

                    <Metric
                        value="0"
                        label="Projects Built"
                    />

                    <Metric
                        value="0"
                        label="Years of Learning"
                    />

                    <Metric
                        value="0"
                        label="Technologies"
                    />

                    <Metric
                        value="0"
                        label="Ideas to Build"
                    />

                </div>


                {form.showAboutSection && (

                    <PreviewBlock
                        number="01"
                        title="About Me"
                    >
                        {form.bio ||
                            "Your about section will appear here."}
                    </PreviewBlock>

                )}


                {form.showSkillsSection && (

                    <PreviewBlock
                        number="02"
                        title="Tech Stack"
                    >
                        Skills added from the Skills dashboard will appear here.
                    </PreviewBlock>

                )}


                {form.showProjectsSection && (

                    <PreviewBlock
                        number="03"
                        title="My Projects"
                    >
                        Projects added from the Projects dashboard will appear here.
                    </PreviewBlock>

                )}


                {form.showExperienceSection && (

                    <PreviewBlock
                        number="04"
                        title="Experience"
                    >
                        Experience, internships or freelance work will appear here.
                    </PreviewBlock>

                )}


                {form.showEducationSection && (

                    <PreviewBlock
                        number="05"
                        title="Education"
                    >
                        Education details will appear here.
                    </PreviewBlock>

                )}


                {form.showCertificatesSection && (

                    <PreviewBlock
                        number="06"
                        title="Certificates"
                    >
                        Certificates will appear here.
                    </PreviewBlock>

                )}


                {form.showPostsSection && (

                    <PreviewBlock
                        number="07"
                        title="Latest Posts"
                    >
                        Posts and articles will appear here.
                    </PreviewBlock>

                )}


                {form.showContactSection && (

                    <PreviewBlock
                        number="08"
                        title="Contact"
                    >

                        <div className="space-y-2">

                            {form.email && (
                                <p>
                                    Email:
                                    {" "}
                                    <span className="text-slate-300">
                                        {form.email}
                                    </span>
                                </p>
                            )}


                            {form.phone && (
                                <p>
                                    Phone:
                                    {" "}
                                    <span className="text-slate-300">
                                        {form.phone}
                                    </span>
                                </p>
                            )}


                            {form.location && (
                                <p>
                                    Location:
                                    {" "}
                                    <span className="text-slate-300">
                                        {form.location}
                                    </span>
                                </p>
                            )}


                            {!form.email &&
                                !form.phone &&
                                !form.location && (

                                    <p>
                                        Add contact details from the Profile section.
                                    </p>

                                )}

                        </div>

                    </PreviewBlock>

                )}


                <footer className="border-t border-white/10 px-6 py-8 text-center">

                    <p className="text-xs text-slate-600">
                        Built with Portfolio Builder
                    </p>

                </footer>

            </div>

        </section>
    );
};


export default LivePortfolioPreview;