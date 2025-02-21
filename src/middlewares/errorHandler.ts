import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

import { CustomError } from "../errors/customError";

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction
): void => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ errors: err.serializeErrors() });
    return;
  }

  console.error(err);
  res.status(500).json({
    errors: [{ message: err.message }],
  });
  return;
};
