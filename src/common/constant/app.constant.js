import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3069;
export const DATABASE_URL = process.env.DATABASE_URL;
export const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS?.split(",") || [];
export const NODE_ENV = process.env.NODE_ENV || "development";
