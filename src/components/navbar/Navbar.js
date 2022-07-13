import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { Link, useLocation } from "react-router-dom"


const Navbar = () => {
    const [click, setClick] = useState("white")


    let Location = useLocation()
    let movingPage = Location.pathname

    useEffect(() => {
        const myfunc = () => {
            if (movingPage.includes("service")) {
                setClick("white")
            } else {
                setClick("black")
            }
        }
        myfunc()
    }, [movingPage])



    return (
        <div className='navbar'>
            <li><Link to="/home" style={{ color: click }}>Home</Link></li>
            <li><Link to="/service" style={{ color: click }}>Service</Link></li>
            {/* <li><Link to="#">About us</Link></li> */}
        </div>
    )
}

export default Navbar