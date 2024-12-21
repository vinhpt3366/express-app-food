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

// 401 Unauthorized
export class UnauthorizedException extends HttpException {
  constructor(message = "Unauthorized", stack = null) {
    super(message, 401, stack);
  }
}

// 403 Forbidden
export class ForbiddenException extends HttpException {
  constructor(message = "Forbidden", stack = null) {
    super(message, 403, stack);
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

// 500 Internal Server Error
export class InternalServerErrorException extends HttpException {
  constructor(message = "Internal Server Error", stack = null) {
    super(message, 500, stack);
  }
}

// 502 Bad Gateway
export class BadGatewayException extends HttpException {
  constructor(message = "Bad Gateway", stack = null) {
    super(message, 502, stack);
  }
}

// 503 Service Unavailable
export class ServiceUnavailableException extends HttpException {
  constructor(message = "Service Unavailable", stack = null) {
    super(message, 503, stack);
  }
}

// 504 Gateway Timeout
export class GatewayTimeoutException extends HttpException {
  constructor(message = "Gateway Timeout", stack = null) {
    super(message, 504, stack);
  }
}
