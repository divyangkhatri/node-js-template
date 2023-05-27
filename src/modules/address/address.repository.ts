import AddressModel from "./address.model";

export const findAllAddress = async (): Promise<any> => {
    return AddressModel.find();
};

export const findAddressById = async (addressId: string): Promise<any> => {
    return AddressModel.findOne({ _id: addressId });
};

export const findAddressByIdWithUser = async (addressId: string): Promise<any> => {
    return AddressModel.findOne({ _id: addressId }).populate('user_id');
};


export const createAddress = async (addressData: any): Promise<any> => {
    const data = new AddressModel(addressData);
    return await data.save();
};

export const updateAddress = async (
    addressId: string,
    addressData: any,
): Promise<any> => {
    return AddressModel.findByIdAndUpdate({ _id: addressId }, addressData, {
        new: true,
    });
};

export const deleteAddress = async (address_id: string): Promise<any> => {
    return AddressModel.findByIdAndDelete({ _id: address_id });
};
