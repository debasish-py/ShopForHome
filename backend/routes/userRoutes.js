const express = require("express")
const bcrypt = require("bcrypt")
const expressAsyncHandler = require('express-async-handler')
const User = require('../models/userModel.js')
//import {generateToken } from '../util.js';
const jwt=require("jsonwebtoken")

const userRouter = express.Router();


//Get all users  
userRouter.get('/', expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users);
  })
);

//User Signup/Register
userRouter.post('/signup',async (req, res) => {
  const data = req.body
  const hashedpassword=await bcrypt.hash(data.password,4)
    //const generatedtoken=jwt.sign(jwt.sign({_id: user._id,name: user.name,email: user.email,isAdmin: user.isAdmin,},{expiresIn:'1h'}))
    const result = await User.create({
      name:data.name,
      email:data.email,
      password:hashedpassword
  })
  res.status(201).send("user registered successfully") 
    
  }
);

//User login
userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
    const data=req.body
    const user=await User.findOne({email:data.email})
   // const username = await UserModel.findOne({uname:data.email})
    if(user){
    const comparison=await bcrypt.compare(data.password,user.password)
    if(comparison){
      const generatedtoken=jwt.sign({_id: user._id,name: user.name,email: user.email,isAdmin: user.isAdmin,},'adeddse',{expiresIn:'1h'})
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generatedtoken
      })
    }
    else{
      res.status(401).send({ message: 'Invalid email/password' })
    }
  }
  else{
    res.status(401).send({ message: 'Invalid email/password' })
  }
}));

module.exports = userRouter;
