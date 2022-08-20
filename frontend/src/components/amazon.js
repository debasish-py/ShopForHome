import React, { useState } from "react";
// import list from "../data";
import { useEffect } from "react";
import axios from "axios";
import Cards from "./card";
import "../styles/amazon.css";
const Amazon = ({ handleClick }) => {

  const [list,setList]=useState([])
  
  //write down
  useEffect(()=>{
    (async() => {
    const productdata=await axios.get("http://localhost:3001/viewProduct")
    console.log("inside amazon",productdata.data)
    setList(productdata.data)})
    ()
   }, []);
  

  console.log("kha ho bai",list)
  return (
    
    <section>
      {list.map((item) => (
        
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
