const reservationModel = require('../models/reservationModel')
const tableModel = require('../models/tableModel')

async function updateReservation(req, res) {
  try { 
    const updatedRestaurant = await reservationModel.findByIdAndUpdate(req.params.reservationId, req.body, { new: true })
    res.json(updatedRestaurant)
  } catch (err) {
    console.log(err)
  }
}

async function deleteReservation (req, res) {
try {
  const deletedReservation = await reservationModel.findByIdAndDelete(req.params.reservationId)
  res.json(deletedReservation)
} catch (err) {
  console.log(err)
}
}


  
module.exports = {
  updateReservation,
  deleteReservation
}