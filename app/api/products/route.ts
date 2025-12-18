import { connectDB } from "@/app/lib/db";
import Product from "@/app/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
    await connectDB();
    const products = await Product.find({ status: "active" });
    return NextResponse.json(products);
}
