import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='navbar'>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="#">About us</Link></li>
        </div>
    )
}

export default Navbar