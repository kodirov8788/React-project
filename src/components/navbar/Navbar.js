import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='navbar'>
            <li><a href="/home">Home</a></li>
            <li><a href="/service">Service</a></li>
            <li><a href="#">About us</a></li>
        </div>
    )
}

export default Navbar