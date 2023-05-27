import { Request } from "express";

export const paginationResponseType = async (
    items: any,
    page_number: number,
    per_page: number,
    totalItems: number,
) => {
    const localItems = Array.isArray(items) ? items : [];
    const tempVariable = [];
    for (const x of localItems) {
        x.id = x._id;
        delete x._id, delete x.__v;
        tempVariable.push(x);
    }
    return {
        items: tempVariable,
        total_pages: totalItems
            ? totalItems % per_page === 0
                ? totalItems / per_page
                : parseInt((totalItems / per_page).toString(), 10) + 1
            : 0,
        total_items: totalItems,
        per_page_item: per_page,
        page_number,
    };
};

export const getLimitAndPageNumber = (req: Request) => {
    const pageNumber = isNaN(Number(req.query?.page_number))
        ? 1
        : Number(req.query?.page_number);
    const limit = isNaN(Number(req.query?.limit))
        ? 50
        : Number(req.query?.limit);
    return { pageNumber, limit };
};
