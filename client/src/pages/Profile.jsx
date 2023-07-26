import React, { useContext } from 'react';
import profile1 from '../projectImages/profileimage.png';
import './profile.css'
import {userContext} from 'react'
import { Context } from '../context/userContext/Context';

function Profile() {
  const {user} =useContext(Context);
  return (
   
    <div className='profileHomepage'>
      <div className='profileInformation'>
        <div className='profileimage'>
          <img src={profile1} height={150} alt='profileimage' />
        </div>
        <div className='profileDetails'>
          <p className='profiletext Email'>Email:{user.email}</p>
          <p className='profiletext Gender'>Username:{user.username}</p>
        </div>
      </div>
      <div className='Alltaskdiv'>
        <div className='task1'>
          <div className='taskAssingdiv'>
            <p className='task1'>ProjectName:Figma Desing On Frontend Development</p>
            <p className='participates'>Participates</p>
            <p className='due-date'>Due dat: 12-05-2025</p>
          </div>
          <div className='taskbuttons'>
            <button className='ED editbutton'>EDIT</button>
            <button className='ED deletebutton'>DELETE</button>
          </div>
        </div>
        <div className='task2'>
          <div className='taskAssingdiv'>
            <p className='task1'>ProjectName:Figma Desing On Frontend Development</p>
            <p className='participates'>Participates</p>
            <p className='due-date'>Due dat: 12-05-2025</p>
          </div>
          <div className='taskbuttons'>
            <button className='ED editbutton'>EDIT</button>
            <button className='ED deletebutton'>DELETE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
