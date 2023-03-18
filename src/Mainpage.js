import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Cookies from 'js-cookie';
import Login from './Login';

function Mainpage() {
  const [data, setData] = useState([]);
  async function fetchData() {
    const res = await axios.get("https://timetable-vert.vercel.app/time")
    console.log(res.data)
    setData(res.data)
  }
  useEffect(() => {
    fetchData()
  }, [])
  const [checkLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const token = Cookies.get('login-session')
    if (token) {
      setLoggedIn(true)
      console.log(token)
    }
  }, [])
  if(data===""){
    return (
      <div className='msg'>
        NO CLASSES TODAY!
      </div>
    )
  }
  return (
    <div>
      <div className='msg'>
        <table>
          <th>Subject</th>
          <th>Room</th>
          <th>Time</th>
          {data.map((item) => {
            return <tr>
              <td>{item.subject}</td>
              <td>{item.room}</td>
              <td>{item.time}</td>
            </tr>
          })}
        </table>
      </div>
    </div>
  )
}

export default Mainpage
