import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import {FaHome,FaUserShield,FaProjectDiagram } from 'react-icons/fa'
import {RiTaskFill} from 'react-icons/ri'
import {CiLogout} from 'react-icons/ci'
import {PiUsersThreeFill} from 'react-icons/pi'
function Sidebar() {
  return (
    //replaced mytask component to teams
    //also replaced teams component to Project
    <div>
      <ul className='sidebarLinks'>
        <li><Link to='/dashboard'><FaHome style={{fontSize:"16px"}}/>Home</Link></li>
        <li><Link to='/dashboard/profile'><FaUserShield style={{fontSize:"16px"}}/>profile</Link></li>
        <li><Link to='/dashboard/mytask'><PiUsersThreeFill style={{fontSize:"16px"}}/>Teams</Link></li>
        <li><Link to='/dashboard/teams'><FaProjectDiagram style={{fontSize:"16px"}}/>Projects</Link></li>
        <li><Link to='/dashboard/completed'><RiTaskFill style={{fontSize:"16px"}}/>completed</Link></li>
        <li><Link to='/dashboard/logout'><CiLogout style={{fontSize:"16px"}}/>logout </Link></li>
      </ul>
    </div>
  )
}

export default Sidebar
