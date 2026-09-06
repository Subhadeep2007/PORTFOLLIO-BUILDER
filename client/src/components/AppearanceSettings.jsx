const AppearanceSettings = ({
    form,
    onNestedChange
}) => {

    return (
        <div className="space-y-6">

            {/* ========================================
                CUSTOM COLORS
            ======================================== */}

            <div>
                <p className="mb-3 text-sm font-semibold text-slate-300">
                    Portfolio Colors
                </p>

                <div
                    className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.02]
                        p-4
                    "
                >

                    <p className="text-sm font-semibold text-white">
                        Customize Colors
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                        Choose the primary and secondary colors
                        for your portfolio.
                    </p>


                    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">

                        {/* PRIMARY COLOR */}

                        <div>

                            <label
                                className="
                                    mb-2
                                    block
                                    text-[11px]
                                    font-medium
                                    text-slate-400
                                "
                            >
                                Primary Color
                            </label>


                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-[#070b16]
                                    p-3
                                "
                            >

                                <input
                                    type="color"
                                    value={
                                        form.customization.primaryColor ||
                                        "#22d3ee"
                                    }
                                    onChange={(event) =>
                                        onNestedChange(
                                            "customization",
                                            "primaryColor",
                                            event.target.value
                                        )
                                    }
                                    className="
                                        h-10
                                        w-10
                                        cursor-pointer
                                        rounded-lg
                                        border-0
                                        bg-transparent
                                    "
                                />


                                <div className="min-w-0">

                                    <p className="text-sm font-medium text-white">
                                        Primary
                                    </p>

                                    <p className="mt-0.5 text-xs text-slate-500">
                                        Main accent color
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-xs
                                            font-mono
                                        "
                                        style={{
                                            color:
                                                form.customization.primaryColor ||
                                                "#22d3ee"
                                        }}
                                    >
                                        {
                                            form.customization.primaryColor ||
                                            "#22d3ee"
                                        }
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* SECONDARY COLOR */}

                        <div>

                            <label
                                className="
                                    mb-2
                                    block
                                    text-[11px]
                                    font-medium
                                    text-slate-400
                                "
                            >
                                Secondary Color
                            </label>


                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-[#070b16]
                                    p-3
                                "
                            >

                                <input
                                    type="color"
                                    value={
                                        form.customization.secondaryColor ||
                                        "#3b82f6"
                                    }
                                    onChange={(event) =>
                                        onNestedChange(
                                            "customization",
                                            "secondaryColor",
                                            event.target.value
                                        )
                                    }
                                    className="
                                        h-10
                                        w-10
                                        cursor-pointer
                                        rounded-lg
                                        border-0
                                        bg-transparent
                                    "
                                />


                                <div className="min-w-0">

                                    <p className="text-sm font-medium text-white">
                                        Secondary
                                    </p>

                                    <p className="mt-0.5 text-xs text-slate-500">
                                        Supporting accent color
                                    </p>

                                    <p
                                        className="
                                            mt-1
                                            text-xs
                                            font-mono
                                        "
                                        style={{
                                            color:
                                                form.customization.secondaryColor ||
                                                "#3b82f6"
                                        }}
                                    >
                                        {
                                            form.customization.secondaryColor ||
                                            "#3b82f6"
                                        }
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* COLOR PREVIEW */}

                    <div className="mt-5">

                        <p className="mb-2 text-[11px] font-medium text-slate-400">
                            Preview
                        </p>

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                                rounded-xl
                                border
                                border-white/10
                                bg-[#070b16]
                                p-4
                            "
                        >

                            <div
                                className="
                                    h-10
                                    w-10
                                    rounded-xl
                                    border
                                    border-white/10
                                "
                                style={{
                                    backgroundColor:
                                        form.customization.primaryColor ||
                                        "#22d3ee"
                                }}
                            />

                            <div
                                className="
                                    h-10
                                    w-10
                                    rounded-xl
                                    border
                                    border-white/10
                                "
                                style={{
                                    backgroundColor:
                                        form.customization.secondaryColor ||
                                        "#3b82f6"
                                }}
                            />

                            <div className="ml-2">

                                <p className="text-sm font-semibold text-white">
                                    Color Preview
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                    These colors will be used across
                                    your portfolio.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};


export default AppearanceSettings;