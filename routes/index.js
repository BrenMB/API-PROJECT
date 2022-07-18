const router = require('express').Router()

const client = require('./clientRouter')

router.use('/clients', client)

module.exports = router