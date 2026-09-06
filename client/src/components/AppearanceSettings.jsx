const templates = [
    [
        "modern",
        "Modern",
        "Balanced portfolio"
    ],
    [
        "minimal",
        "Minimal",
        "Clean and focused"
    ],
    [
        "developer",
        "Developer",
        "Code-first"
    ],
    [
        "creative",
        "Creative",
        "Visual style"
    ]
];


const themes = [
    "dark",
    "light",
    "system",
    "custom"
];


const AppearanceSettings = ({
    form,
    onChange,
    onNestedChange
}) => {

    return (

        <div className="space-y-6">

            <div>

                <p className="mb-3 text-sm font-semibold text-slate-300">
                    Portfolio Template
                </p>


                <div className="grid grid-cols-2 gap-3">

                    {templates.map(
                        ([
                            id,
                            label,
                            description
                        ]) => (

                            <button
                                key={id}
                                type="button"
                                onClick={() =>
                                    onChange(
                                        "template",
                                        id
                                    )
                                }
                                className={`rounded-2xl border p-3 text-left transition ${
                                    form.template === id
                                        ? "border-cyan-400/40 bg-cyan-400/10"
                                        : "border-white/10 bg-white/[0.02] hover:border-white/20"
                                }`}
                            >

                                <div className="mb-3 h-16 rounded-xl bg-[#040712] p-2">

                                    <div className="h-2 w-1/2 rounded bg-cyan-400/40" />

                                    <div className="mt-2 h-1.5 w-3/4 rounded bg-white/10" />

                                    <div className="mt-2 h-1.5 w-1/2 rounded bg-white/5" />

                                </div>


                                <p className="text-xs font-semibold">
                                    {label}
                                </p>

                                <p className="mt-1 text-[10px] text-slate-600">
                                    {description}
                                </p>

                            </button>

                        )
                    )}

                </div>

            </div>


            <div>

                <p className="mb-3 text-sm font-semibold text-slate-300">
                    Theme
                </p>


                <div className="grid grid-cols-2 gap-2">

                    {themes.map(
                        (theme) => (

                            <button
                                key={theme}
                                type="button"
                                onClick={() =>
                                    onChange(
                                        "theme",
                                        theme
                                    )
                                }
                                className={`rounded-xl border px-3 py-3 text-xs font-semibold capitalize transition ${
                                    form.theme === theme
                                        ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                                        : "border-white/10 text-slate-400 hover:text-white"
                                }`}
                            >
                                {theme}
                            </button>

                        )
                    )}

                </div>

            </div>


            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">

                <p className="text-sm font-semibold">
                    Custom Colors
                </p>


                <div className="mt-4 grid grid-cols-2 gap-3">

                    {[
                        [
                            "primaryColor",
                            "Primary"
                        ],
                        [
                            "secondaryColor",
                            "Secondary"
                        ]
                    ].map(
                        ([
                            name,
                            label
                        ]) => (

                            <div key={name}>

                                <label className="mb-2 block text-[11px] text-slate-500">
                                    {label}
                                </label>


                                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#070b16] p-2">

                                    <input
                                        type="color"
                                        value={
                                            form.customization[
                                                name
                                            ] ||
                                            "#22d3ee"
                                        }
                                        onChange={(event) =>
                                            onNestedChange(
                                                "customization",
                                                name,
                                                event.target.value
                                            )
                                        }
                                        className="h-8 w-8 cursor-pointer rounded-lg border-0 bg-transparent"
                                    />


                                    <span className="text-xs text-slate-400">
                                        {
                                            form.customization[
                                                name
                                            ]
                                        }
                                    </span>

                                </div>

                            </div>

                        )
                    )}

                </div>

            </div>


            <div>

                <label className="mb-2 block text-sm font-medium text-slate-300">
                    Font
                </label>


                <select
                    value={
                        form.customization.font
                    }
                    onChange={(event) =>
                        onNestedChange(
                            "customization",
                            "font",
                            event.target.value
                        )
                    }
                    className="w-full rounded-xl border border-white/10 bg-[#070b16] px-4 py-3 text-sm text-white outline-none"
                >
                    <option value="Inter">
                        Inter
                    </option>

                    <option value="Poppins">
                        Poppins
                    </option>

                    <option value="Roboto">
                        Roboto
                    </option>

                    <option value="Space Grotesk">
                        Space Grotesk
                    </option>

                    <option value="system">
                        System
                    </option>

                </select>

            </div>


            <div>

                <label className="mb-2 block text-sm font-medium text-slate-300">
                    Border Radius
                </label>


                <select
                    value={
                        form.customization
                            .borderRadius
                    }
                    onChange={(event) =>
                        onNestedChange(
                            "customization",
                            "borderRadius",
                            event.target.value
                        )
                    }
                    className="w-full rounded-xl border border-white/10 bg-[#070b16] px-4 py-3 text-sm text-white outline-none"
                >
                    <option value="small">
                        Small
                    </option>

                    <option value="medium">
                        Medium
                    </option>

                    <option value="large">
                        Large
                    </option>

                    <option value="pill">
                        Pill
                    </option>

                </select>

            </div>

        </div>
    );
};


export default AppearanceSettings;