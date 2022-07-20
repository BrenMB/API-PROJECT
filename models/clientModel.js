const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String
  },
  phone: {
    type: Number
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  reservations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'reservation'
  }],
  role : {
    type: String,
    enum: ['admin', 'client'],
    default: 'client'
  }
  
})

const clientModel = mongoose.model('client', clientSchema)

module.exports = clientModel