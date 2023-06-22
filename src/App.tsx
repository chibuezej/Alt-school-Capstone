import React, { useState } from 'react';
import './App.css';

import Intro from './compopnents/Intro/Intro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './compopnents/Login/Login';
import SignUp from './compopnents/Sign up/SignUp';

function App() {
  
  
  return (
    <>
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
    </BrowserRouter>
    </>
    
  
   
  );
}

export default App;
