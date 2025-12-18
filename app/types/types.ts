export interface IPayload {
    email: string;
    role: string;
    userId: string;
}

export interface IProduct {
    _id: string; // MongoDB internal ID
    name: string;
    slug: string;
    description: string;
    images: string[];

    regularPrice: number;
    resellerPrice: number;

    stock: number;
    sku: string;

    // Category can be just the ID string or a populated object
    category: string | ICategory;

    status: "active" | "inactive" | "out_of_stock";

    createdAt: string;
    updatedAt: string;
}

// Basic Category interface for the reference above
export interface ICategory {
    _id: string;
    name: string;
    slug: string;
}