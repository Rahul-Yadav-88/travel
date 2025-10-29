import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <img src="/Images/logo.png" alt="" className="w-20"/>
          {/* <h2 className="text-white text-2xl font-bold mb-4">Viatours</h2> */}
          <p className="text-sm leading-relaxed">
            Explore the world with us — discover destinations, tours, and experiences tailored just for you.
          </p>
          <div className="flex gap-4 mt-5">
            <a href="#" className="hover:text-blue-400 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          {/* <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#aboutus" className="hover:text-white">About Us</a></li>
            <li><a href="#Services" className="hover:text-white">Services</a></li>
            <li><a href="#contactus" className="hover:text-white">Contact</a></li>
          </ul> */}
    <div className="flex flex-col space-y-2">
            <Link to={'/'}>Home</Link>
          <Link to={'/aboutus'}>About</Link>
          <Link to={'/Services'}>Services</Link>
          <Link to={'/contactus'}>Contact</Link>
    </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            {/* <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li> */}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm mb-3">Get travel inspiration and exclusive offers directly to your inbox.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm rounded-l-md focus:outline-none border"
            />
            <button className="bg-orange-600 px-4 rounded-r-md text-white text-sm hover:bg-orange-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2025 TCS Travels. All rights reserved.
      </div>
    </footer>
  );
}
