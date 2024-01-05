import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './css/Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <ul className='nav-list'>
                <li className='nav-item'><Link to="/" className='nav-link'>Home</Link></li>
                <li className='nav-item'><Link to="/prices" className='nav-link'>Prices</Link></li>
                <li className='nav-item'><Link to="/contacts" className='nav-link'>Contacts</Link></li>
                <li className='nav-item'><Link to="/map" className='nav-link'>Map</Link></li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Navbar