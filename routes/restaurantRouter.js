const router = require('express').Router()

const {
  createRestaurant,
  viewRestaurants,
  viewSpecificRestuarant,
  updateRestaurant,
  deleteRestaurant
} = require('../controllers/restaurantController')

router
  .post('/', createRestaurant)
  .get('/', viewRestaurants)
  .get('/:restaurantId', viewSpecificRestuarant)
  .put('/:restaurantId', updateRestaurant)
  .delete('/:restaurantId', deleteRestaurant)

  module.exports = router