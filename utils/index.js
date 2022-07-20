const jwt = require('jsonwebtoken')
const clientModel = require('../models/clientModel')


function checkAuth(req, res, next) {
  if (!req.headers.token) res.status(403).send('Token not found')
  else {
    jwt.verify(req.headers.token, process.env.SECRET, async (err, token) => {
      if (err) res.status(403).send('Token not valid')
      const client = await clientModel.findOne({ email: token.email })
    
      res.locals.client = client
      next()
    })
  }
}

// function checkRole (req, res, next) {

// }

module.exports = {
  checkAuth

}