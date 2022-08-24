import axios from 'axios';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import "../styles/loginsignup.css"
import "bootstrap/dist/css/bootstrap.min.css"


function Signup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name,setName]=useState("")
    const handleChange=(e)=>{
        if (e.target.name==="email"){
            setEmail(e.target.value)
         }
        if (e.target.name==="name"){
            setName(e.target.value)
         }
        if (e.target.name==="password"){
            setPassword(e.target.value)
         }
    }
    

    const handleClick=()=>{
        axios.post("http://localhost:8000/main/signup",
        { 
                email:email,
                password:password,
                name:name

            }).then((res)=>console.log(res)).catch((err)=>console.log(err))
    }
    // const handleClick = async (e) => {
    //     e.preventDefault()
    //     let response
    //     try {
    //         response = await axios.post("http://localhost:3001/signin",
    //             {
    //                 email: email,
    //                 password: password,
    //             })
    //         console.log(loginresponse)
    //         setMessage(loginresponse.data.msg)
    //         setFlag(loginresponse.data.status)
    //         console.log(message)
    //         if (loginresponse.data.status) {
    //             // localStorage.setItem("token", loginresponse.data.token)
    //             console.log(flag)
    //         }
    //     }
    //     catch (err) {
    //         console.log("err inlogin")
    //     }
    // }



    return(
        <div className='mainbody'>
            <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
                <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                    <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
                        {/* for signin */}
                        <div className="Auth-form-container w-3/5">
                            <form className="Auth-form">
                                <div className="Auth-form-content">
                                <h3 className="Auth-form-title">Sign UP</h3>
                                <div className="form-group mt-3">
                                    <label>User Name</label>
                                    <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Enter Your Username"
                                    name="name" onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Email address</label>
                                    <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                    name="email" onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Password</label>
                                    <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    name="password" onChange={(e) => handleChange(e)}
                                    />
                                </div>
                                <div className="d-grid gap-2 mt-3">
                                    <button type="submit" className="btn btn-primary" onClick={handleClick}>
                                    Submit
                                    </button>
                                </div>
                                <p className="forgot-password text-right mt-2">
                                    Already a User <a href="/">LOGIN</a>
                                   
                                </p>
                                </div>
                        </form>
                    </div> 
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Signup