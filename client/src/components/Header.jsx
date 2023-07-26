import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import img from '../projectImages/logo.jpg'
import './header.css'
import { FaHome } from 'react-icons/fa'
import { VscSignIn } from 'react-icons/vsc'
import { SlLogin } from 'react-icons/sl'
//import { useContext } from 'react'
//import { Context } from '../context/userContext/Context'

function Header() {
    return (
        <div className='header-page'>
            <div className='nav-bar'>
                <div className='logo'><img height={50} style={{ borderRadius: "10px" }} src={img} alt='logo' /></div>
                <div className='list'>
                    <nav id="nav-links">
                        <NavLink to='/home' className={({ isActive }) => { isActive ? "active" : "headerlinks" }} style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "red" : "black",
                            };
                        }}><FaHome style={{ fontSize: "16px" }} />Home</NavLink>
                        <NavLink to='/register' className={({ isActive }) => { isActive ? "active" : "headerlinks" }} style={({ isActive, isPending }) => {
                            return {
                              fontWeight: isActive ? "bold" : "",
                              color: isActive? "red" : "black",
                            };
                          }}><VscSignIn />Register</NavLink>
                        <NavLink to='/login' className={({ isActive }) => { isActive ? "active" : "headerlinks" }} style={({ isActive, isPending }) => {
                            return {
                              fontWeight: isActive ? "bold" : "",
                              color:  isActive ? "red" : "black",
                            };
                          }}><SlLogin />Login</NavLink>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header
