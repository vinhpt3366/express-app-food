import { responseError } from "../common/helpers/response.helper.js";

const errorHandler = (err, req, res, next) => {
  if (err.code && typeof err.code === "number") {
    res.status(err.code).json(responseError(err.message, err.code, err.stack));
  } else {
    res.status(500).json(responseError("Internal Server Error"));
  }
};

export default errorHandler;
