import {
    useEffect,
    useRef
} from "react";


const Input = ({
    label,
    value,
    onChange,
    placeholder,
    error,
    type = "text"
}) => {

    return (

        <div>

            <label className="mb-2 block text-sm font-medium text-slate-300">
                {label}
            </label>


            <input
                type={type}
                value={value}
                onChange={(event) =>
                    onChange(
                        event.target.value
                    )
                }
                placeholder={placeholder}
                className={`w-full rounded-xl border bg-[#070b16] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:ring-1 ${
                    error
                        ? "border-red-400/50 focus:border-red-400/60 focus:ring-red-400/10"
                        : "border-white/10 focus:border-cyan-400/40 focus:ring-cyan-400/20"
                }`}
            />


            {error && (

                <p className="mt-1.5 text-[11px] text-red-300">
                    {error}
                </p>

            )}

        </div>
    );
};


const ProfileSettings = ({
    form,
    onChange,
    onNestedChange,
    fieldErrors
}) => {

    const fileInputRef =
        useRef(null);


    // ========================================
    // OPEN FILE PICKER
    // ========================================

    const openFilePicker = () => {

        fileInputRef.current?.click();

    };


    // ========================================
    // IMAGE SELECT
    // ========================================

    const handleProfileImage =
        (event) => {

            const file =
                event.target.files?.[0];


            if (!file) {
                return;
            }


            // --------------------------------
            // IMAGE VALIDATION
            // --------------------------------

            if (
                !file.type.startsWith(
                    "image/"
                )
            ) {

                return;
            }


            // --------------------------------
            // SIZE LIMIT
            // --------------------------------

            const maxSize =
                5 * 1024 * 1024;


            if (
                file.size > maxSize
            ) {

                alert(
                    "Profile image must be less than 5MB."
                );

                event.target.value = "";

                return;
            }


            // --------------------------------
            // FILE -> DATA URL
            // --------------------------------

            const reader =
                new FileReader();


            reader.onload = () => {

                if (
                    typeof reader.result ===
                    "string"
                ) {

                    /*
                     * IMPORTANT:
                     *
                     * Save image inside parent
                     * form state.
                     *
                     * Live preview gets it.
                     * Save sends it to backend.
                     * Refresh loads it again.
                     */

                    onChange(
                        "profileImage",
                        reader.result
                    );
                }
            };


            reader.readAsDataURL(
                file
            );

        };


    // ========================================
    // RESET FILE INPUT
    // ========================================

    useEffect(() => {

        return () => {

            if (fileInputRef.current) {

                fileInputRef.current.value =
                    "";

            }

        };

    }, []);


    return (

        <div className="space-y-5">


            {/* ==================================
                PROFILE IMAGE
            ================================== */}

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">

                <p className="text-sm font-semibold text-white">
                    Profile Image
                </p>

                <p className="mt-1 text-[11px] leading-5 text-slate-500">
                    Click the image to choose a profile picture.
                </p>


                {/* HIDDEN FILE INPUT */}

                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    onChange={
                        handleProfileImage
                    }
                    className="hidden"
                />


                {/* IMAGE BUTTON */}

                <button
                    type="button"
                    onClick={
                        openFilePicker
                    }
                    className="group relative mt-5 block h-32 w-32 overflow-hidden rounded-full border-2 border-cyan-400/30 bg-cyan-400/5 text-3xl font-black text-cyan-300 transition hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]"
                >

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
                            "U"
                        )
                            .charAt(0)
                            .toUpperCase()

                    )}


                    {/* HOVER */}

                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition group-hover:opacity-100">

                        <span className="text-[10px] font-bold text-white">
                            Change Image
                        </span>

                    </div>

                </button>


                {/* STATUS */}

                {form.profileImage ? (

                    <p className="mt-3 text-[11px] text-emerald-300">
                        ✓ Profile image selected
                    </p>

                ) : (

                    <p className="mt-3 text-[11px] text-slate-600">
                        PNG, JPG or WEBP · Max 5MB
                    </p>

                )}

            </div>


            {/* ==================================
                LOCATION
            ================================== */}

            <Input
                label="Location"
                value={
                    form.location
                }
                onChange={(value) =>
                    onChange(
                        "location",
                        value
                    )
                }
                placeholder="India"
                error={
                    fieldErrors.location
                }
            />


            {/* ==================================
                EMAIL
            ================================== */}

            <Input
                label="Public Email"
                type="email"
                value={
                    form.email
                }
                onChange={(value) =>
                    onChange(
                        "email",
                        value
                    )
                }
                placeholder="you@example.com"
                error={
                    fieldErrors.email
                }
            />


            {/* ==================================
                PHONE
            ================================== */}

            <Input
                label="Phone"
                value={
                    form.phone
                }
                onChange={(value) =>
                    onChange(
                        "phone",
                        value
                    )
                }
                placeholder="+91..."
                error={
                    fieldErrors.phone
                }
            />


            {/* ==================================
                WEBSITE
            ================================== */}

            <Input
                label="Website"
                value={
                    form.website
                }
                onChange={(value) =>
                    onChange(
                        "website",
                        value
                    )
                }
                placeholder="https://yourwebsite.com"
            />


            {/* ==================================
                RESUME
            ================================== */}

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">

                <p className="text-sm font-semibold text-white">
                    Resume
                </p>

                <p className="mt-1 text-[11px] leading-5 text-slate-500">
                    Resume is optional.
                </p>


                <div className="mt-4 space-y-4">

                    <Input
                        label="Resume URL"
                        value={
                            form.resume.url
                        }
                        onChange={(value) =>
                            onNestedChange(
                                "resume",
                                "url",
                                value
                            )
                        }
                        placeholder="https://..."
                    />


                    <Input
                        label="File Name"
                        value={
                            form.resume.fileName
                        }
                        onChange={(value) =>
                            onNestedChange(
                                "resume",
                                "fileName",
                                value
                            )
                        }
                        placeholder="resume.pdf"
                    />

                </div>

            </div>

        </div>
    );
};


export default ProfileSettings;