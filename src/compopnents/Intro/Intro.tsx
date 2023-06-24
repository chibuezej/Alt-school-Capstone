import React from 'react'
import './intro.css'
import Vector from '../../Assets/Vector (1).png'
import intro from '../../Assets/Rectangle 1.png'
import Location from '../../Assets/Vector (4).png'
import Search from '../../Assets/Vector (5).png'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Work from '../Works/Work'
import Booking from '../Book appointment/Booking'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'


const Intro = () => {
  return (
    <>
    <Navbar/>
      <main>
        <div  className='intro__section'>

        <div className='intro__left-side'>
            <h1>Find the nearest hospital to you and make an appointment </h1>
            <h4>Discover Your Perfect Care: Find Your Hospital, Anytime, Anywhere!</h4>
            <div className='intro__left-side-btn'>
                <button><span>GET STARTED</span></button>
               
            </div>
            <div className='intro__left-side-pgh'>
            <p>Learn more <img src={Vector} alt="vector" /></p>
            </div>
            
        </div>
        <div className='intro__right-side'>
            <div className='intro__img'>
                <img src={intro} alt="intro" />
            </div>
            
        </div>
        <div>
        
        </div>
        </div>
        <div className='into__input'>
            <p>Find a nearby hospital </p>
            </div>
            <div className='intro__search'>
            <div className='intro__input-img'>
               <img src={Location} alt="location" className='location'/> 
               <p>Federal Medical Center, Ebutte Metta,Lagos State</p>
                <img src={Search} alt="search" />
            </div>
            
            </div>
           
            
    </main>
   <Home/>
   <Work/>
   <Booking/>
   <Testimonials/>
   <Footer/>
    </>
  
  )
}

export default Intro