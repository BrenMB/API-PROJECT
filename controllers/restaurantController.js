  const restaurantModel = require('../models/restaurantModel')

  async function createRestaurant (req, res) {
    try {
      const restaurant = await restaurantModel.create(req.body)
      res.json(restaurant)
    } catch (err) {
      console.log(err)
    }
  }
  async function viewRestaurants (req, res) {
    try {
      const restaurants = await restaurantModel.find()
      res.json(restaurants)
    } catch (err) {
      console.log(err)
    }
  }
  async function viewSpecificRestuarant (req, res) {
    try {
      const restaurant = await restaurantModel.findById(req.params.restaurantId)
      res.json(restaurant)
    } catch (err) {
      console.log(err)
    }
  }

  async function updateRestaurant (req, res) {
    try { 
      const updatedRestaurant = await restaurantModel.findByIdAndUpdate(req.params.restaurantId, req.body, { new: true })
      res.json(updatedRestaurant)
    } catch (err) {
      console.log(err)
    }
  }

async function deleteRestaurant (req, res) {
  try {
    const deletedRestaurant = await restaurantModel.findByIdAndDelete(req.params.restaurantId)
    res.json(deletedRestaurant)

  } catch (err) {
    console.log(err)
  }
}

  
module.exports = {
  createRestaurant,
  viewRestaurants,
  viewSpecificRestuarant,
  updateRestaurant,
  deleteRestaurant
}