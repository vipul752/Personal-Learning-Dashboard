import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  PORT: z.coerce.number().default(4000),

  MONGODB_URI: z.string().min(1, "MongoDB URI is required"),
});

export const env = envSchema.parse(process.env);
