import mongoose from "mongoose";

const InventoryLogSchema = new mongoose.Schema(
    {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        type: { type: String, enum: ["IN", "OUT"] },
        quantity: Number,
        reason: String,
    },
    { timestamps: true }
);

export default mongoose.models.InventoryLog ||
    mongoose.model("InventoryLog", InventoryLogSchema);
