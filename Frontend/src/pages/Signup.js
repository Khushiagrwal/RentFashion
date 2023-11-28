import React, { useState } from 'react'
import "../index.css"
// import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Signup()
{

    const handleSubmit=(e)=>{
        e.preventDefault();
        
    }
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    return (
    <>
    sign up page 
    <form onSubmit={handleSubmit}>
    name:<input type="text" onChange={(e)=>{setName(e.target.value)}} />
    <br />
    email:<input type="email" onChange={(e)=>{setEmail(e.target.value)}} />
    <br />
    password:<input type="password" onChange={(e)=>{setPassword(e.target.value)}} />
    <br />
    <button>Register</button>
    <br />
    {/* <a href="#"> already you have an account</a> */}
    <Link to="/login">Login</Link>
    </form>
  </>
  );
}
