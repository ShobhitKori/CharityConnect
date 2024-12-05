const mongoose = require('mongoose');

// Define the Pickup schema
const pickupSchema = new mongoose.Schema({
  pickupDate: {
    type: Date,
    required: true,
  },
  pickupTime: {
    type: String,
    required: true,
  },
  pickupAddress: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the model
const Pickup = mongoose.model('Pickup', pickupSchema);
module.exports = Pickup;
