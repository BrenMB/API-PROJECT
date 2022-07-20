const tableModel = require('../models/tableModel')
const restaurantModel = require('../models/restaurantModel')

// verificar autenticacion

const jwt = require('jsonwebtoken')

async function viewTables(req, res) {
  try {
    const tables = await tableModel.find()
    res.json(tables)
  } catch (err) {
    console.log(err)
  }
}

async function viewSpecificTable(req, res) {
  try {
    const table = await tableModel.findById(req.params.tableId)
    res.json(table)
  } catch (err) {
    console.log(err)
  }
}


async function createTable(req, res) {
  try {
    const table = await tableModel.create(req.body)
    const restaurant = await restaurantModel.findById(req.body.restaurant)
    restaurant.tables.push(table.id)
    await restaurant.save()
    res.json(table)
  } catch (err) {
    console.log(err)
  }
}

async function updateTable(req, res) {
  try {
    const updatedTable = await tableModel.findByIdAndUpdate(req.params.tableId, req.body, { new: true })
    res.json(updatedTable)
  } catch (err) {
    console.log(err)
  }
}

async function deleteTable(req, res) {
  try {
    const deletedTable = await tableModel.findByIdAndDelete(req.params.tableId)
    res.json(deletedTable)

  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  viewTables,
  viewSpecificTable,
  createTable,
  updateTable,
  deleteTable
}