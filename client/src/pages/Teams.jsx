import React from 'react'
import './teams.css'
import Allproject from '../components/Allprojects'
function Teams() {
  return (
    <div className='teamMainPage'>
    <div className='allTask'><p className='allTask'>ALL PROJECT </p></div>
      <div className='teamsdivs'>
      <Allproject/>
      </div>
    </div>
  )
}

export default Teams
