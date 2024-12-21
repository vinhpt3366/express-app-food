import prisma from "../common/constant/init.prisma.js";

const carService = {
  getAllCars: async (req) => {
    try {
      const { page, limit } = req.query;
      const validPage = parseInt(page) > 0 ? parseInt(page) : 1;
      const validLimit = parseInt(limit) > 0 ? parseInt(limit) : 10;

      const skip = (validPage - 1) * validLimit;
      const take = validLimit;
      const totalRecords = await prisma.cars.count();
      const totalPages = Math.ceil(totalRecords / validLimit);

      const cars = await prisma.cars.findMany({
        skip: skip,
        take: take,
      });

      return {
        data: cars,
        pagination: {
          currentPage: validPage,
          pageSize: validLimit,
          totalPages: totalPages,
          totalRecords: totalRecords,
        },
      };
    } catch (error) {
      console.error("Lỗi khi lấy danh sách cars:", error);
      throw new Error("Không thể lấy danh sách cars. Vui lòng thử lại sau.");
    }
  },
};

export default carService;
