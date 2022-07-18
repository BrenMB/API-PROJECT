//mongoose para conectarcon mongo
//dotenv para guardar las variables de(guardar nombre de base datos,uerto de mongo etc)
//cors express morgan
//install and require
//instalar bcrypt para encriptar password


const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose');
require('dotenv').config()

//conectar expresss
const app = express()

  //conectar databas
  ; (async function () {
    await mongoose.connect(process.env.URL, {
      dbName: process.env.MONGO_DB
    })
    console.log('Connected to DB')
    app
      .use(cors('*'))
      .use(morgan('dev'))
      .use(express.json())
      .use('/api', require('./routes'))
      .listen(process.env.SERVER_PORT, () => {
        console.log(`Connected to port: ${process.env.SERVER_PORT}`)
      })
  })()

