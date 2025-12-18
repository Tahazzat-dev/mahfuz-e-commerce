import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: String,
    slug: String,
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        default: null,
    },
    isActive: { type: Boolean, default: true },
});

export default mongoose.models.Category ||
    mongoose.model("Category", CategorySchema);
