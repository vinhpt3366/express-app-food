import express from "express";
import rateController from "../controllers/rate.controller.js";

const rateRouter = express.Router();

rateRouter.post("/", rateController.rateRestaurant);
rateRouter.get("/:res_id", rateController.getRatesByRestaurant);
rateRouter.get("/user-rate/:user_id", rateController.getRatedRestaurantsByUser);

export default rateRouter;
