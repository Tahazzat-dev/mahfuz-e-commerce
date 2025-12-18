import { IProduct } from "../types/types";

export const resolvePrice = (product: IProduct, role: string) => {
    if (role === "reseller") return product.resellerPrice;
    return product.regularPrice;
};
