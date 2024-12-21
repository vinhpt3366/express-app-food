import { responseCreated, responseNoContent, responseSuccess } from "../common/helpers/response.helper.js";
import likeService from "../services/like.service.js";

const likeController = {
  likeRestaurant: async (req, res, next) => {
    try {
      const likes = await likeService.likeRestaurant(req);
      const resData = responseCreated(likes);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
  unlikeRestaurant: async (req, res, next) => {
    try {
      const likes = await likeService.unlikeRestaurant(req);
      const resData = responseNoContent(likes);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
  getLikesByRestaurant: async (req, res, next) => {
    try {
      const likes = await likeService.getLikesByRestaurant(req);
      const resData = responseSuccess(likes);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
  getLikedRestaurantsByUser: async (req, res, next) => {
    try {
      const likes = await likeService.getLikedRestaurantsByUser(req);
      const resData = responseSuccess(likes);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
};

export default likeController;
