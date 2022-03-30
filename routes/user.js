const express = require('express')
const { registerUser } = require('../controllers/user.controller')


const Router = express.Router()

Router.post('/register', registerUser)

module.exports = Router