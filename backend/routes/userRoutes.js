const express = require("express")
const bcrypt = require("bcrypt")
const expressAsyncHandler = require('express-async-handler')
const User = require('../models/usermodel.js')
const Product = require('../models/productmodel.js')
const usercontrollers = require('../controllers/usercontrollers')
//import {generateToken } from '../util.js';
const jwt=require("jsonwebtoken")

const userRouter = express.Router();

/*const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '10d'
    }
  );
}; */

//Get all users  
userRouter.get("/",usercontrollers.getusers)

//User Signup/Register
userRouter.post('/signup', usercontrollers.signup)

//User login
userRouter.post('/signin',usercontrollers.signin)

//search
userRouter.get('/search/:name',usercontrollers.search)

module.exports = userRouter;
