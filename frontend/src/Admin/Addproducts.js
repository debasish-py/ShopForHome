import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const AddUser = () => {
  let navigate = useNavigate();
  const [product, setproduct] = useState({
    title: "",
    img: "",  
    brand: "",
    category: "",
    inStock: "",
    price: "",
  });

  const { title, img, brand, category, inStock, price } = product;
  const onInputChange = e => {
    setproduct({ ...product, [e.target.title]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8000/main/createproduct", product);
    //navigate("/");
  };
  return (

    <div className="container " style={{marginTop:"50px"}}>
      <div className="buttondiv">
                <Link className="btn btn-primary" to="/admin">
                    Back to Dashboard
                </Link>
      </div>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Product</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the Product name"
              name="title"
              //value={title}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group py-2">
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter the product image URL"
              name="img"
              //value={img}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group py-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the Product Brand"
              name="brand"
              //value={brand}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group py-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the Product Category"
              name="category"
              //value={category}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group py-2">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter the amount of item stock"
              name="inStock"
              //value={inStock}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group py-2">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter the Product price"
              name="price"
              //value={price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="py-2 btn btn-primary btn-block ">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;