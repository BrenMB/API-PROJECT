const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
  
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'client'
  },
  // date: {
  //   type: Date
  // },
  // hour: { 
  //   type: Date
  // },
  seats: {
    type: Number
  },
  table: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'table'
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'restaurant'
  }

})


const reservationModel = mongoose.model('reservacion', reservationSchema)

module.exports = reservationModel