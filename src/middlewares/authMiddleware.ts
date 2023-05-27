import { Request, Response, NextFunction } from "express";
import { CUSTOM_ROLE } from "../services/firebase/fireabase.service";
import { HttpException } from "../exception/HttpException";

const unauthenticatedRoutes = ["/allCategories"];

const checkOpenRoutes = (url: string) => {
    for (const x of unauthenticatedRoutes) {
        if (url.includes(x)) {
            return true;
        }
    }
    return false;
};

export const checkIsSuperAdmin = (req: Request) => {
    const role = req?.headers?.role?.toString() || "";
    if (role !== CUSTOM_ROLE.SUPER_ADMIN) {
        throw new HttpException(401, "This routes is only for super admin");
    }
};

export const checkIsBrandAdmin = (req: Request) => {
    const role = req?.headers?.role?.toString() || "";
    if (
        role !== CUSTOM_ROLE.ADMIN &&
        role !== CUSTOM_ROLE.SUPER_ADMIN &&
        role !== CUSTOM_ROLE.BRAND_ADMIN
    ) {
        throw new HttpException(
            401,
            "This routes is only for admin or brand admin",
        );
    }
};

export const checkIsAdmin = (req: Request) => {
    const role = req?.headers?.role?.toString() || "";
    if (role !== CUSTOM_ROLE.ADMIN && role !== CUSTOM_ROLE.SUPER_ADMIN) {
        throw new HttpException(401, "This routes is only for admin");
    }
};

export const isAdmin = (req: Request) => {
    const role = req?.headers?.role?.toString() || "";
    return role === CUSTOM_ROLE.ADMIN || role === CUSTOM_ROLE.SUPER_ADMIN;
};

export const authMiddleware = async (
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    try {
        // const headerToken: string =
        //     request?.headers?.authorization ||
        //     request?.headers?.Authorization?.toString();
        // if (!headerToken) {
        //     if (checkOpenRoutes(request.url)) {
        //         next();
        //         return;
        //     }
        //     return response.status(401).send({ message: "No token provided" });
        // }
        //
        // if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
        //     if (checkOpenRoutes(request.url)) {
        //         next();
        //         return;
        //     }
        //     return response
        //         .status(401)
        //         .send({ message: "Invalid token or Please add Bearer" });
        // }
        //
        // const token = headerToken.split(" ")[1];
        // const authResponse = await auth().verifyIdToken(token);
        // let role: string = null;
        // if (authResponse?.super_admin) {
        //     role = CUSTOM_ROLE.SUPER_ADMIN;
        // } else if (authResponse?.admin) {
        //     role = CUSTOM_ROLE.ADMIN;
        // } else if (authResponse?.brand_admin) {
        //     role = CUSTOM_ROLE.BRAND_ADMIN;
        // } else if (authResponse?.user) {
        //     role = CUSTOM_ROLE.USER;
        // }
        // request.headers.user_id = authResponse.uid;
        // request.headers.email = authResponse.email;
        // request.headers.phone_number = authResponse.phone_number;
        // request.headers.role = role;
        request.headers.userId = "test";
        request.headers.email = "test@gmail.com";
        request.headers.phone_number = "1234567890";
        request.headers.role = "admin";
        next();
    } catch (error) {
        console.log("Error in verify token", error);
        if (error?.code === "auth/id-token-expired") {
            response.status(403).send({ message: "Token expire" });
        } else {
            response
                .status(401)
                .send({ message: `Error in verify token: ${error.message}` });
        }
    }
};
