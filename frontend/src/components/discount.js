import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import list from "../data";
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const  DiscountFunc= () => {
  let params=useParams()
  console.log(params.uemail)
    // console.log("going to call",email) 
    const navigate=useNavigate()
  
  const [discount,setDiscount]=useState("")
  const [code,setCode]=useState("")
  const [finalcode,setFinalcode]=useState("")

 
  
   
  const disfun=async()=>{
    
    
    const codedata=await axios.post(`http://localhost:8000/repdis/disc`,{code:code,discount:discount,email:params.uemail})
    console.log(codedata)
    navigate("/admin/crudusers")

  }
  const handleChange=(e)=>{
    e.preventDefault()
    if (e.target.name==="discount"){
        setDiscount(e.target.value)
     }
    if (e.target.name==="code"){
        setCode(e.target.value)
     }
     
    
    }

 
  return (
    
  <div className="container border" style={{marginTop:"50px"
  ,width:"50%",
  backgroundImage:"url(https://static.vecteezy.com/system/resources/previews/001/410/750/original/cyber-monday-happy-shopping-background-free-vector.jpg)",
  backgroundPosition:"center",
  backgroundSize:"cover"}}>
    <h1 style={{marginTop:"25px" ,color:"white"}}>Discount Coupon</h1>
    <form className="row" style={{margin:"25px 85px 75px 100px" }} >
      <label style={{color:"white"}}>enter code(string)</label>
      <input type="text" name="code"  className="form-control" onChange={(e)=>handleChange(e)}/>
      <label style={{color:"white"}}>Discount(%)</label>
      <input type="text" name="discount" className="form-control" onChange={(e)=>handleChange(e)}/>
     
      <button onClick={disfun}  className=" btn btn-primary" style={{marginTop:"30px"}}>submit</button>
    </form>

  </div>
  );
};

export default DiscountFunc;