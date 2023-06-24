
import './App.css';

import Intro from './compopnents/Intro/Intro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './compopnents/Login/Login';
import SignUp from './compopnents/Sign up/SignUp';
import Dashboard from './compopnents/Dashboard/Dashboard';
import Hospital from './pages/Find Hospital/Hospital';
import Profile from './pages/Profile/Profile';

function App() {
  
  
  return (
    <>
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />


        {/* <Route  element={<Dashboard />} > */}
          
{/* <Route path="/dashboard" element={<Dashboard />} /> */}
<Route path="/profile" element={<Profile />} />
<Route path="/hospitals" element={<Hospital />} />

          {/* </Route> */}
      </Routes>
    </div>
    </BrowserRouter>
    </>
    
  
   
  );
}

export default App;
