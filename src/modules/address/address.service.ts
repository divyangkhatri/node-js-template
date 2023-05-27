import { HttpException } from "../../exception/HttpException";
import { Request } from "express";
import {
    findAddressById,
    deleteAddress,
    findAllAddress,
    updateAddress,
    createAddress,
} from "./address.repository";
import { isAdmin } from "../../middlewares/authMiddleware";

export const getAllAddressData = async (): Promise<any> => {
    return findAllAddress();
};

export const getAddressDataById = async (req: Request): Promise<any> => {
    const addressId = req.params.address_id;
    const foundAddress = await checkIsAddressOwnByUser(req, addressId);
    if (!foundAddress) throw new HttpException(404, "Address doesn't exist");
    return foundAddress;
};

export const createNewAddress = async (req: any): Promise<any> => {
    const addressData = req.body;
    const addressResponse = await createAddress(addressData);

    return addressResponse;
};

export const updateAddressDataById = async (req: Request): Promise<any> => {
    const addressId = req.params.address_id;
    await checkIsAddressOwnByUser(req, addressId);
    const addressData = req.body;
    const tempPayload: any = {};
    if (addressData?.name) {
        tempPayload.name = addressData.name;
    }
    if (addressData?.phone_number) {
        tempPayload.phone_number = addressData.phone_number;
    }
    if (addressData?.address_line_1) {
        tempPayload.address_line_1 = addressData.address_line_1;
    }
    if (addressData?.address_line_2) {
        tempPayload.address_line_2 = addressData.address_line_2;
    }
    if (addressData?.city) {
        tempPayload.city = addressData.city;
    }
    if (addressData?.zip_code) {
        tempPayload.zip_code = addressData.zip_code;
    }
    if (addressData?.state) {
        tempPayload.state = addressData.state;
    }
    if (addressData?.country) {
        tempPayload.country = addressData.country;
    }
    const updatedAddress = await updateAddress(addressId, tempPayload);
    if (!updatedAddress) throw new HttpException(404, "Address doesn't exist");
    return updatedAddress;
};

export const deleteAddressDataById = async (req: Request): Promise<any> => {
    const addressId = req.params.address_id;
    await checkIsAddressOwnByUser(req, addressId);
    const deletedAddress = await deleteAddress(addressId);
    if (!deletedAddress) throw new HttpException(404, "Address doesn't exist");
    return deletedAddress;
};

const checkIsAddressOwnByUser = async (
    request: Request,
    addressId: string,
) => {
    if (isAdmin(request)) {
        return true;
    }
    const address = await findAddressById(addressId);
    return address;
};
