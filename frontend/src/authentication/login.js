import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/loginsignup.css"
import { useNavigate } from 'react-router-dom';


function Login() {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [flag, setFlag] = useState("")
    const [message, setMessage] = useState("")
    const navigate=useNavigate()
   
    const handleChange=(e)=>{
        if (e.target.name==="email"){
            setEmail(e.target.value)
         }
       
        if (e.target.name==="password"){
            setPassword(e.target.value)
         }
    }
    const login = async (e) => {
        e.preventDefault()
        let loginresponse
        try {
            loginresponse = await axios.post("http://localhost:8000/main/signin",
                {
                    email: email,
                    password: password,
                })
            console.log(loginresponse)
           
           

            console.log(message)
            if (loginresponse.data.user ==="admin") {
                // localStorage.setItem("token", loginresponse.data.token)
                navigate("/admin")
                
            }
            else{
                navigate("/home")
            }
           
        }
        catch (err) {
            console.log("err inlogin")
        }
    }


  return (
    <div className='mainbody'>
        <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
                <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                    <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
                        {/* for signin */}
                        <div className="Auth-form-container w-3/5">
                            <form className="Auth-form">
                                <div className="Auth-form-content">
                                <h3 className="Auth-form-title">Sign In</h3>
                                <div className="form-group mt-3">
                                    <label>Email address</label>
                                    <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                    name="email"
                                    onChange={(e)=>handleChange(e)}
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Password</label>
                                    <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    name="password"
                                    onChange={(e)=>handleChange(e)}
                                    />
                                </div>
                                <div className="d-grid gap-2 mt-3">
                                    <button type="submit" className="btn btn-primary" onClick={login}>
                                    Submit
                                    </button>
                                </div>
                             
                                <p className="forgot-password text-right mt-2">
                                    Don't have a Account <a href="/signup">SIGN-UP</a>
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

export default Login