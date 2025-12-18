import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true, lowercase: true },
        password: { type: String, required: true, select: false },

        role: {
            type: String,
            enum: ["buyer", "reseller", "admin"],
            default: "buyer",
        },

        resetPasswordToken: String,
        resetPasswordExpires: Date,

        isBlocked: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default mongoose.models.User ||
    mongoose.model("User", UserSchema);
