import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Navbar() {
  const[dat, setData] = useState({})
  const[img, setImg] = useState("")
  useEffect(()=>{
    async function fetchData(){
      const res = await axios.get('http://localhost:3400/profileDetails')
      setData(res.data)
      setImg(res.data.photos['0'].value)
    }
    fetchData()
    console.log(dat)
  },[])
  const navstl = {
   width:'100%',
   backgroundColor:'black',
   height:'fit-content',
   padding:'20px',
   position:'sticky',
   top:'0%'
  }
  const ulstyle = {
    listStyle: "none",
    display:"flex",
    justifyContent:"space-between"
  }
  return (
    <div style={navstl}>
      <ul style={ulstyle}>
        <li>
          <Link className='link' to='/'>Current Class</Link>
        </li>
        <li>
          <Link className='link' to='/mess'>Mess</Link>
        </li>

      </ul>

      
    </div>
  )
}

export default Navbar
