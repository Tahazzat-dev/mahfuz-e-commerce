import jwt from "jsonwebtoken";
import { IPayload } from "../types/types";

const jwtExpiry = (process.env.JWT_EXPIRES_IN || "7d");

export const signToken = (payload: IPayload) =>
    jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: jwtExpiry, });

export const verifyToken = (token: string) =>
    jwt.verify(token, process.env.JWT_SECRET!);


