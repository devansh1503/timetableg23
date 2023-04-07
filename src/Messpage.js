import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';

function Messpage() {
    const [data, setData] = useState([]);
    async function fetchData() {
        await axios.get("https://timetable-vert.vercel.app/mess").then((res)=>{
            setData(res.data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <div>
                {
                    data.map((item)=>{
                        return <div className='msg'>
                            <h2>{item.subject}</h2>
                            <h2>{item.time}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Messpage
