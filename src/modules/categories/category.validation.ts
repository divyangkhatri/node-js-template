import { checkSchema } from "express-validator";
import { isValidObjectId } from "mongoose";

const categoryNameValidation: any = {
    name: {
        in: ["body"],
        notEmpty: {
            errorMessage: "body is require",
        },
        isString: {
            errorMessage: "body be a string",
        },
        isLength: {
            errorMessage: "body must be less than 50",
            options: {
                max: 50,
            },
        },
    },
};

export const categoryValidation = checkSchema({
    ...categoryNameValidation,
});

export const categoryIdValidation = checkSchema({
    category_id: {
        in: ["params"],
        notEmpty: {
            errorMessage: "category_id is require",
        },
        custom: {
            options: (value: any, { req }: any) => {
                return isValidObjectId(req.params.post_id);
            },
            errorMessage: "category_id is not valid",
        },
    },
});

export const updateCategoryValidation = checkSchema({
    category_id: {
        in: ["params"],
        notEmpty: {
            errorMessage: "category_id is require",
        },
        custom: {
            options: (value: any, { req }: any) => {
                return isValidObjectId(req.params.post_id);
            },
            errorMessage: "category_id is not valid",
        },
    },
    ...categoryNameValidation,
});
