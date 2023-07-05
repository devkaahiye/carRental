import express from "express";
import {
  createCar,
  deleteCar,
  getCarsList,
  updateCar,
} from "../controllers/carController.js";

const router = express.Router();

router.route("/").post(createCar).get(getCarsList);
router.route("/:id").put(updateCar).delete(deleteCar);

export default router;
