const router = require('express').Router()

const {
  viewTables,
  viewSpecificTable,
  createTable,
  updateTable,
  deleteTable
} = require('../controllers/tableController')

router
  .get('/', viewTables)
  .get('/:tableId', viewSpecificTable)
  .post('/', createTable)
  .put('/:tableId', updateTable)
  .delete('/:tableId', deleteTable)
  
module.exports = router