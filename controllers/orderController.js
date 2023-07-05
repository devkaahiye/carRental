
import Order from "../models/orderModel.js";


export const getOrdersList = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNewOrder = async (req, res) => {
  try {
    const { userId, carId, duration } =
      req.body;

    const newOrder = await Order.create({
      user:userId,
      car:carId,
      duration,
    });

    if (newOrder) {
      res.status(201).json(newOrder);
    } else {
      res.status(400).json({ message: "Order Not Created" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { userId, carId, duration } =
      req.body;

    const order = await Order.findById(req.params.id);

    if (order) {
        order.user = userId;
        order.car = carId;
        order.duration = duration;
    } else {
      res.status(404).json({ message: "Order not found" });
    }

    const updatedOrd = await car.save();

    if (updatedOrd) {
      res.status(201).json(updatedOrd);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (order) {
      res.status(200).json({ message: 'order deleted'});
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};













