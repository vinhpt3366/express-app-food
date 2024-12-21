 import { responseCreated, responseSuccess } from "../common/helpers/response.helper.js";
import rateService from "../services/rate.sevice.js";

const rateController = {
  rateRestaurant: async (req, res, next) => {
    try {
      const rate = await rateService.rateRestaurant(req);
      const resData = responseCreated(rate);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
  getRatesByRestaurant: async (req, res, next) => {
    try {
      const likes = await rateService.getRatesByRestaurant(req);
      const resData = responseSuccess(likes);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
  getRatedRestaurantsByUser: async (req, res, next) => {
    try {
      const likes = await rateService.getRatedRestaurantsByUser(req);
      const resData = responseSuccess(likes);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
};

export default rateController;
