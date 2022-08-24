import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../styles/amazon.css";

function Admin() {

    const [users, setUsers] = useState({
        name: "",
        email: "",
        admin: "True",
      });
      const { email } = useParams();
      useEffect(() => {
        loadusers();
      }, []);
      const loadusers = async () => {
        const res = await axios.get(`http://localhost:8000/main/admindetail`);
        console.log(res)

        setUsers(res.data);
      };
      return (
        <div className="container py-4">
          
          <h1 className="display-4">ADMIN DETAILS</h1>
          <hr />
          <ul className="list-group w-50">
            <li className="list-group-item">Admin's name: {users.title}</li>
            <li className="list-group-item">Admin's email: {users.email}</li>
            {/* <li className="list-group-item">users is Admin? : {users.admin}</li> */}
          </ul>

        <div className="buttondiv">

            <Link to='/admin/crudusers'>
                <button className="btn btn-primary  btn-block"> CRUD Users  </button>
                </Link>
            
            <Link to='/admin/crudproducts'>
                <button className="btn btn-primary  btn-block"> Crud Products </button>
            </Link>

            <Link to='/admin/table'>
                <button className="btn btn-primary  btn-block"> Check Analytics  </button>
            </Link>

            <Link to='/admin/checkstock'>
                <button className="btn btn-primary  btn-block"> Check Stocks  </button>
            </Link>

            <button className="btn btn-danger  btn-block"> Logout  </button>
            
            
        </div>
          
        </div>
      );
}

export default Admin