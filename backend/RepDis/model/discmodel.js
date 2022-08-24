const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
   
    email: { type: String, default:'' },
    coupon:{type:String,default:''},
    
  }
);

const Dis = mongoose.model('Discount', userSchema);
module.exports = Dis;