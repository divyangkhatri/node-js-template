export const arrayType = {
    type: "array",
    items: {
        type: "string",
    },
    //@ts-ignore
    example: [],
};

export const paginationSwagger = [
    {
        name: "page_number",
        in: "query",
        description: "page number for item, if not pass by default 1",
        required: false,
        schema: {
            type: "string",
        },
    },
    {
        name: "limit",
        in: "query",
        description: "limit for item, if not pass by default 50",
        required: false,
        schema: {
            type: "string",
        },
    },
];

export const paginationSchema = {
    Pagination: {
        type: "object",
        properties: {
            page_number: {
                type: "number",
                example: 1,
            },
            total_pages: {
                type: "number",
                example: 1,
            },
            total_items: {
                type: "number",
                example: 10,
            },
            per_page_item: {
                type: "number",
                example: 50,
            },
            items: arrayType,
        },
        xml: {
            name: "pagination",
        },
    },
};

export const defaultPaginationResponse = {
    responses: {
        "200": {
            description: "successful operation",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        $ref: "#/components/schemas/Pagination",
                    },
                },
            },
        },
    },
};

export const messageSchema = {
    Message: {
        type: "object",
        properties: {
            message: {
                type: "string",
            },
        },
        xml: {
            name: "message",
        },
    },
};


export const defaultMessageResponse = {
    responses: {
        "201": {
            description: "successful operation",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        $ref: "#/components/schemas/Message",
                    },
                },
            },
        },
        "400": {
            description: "Invalid tag value",
        },
    },
};



export const swaggerAuthorization = {
    security: [
        {
            //@ts-ignore
            authorization: [],
        },
    ],
};
