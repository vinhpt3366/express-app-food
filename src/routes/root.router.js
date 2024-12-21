import express from "express";
import { responseSuccess } from "../common/helpers/response.helper.js";
import likeRouter from "./like.router.js";
import rateRouter from "./rate.router.js";
import userRouter from "./user.router.js";

const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
  res.json(responseSuccess(undefined, "OK"));
});

rootRouter.use("/api/like", likeRouter);
rootRouter.use("/api/rate", rateRouter);
rootRouter.use("/api/user", userRouter);


export default rootRouter;
