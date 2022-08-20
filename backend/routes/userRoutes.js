const express = require("express")
const bcrypt = require("bcrypt")
const expressAsyncHandler = require('express-async-handler')
const User = require('../models/usermodel.js')
const Product = require('../models/productmodel.js')
const usercontrollers = require('../controllers/usercontrollers')
const productcontrollers = require('../controllers/productcontrollers')
//import {generateToken } from '../util.js';
const jwt=require("jsonwebtoken")

const userRouter = express.Router();

//USER OPERATIONS
//Get all users  
userRouter.get("/",usercontrollers.getusers)

//Get specific user with id/name
userRouter.get('/getuser/:name', usercontrollers.getuser)

//User Signup/Register Create
userRouter.post('/signup', usercontrollers.signup)

//User login 
userRouter.post('/signin',usercontrollers.signin)

//Update user with id/name
userRouter.patch('updateuser/:name',usercontrollers.updateuser)

//Delete User with id/name
userRouter.delete('deleteuser/:name',usercontrollers.deleteuser)
 
//search with name
userRouter.get('/search/:name',usercontrollers.search)

//PRODUCT OPERATIONS

//Get specific product with name
userRouter.get('/getproduct/:name',productcontrollers.getproduct)

//Create Product
userRouter.post('/createproduct',productcontrollers.createproduct)

//Update product with resp name
userRouter.patch('/updateproduct/:name',productcontrollers.updateproduct)

//Delete Product with resp name
userRouter.delete('/deleteproduct/:name',productcontrollers.deleteproduct)

module.exports = userRouter;
