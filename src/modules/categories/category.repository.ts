import CategoryModel from "./category.model";

export const getAllCategory = async (): Promise<any> => {
    return CategoryModel.find();
};

export const getCategoryById = async (categoryId: string): Promise<any> => {
    return CategoryModel.findOne({ _id: categoryId });
};

export const createCategoryData = async (categoryData: any): Promise<any> => {
    const data = new CategoryModel(categoryData);
    return await data.save();
};

export const updateCategory = async (
    categoryId: string,
    categoryData: any,
): Promise<any> => {
    return CategoryModel.findByIdAndUpdate({ _id: categoryId }, categoryData, {
        new: true,
    });
};

export const deleteCategory = async (categoryId: string): Promise<any> => {
    return CategoryModel.findByIdAndDelete({ _id: categoryId });
};
