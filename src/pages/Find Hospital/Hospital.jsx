import React from 'react'
import Dashboard from '../../compopnents/Dashboard/Dashboard'
import Topbar from '../../compopnents/Dashboard/Sidebar/Topbar/Topbar'
import './Hospital.css'

const Hospital = () => {
  return (
    <div className='dashboard__hospital'>

        <Dashboard/>
        <div>
          <Topbar/>
          <h1>Hospital</h1>
        </div>
          
        
         
            
            </div>
  )
}

export default Hospital