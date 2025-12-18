import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

        items: [
            {
                product: String,
                quantity: Number,
                price: Number,
            },
        ],

        totalAmount: Number,

        paymentStatus: {
            type: String,
            enum: ["pending", "paid", "failed"],
            default: "pending",
        },

        orderStatus: {
            type: String,
            enum: ["pending", "packaging", "courier", "arrived", "delivered"],
            default: "pending",
        },
    },
    { timestamps: true }
);

export default mongoose.models.Order ||
    mongoose.model("Order", OrderSchema);
