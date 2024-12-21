import { responseSuccess } from "../common/helpers/response.helper.js";
import carService from "../services/car.service.js";

const carController = {
  getAllCars: async (req, res, next) => {
    try {
      const cars = await carService.getAllCars(req);
      const resData = responseSuccess(cars.data, undefined, undefined, cars.pagination);
      res.status(resData.code).json(resData);
    } catch (error) {
      next(error);
    }
  },
  getCarById: (id) => {
    return `Car with id: ${id}`;
  },
  createCar: (car) => {
    return `Car created: ${car.name}`;
  },
  updateCar: (id, car) => {
    return `Car with id: ${id} updated`;
  },
  deleteCar: (id) => {
    return `Car with id: ${id} deleted`;
  },
};

export default carController;
