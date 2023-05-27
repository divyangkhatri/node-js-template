import { validationResult } from "express-validator";
import { Request, Response } from "express";

export const checkRequestValidation =
    (method: any) => (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        method(req, res);
    };

export const getNotificationString = (
    data: { [key: string]: string },
    str: string,
) => {
    let finalString = str;
    Object.keys(data).forEach(
        key =>
            (finalString = finalString.replace(
                new RegExp(`{{${key}}}`, "g"),
                data[key],
            )),
    );
    return finalString;
};

export const randomInviteCodeGenerator = () => {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < 6; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
};

export const queryfy = (obj: any): any => {
    // Make sure we don't alter integers.
    if (typeof obj === "number") {
        return obj;
    }

    // Stringify everything other than objects.
    if (Array.isArray(obj)) {
        const props = obj.map((value: any) => `${queryfy(value)}`).join(",");
        return `[${props}]`;
    }

    // Iterate through object keys to convert into a string
    // to be interpolated into the query.
    if (typeof obj === "object" && obj !== null) {
        const props = Object.keys(obj)
            .map(key => `${key}:${queryfy(obj[key])}`)
            .join(",");

        return `{${props}}`;
    }
    return JSON.stringify(obj);
};

export const formatStatusForShopify = (str: string): any => {
    // Make sure we don't alter integers.
    let tempStr = str;
    tempStr = tempStr.replace(/"ACTIVE"/g, "ACTIVE");
    tempStr = tempStr.replace(/"ARCHIVED"/g, "ARCHIVED");
    tempStr = tempStr.replace(/"DRAFT"/g, "DRAFT");
    return tempStr;
};

export const uniqueArray = (array: any) => {
    return array.reduce((accumulator: any, current: any) => {
        const existingIndex = accumulator.findIndex(
            (obj: any) => obj.key === current.key,
        );
        if (existingIndex === -1) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);
};
