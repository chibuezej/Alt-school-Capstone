import React from 'react'
import { Link } from 'react-router-dom'
import google from '../../Assets/devicon_google.png'
import apple from '../../Assets/ic_round-apple.png'
import facebook from '../../Assets/logos_facebook.png'
import image from '../../Assets/Rectangle 113.png'
import './sigup.css'
const SignUp = () => {
  return (
     <div className='signup'>
    <div className='signup__left-side'>
        <div className="signup__header1">
        <h1>Create An Account</h1>
        </div>
   
        <div className='signup__left-input'>
        <h3>Name</h3>
        <input type="text" name="email" placeholder='Enter Name' />
    </div>
    <div className='signup__left-input1'>
        <h3>Email Addres</h3>
        <input type="text" name="email" placeholder='Enter Email Addres' />
    </div>
    <div className='signup__left-input2'>
        <h3>Password</h3>
        <input type="text" name="email" placeholder='Enter Password' />
    </div>
    <div className='signup__button'>
    <button>Create Account</button>
    </div>
    <div className="signup__content">
    <h2>OR</h2>
    </div>
    
    <div className='signup__logo'>
        <img src={google} alt="google-logo" />
        <img src={apple} alt="apple-logo" />
        <img src={facebook} alt="facebook-logo" />
    </div>
    <div className="sigup-acct">
        <p>Already have an account? <Link to={"/login"}><span className='acct'>Login!</span></Link> </p>
    </div>
    
    </div>
    <div className="signup__right-side">
        <h1>CareFinder</h1>
        <h2>Join Our  <br/> Community</h2>
        <h4>Enjoy seamless access to medical services.</h4>
        <div className="signup__image">
            <img src={image} alt="doctor attending to patient" />
        </div>
    </div>
</div>
  )
}

export default SignUp