import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const ulstyle = {
    listStyle: "none",
    display:"flex",
    justifyContent:"space-between"
  }
  return (
    <div>
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
