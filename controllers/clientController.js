const clientModel = require('../models/clientModel')
const reservationModel = require('../models/reservationModel')
const restaurantModel = require('../models/restaurantModel')
const tableModel = require('../models/tableModel')


//encriptar clave y verificar autenticacion

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//create client

async function createClient(req, res) {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10)
    req.body.password = hash

    const client = await clientModel.create(req.body)
    const payload = { email: client.email }
  
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })

    res.status(200).json({ email: client.email, token: token })

  } catch (err) {
    console.log(err)
  }
}

async function login(req, res) {
  try {
    const client = await clientModel.findOne({ email: req.body.email })

    if (!client) return res.status(500).send('Email or password incorrect')

    bcrypt.compare(req.body.password, client.password, (err, result) => {
      if (err) return res.status(500).send(`Error ${err}`)
      if (!result) return res.status(500).send('Email or password incorrect')

      const payload = { email: client.email }
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })
      res.status(200).json({ email: client.email, token: token })
    })
  } catch (err) {

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
async function createReservation(req, res) {
  try {
    const table = await tableModel.findOne({ restaurant: req.body.restaurant, availability: true, seats: { $gte: req.body.seats } })
    if (!table) { res.send('Not table avalable') }
    else {
      const reservation = await reservationModel.create({ client: req.params.clientId, date: req.body.date, seats: req.body.seats, restaurant: req.body.reestaurant, table: table.id })
      table.availability = false
      await table.save()
      const client = await clientModel.findById(req.params.clientId)
      client.reservations.push(reservation.id)
      await client.save(

      )
      res.json(reservation)

    }
  } catch (err) {
    console.log(err)
  }
}



async function viewMyReservations(req, res) {
  try {
    const client = await clientModel.findById(req.params.clientId, {
      password: 0,
    })

    res.json(client.reservations)
  } catch (err) {
    console.log(err)
  }
}//test

module.exports = {
  createClient,
  login,
  viewClients,
  viewSpecificClient,
  updateClient,
  deleteClient,
  createReservation,
  viewMyReservations,
}

