import { CustomError } from './customError';
import { ErrorResponse } from './type';

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Error connecting to database';

  constructor() {
    super('Error connecting to database');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors(): ErrorResponse {
    return [{ message: this.reason }];
  }
}
