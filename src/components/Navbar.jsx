import React from 'react'
import { Link  } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '20px', padding: '10px', borderBottom: '1px solid #ccc', alignItems: 'center' }}>
        <h1>MyCompany</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/service">Service</Link>

      </nav>
    </div>
  )
}

export default Navbar
