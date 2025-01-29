import { NextFunction, Request, Response } from "express";

import { NotAuthorizedError } from "../errors/notAuthorizedError";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }

  next();
};
