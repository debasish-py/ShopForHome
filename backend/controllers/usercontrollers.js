const User = require("../models/usermodel")
const bcrypt = require("bcrypt")
const expressAsyncHandler = require('express-async-handler')
const jwt=require("jsonwebtoken")


//Get all users
exports.getusers = async (req, res) => {
    const users = await User.find({});
    res.send(users);
  };


//User signup
exports.signup = async (req, res) => {
    try{
    const data = req.body
    const hashedpassword=await bcrypt.hash(data.password,4)
      //const generatedtoken=jwt.sign(jwt.sign({_id: user._id,name: user.name,email: user.email,isAdmin: user.isAdmin,},{expiresIn:'1h'}))
      const result = await User.create({
        name:data.name,
        email:data.email,
        password:hashedpassword
    })
    res.status(201).send("user registered successfully") ;
}
catch(err){
    res.send(err)
}
      
};


//User signin/login
exports.signin =  expressAsyncHandler(async (req, res) => {
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
})


//search product with name
exports.search = async (req, res) => {
    const result = await User.find({name:req.params.name})
    res.status(201).send(result) 
      
}

//Get specific user with id/name
exports.getuser = expressAsyncHandler(async (req, res) => {
    //const user = await User.findById(req.params.id);
    const user = await User.find({name:req.params.name})
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })


// update user with id/name
exports.updateuser = expressAsyncHandler(async (req, res) => {
    //const user = await User.findById(req.params.id);
    const user = await User.find({name:req.params.name})
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.isAdmin = Boolean(req.body.isAdmin);
      const updatedUser = await user.save();
      res.send({ message: 'User Updated', user: updatedUser });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })

//Delete user with id/name
exports.deleteuser = expressAsyncHandler(async (req, res) => {
    //const user = await User.findById(req.params.id);
    const user = await User.find({name:req.params.name})
    if (user) {
      if (user.email === 'admin@example.com') {
        res.status(400).send({ message: 'Can Not Delete Admin User' });
        return;
      }
      await user.remove();
      res.send({ message: 'User Deleted' });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })