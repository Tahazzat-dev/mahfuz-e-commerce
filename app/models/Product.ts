import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: String,
        slug: String,
        description: String,
        images: [String],

        regularPrice: Number,
        resellerPrice: Number,

        stock: Number,
        sku: String,

        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
        },

        status: {
            type: String,
            enum: ["active", "inactive", "out_of_stock"],
            default: "active",
        },
    },
    { timestamps: true }
);

export default mongoose.models.Product ||
    mongoose.model("Product", ProductSchema);
