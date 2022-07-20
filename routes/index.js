const router = require('express').Router()

const client = require('./clientRouter')
const table = require('./tableRouter')
const restaurant = require('./restaurantRouter')

router
  .use('/clients', client)
  .use('/tables', table)
  .use('/restaurants', restaurant)
  //use('/reservations', reservation )

module.exports = router