import express from "express";
import { responseSuccess } from "../common/helpers/response.helper.js";
import carRouter from "./car.router.js";

const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
  res.json(responseSuccess(undefined, "OK"));
});

rootRouter.use("/cars", carRouter);

export default rootRouter;
