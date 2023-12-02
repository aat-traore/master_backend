const  User  = require("../models/Uermodel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken'); 
async function validatePassword (plainPassword,hashedPassword){
    return await bcrypt.compare(plainPassword, hashedPassword)
   }

   const accessToken= (id,role) => {
    return jwt.sign(
      {data : {id,role}},
      process.env.JWT_KEY,
      {expiresIn: "30d", })
   }
   
   



 module.exports.auth = async(req ,res) => {
    try {
        const {email, password} = req.body;
        const  user = await User.findOne({ email
        })
        if(!user){
          return ('email does not exist')
        }
        const validPassword = await  validatePassword(password, user.password)
        if (!validPassword){
         return(' password is not correct') 
        }

          //await User.findByIdAndUpdate( user._id,{accessToken})
          const token = accessToken(user._id , user.role)
          res.status(201).json({ message : "successfully connection ", 
          token
          })
    
      } catch (error) {
        res.status(500).json(`message ${error}`)
      }

 }