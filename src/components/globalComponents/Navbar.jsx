
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo-1.svg fill.png";
import { Menu, X, House, Briefcase, Info, Contact, DollarSign, Headset } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "relative block text-gray-800 hover:text-orange-500 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-32 md:w-40" />
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-10 items-center">
          <NavLink to="/" className={({ isActive }) => isActive ? `${linkClass} text-orange-500` : linkClass}>Home</NavLink>
          <NavLink to="/Services" className={({ isActive }) => isActive ? `${linkClass} text-orange-500` : linkClass}>Services</NavLink>
          <NavLink to="/aboutus" className={({ isActive }) => isActive ? `${linkClass} text-orange-500` : linkClass}>About Us</NavLink>
          <NavLink to="/contactus" className={({ isActive }) => isActive ? `${linkClass} text-orange-500` : linkClass}>Contact Us</NavLink>
          {/* <NavLink to="/usd" className={({ isActive }) => isActive ? `${linkClass} text-orange-500` : linkClass}>USD</NavLink>
          <NavLink to="/help" className={({ isActive }) => isActive ? `${linkClass} text-orange-500` : linkClass}>Help</NavLink>
          <NavLink to="/signup" className={({ isActive }) => isActive ? `${linkClass} text-orange-500` : linkClass}>Sign Up</NavLink>
          <NavLink to="/login">
            <button className="border-2 py-2 px-4 rounded-3xl border-black hover:bg-black hover:text-white transition-all duration-300">
              Log In
            </button>
          </NavLink> */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-orange-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner border-t border-gray-100">
          <nav className="flex flex-col items-start px-6 py-4 gap-3">
            <NavLink to="/" onClick={() => setIsOpen(false)} className={linkClass}>
              <div className="flex gap-2 items-center"><House size={18}/> Home</div>
            </NavLink>
            <NavLink to="/Services" onClick={() => setIsOpen(false)} className={linkClass}>
              <div className="flex gap-2 items-center"><Briefcase size={18}/> Services</div>
            </NavLink>
            <NavLink to="/aboutus" onClick={() => setIsOpen(false)} className={linkClass}>
              <div className="flex gap-2 items-center"><Info size={18}/> About Us</div>
            </NavLink>
            <NavLink to="/contactus" onClick={() => setIsOpen(false)} className={linkClass}>
              <div className="flex gap-2 items-center"><Contact size={18}/> Contact Us</div>
            </NavLink>
            <NavLink to="/usd" onClick={() => setIsOpen(false)} className={linkClass}>
              <div className="flex gap-2 items-center"><DollarSign size={18}/> USD</div>
            </NavLink>
            <NavLink to="/help" onClick={() => setIsOpen(false)} className={linkClass}>
              <div className="flex gap-2 items-center"><Headset size={18}/> Help</div>
            </NavLink>
            <NavLink to="/signup" onClick={() => setIsOpen(false)} className={linkClass}>
              <div className="flex gap-2 items-center">Sign Up</div>
            </NavLink>
            <NavLink to="/login" onClick={() => setIsOpen(false)}>
              <button className="border-2 py-2 px-4 rounded-md border-black hover:bg-black hover:text-white transition-all duration-300">
                Log In
              </button>
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}