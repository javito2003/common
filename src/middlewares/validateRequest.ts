import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

import { RequestValidationsError } from "../errors/requestValidationsError";

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new RequestValidationsError(errors.array());
  }

  next();
};
