import { ValidationError } from 'express-validator';

import { CustomError } from './customError';
import { ErrorResponse } from './type';

export class RequestValidationsError extends CustomError {
  statusCode = 422;

  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters');

    Object.setPrototypeOf(this, RequestValidationsError.prototype);
  }

  serializeErrors(): ErrorResponse {
    return this.errors.map((err) => {
      if (err.type === 'field') {
        return { message: err.msg, field: err.path };
      }

      return { message: err.msg };
    });
  }
}
