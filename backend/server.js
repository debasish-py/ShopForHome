const express=require("express")
const app=express()
const mongoose=require("mongoose")
const userRouter = require('./routes/userRoutes')
const bodyParser=require("body-parser")
app.use(bodyParser.json())
app.use('/', userRouter);
mongoose.connect("mongodb://localhost:27017/sfhome").then(() => {console.log('connected to db');}).catch((err) => {console.log(err.message);});

app.listen(5000, () => {
    console.log(`serve at http://localhost:5000`);
  });