import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Mainpage() {
  const [data, setData] = useState("");
  async function fetchData() {
    const res = await axios.get("https://timetable-amber.vercel.app/")
    console.log(res)
    setData(res.data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div className='msg'>
        <h1>{data.Subject}</h1>
        <h1>{data.room}</h1>
        <h1>{data.time}</h1>
      </div>
    </div>
  )
}

export default Mainpage
