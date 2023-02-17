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
    position:'sticky',
    top:"5%",
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    zIndex:'100',
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
      
      {/* <div><img style={{width:'70px', borderRadius:'50%'}} src={`${img}`}></img></div>
      <h3>{dat.displayName}</h3> */}

      
    </div>
  )
}

export default Navbar
