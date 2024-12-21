import prisma from "../common/constant/init.prisma.js";
import { BadRequestException } from "../common/helpers/HttpException.js";

const userService = {
  placeOrder: async (req) => {
    const { user_id, food_id, amount, arr_sub_id } = req.body;

    if (!user_id || !food_id || !amount || isNaN(Number(food_id)) || isNaN(Number(user_id)) || amount <= 0) {
      throw new BadRequestException("Invalid or incomplete information!");
    }

    const [userExists, foodExists] = await Promise.all([prisma.user.findUnique({ where: { user_id: Number(user_id) } }), prisma.food.findUnique({ where: { food_id: Number(food_id) } })]);

    if (!userExists) {
      throw new BadRequestException("User does not exist!");
    }

    if (!foodExists) {
      throw new BadRequestException("Food does not exist!");
    }

    const existingOrder = await prisma.order.findUnique({
      where: {
        user_id_food_id: {
          user_id: Number(user_id),
          food_id: Number(food_id),
        },
      },
    });

    if (existingOrder) {
      throw new BadRequestException("Order already exists!");
    }

    const code = `ORDER-${Date.now()}-${user_id}`;

    const order = await prisma.order.create({
      data: {
        user_id: Number(user_id),
        food_id: Number(food_id),
        amount: amount,
        code: code,
        arr_sub_id: arr_sub_id ? JSON.parse(JSON.stringify(arr_sub_id)) : null, // Lưu JSON nếu có
      },
    });

    return order;
  },
};
export default userService;
