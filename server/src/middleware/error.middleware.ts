import { NextFunction, Request, Response } from "express";
import { AppError } from "../shared/errors/AppError.js";

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = error instanceof AppError ? error.statusCode : 500;

  const message =
    error instanceof AppError ? error.message : "Internal Server Error";

  console.error(error);

  res.status(statusCode).json({
    success: false,
    message,
  });
};
