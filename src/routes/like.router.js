import express from "express";
import likeController from "../controllers/like.controller.js";

const likeRouter = express.Router();

likeRouter.post("/", likeController.likeRestaurant);
likeRouter.delete("/", likeController.unlikeRestaurant);
likeRouter.get("/:res_id", likeController.getLikesByRestaurant);
likeRouter.get("/user-likes/:user_id", likeController.getLikedRestaurantsByUser);

export default likeRouter;
