const router = require('express').Router()

const {
  createClient,
  viewClients,
  viewSpecificClient,
  updateClient,
  deleteClient

} = require('../controllers/clientController')

router
  .post('/', createClient)
  .get('/', viewClients)
  .get('/:clientId', viewSpecificClient)
  .put('/:clientId', updateClient)
  .delete('/:clientId', deleteClient)

module.exports = router