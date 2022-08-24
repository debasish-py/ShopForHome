const User = require("../models/usermodel")
const bcrypt = require("bcrypt")
const expressAsyncHandler = require('express-async-handler')
const jwt = require("jsonwebtoken")


//Get all users
exports.getusers = async (req, res) => {
  const users = await User.find({});
  res.send(users);
};


//User signup
exports.signup = async (req, res) => {
  try {
    const data = req.body
    const hashedpassword = await bcrypt.hash(data.password, 4)
    //const generatedtoken=jwt.sign(jwt.sign({_id: user._id,name: user.name,email: user.email,isAdmin: user.isAdmin,},{expiresIn:'1h'}))
    const result = await User.create({
      name: data.name,
      email: data.email,
      password: hashedpassword
    })
    res.status(200).send({ msg: "signup successfull" });
  }
  catch (err) {
    res.send(err)
  }

};


//User and admin signin/login
exports.signin = expressAsyncHandler(async (req, res) => {
  const data = req.body
  console.log(data.password)

  if (data.email=="ramesh@gmail.com"  && data.password=="Aramu"){
    const generatedtoken = jwt.sign({ email:data.email }, 'rambabu', { expiresIn: '1h' })

      res.cookie("cookiedata", generatedtoken)
    res.send({user:"admin"})
  }
  else{


    const user = await User.findOne({ email: data.email })

  if (user) {
    console.log(user.password, data.password)
    const comparison = await bcrypt.compare(data.password, user.password)

    if (comparison) {
      const generatedtoken = jwt.sign({ _id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin, }, 'jamesbond', { expiresIn: '1h' })

      res.cookie("cookiedata", generatedtoken)

      res.status(200).send({ msg: "login successfull", status: true, token: generatedtoken ,user:"user"})

    }
    else {
      res.status(401).send({ message: 'Invalid email/password', status: false })
    }
  }
  else {
    res.status(401).send({ message: 'Invalid email/password' })
  }

  }
  
})


//search product with name
exports.search = async (req, res) => {
  const result = await User.find({ name: req.params.name })
  res.status(201).send(result)

}

//Get specific user with id/name
exports.getuser = expressAsyncHandler(async (req, res) => {
  //const user = await User.findById(req.params.id);
  const user = await User.find({ name: req.params.name })
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: 'User Not Found' });
  }
})


// update user with id/name
exports.updateuser = expressAsyncHandler(async (req, res) => {
  //const user = await User.findById(req.params.id);
  const data=req.body
  const user = await User.find({ email: req.params.email })
  if (user) {
    await User.updateOne({email:data.email},{name:data.name})
    res.send({ message: 'User Updated' });
  } else {
    res.status(404).send({ message: 'User Not Found' });
  }
})

//Delete user with id/name
exports.deleteuser = expressAsyncHandler(async (req, res) => {
  const email = req.params.email
  try {
    const result = await User.deleteMany({ email: email })
    if (result) {

      res.send({ msg: "deleted succesfully" })
    }
    else {
      res.status(400).send({ msg: "not found" })
    }
  }
  catch (err) {
    console.log("error in deletion")
  }
})

exports.authorize=async(req, res,next)=> {
  try {
    console.log("inisded auth")
    var token = req.cookies['cookiedata']
    console.log(token)
    const result = jwt.verify(token, "rambabu")
    console.log(result)
    next()

  }
  catch (err) {
    res.send("error in authorization")
  }
}

//admin
exports.admindetail=async(req, res)=> {
  try {


    data={
      title:"ramesh",
      email:"ramesh@gmail.com"

    }
    res.send(data)

  }
  catch (err) {
    res.send("error in authorization")
  }
}

