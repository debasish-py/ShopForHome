const express = require("express")

const bcrypt = require("bcrypt")


const usercontrollers = require('../controllers/usercontrollers')
const productcontrollers = require('../controllers/productcontrollers')

const jwt=require("jsonwebtoken")

const userRouter = express.Router();

//admin
userRouter.get("/admindetail",usercontrollers.admindetail)

//login and signup for both user and admin
userRouter.post('/signup', usercontrollers.signup)
userRouter.post('/signin',usercontrollers.signin)

//USER OPERATIONS

userRouter.get("/getalluser",usercontrollers.getusers)  //Get all users 
userRouter.get('/getuser/:email', usercontrollers.getuser) //Get specific user with id/name
userRouter.patch('/updateuser/:email',usercontrollers.updateuser)   //Update user with email
// userRouter.get('/deleteuser/:email',usercontrollers.authorize,usercontrollers.deleteuser)
userRouter.get('/deleteuser/:email',usercontrollers.deleteuser)  //Delete User with email 
userRouter.get('/search/:name',usercontrollers.search)          //search with name


//PRODUCT OPERATIONS
//Get specific product with name

userRouter.post("/upload",productcontrollers.bulkUpload)  //bulk upload
userRouter.get("/viewProduct",productcontrollers.viewProduct) //view product
userRouter.get("/viewProductwem",productcontrollers.viewProductwem) //return product with stockitem <10
userRouter.get('/getproduct/:name',productcontrollers.getproduct) //get product by name
userRouter.post('/createproduct',productcontrollers.createproduct) //Create Product
userRouter.patch('/updateproduct/:name',productcontrollers.updateproduct)//Update product with resp name
userRouter.delete('/deleteproduct/:ptitle',productcontrollers.deleteproduct)//Delete Product with resp name



module.exports = userRouter;