import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";



function Editusers() {
  const [user, setUser] = useState({
    name:"",
    email:""
  })
    let navigate = useNavigate()
    const { name, email} = user;
    const onInputChange = e => {
       setUser({ ...user, [e.target.name]: e.target.value });
       console.log(e.target.value)
     };
    const onSubmit = async e => {
      e.preventDefault();
      await axios.patch(`http://localhost:8000/main/updateuser/${email}`,user)
       
      navigate("/admin/crudusers")
    };
  
    // const loadUser = async () => {
    //   const result = await axios.get(`http://localhost:3003/users/${id}`);
    //   setUser(result.data);
    // };

  return(

    <div className="container">
      <Link className="btn btn-primary" to="/admin">
        back to Dashboard
      </Link>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group py-2">
            <input
              type="text"
              className="form-control form-control-lg py-2"
              placeholder="Enter Your Name"
              name="name"
              value={name}
               onChange={e => onInputChange(e)}
              
            />
          </div>

          <div className="form-group py-2">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>

          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  )
}

export default Editusers