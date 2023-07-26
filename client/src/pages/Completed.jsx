import React from 'react'
import './completed.css'
function Completed() {
  return (
    <div className='CompletedTaskMainPage'>
      <div className='CompletedTaskDiv'>
        <div className='DoneTask'>
          <p className='name1'>Charles Mungai</p>
          <p className='name2'>Bonfas Olouch</p>
          <p className='CompletedProject'>Figma Desing</p>
          <p className='Due-date'>12-10-2023</p>
        </div>
        <div className='completedtaskBtn'><p className='deletebtn'> DELETE TASK</p></div>
      </div>
    </div>
  )
}

export default Completed
