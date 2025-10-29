"use client";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <main className="bg-linear-to-r from-orange-200 via-pink-100 to-orange-200 overflow-hidden perspective-[1000px]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-8 sm:py-12 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Content Section */}
          <Motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -80, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Motion.p
              className="text-xs sm:text-sm font-medium text-gray-700 tracking-wide"
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              We manage routes, schedules, and people movement so you can focus
              on what matters most — your business.
            </Motion.p>

            <Motion.h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, rotateX: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateX: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              At TCS Travels,
              <br />
              we deliver more than just transportation — we deliver
              <br />
              <span className="text-orange-500 relative inline-block">
                trust, consistency, reliability.
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full"></span>
              </span>
            </Motion.h1>

            <Motion.button
              className="
                bg-orange-500 
                text-white 
                font-semibold 
                rounded-full 
                px-5 
                py-3 
                sm:px-6 
                sm:py-3.5 
                md:px-8 
                md:py-4 
                text-base 
                sm:text-lg 
                md:text-xl 
                hover:bg-orange-700 
                transition-all 
                duration-300 
                shadow-md 
                hover:shadow-2xl
              "
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{
                rotateX: 10,
                rotateY: -10,
                scale: 1.05,
                transition: { type: "spring", stiffness: 200 },
              }}
            >
              <Link to={'/contactus'}>Talk to Our Transport Consultant</Link>
            </Motion.button>

            <Motion.p
              className="
                text-sm 
                sm:text-base 
                md:text-lg 
                lg:text-xl 
                text-gray-800 
                leading-relaxed 
                max-w-[90%] 
                sm:max-w-2xl 
                font-semibold
              "
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Your workforce’s journey is our responsibility — and we take it
              seriously.
            </Motion.p>
          </Motion.div>

          {/* Right Image Grid with 3D Hover */}
          <Motion.div
            className="relative w-full h-96 sm:h-[28rem] md:h-[32rem] lg:h-[30vw]"
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-full max-w-lg mx-auto">
              {[
                { src: "/Images/6.jpg", alt: "Tropical beach", pos: "top-0 left-0 w-[48%] h-[45%]" },
                { src: "/Images/7.jpg", alt: "Adventure group", pos: "top-0 right-0 w-[48%] h-[52%]" },
                { src: "/Images/8.jpg", alt: "Mountain landscape", pos: "bottom-0 left-0 w-[48%] h-[52%]" },
                { src: "/Images/9.jpg", alt: "Hiking adventure", pos: "bottom-0 right-0 w-[48%] h-[45%]" },
              ].map((img, i) => (
                <Motion.div
                  key={i}
                  className={`absolute ${img.pos} rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl`}
                  initial={{ opacity: 0, y: 40, rotateX: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: i * 0.2 + 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{
                    rotateX: 10,
                    rotateY: 10,
                    scale: 1.08,
                    transition: { type: "spring", stiffness: 200 },
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </div>
    </main>
  );
}
