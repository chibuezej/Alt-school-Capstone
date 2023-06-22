import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-links">
      <div className='navbar__logo'>
          <h2>CareFinder</h2>
        </div>
      </div>
        
        <div className='navbar__links_container'>
        
       
           <p><a href="#home">Home</a></p> 
           <p><a href="#about">About</a></p> 
           <p><a href="#fh">Find Hospital</a></p> 
           
        </div>
        <div className='navbar__sign'>
          <button type='button'><span className='navbar__btn'><Link to={"/login"}>Login</Link></span></button>
          <button type='button'><span className='navbar__btn'><Link to={"/signup"}>Sign Up</Link></span></button>
        </div>
        </nav>
  )
}

export default Navbar