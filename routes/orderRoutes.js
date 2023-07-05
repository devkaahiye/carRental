import express from "express";
import { createNewOrder, deleteOrder, getOrdersList, updateOrder } from "../controllers/orderController.js";

const router = express.Router();

router.route("/").post(createNewOrder).get(getOrdersList);
router.route("/:id").put(updateOrder).delete(deleteOrder);

export default router;
