import { CustomError } from './customError';
import { ErrorResponse } from './type';

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor() {
    super('Route not found');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors(): ErrorResponse {
    return [{ message: 'Not Found' }];
  }
}
