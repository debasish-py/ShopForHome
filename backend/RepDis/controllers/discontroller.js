


const Dis=require("../model/discmodel")
exports.disfunc = async (req, res) => {
    console.log(req.body)
    const data=req.body
    const finalcode=data.code+data.discount
    const result=await Dis.create({
   coupon:finalcode,
        email:data.email,
    })
    res.send("added succesfully")
    
  };
  exports.couponfunc = async (req, res) => {
    
    const data=req.params.email
    console.log(data)
    const result=await Dis.findOne({email:data})
    if (result){
      res.send({coupon:result.coupon,status:true})
    }
    else{
      res.send({status:false})
    }
    


   
    
  };