import Cars from "../models/carModel.js";


export const getCarsList = async (req, res) => {
  try {
    const products = await Cars.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCar = async (req, res) => {
  try {
    const { name, image, price } =
      req.body;

    const newCar = await Cars.create({
      name,
      image,
      price,
    });

    if (newCar) {
      res.status(201).json(newCar);
    } else {
      res.status(400).json({ message: "Car Not Created" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCar = async (req, res) => {
  try {
    const { name, image, price } =
      req.body;

    const car = await Cars.findById(req.params.id);

    if (car) {
        car.name = name;
        car.image = image;
      car.price = price;
    } else {
      res.status(404).json({ message: "Car not found" });
    }

    const updatedCar = await Cars.save();

    if (updatedCar) {
      res.status(201).json(updatedCar);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCar = async (req, res) => {
  try {
    const car = await Cars.findByIdAndDelete(req.params.id);
    if (car) {
      res.status(200).json({ message: `${car.name} deleted`});
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};













