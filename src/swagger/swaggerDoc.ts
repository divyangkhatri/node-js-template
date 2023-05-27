import { paginationSchema } from "./common.swagger";
import { categorySchema, categorySwaggerObj } from "./category.swagger";
import { addressSchema, addressSwaggerObj } from "./address.swagger";

export const swaggerOptions = {
    swaggerOptions: {
        docExpansion: "none",
    },
};

export const swaggerObj = {
    openapi: "3.0.3",
    info: {
        title: "TEST NODE JS TEMPLATE",
        version: "1.0.0",
    },
    servers: [
        {
            url: "http://localhost:3000/",
        },
    ],
    tags: [
        {
            name: "Category",
            description: "All Api for Category",
        },
        {
            name: "Address",
            description: "All Api for address",
        },
    ],
    paths: {
        ...categorySwaggerObj,
        ...addressSwaggerObj,
    },
    components: {
        schemas: {
            ...paginationSchema,
            ...categorySchema,
            ...addressSchema,
        },
        securitySchemes: {
            authorization: {
                description: "",
                type: "http",
                scheme: "bearer",
                name: "authorization",
                in: "headers",
            },
        },
    },
};
