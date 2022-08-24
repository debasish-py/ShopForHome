const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {   id:{
        type:Number,
        
    }, //delete after debashish code
         title:{
            type:String,
            required:true,
            unique:true
        },
        img:{
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
        
        instock:{
            type:Number,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        amount:{
            type:Number
        }
    })

const Pmodel = mongoose.model('product',productSchema)
module.exports = Pmodel