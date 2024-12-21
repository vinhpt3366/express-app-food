import { responseCreated } from "../common/helpers/response.helper.js";
import userService from "../services/user.service.js";

const userController = {
  placeOrder: async (req, res, next) => {
    try {
      const rate = await userService.placeOrder(req);
      const resData = responseCreated(rate);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
};
export default userController;
