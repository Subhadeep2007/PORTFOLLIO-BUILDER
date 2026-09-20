import jwt from "jsonwebtoken";

const authMiddleware = (
    req,
    res,
    next
) => {

    try {

        const authHeader =
            req.headers.authorization;

        const token =
            authHeader?.startsWith("Bearer ")
                ? authHeader.split(" ")[1]
                : req.cookies.accessToken;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Access token is required"
            });
        }

        if (
            authHeader &&
            !authHeader.startsWith("Bearer ")
        ) {
            return res.status(401).json({
                success: false,
                message: "Invalid authorization format"
            });
        }

        const decoded =
            jwt.verify(
                token,
                process.env.JWT_SECRET
            );

        req.user = decoded;

        next();

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Invalid or expired access token"
        });
    }
};

export default authMiddleware;
