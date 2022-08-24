const express=require("express")
const app=express()
const cors=require("cors")
var cookieParser = require('cookie-parser');
app.use(cors())
const mongoose=require("mongoose")

const userRouter = require('./routes/uRoutes')

const bodyParser=require("body-parser")
app.use(cookieParser())
app.use(cors())
app.use(bodyParser.json())
app.use('/', userRouter);


mongoose.connect("mongodb://localhost:27017/sfhome").then(() => {console.log('connected to db');}).catch((err) => {console.log(err.message);});

app.listen(3001, () => {
    console.log(`serve at http://localhost:3001`);
  })

