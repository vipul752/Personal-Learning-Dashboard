import express from "express";
import cors from "cors";
import helmet from "helmet";

import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "DevTrack API is running",
    timestamp: new Date().toISOString(),
  });
});

app.use(errorHandler);

export default app;
