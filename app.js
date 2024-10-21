const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Import the FoodItem model
const FoodItem = require('./models/FoodItem');

// Create test food items
const createTestItems = async () => {
  const items = [
    {
      name: 'Pizza',
      price: 9.99,
      description: 'Delicious cheese pizza',
      category: 'Main Course',
      imageURL: 'http://example.com/pizza.jpg'
    },
    {
      name: 'Burger',
      price: 5.99,
      description: 'Juicy beef burger',
      category: 'Main Course',
      imageURL: 'http://example.com/burger.jpg'
    },
    {
      name: 'Salad',
      price: 4.99,
      description: 'Fresh garden salad',
      category: 'Appetizer',
      imageURL: 'http://example.com/salad.jpg'
    }
  ];

  await FoodItem.insertMany(items);
  console.log('Test items created');
};

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  createTestItems(); // Create test items when the server starts
});
