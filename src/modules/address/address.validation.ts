import { checkSchema } from "express-validator";
import { isValidObjectId } from "mongoose";

const optionalField: any = {
    optional: {
        options: {
            checkFalsy: true,
        },
    },
};

// VALIDATION FOR ADDRESS

// const addressBodyValidation : any = {
//     name: {
//         in: ["body"],
//         notEmpty: {
//             errorMessage: "name is require",
//         },
//         isString: {
//             errorMessage: "name be a string",
//         },
//         isLength: {
//             errorMessage: "name must be less than 50",
//             options: {
//                 max: 50,
//             },
//         },
//     },
//     phone_number: {
//         in: ["body"],
//         notEmpty: {
//             errorMessage: "phone_number is require",
//         },
//         isString: {
//             errorMessage: "phone_number be a string",
//         },
//         isLength: {
//             errorMessage: "phone_number must be less than 50",
//             options: {
//                 max: 20,
//             },
//         },
//     },
//     address_line_1: {
//         in: ["body"],
//         notEmpty: {
//             errorMessage: "address_line_1 is require",
//         },
//         isString: {
//             errorMessage: "address_line_1 be a string",
//         },
//         isLength: {
//             errorMessage: "address_line_1 must be less than 100",
//             options: {
//                 max: 100,
//             },
//         },
//     },
//     address_line_2: {
//         in: ["body"],
//         ...optionalField,
//         isString: {
//             errorMessage: "address_line_2 be a string",
//         },
//         isLength: {
//             errorMessage: "address_line_2 must be less than 100",
//             options: {
//                 max: 100,
//             },
//         },
//     },
//     city: {
//         in: ["body"],
//         notEmpty: {
//             errorMessage: "city is require",
//         },
//         isString: {
//             errorMessage: "city be a string",
//         },
//         isLength: {
//             errorMessage: "city must be less than 50",
//             options: {
//                 max: 50,
//             },
//         },
//     },
//     zip_code: {
//         in: ["body"],
//         notEmpty: {
//             errorMessage: "zip_code is require",
//         },
//         isInt: {
//             errorMessage: "zip_code be a number",
//         },
//         isLength: {
//             errorMessage: "zip_code must be less than 10",
//             options: {
//                 max: 10,
//             },
//         },
//     },
//     state: {
//         in: ["body"],
//         notEmpty: {
//             errorMessage: "state is require",
//         },
//         isString: {
//             errorMessage: "state be a string",
//         },
//         isLength: {
//             errorMessage: "state must be less than 50",
//             options: {
//                 max: 50,
//             },
//         },
//     },
//     country: {
//         in: ["body"],
//         notEmpty: {
//             errorMessage: "country is require",
//         },
//         isString: {
//             errorMessage: "country be a string",
//         },
//         isLength: {
//             errorMessage: "country must be less than 50",
//             options: {
//                 max: 50,
//             },
//         },
//     },
// };

const addressOptionalBodyValidation: any = {
    name: {
        in: ["body"],
        ...optionalField,
        isString: {
            errorMessage: "name be a string",
        },
        isLength: {
            errorMessage: "name must be less than 50",
            options: {
                max: 50,
            },
        },
    },
    phone_number: {
        in: ["body"],
        ...optionalField,
        isString: {
            errorMessage: "phone_number be a string",
        },
        isLength: {
            errorMessage: "phone_number must be less than 20",
            options: {
                max: 20,
            },
        },
    },
    address_line_1: {
        in: ["body"],
        ...optionalField,
        isString: {
            errorMessage: "address_line_1 be a string",
        },
        isLength: {
            errorMessage: "address_line_1 must be less than 100",
            options: {
                max: 100,
            },
        },
    },
    address_line_2: {
        in: ["body"],
        ...optionalField,

        isString: {
            errorMessage: "address_line_2 be a string",
        },
        isLength: {
            errorMessage: "address_line_2 must be less than 100",
            options: {
                max: 100,
            },
        },
    },
    city: {
        in: ["body"],
        ...optionalField,
        isString: {
            errorMessage: "city be a string",
        },
        isLength: {
            errorMessage: "city must be less than 50",
            options: {
                max: 50,
            },
        },
    },
    zip_code: {
        in: ["body"],
        ...optionalField,

        isInt: {
            errorMessage: "zip_code be a number",
        },
        toInt: true,
        isLength: {
            errorMessage: "zip_code must be less than 10",
            options: {
                max: 10,
            },
        },
    },
    state: {
        in: ["body"],
        ...optionalField,

        isString: {
            errorMessage: "state be a string",
        },
        isLength: {
            errorMessage: "state must be less than 50",
            options: {
                max: 50,
            },
        },
    },
    country: {
        in: ["body"],
        ...optionalField,
        isString: {
            errorMessage: "country be a string",
        },
        isLength: {
            errorMessage: "country must be less than 50",
            options: {
                max: 50,
            },
        },
    },
};

export const addressValidation = checkSchema({
    ...addressOptionalBodyValidation,
});

const addressId: any = {
    address_id: {
        in: ["params"],
        notEmpty: {
            errorMessage: "address_id is require",
        },
    },
    custom: {
        options: (value: any, { req }: any) => {
            return isValidObjectId(req.params.post_id);
        },
        errorMessage: "address_id is not valid",
    },
};

export const addressIdValidation = checkSchema({
    ...addressId,
});

export const updateAddressValidation = checkSchema({
    ...addressId,
    ...addressOptionalBodyValidation,
});
