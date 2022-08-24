import React, { useState } from "react";
// import list from "../data";
import "bootstrap/dist/css/bootstrap.min.css"
import emailjs from '@emailjs/browser'
import { useEffect } from "react";
import axios from "axios";

const  Instock= () => {



  const sendEmail = (e) => {
    e.preventDefault();

   
    emailjs.sendForm('service_yyr6ist', 'template_24pgpej', e.target, 'W8MIgqXfgJt3n4Jiz').then((result) => {
        window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        alert("✅Message sent successfully")
    }, (error) => {
        console.log(error.text);
        alert("❌ Message not sent ❌")

    });
  };
  
  //write down

 
  return (
    
  <div className="container border" style={{marginTop:"50px"
  ,width:"50%",
  backgroundImage:"url(https://img.freepik.com/free-vector/abstract-watercolor-pastel-background_87374-122.jpg?w=2000)",
  backgroundPosition:"center",
  backgroundSize:"cover"}}>
    <h1 style={{marginTop:"25px"}}>Contact Seller</h1>
    <form className="row" style={{margin:"25px 85px 75px 100px" }} onSubmit={sendEmail}>
      <label >Name</label>
      <input type="text" name="user_name"  className="form-control"/>
      <label >Admin Email</label>
      <input type="email" name="user_email" className="form-control" />
      <label>Message</label>
      <textarea name="message" rows="4" className="form-control" />
      <input type="submit" value="Send"  className="form-control btn btn-primary" style={{marginTop:"30px"}}/>
    </form>

  </div>
  );
};

export default Instock;