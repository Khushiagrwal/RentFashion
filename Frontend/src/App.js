import React from "react";
import "./index.css"
import {Route , BrowserRouter,Routes} from 'react-router-dom';
import Home from "./pages/Home"
import Login from "./pages/Login";
// import Register from "./pages/Register"
import Booking from "./pages/Booking";
import Signup from "./pages/Signup";
import  { useEffect, useState } from 'react';
// import DefaultPage from '../components/DefaultPage';
import axios from "axios";

function App() {
    const [data,setdata]=useState("");
    const getdata =()=>
    {
        const res=axios.get("http://localhost:8080/connect");
        setdata(res.data);
    }
    useEffect(()=>{
        getdata();
    })
    return(
        <>
        <div>
            {/* <DefaultPage>
                <h1>Home Page</h1>
            </DefaultPage> */}
            {data}
        </div>
        </>
    )
}
  // return (
  //   <div className="App">
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" exact Component={Home}/>
  //         <Route path="/register" exact Component={Signup}/>
  //         <Route path="/login" exact Component={Login}/>
  //         <Route path="/booking" exact Component={Booking}/>
  //       </Routes>
  //     </BrowserRouter>
  //   </div>
  // );

export default App;
