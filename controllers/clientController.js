const clientModel = require('../models/clientModel')
const bcrypt = require('bcrypt')

//create client

async function createClient(req, res) {
  try {
    // const hash = bcrypt.hashSync(req.body.password, 10)
    // req.body.password = hash

    const client = await clientModel.create(req.body)
    res.json(client)
  } catch (err) {
    console.log(err)
  }
}

async function viewClients(req, res) {
  try {
    const clients = await clientModel.find()
    res.json(clients)
  } catch (err) {
    console.log(err)
  }
}

async function viewSpecificClient(req, res) {
  try {
    const client = await clientModel.findById(req.params.clientId, {
      password: 0,
    })
    console.log(client)

    res.json(client)
  } catch (err) {
    console.log(err)
  }
}

async function updateClient(req, res) {
  console.log(req.params.clientId)
  try {
    const clientUpdated = await clientModel.findByIdAndUpdate(req.params.clientId, req.body, { new: true })
    res.json(clientUpdated)
  } catch (err) {
    console.log(err)
  }
}

async function deleteClient(req, res) {
  try {
    const deletedClient = await clientModel.findByIdAndDelete(req.params.clientId)
    res.json(deletedClient)

  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  createClient,
  viewClients,
  viewSpecificClient,
  updateClient,
  deleteClient
}
