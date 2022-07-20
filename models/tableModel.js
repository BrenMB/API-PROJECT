const mongoose = require('mongoose')

const tableSchema = new mongoose.Schema({

  tableNum: {
    type: Number,
    required : true
  },
 
  seats: {
    type: Number
  },
  availability: {
    type: String,
    enum: ['true', 'false'],
    default: 'true'
  },
  
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'restaurant'
  }

})

const tableModel = mongoose.model('table', tableSchema)

module.exports = tableModel