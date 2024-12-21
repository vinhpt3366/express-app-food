import { NODE_ENV } from "../constant/app.constant.js";

export const responseSuccess = (data = null, message = "Data fetched successfully!", code = 200, pagination = null) => {
  if (typeof code !== "number") code = 200;
  const response = {
    status: "success",
    code,
    message,
    data,
  };

  if (pagination) {
    response.pagination = pagination;
  }

  return response;
};

export const responseError = (message = "Internal Server Error!", code = 500, stack = null) => {
  if (typeof code !== "number") code = 500;
  const response = {
    status: "error",
    code,
    message,
  };

  if (NODE_ENV === "development" && stack) {
    response.stack = stack;
  }

  return response;
};

export const responseValidationError = (errors = [], message = "Validation failed!", code = 422) => {
  if (typeof code !== "number") code = 422;
  return {
    status: "fail",
    code,
    message,
    errors,
  };
};

export const responseCreated = (data, message = "Resource created successfully!", code = 201) => {
  if (typeof code !== "number") code = 201;
  return {
    status: "success",
    code,
    message,
    data,
  };
};

export const responseNoContent = (message = "No content!", code = 204) => {
  if (typeof code !== "number") code = 204;
  return {
    status: "success",
    code,
    message,
  };
};

export default {
  responseError,
  responseError,
  responseValidationError,
  responseError,
  responseError,
};
