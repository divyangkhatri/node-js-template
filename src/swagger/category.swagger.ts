import {
    paginationSwagger,
    swaggerAuthorization,
} from "./common.swagger";

export const categorySchema = {
    Category: {
        type: "object",
        properties: {
            id: {
                type: "string",
            },
            name: {
                type: "string",
            },
            created_at: {
                type: "string",
            },
            updated_at: {
                type: "string",
            },
        },
        xml: {
            name: "category",
        },
    },
};

const postCategorySwagger = {
    type: "object",
    properties: {
        name: {
            type: "string",
        },
    },
};

const defaultCategoryIdParams = {
    name: "category_id",
    in: "path",
    description: "Category ID of the category",
    required: true,
    schema: {
        type: "string",
    },
};

const defaultCategoryResponse = {
    responses: {
        "200": {
            description: "successful operation",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        $ref: "#/components/schemas/Category",
                    },
                },
            },
        },
        "400": {
            description: "Invalid tag value",
        },
    },
};

export const categorySwaggerObj = {
    "/category/allCategories": {
        get: {
            tags: ["Category"],
            summary: "Get the all categories",
            ...defaultCategoryResponse,
        },
    },
    "/category/{category_id}": {
        get: {
            tags: ["Category"],
            summary: "Get the category by ID",
            parameters: [defaultCategoryIdParams],
            ...defaultCategoryResponse,
            ...swaggerAuthorization,
        },
        put: {
            tags: ["Category"],
            summary: "Update a category by Id only for admin",
            parameters: [defaultCategoryIdParams],
            requestBody: {
                description: "Update a category by Id only for admin",
                content: {
                    "application/json": {
                        schema: {
                            ...postCategorySwagger,
                        },
                    },
                },
                required: true,
            },
            ...defaultCategoryResponse,
            ...swaggerAuthorization,
        },
        delete: {
            tags: ["Category"],
            summary: "Delete the category by ID",
            parameters: [defaultCategoryIdParams],
            ...defaultCategoryResponse,
            ...swaggerAuthorization,
        },

    },

    "/category/createCategory": {
        post: {
            tags: ["Category"],
            summary: "create a new category",
            requestBody: {
                description: "Create a new category",
                content: {
                    "application/json": {
                        schema: {
                            ...postCategorySwagger,
                        },
                    },
                },
                required: true,
            },
            responses: {
                "201": defaultCategoryResponse.responses["200"],
                "400": defaultCategoryResponse.responses["400"],
            },
            ...swaggerAuthorization,
        },
    },
};
