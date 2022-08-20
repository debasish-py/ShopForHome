import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import "../styles/loginsignup.css"
import "bootstrap/dist/css/bootstrap.min.css"


function Signup() {
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
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Email address</label>
                                    <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                    />
                                </div>
                                <div className="form-group mt-3">
                                    <label>Password</label>
                                    <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    />
                                </div>
                                <div className="d-grid gap-2 mt-3">
                                    <button type="submit" className="btn btn-primary">
                                    Submit
                                    </button>
                                </div>
                                <p className="forgot-password text-right mt-2">
                                    Already a User <a href="/login">LOGIN</a>
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