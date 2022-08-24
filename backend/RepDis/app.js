let express=require("express")
let app=express()
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const cors=require("cors")
const discontroller=require("./controllers/discontroller")
app.use(cors())
app.use(bodyParser.json())
app.post("/disc",discontroller.disfunc)
app.get("/checkcoupon/:email",discontroller.couponfunc)

mongoose.connect("mongodb://localhost:27017/sfhome").then(() => {console.log('connected to db of discount');}).catch((err) => {console.log(err.message);});

module.exports=app