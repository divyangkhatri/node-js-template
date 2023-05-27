import { Response } from "express";

export class HttpException extends Error {
    public status: number;
    public message: string;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        this.message = message;
    }
}

export const throwCustomError = (e: any, res: Response) => {
    if (e instanceof HttpException) {
        res.status(e.status).send(e.message);
        return;
    }
    res.status(500).send("Internal server error");
};
