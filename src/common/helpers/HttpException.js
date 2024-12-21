// Base Exception Class
class HttpException extends Error {
  constructor(message = "Error", code = 500, stack = null) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default HttpException;

// 400 Bad Request
export class BadRequestException extends HttpException {
  constructor(message = "Bad Request", stack = null) {
    super(message, 400, stack);
  }
}

// 404 Not Found
export class NotFoundException extends HttpException {
  constructor(message = "Not Found", stack = null) {
    super(message, 404, stack);
  }
}

// 409 Conflict
export class ConflictException extends HttpException {
  constructor(message = "Conflict", stack = null) {
    super(message, 409, stack);
  }
}
