import React, { useState } from 'react'
import logo from './logo-1.svg fill.png'
import { NavLink } from "react-router-dom";
import Hamburger from 'hamburger-react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Menu } from 'lucide-react';
import './navbar.css'
import { House } from 'lucide-react';
import { Briefcase } from 'lucide-react';
import { Info } from 'lucide-react';
import { Contact } from 'lucide-react';
import { DollarSign } from 'lucide-react';
import { Headset } from 'lucide-react';

const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <div className='max-w-dvw flex items-center justify-center py-5'>
      {/*Desktop Navigation */}
      <nav className='max-w-7xl  flex md:flex-row md:gap-0  gap-3 flex-col items-center md:justify-between justify-around w-full '>
        <div className="left-nav flex md:flex-row flex-col gap-2 lg:gap-20 md:gap-5">
          <img src={logo} alt="" />

          <ul className={`na-links md:flex md:flex-row flex-col lg:gap-16 md:gap-5 gap-2 items-center hidden`}>
            <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-orange-500' : ''}>Home</NavLink></li>
            <li><NavLink to={'/Services'} className={({ isActive }) => isActive ? 'text-orange-500' : ''}>Services</NavLink></li>
            <li><NavLink to={'/aboutus'} className={({ isActive }) => isActive ? 'text-orange-500' : ''}>About Us</NavLink></li>
            <li><NavLink to={'contactus'} className={({ isActive }) => isActive ? 'text-orange-500' : ''}>Contact Us</NavLink></li>
          </ul>
        </div>
        <div className="right-nav">
          <ul className={`nav-user  md:flex md:flex-row flex-col lg:gap-16 md:gap-5 gap-2 items-center hidden`}>
            <li><NavLink to={'/usd'}>USD</NavLink></li>
            <li><NavLink to={'/help'}>Help</NavLink></li>
            <li><NavLink to={'/signup'}>Sign up</NavLink></li>
            <li><NavLink to={'/login'}><button className='border-2 py-2 px-4 rounded-3xl border-black'>Log in</button></NavLink></li>
          </ul>
        </div>
       

      </nav>
 
       {/* <div className="hamburger block md:hidden">
        <Hamburger  toggled={isOpen} toggle={()=>setIsOpen((prev)=>!prev)}/>

        </div> */}
        <div className="hamburger block md:hidden ">
        <Button onClick={() => setIsOpen(true)}><Menu className='text-orange-600 border-none  outline-none'/></Button> </div>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="left-nav pt-5  flex md:flex-row flex-col lg:gap-20 md:gap-5">

          <ul className={`mobile-nav-links  flex md:flex-row flex-col lg:gap-16 md:gap-5 gap-2  ${isOpen?'flex':'hidden'}`}>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'active' : ''}><li className='flex gap-2  py-2'><House />Home</li></NavLink>
          <NavLink to={'/Services'} className={({ isActive }) => isActive ? 'active' : ''}>  <li className='flex gap-2 py-2'><Briefcase />Services</li></NavLink>
            <NavLink to={'/aboutus'} className={({ isActive }) => isActive ? 'active' : ''}><li className='flex gap-2 py-2'><Info />About Us</li></NavLink>
            <NavLink to={'contactus'} className={({ isActive }) => isActive ? 'active' : ''}><li className='flex gap-2 py-2'><Contact />Contact Us</li></NavLink>
          </ul>
        </div>
        <hr />
        <div className="right-nav  pt-1">
          <ul className={`mobile-nav-user   flex md:flex-row flex-col lg:gap-16 md:gap-5 gap-2  ${isOpen?'flex':'hidden'}`}>
            <NavLink to={'/usd'}><li className='flex gap-2 py-2'><DollarSign />USD</li></NavLink>
            <NavLink to={'/help'}><li className='flex gap-2 py-2'><Headset />Help</li></NavLink>
            <NavLink to={'/signup'}><li className='flex gap-2 py-2'>Sign up</li></NavLink>
            <NavLink to={'/login'}><li className='flex gap-2 py-2'><button className='border-2 py-2 px-4 rounded-md border-black'>Log in</button></li></NavLink>
          </ul>
        </div>
      </Drawer>
    </div>
  )
}

export default Navbar