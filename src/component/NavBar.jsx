import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar">
        <div className="barnd-name"><a href="/"><span>Fitsta</span>.com</a></div>
        <div className="nav-menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/equipment-store">Store</Link></li>
                <li><Link to="/home">Membership</Link></li>
                <li><Link to="/home" >About us</Link></li>
                <li><Link to="/home">Contact Us</Link></li>
            </ul>
            <div className="login-btn"><Link to="/login">Login/Sign Up</Link></div>
        </div>
    </nav>
  )
}
