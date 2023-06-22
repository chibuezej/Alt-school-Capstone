import React from 'react'
import { Link } from 'react-router-dom'
import google from '../../Assets/devicon_google.png'
import apple from '../../Assets/ic_round-apple.png'
import facebook from '../../Assets/logos_facebook.png'
import image from '../../Assets/Rectangle 113.png'
import './Login.css'
const Login = () => {
  return (
    <div className='login'>
        <div className='login__left-side'>
            <div className="login__header1">
            <h1>Welcome Back</h1>
        <p>Login using correct details!</p>
            </div>
       
        
        <div className='login__left-input1'>
            <h3>Email Addres</h3>
            <input type="text" name="email" placeholder='Enter Email Addres' />
        </div>
        <div className='login__left-input2'>
            <h3>Password</h3>
            <input type="text" name="email" placeholder='Enter Password' />
        </div>
        <div className='login__button'>
        <button>Login</button>
        </div>
        <div className="login__content">
        <h2>OR</h2>
        <h2>Login Using</h2>
        </div>
        
        <div className='login__logo'>
            <img src={google} alt="google-logo" />
            <img src={apple} alt="apple-logo" />
            <img src={facebook} alt="facebook-logo" />
        </div>
        <div className="sigup-acct">
        <p>Don't have an account? <Link to={"/signup"}><span className='acct'>Signup!</span></Link> </p>
    </div>
    
        
        </div>
        <div className="login__right-side">
            <h1>CareFinder</h1>
            <h2>Join Our  <br/> Community</h2>
            <h4>Enjoy seamless access to medical services.</h4>
            <div className="login__image">
                <img src={image} alt="doctor attending to patient" />
            </div>
        </div>
    </div>
  )
}

export default Login