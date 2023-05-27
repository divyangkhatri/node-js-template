import { HttpException } from "../../exception/HttpException";
import { Request } from "express";
import {
    updateCategory,
    deleteCategory,
    getAllCategory,
    getCategoryById,
    createCategoryData,
} from "./category.repository";
import { checkIsAdmin } from "../../middlewares/authMiddleware";


export const getAllCategoryData = async (): Promise<any> => {
    return getAllCategory();
};

export const getCategoryDataById = async (req: Request): Promise<any> => {
    const categoryId = req.params.category_id;
    const foundCategory = await getCategoryById(categoryId);
    if (!foundCategory) throw new HttpException(404, "Category doesn't exist");
    return foundCategory;
};

export const createNewCategory = async (req: any): Promise<any> => {
    checkIsAdmin(req);
    const categoryData = req.body;
    return await createCategoryData(categoryData);
};

export const updateCategoryDataById = async (req: Request): Promise<any> => {
    checkIsAdmin(req);
    const categoryData = req.body;
    const categoryId = req.params.category_id;
    const tempPayload: any = {};
    if (categoryData?.name) {
        tempPayload.name = categoryData.name;
    }
    const updatedCategory = await updateCategory(categoryId, tempPayload);
    if (!updatedCategory)
        throw new HttpException(404, "Category doesn't exist");
    return updatedCategory;
};

export const deleteCategoryDataById = async (req: Request): Promise<any> => {
    checkIsAdmin(req);
    const categoryId = req.params.category_id;
    const deletedCategory = await deleteCategory(categoryId);
    if (!deletedCategory)
        throw new HttpException(404, "Category doesn't exist");
    return deletedCategory;
};
