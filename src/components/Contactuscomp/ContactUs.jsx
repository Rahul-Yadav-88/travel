"use client";
import React from "react";
import { motion } from "framer-motion";
import { LocateFixed, Phone, Mail } from "lucide-react";

export default function ContactUsElegant() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-white via-[#fff8f5] to-[#fef4ee] text-gray-800 px-6 py-20 gap-10 md:gap-16">
      {/* Floating Light Orbs */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full blur-3xl opacity-70"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-10 right-20 w-64 h-64 bg-gradient-to-tr from-pink-200 to-orange-300 rounded-full blur-3xl opacity-60"
      />

      {/* LEFT SIDE — Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-8 md:w-1/2 z-10"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
          Let’s Talk With Us
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-md">
          From corporate rides to family tours, we provide dependable travel
          services that fit your schedule, comfort, and budget.
        </p>

        <div className="flex flex-col gap-5 mt-6">
          {[
            {
              icon: <LocateFixed size={26} />,
              text: "Shop No.24, First Floor, CSC, DDA Market, Sector-22, HAF, PKT-B, Dwarka, New Delhi-110075",
            },
            { icon: <Phone size={26} />, text: "+91 9711165079" },
            { icon: <Mail size={26} />, text: "tcstravels2007@gmail.com" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, y: -3 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 bg-white/60 backdrop-blur-lg border border-orange-200/50 p-5 rounded-2xl shadow-[0_4px_30px_rgba(255,150,100,0.15)] hover:shadow-[0_6px_40px_rgba(255,150,100,0.3)] transition-all"
            >
              <div className="text-orange-500">{item.icon}</div>
              <p className="text-gray-700 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT SIDE — Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        whileHover={{ scale: 1.02 }}
        className="relative md:w-1/2 mt-12 md:mt-0 bg-white/80 backdrop-blur-2xl border border-orange-100 rounded-3xl shadow-[0_15px_45px_rgba(255,150,100,0.25)] hover:shadow-[0_20px_60px_rgba(255,150,100,0.35)] transition-all duration-500 p-8 z-10"
      >
        <h2 className="text-3xl font-semibold text-center mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          Send Us a Message
        </h2>
        <form className="flex flex-col gap-5">
          <div className="flex gap-3">
            <input
              placeholder="First Name"
              className="w-1/2 px-3 py-3 bg-white rounded-lg border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
              type="text"
            />
            <input
              placeholder="Last Name"
              className="w-1/2 px-3 py-3 bg-white rounded-lg border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
              type="text"
            />
          </div>
          <input
            placeholder="Email"
            className="px-3 py-3 bg-white rounded-lg border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
            type="email"
          />
          <input
            placeholder="Phone"
            className="px-3 py-3 bg-white rounded-lg border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
            type="text"
          />
          <textarea
            placeholder="Your Message"
            className="px-3 py-3 bg-white rounded-lg border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-200 outline-none transition-all h-28 resize-none"
          />
          <motion.button
            whileHover={{
              scale: 1.05,
              background:
                "linear-gradient(to right, #ff7a00, #ff00cc, #ff7a00)",
              boxShadow: "0 0 25px rgba(255,150,100,0.4)",
            }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-orange-400 to-pink-500 py-3 rounded-xl font-semibold text-white mt-2 shadow-[0_4px_20px_rgba(255,128,0,0.3)] transition-all"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
