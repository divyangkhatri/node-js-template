import { Router } from "express";
import {
    createAddressData,
    deleteAddressById,
    getAllAddresses,
    updateAddressById,
    getAddressById,
} from "./address.controller";
import {
    addressValidation,
    updateAddressValidation,
    addressIdValidation,
} from "./address.validation";
import { checkRequestValidation } from "../../helper/utils";

export const addressRoutes = Router();

addressRoutes.post(
    "/createAddress",
    addressValidation,
    checkRequestValidation(createAddressData),
);

addressRoutes.get("/allAddresses", getAllAddresses);

addressRoutes.get(
    "/:address_id",
    addressIdValidation,
    checkRequestValidation(getAddressById),
);

addressRoutes.put(
    "/:address_id",
    updateAddressValidation,
    checkRequestValidation(updateAddressById),
);

addressRoutes.delete(
    "/:address_id",
    addressIdValidation,
    checkRequestValidation(deleteAddressById),
);
