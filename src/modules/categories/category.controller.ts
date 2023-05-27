import { Request, Response } from "express";
import {
    createNewCategory,
    deleteCategoryDataById,
    getAllCategoryData,
    getCategoryDataById,
    updateCategoryDataById,
} from "./category.service";
import { throwCustomError } from "../../exception/HttpException";

export const createCategory = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const resp: any = await createNewCategory(req);
        res.status(201).send(resp);
    } catch (e) {
        console.error("Error in create category ", e);
        throwCustomError(e, res);
    }
};

export const getCategoryId = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const resp: any = await getCategoryDataById(req);
        res.status(200).send(resp);
    } catch (e) {
        console.error("Error in get category by id ", e);
        throwCustomError(e, res);
    }
};

export const getAllCategories = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const resp: any = await getAllCategoryData();
        res.status(200).send(resp);
    } catch (e) {
        console.error("Error in get category by id ", e);
        throwCustomError(e, res);
    }
};

export const updateCategoryById = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const resp: any = await updateCategoryDataById(req);
        res.status(200).send(resp);
    } catch (e) {
        console.error("Error in update category ", e);
        throwCustomError(e, res);
    }
};

export const deleteCategoryById = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const resp: any = await deleteCategoryDataById(req);
        res.status(200).send(resp);
    } catch (e) {
        console.error("Error in delete category ", e);
        throwCustomError(e, res);
    }
};
