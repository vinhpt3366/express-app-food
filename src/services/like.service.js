import prisma from "../common/constant/init.prisma.js";
import { BadRequestException, ConflictException, NotFoundException } from "../common/helpers/HttpException.js";

const likeService = {
  likeRestaurant: async (req) => {
    const { userId, restaurantId } = req.body;
    if (!userId || !restaurantId) {
      throw new BadRequestException("User ID and Restaurant ID are required.");
    }
    if (isNaN(Number(userId)) || Number(userId) <= 0 || isNaN(Number(restaurantId)) || Number(restaurantId) <= 0) {
      throw new BadRequestException("User ID and Restaurant ID must be a valid number");
    }

    const numRestaurantId = Number(restaurantId);
    const numUserId = Number(userId);

    const restaurantExists = await prisma.restaurant.findUnique({
      where: { res_id: numRestaurantId },
    });

    const userExists = await prisma.user.findUnique({
      where: { user_id: numUserId },
    });

    if (!restaurantExists) {
      throw new NotFoundException("Restaurant not found.");
    }
    if (!userExists) {
      throw new NotFoundException("User not found.");
    }

    const existingLike = await prisma.like_res.findFirst({
      where: {
        user_id: numUserId,
        res_id: numRestaurantId,
      },
    });

    if (existingLike) {
      throw new ConflictException("You have already liked this restaurant.");
    }

    const newLike = await prisma.like_res.create({
      data: {
        user_id: numUserId,
        res_id: numRestaurantId,
        date_like: new Date(),
      },
    });

    return newLike;
  },

  unlikeRestaurant: async (req) => {
    const { userId, restaurantId } = req.body;
    if (!userId || !restaurantId) {
      throw new BadRequestException("User ID and Restaurant ID are required.");
    }
    if (isNaN(Number(userId)) || Number(userId) <= 0 || isNaN(Number(restaurantId)) || Number(restaurantId) <= 0) {
      throw new BadRequestException("User ID and Restaurant ID must be a valid number");
    }

    const numRestaurantId = Number(restaurantId);
    const numUserId = Number(userId);

    const restaurantExists = await prisma.restaurant.findUnique({
      where: { res_id: numRestaurantId },
    });

    const userExists = await prisma.user.findUnique({
      where: { user_id: numUserId },
    });

    if (!restaurantExists) {
      throw new NotFoundException("Restaurant not found.");
    }
    if (!userExists) {
      throw new NotFoundException("User not found.");
    }

    const existingLike = await prisma.like_res.findFirst({
      where: {
        user_id: numUserId,
        res_id: numRestaurantId,
      },
    });

    if (!existingLike) {
      throw new ConflictException("You have not liked this restaurant.");
    }

    await prisma.like_res.delete({
      where: { user_id_res_id: { user_id: numUserId, res_id: numRestaurantId } },
    });

    return {
      message: "Restaurant unliked successfully.",
    };
  },

  getLikesByRestaurant: async (req) => {
    const { res_id } = req.params;
    if (!res_id || isNaN(Number(res_id)) || Number(res_id) <= 0) {
      throw new BadRequestException("Restaurant ID must be a valid number");
    }
    const numericResId = Number(res_id);

    const likes = await prisma.like_res.findMany({
      where: { res_id: numericResId },
      include: {
        user: true,
      },
    });

    return likes.map((like) => ({
      user_id: like.user_id,
      user_name: like.user.full_name,
      date_like: like.date_like,
    }));
  },

  getLikedRestaurantsByUser: async (req) => {
    const { user_id } = req.params;
    if (!user_id || isNaN(Number(user_id)) || Number(user_id) <= 0) {
      throw new BadRequestException("User ID must be a valid number");
    }
    const id = Number(user_id);

    const likes = await prisma.like_res.findMany({
      where: { user_id: id },
      include: {
        restaurant: true,
      },
    });

    return likes.map((like) => ({
      user_id: like.user_id,
      restaurant_name: like.restaurant.res_name,
      date_like: like.date_like,
    }));
  },
};

export default likeService;
