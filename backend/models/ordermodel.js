const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
    {

        name:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        quantity:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        }
            
    })

const order = mongoose.model('order',orderSchema)