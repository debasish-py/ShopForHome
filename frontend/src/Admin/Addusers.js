import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
//import {useHistory} from "react-router-dom"

const AddUser = () => {
    let navigate = useNavigate()
    const [user, setUser] = useState({
      
      name:"",
      email:"",
      password:""
    });

    const {name, email, password } = user
    const oninputChange = e =>{
      setUser({...user,[e.target.name] : e.target.value})
      console.log(e.target.value)
    }

    const onSubmit = async e =>{
      e.preventDefault()
      await axios.post("http://localhost:8000/main/signup",user)
      navigate("/admin/crudusers")
    }
    
  
  
    return (
    <div className="container " style={{marginTop:"50px"}}>
      <div className="buttondiv">
                <Link className="btn btn-primary" to="/admin">
                    Back to Dashboard
                </Link>
      </div>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)} >
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div> */}
          <div className="form-group py-2">
            <input
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => oninputChange(e)}
            />
          </div>
          <div className="form-group py-2">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
             onChange={e => oninputChange(e)}
            />
          </div>
          <div className="form-group py-2">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter User Password"
              name="password"
             value={password}
              onChange={e => oninputChange(e)}
            />
          </div>
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div> */}
          <button className="btn btn-primary btn-block py-2">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;