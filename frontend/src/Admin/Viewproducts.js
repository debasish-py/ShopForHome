import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Viewproducts() {
  const [product, setProduct] = useState({
    title: "",
    img: "",
    brand: "",
    category: "",
    inStock: "",
    price: "",
  });
  const { title } = useParams();
  useEffect(()=>{
    (async() => {
    const productdata=await axios.get(`http://localhost:8000/main/viewProduct/${title}`)
   
    setProduct(productdata.data)})
    ()
   }, []);
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/admin">
        back to Dashboard
      </Link>
      <h1 className="display-4">PRODUCT DETAILS</h1>
      <hr />
        <div className="imagebox">
          <img src={product.img} alt="" />
        </div>
      <ul className="list-group w-50">
        <li className="list-group-item">Product name: {product.title}</li>
        <li className="list-group-item">Product img: {product.img}</li>
        <li className="list-group-item">Product brand: {product.brand}</li>
        <li className="list-group-item">Product category: {product.category}</li>
        <li className="list-group-item">Product in Stock: {product.inStock}</li>
        <li className="list-group-item">Product Price: {product.price}</li>
      </ul>
    </div>
  );
}

export default Viewproducts