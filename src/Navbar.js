import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const navstl = {
    position:'sticky',
    top:"1%"
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
