import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer__address">
      <h1>CareFinder</h1>
      <p>Plot 42, Akinza Street, 
        <br/>
      Victoria island, Lagos
      <br/>
       +2349167351788</p>
    </div>
    <div className="footer__about">
      <h1>About Us</h1>
      <p>News & Media
        <br/>
      Contact Us</p>
    </div>
    <div className="footer__links">
      <h1>Quick Links</h1>
      <p>
      My account
    <br/>
      Book an appointment
    <br/>
    Library</p>
    </div>
    </div>
  )
}

export default Footer