import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';

function Messpage() {
    const [data, setData] = useState("");
    async function fetchData(){
        const res = await axios.get("https://timetable-vert.vercel.app/mess")
        console.log(res)
        setData(res.data)
    }
    useEffect(()=>{
      fetchData()
    },[])
    return (
        <div>
            <div className='msg'>
                <h1 style={{color:"orange"}}>{data.type}</h1>
                <h1>{data.meal}</h1>
            </div>
        </div>
    )
}

export default Messpage
