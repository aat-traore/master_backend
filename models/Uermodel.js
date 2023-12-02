const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    role: {
      type: String,
      enum: ['user', 'admin'], // Define possible roles
      default: 'user', // Set a default role
    },
  });
  
  const User = mongoose.model('User', userSchema);
  module.exports = User;