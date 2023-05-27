import { Router } from "express";
import {
    createCategory,
    deleteCategoryById,
    updateCategoryById,
    getCategoryId,
    getAllCategories,
} from "./category.controller";
import {
    categoryValidation,
    updateCategoryValidation,
    categoryIdValidation,
} from "./category.validation";
import { checkRequestValidation } from "../../helper/utils";

export const categoryRoutes = Router();

categoryRoutes.post(
    "/createCategory",
    categoryValidation,
    checkRequestValidation(createCategory),
);

categoryRoutes.get("/allCategories", getAllCategories);

categoryRoutes.get("/:category_id", categoryIdValidation,   checkRequestValidation(getCategoryId));


categoryRoutes.put(
    "/:category_id",
    updateCategoryValidation,
    checkRequestValidation(updateCategoryById),
);

categoryRoutes.delete(
    "/:category_id",
    categoryIdValidation,
    checkRequestValidation(deleteCategoryById),
);
