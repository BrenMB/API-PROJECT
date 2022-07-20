const router = require('express').Router()

const { checkAuth } = require('../utils')

const {
  createClient,
  login,
  viewClients,
  viewSpecificClient,
  updateClient,
  deleteClient,
  viewMyReservations,
  createReservation,
} = require('../controllers/clientController')

router
  .get('/', checkAuth,  viewClients)
  .post('/', createClient)
  .post('/login', login)
  .get('/:clientId', viewSpecificClient)
  .get('/:clientId/reservations', viewMyReservations)
  .post('/:clientId/reservations', createReservation)
  .put('/:clientId', updateClient)
  .delete('/:clientId', deleteClient)

module.exports = router