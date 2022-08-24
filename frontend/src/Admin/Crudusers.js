import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import productlist from '../productdata';
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import "../styles/amazon.css";
import { useNavigate } from "react-router-dom";

function Crudusers() {
    const [users, setUsers]=useState([])
    let navigate = useNavigate();

    useEffect(()=>{
        (async() => {
        const result=await axios.get("http://localhost:8000/main/getalluser")
        
        setUsers(result.data)})
        ()
       }, []);

    async function deletfunc(email){
     
        const res=await axios.get(`http://localhost:8000/main/deleteuser/${email}`)
       
        console.log(res.data.msg)
        navigate("/admin/crudusers")
    }
    async function disfunction(email){

         navigate(`/admin/discount_page/${email}`)
        // console.log("press",email)
        
     
    }


  return (
    <div className='container'>
        
        <div className='py-4'>

            <h1>CRUD ON USERS</h1>
            <div className="buttondiv">
                <Link className="btn btn-primary" to="/admin">
                    Back to Dashboard
                </Link>
                <Link to='/admin/addusers'>
                    <button className="btn btn-primary  btn-block"> +ADD Users  </button>
                </Link>

                <Link to='/admin/crudproducts'>
                    <button className="btn btn-primary  btn-block"> Crud Products  </button>
                </Link>
            </div>
        <Table className='table border shadow'>
            <thead>
                <tr>
                <th>Serial</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index)=>(
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                            <div className="buttondiv">
                                
                                    <button onClick={()=>disfunction(user.email)} className="btn btn-primary  btn-block">  ADD Discount  </button>
                               
                                <Link to='/admin/editusers'>
                                    <button className="btn btn-outline-primary">  Edit Users  </button>
                                </Link>
                                <Link to='/'>
                                    <button onClick={()=>deletfunc(user.email)}  className="btn btn-danger  btn-block">  Delete  </button>
                                </Link>
                            </div>
                                
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
        </div>
    </div>
  )
}

export default Crudusers