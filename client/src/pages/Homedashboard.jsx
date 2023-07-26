import React from 'react'
import './homedashboard.css'
//import Addproject from '../components/Addproject'
import Assignproject from '../components/Assignproject'
import {BsFilter} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Homedashboard() {
  return (
    <div className='HomeDashboardMainPage'>
      <h4 className='header1'>Welcome To Our Task Manager</h4>
      <div className='homepagediv1'>
        <p className='to-do'>TO-DO</p>
        <div className='homepagediv2'><p className='alltasks'>ADD YOUR PROJECT</p></div>
        { /*<Addproject/>*/}
        <div className='filter-assignTask'>
          <form action="/submit" method="POST">
            <label for="priority"><BsFilter/>Filter:</label>
            <select id="priority" name="priority">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </form>
          <div className='assignprojectBtn'><Link to='/dashboard/task'><button type="button">Assign Task +</button></Link> </div>
        </div>
        <div className='assignComponent'> <Assignproject /></div>

      </div>

    </div>
  )
}

export default Homedashboard
