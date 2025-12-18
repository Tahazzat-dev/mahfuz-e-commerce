import { connectDB } from "@/app/lib/db";
import User from "@/app/models/User";
import { hashPassword } from "@/app/utils/hash";
import { signToken } from "@/app/utils/token";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    await connectDB();
    const body = await req.json();

    const { name, email, password } = body;

    if (!name || !email || !password) {
        return NextResponse.json(
            { message: "All fields are required" },
            { status: 400 }
        );
    }

    const exists = await User.findOne({ email });
    if (exists) {
        return NextResponse.json(
            { message: "Email already registered" },
            { status: 409 }
        );
    }

    const user = await User.create({
        name,
        email,
        password: await hashPassword(password),
    });

    const token = signToken({
        id: user._id,
        role: user.role,
    });

    return NextResponse.json({
        message: "Registration successful",
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
    });
}
