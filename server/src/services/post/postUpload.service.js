import cloudinary
from "../../config/cloudinary.js";


// ========================================
// UPLOAD POST MEDIA
// ========================================

const uploadPostMedia = (
    file
) => {

    return new Promise(
        (
            resolve,
            reject
        ) => {

            if (!file) {
                reject(
                    new Error(
                        "No post media received"
                    )
                );

                return;
            }


            let resourceType =
                "image";

            if (
                file.mimetype.startsWith(
                    "video/"
                )
            ) {
                resourceType =
                    "video";
            }


            const uploadStream =
                cloudinary.uploader.upload_stream({
                        folder: "portfolio/posts",

                        resource_type: resourceType
                    },

                    (
                        error,
                        result
                    ) => {

                        if (error) {
                            reject(error);

                            return;
                        }


                        if (!result) {
                            reject(
                                new Error(
                                    "Post media upload failed"
                                )
                            );

                            return;
                        }


                        resolve(result);
                    }
                );


            uploadStream.end(
                file.buffer
            );
        }
    );
};


export default uploadPostMedia;