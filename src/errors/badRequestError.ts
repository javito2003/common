import { CustomError } from './customError';
import { ErrorResponse } from './type';

export class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors(): ErrorResponse {
    return [{ message: this.message }];
  }
}
