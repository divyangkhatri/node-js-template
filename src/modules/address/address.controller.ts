import { Request, Response } from "express";
import {
   updateAddressDataById,
    getAllAddressData,
    deleteAddressDataById,
    createNewAddress,
    getAddressDataById,
} from "./address.service";
import { throwCustomError } from "../../exception/HttpException";

export const createAddressData = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const resp: any = await createNewAddress(req);
        res.status(201).send(resp);
    } catch (e) {
        console.error("Error in create address ", e);
        throwCustomError(e, res);
    }
};

export const getAddressById = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const resp: any = await getAddressDataById(req);
        res.status(200).send(resp);
    } catch (e) {
        console.error("Error in get address by id ", e);
        throwCustomError(e, res);
    }
};

export const getAllAddresses = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const resp: any = await getAllAddressData();
        res.status(200).send(resp);
    } catch (e) {
        console.error("Error in get all address ", e);
        throwCustomError(e, res);
    }
};

export const updateAddressById = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const resp: any = await updateAddressDataById(req);
        res.status(200).send(resp);
    } catch (e) {
        console.error("Error in update address ", e);
        throwCustomError(e, res);
    }
};

export const deleteAddressById = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const resp: any = await deleteAddressDataById(req);
        res.status(200).send(resp);
    } catch (e) {
        console.error("Error in delete address ", e);
        throwCustomError(e, res);
    }
};
