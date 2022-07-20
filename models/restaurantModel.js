const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  direction: {
    type: String
  },
  phoneNumber: {
    type: Number
  },
  tables: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'table'
  }],
  menu: {
    starters: [{
      type: String
    }],
    mainDishes: [{
      type: String
    }],
    drinks: [{
      type: String
    }],
    desserts: [{
      type: String
    }]
  },
  reservations: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'reservation'
  }

})

const restaurantModel = mongoose.model('restaurant', restaurantSchema)

module.exports = restaurantModel