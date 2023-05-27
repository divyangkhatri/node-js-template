import { swaggerAuthorization } from "./common.swagger";

export const addressSchema = {
    Address: {
        type: "object",
        properties: {
            id: {
                type: "string",
            },
            name: {
                type: "string",
            },
            phone_number: {
                type: "string",
            },
            address_line_1: {
                type: "string",
            },
            address_line_2: {
                type: "string",
            },
            city: {
                type: "string",
            },
            zip_code: {
                type: "number",
            },
            state: {
                type: "state",
            },
            country: {
                type: "state",
            },
            created_at: {
                type: "string",
            },
            updated_at: {
                type: "string",
            },
        },
        xml: {
            name: "address",
        },
    },
};

const postAddressSwagger = {
    type: "object",
    properties: {
        name: {
            type: "string",
        },
        phone_number: {
            type: "string",
        },
        address_line_1: {
            type: "string",
        },
        address_line_2: {
            type: "string",
        },
        city: {
            type: "string",
        },
        zip_code: {
            type: "number",
        },
        state: {
            type: "state",
        },
        country: {
            type: "state",
        },
    },
};

const defaultAddressIdParams = {
    name: "address_id",
    in: "path",
    description: "Address ID of the address",
    required: true,
    schema: {
        type: "string",
    },
};

const defaultAddressResponse = {
    responses: {
        "200": {
            description: "successful operation",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        $ref: "#/components/schemas/Address",
                    },
                },
            },
        },
        "400": {
            description: "Invalid tag value",
        },
    },
};

export const addressSwaggerObj = {
    "/address/allAddresses": {
        get: {
            tags: ["Address"],
            summary: "Get the all addresses",
            ...defaultAddressResponse,
            ...swaggerAuthorization,
        },
    },
    "/address/{address_id}": {
        get: {
            tags: ["Address"],
            summary: "Get the address by ID",
            parameters: [defaultAddressIdParams],
            ...defaultAddressResponse,
            ...swaggerAuthorization,
        },
        put: {
            tags: ["Address"],
            summary: "Update a address by Id.",
            parameters: [defaultAddressIdParams],
            requestBody: {
                description: "Update a address by Id.",
                content: {
                    "application/json": {
                        schema: {
                            ...postAddressSwagger,
                        },
                    },
                },
                required: true,
            },
            ...defaultAddressResponse,
            ...swaggerAuthorization,
        },
        delete: {
            tags: ["Address"],
            summary: "Delete the address by ID",
            parameters: [defaultAddressIdParams],
            ...defaultAddressResponse,
            ...swaggerAuthorization,
        },
    },

    "/address/createAddress": {
        post: {
            tags: ["Address"],
            summary: "create a new address",
            requestBody: {
                description: "Create a new address",
                content: {
                    "application/json": {
                        schema: {
                            ...postAddressSwagger,
                        },
                    },
                },
                required: true,
            },
            responses: {
                "201": defaultAddressResponse.responses["200"],
                "400": defaultAddressResponse.responses["400"],
            },
            ...swaggerAuthorization,
        },
    },
};
