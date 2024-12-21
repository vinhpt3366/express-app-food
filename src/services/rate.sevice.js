import prisma from "../common/constant/init.prisma.js";
import HttpException, { BadRequestException } from "../common/helpers/HttpException.js";

const rateService = {
  rateRestaurant: async (req) => {
    const { res_id, user_id, amount } = req.body;
    const validationErrors = [];

    if (!res_id || isNaN(Number(res_id)) || Number(res_id) <= 0) {
      validationErrors.push({ field: "res_id", message: "Restaurant ID must be a valid number" });
    }
    if (!user_id || isNaN(Number(user_id)) || Number(user_id) <= 0) {
      validationErrors.push({ field: "user_id", message: "User ID must be a valid number" });
    }
    if (!amount || isNaN(Number(amount)) || amount <= 0) {
      validationErrors.push({ field: "amount", message: "Amount must be a positive number" });
    }

    if (validationErrors && validationErrors.length > 0) {
      throw new BadRequestException("Validation errors occurred");
    }

    const numericResId = Number(res_id);
    const numericUserId = Number(user_id);
    const numericAmount = Number(amount);

    const existingRate = await prisma.rate_res.findUnique({
      where: {
        user_id_res_id: {
          user_id: numericUserId,
          res_id: numericResId,
        },
      },
    });

    if (existingRate) {
      throw new BadRequestException("User has already rated this restaurant.");
    }

    const result = await prisma.rate_res.create({
      data: {
        res_id: numericResId,
        user_id: numericUserId,
        amount: numericAmount,
        date_rate: new Date(),
      },
    });

    return result;
  },

  getRatesByRestaurant: async (req) => {
    const { res_id } = req.params;
    if (!res_id || isNaN(Number(res_id)) || Number(res_id) <= 0) {
      throw new BadRequestException("Restaurant ID must be a valid number");
    }
    const numericResId = Number(res_id);

    const rates = await prisma.rate_res.findMany({
      where: { res_id: numericResId },
      include: {
        user: true,
      },
    });

    return rates.map((rate) => ({
      user_id: rate.user_id,
      user_name: rate.user.full_name,
      amount: rate.amount,
      date_rate: rate.date_like,
    }));
  },

  getRatedRestaurantsByUser: async (req) => {
    const { user_id } = req.params;
    if (!user_id || isNaN(Number(user_id)) || Number(user_id) <= 0) {
      throw new BadRequestException("User ID must be a valid number");
    }
    const id = Number(user_id);

    const rates = await prisma.rate_res.findMany({
      where: { user_id: id },
      include: {
        restaurant: true,
      },
    });

    return rates.map((rate) => ({
      user_id: rate.user_id,
      restaurant_name: rate.restaurant.res_name,
      date_rate: rate.date_like,
      amount: rate.amount,
    }));
  },
};
export default rateService;
