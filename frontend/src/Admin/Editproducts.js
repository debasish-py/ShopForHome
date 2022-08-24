import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

function Editproducts() {

    let navigate = useNavigate()
    // const { title } = useParams();
    // const [product, setProduct] = useState({
    //   title: "",
    //   brand: "",
    //   category: "",
    //   inStock: "",
    //   price: ""
    // });
  
    // const { title, brand, category, inStock, price } = product;
    // const onInputChange = e => {
    //   setProduct({ ...product, [e.target.title]: e.target.value });
    // };
  
    // useEffect(() => {
    //   loadproduct();
    // }, []);
  
    const onSubmit = async e => {
      e.preventDefault();
      // await axios.put(`http://localhost:3003/users/$title`, product);
      navigate("/");
    };
  
    // const loadproduct = async () => {
    //   const result = await axios.get(`http://localhost:3003/product/$title`);
    //   setproduct(result.data);
    // };


  return (
    <div className="container">
      <Link className="btn btn-primary" to="/admin">
        back to Dashboard
      </Link>
    <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">Edit A Product</h2>
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-group py-2">
          <input
            type="text"
            className="form-control form-control-lg py-2"
            placeholder="Title of the Product"
            name="title"
            //value={title}
            // onChange={e => onInputChange(e)}
          />
        </div>

        <div className="form-group py-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter the Brand name "
            name="brand"
            // value={brand}
            // onChange={e => onInputChange(e)}
          />
        </div>

        <div className="form-group py-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter the category of your product "
            name="category"
            // value={category}
            // onChange={e => onInputChange(e)}
          />
        </div>

        <div className="form-group py-2">
          <input
            type="number"
            className="form-control form-control-lg"
            placeholder="Enter the amount of stock "
            name="inStock"
            // value={inStock}
            // onChange={e => onInputChange(e)}
          />
        </div>

        <div className="form-group py-2">
          <input
            type="number"
            className="form-control form-control-lg"
            placeholder="Enter the price of your product "
            name="price"
            // value={price}
            // onChange={e => onInputChange(e)}
          />
        </div>

        <button className="btn btn-warning btn-block">Update Products</button>
      </form>
    </div>
  </div>
  )
}

export default Editproducts