"use client";
import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BusServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const busServices = [
    {
      id: 1,
      title: "Transport Bus",
      description:
        "Built for reliability and volume, our Transport Buses form the backbone of large workforce mobility. We move thousands of employees across NCR daily through high-capacity AC coaches designed for endurance and safety.",
      image: "/Images/transport.jpeg",
    },
    {
      id: 2,
      title: "Office Bus",
      description:
        "The Office Bus Service is TCS Travels’ most sought-after corporate offering — created for organizations that demand professionalism, punctuality, and comfort in daily commutes.",
      image: "/Images/office.jpeg",
    },
    {
      id: 3,
      title: "School Bus",
      description:
        "Safety and discipline define our School Bus Services. Each bus is built to meet RTO safety and student transport regulations.",
      image: "/Images/School.jpeg",
    },
    {
      id: 4,
      title: "Tourist Bus",
      description:
        "For leisure, events, or inter-city travel, our Tourist Bus Services offer premium comfort and long-distance reliability.",
      image: "/Images/Tourist.jpeg",
    },
    {
      id: 5,
      title: "City Bus",
      description:
        "TCS Travels’ City Bus Services are designed to deliver efficient, comfortable, and dependable public transport solutions for urban areas, smart cities, and local government projects.",
      image: "/Images/city.jpeg",
    },
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % busServices.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + busServices.length) % busServices.length);
  const goToSlide = (index) => setCurrentIndex(index);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto perspective-1000">
        {/* Header */}
        <Motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -40, rotateX: -20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Bus Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of transportation solutions tailored to meet your needs
          </p>
        </Motion.div>

        {/* Carousel */}
        <div
          className="relative group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/40 backdrop-blur-md">
            <Motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 1.2, ease: [0.45, 0, 0.55, 1] }}
            >
              {busServices.map((service, index) => (
                <Motion.div
                  key={service.id}
                  className="min-w-full"
                  initial={{ opacity: 0, scale: 0.8, rotateY: -25 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0.3,
                    scale: index === currentIndex ? 1 : 0.9,
                    rotateY: index === currentIndex ? 0 : 25,
                    z: index === currentIndex ? 0 : -200,
                  }}
                  transition={{
                    duration: 1,
                    type: "spring",
                    stiffness: 120,
                    damping: 15,
                  }}
                >
                  <div className="relative h-64 sm:h-96 lg:h-[32rem] overflow-hidden rounded-2xl">
                    <Motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover rounded-2xl"
                      whileHover={{
                        scale: 1.08,
                        rotateY: 10,
                        rotateX: -5,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                      }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <Motion.div
                      className="absolute bottom-0 left-0 right-0 p-8 text-white"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, delay: 0.3 }}
                    >
                      <h3 className="text-3xl sm:text-4xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-200 text-base sm:text-lg max-w-2xl">
                        {service.description}
                      </p>
                    </Motion.div>
                  </div>
                </Motion.div>
              ))}
            </Motion.div>

            {/* Arrows */}
            <Motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.2, rotate: -20 }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </Motion.button>

            <Motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.2, rotate: 20 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </Motion.button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {busServices.map((_, index) => (
              <Motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all ${
                  currentIndex === index
                    ? "w-8 h-3 bg-indigo-600"
                    : "w-3 h-3 bg-gray-400 hover:bg-gray-500"
                }`}
                whileHover={{ scale: 1.3 }}
              />
            ))}
          </div>
        </div>

        {/* 3D Thumbnails */}
        <Motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {busServices.map((service, index) => (
            <Motion.button
              key={service.id}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-xl shadow-lg ${
                currentIndex === index
                  ? "ring-4 ring-indigo-600 scale-105"
                  : "opacity-80 hover:opacity-100"
              }`}
              whileHover={{
                rotateY: 15,
                rotateX: -10,
                scale: 1.1,
                z: 50,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="aspect-video">
                <Motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-xl"
                  whileHover={{
                    rotateY: -8,
                    rotateX: 5,
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <p className="text-white text-sm sm:text-base font-semibold text-center px-2">
                  {service.title}
                </p>
              </div>
            </Motion.button>
          ))}
        </Motion.div>
      </div>
    </div>
  );
}
