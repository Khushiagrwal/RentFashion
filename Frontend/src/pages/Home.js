import React, { useEffect, useState } from 'react';
import DefaultPage from '../components/DefaultPage';
import axios from "axios";

function Home()
{
    const [data,setdata]=useState("");
    const getdata =()=>
    {
        const res=axios.get("http://localhost:8080/products");
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
export default Home;