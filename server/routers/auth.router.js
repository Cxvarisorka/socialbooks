const express = require('express');

// Controllers for handling requests
const { signup } = require('../controllers/auth.controller');

// Container for all routes combined
const authRouter = express.Router();

// Signup controller
authRouter.post('/signup', signup);

module.exports = authRouter;