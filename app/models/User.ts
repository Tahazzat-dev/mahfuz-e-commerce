import mongoose from "mongoose";
import { IUser } from "../types/types";

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

// 2. Apply the interface to the Model
const User: mongoose.Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;