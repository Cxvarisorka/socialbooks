// User model to CRUD documents
const User = require("../models/user.model");

// Utils
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

// Account creation
const signup = catchAsync(async (req, res, next) => {
    const { fullname, email, password } = req.body;

    const user = await User.create({ fullname, email, password });

    res.status(201).json(user);
});

module.exports = { signup };


