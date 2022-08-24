import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Table from 'react-bootstrap/Table'

const Checkstock=()=>{

    const [product, setProduct] = useState([]);
    const navigate=useNavigate()
    useEffect(()=>{
        (async() => {
        const productdata=await axios.get("http://localhost:8000/main/viewProductwem")
       
        setProduct(productdata.data)})
        ()
       }, []);
  
    return (
        <Table className='table border shadow'>
        <thead>
            <tr>
            <th>Serial</th>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                product.map((product, index)=>(
                // {if(){
                    
                // }
                    <tr key={index+1}>
                        <th scope="row">{index + 1}</th>
                        <td>{product.title}</td>
                        <td>{product.brand}</td>
                        <td>{product.category}</td>
                        <td>{product.instock}</td>
                        <td>
                            
                            <button onClick={()=>navigate("/admin/emailjs")}  className='btn btn-danger'> email </button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </Table>
    );
  };
  
  export default Checkstock;