import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import './dashboard.css'
import Sidebar from '../components/Sidebar'
import img3 from '../projectImages/image3.jpg'
import logo2 from '../projectImages/logo2.jpg'
import { useContext } from 'react'
import { Context } from '../context/userContext/Context'

function Dashboard() {
  const {user} = useContext(Context);
  return (
    <div className='dash'>
      <div className='dash-header'>
        <div className='header2logo'>
          <div className='logoimage'> <img src={logo2} alt='logo' height={40} style={{'borderRadius':'4px'}}/></div>
          <div className='headercontent'><p className='header2content' style={{color:"blue"}}>Welcome {user.username}</p></div>
        </div>
      </div>
      <div className='dash-sidebar'>
        <Sidebar />
      </div>
      <div className='dash-content'>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard

