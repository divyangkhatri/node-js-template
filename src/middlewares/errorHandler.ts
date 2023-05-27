import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exception/HttpException";

export const errorHandleForBadRequest = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    if (err instanceof SyntaxError && "body" in err) {
        console.error("Error in json parse", err);
        return res.status(400).send({ message: "Bad request", error: err }); // Bad request
    }
    next();
};

export const errorNotFoundHandler = (req: Request, res: Response) =>
    res.status(404).send({ message: "NOT FOUND" });
