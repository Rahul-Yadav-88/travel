"use client";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  House,
  Briefcase,
  Info,
  Contact,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/", icon: <House size={18} /> },
    { name: "Services", path: "/Services", icon: <Briefcase size={18} /> },
    { name: "About Us", path: "/aboutus", icon: <Info size={18} /> },
    { name: "Contact Us", path: "/contactus", icon: <Contact size={18} /> },
  ];

  const linkClass = (isActive) =>
    `relative block font-medium transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-500 hover:after:w-full
     ${isActive ? "text-orange-500" : scrolled ? "text-white hover:text-orange-400" : "text-gray-800 hover:text-orange-500"}`;

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <img
            src="/Images/logo.png"
            alt="logo"
            className="w-20 drop-shadow-[0_0_10px_rgba(255,165,0,0.3)] hover:drop-shadow-[0_0_20px_rgba(255,165,0,0.5)] transition-all duration-500"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 items-center">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgba(255,165,0,0.7)",
              }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => linkClass(isActive)}
              >
                {item.name}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className={`md:hidden focus:outline-none ${
            scrolled ? "text-white" : "text-orange-600"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`md:hidden ${
              scrolled ? "bg-slate-900/90 text-white" : "bg-white/90 text-gray-800"
            } backdrop-blur-md border-t border-gray-100 shadow-inner overflow-hidden`}
          >
            <nav className="flex flex-col items-start px-6 py-4 gap-4">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.05,
                    x: 5,
                    textShadow: "0px 0px 6px rgba(255,165,0,0.6)",
                  }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => linkClass(isActive)}
                  >
                    <div className="flex gap-2 items-center">
                      {item.icon} {item.name}
                    </div>
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
