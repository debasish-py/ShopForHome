const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
         name:{
            type:String,
            required:true,
            unique:true
        },
        image:{
            type:String,
            required:true
        },
        brand:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        
        inStock:{
            type:Number,
            required:true
        },
        price:{
            type:Number,
            required:true
        }
    })

const product = mongoose.model('product',productSchema)