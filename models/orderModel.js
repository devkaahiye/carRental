import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "cars",
  },
  duration: {
    type: String,
    required: true,
  },
  
});

const Order = mongoose.model("orders", orderSchema);

export default Order;
