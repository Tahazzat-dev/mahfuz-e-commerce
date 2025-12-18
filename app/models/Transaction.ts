import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
        amount: Number,
        provider: String,
        status: String,
    },
    { timestamps: true }
);

export default mongoose.models.Transaction ||
    mongoose.model("Transaction", TransactionSchema);
