const  User = require('../models/Uermodel')
const jwt= require('jsonwebtoken')
const bcrypt = require("bcrypt");

// Hash password before saving
async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
   }
    
module.exports.signup = async (req, res, next) => {
    try {
     const {username,  email, password, role } = req.body
     const hashedPassword = await hashPassword(password);
     const newUser = new User({ username,email, password: hashedPassword, role: role || "user" });
     await newUser.save();
     res.json({
      data: newUser,
     })
    } catch (error) {
     next(error)
    }
   }
   module.exports.getUsers = async (req, res,) => {
    const users = await User.find({});
    res.status(200).json({
     data: users
    });
   }