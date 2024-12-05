const Pickup = require('../Models/pickup');
const UserModel = require("../Models/user");

// Controller to handle form submission
exports.createPickup = async (req, res) => {
  const { pickupDate, pickupTime, pickupAddress } = req.body;

  try {
    // Create and save the new pickup
    const newPickup = new Pickup({
      pickupDate,
      pickupTime,
      pickupAddress,
    });

    await newPickup.save();
    res.status(201).json({ message: 'Pickup details saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save pickup details', error: error.message });
  }
};


// Fetch all pickup data
exports.getAllPickups = async (req, res) => {
  try {
    const user = await UserModel.find()

    const pickups = await Pickup.find({}, { pickupDate: 1, pickupTime: 1, pickupAddress: 1,
        createdAt:1 });

    res.status(200).json(pickups);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch pickup data', error: error.message });
  }
};
