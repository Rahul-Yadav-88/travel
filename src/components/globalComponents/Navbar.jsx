import React from 'react'
import logo from './logo-1.svg fill.png'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='max-w-dvw flex justify-center py-5'>
      <nav className='max-w-7xl flex items-center md:justify-between justify-around w-full '>
        <div className="left-nav flex md:flex-row flex-col lg:gap-20 md:gap-5">
          <img src={logo} alt="" />

          <ul className="na-links flex lg:gap-16 md:gap-5 gap-7 items-center">
            <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-orange-400' : ''}>Home</NavLink></li>
            <li><NavLink to={'/Services'} className={({ isActive }) => isActive ? 'text-orange-400' : ''}>Services</NavLink></li>
            <li><NavLink to={'/aboutus'} className={({ isActive }) => isActive ? 'text-orange-400' : ''}>About Us</NavLink></li>
            <li><NavLink to={'contactus'} className={({ isActive }) => isActive ? 'text-orange-400' : ''}>Contact Us</NavLink></li>
          </ul>
        </div>
        <div className="right-nav">
          <ul className="nav-user flex lg:gap-16 md:gap-5 gap-5 items-center">
            <li><NavLink to={'/usd'}>USD</NavLink></li>
            <li><NavLink to={'/help'}>Help</NavLink></li>
            <li><NavLink to={'/signup'}>Sign up</NavLink></li>
            <li><NavLink to={'/login'}><button className='border-2 py-2 px-4 rounded-3xl border-black'>Log in</button></NavLink></li>
          </ul>
        </div>

      </nav>
    </div>
  )
}

export default Navbar