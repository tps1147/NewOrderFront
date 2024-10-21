const mongoose = require('mongoose');

// Define a FoodItem schema
const foodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  availability: { type: Boolean, default: true },
  imageURL: { type: String }
});

// Create and export the FoodItem model
module.exports = mongoose.model('FoodItem', foodItemSchema);
