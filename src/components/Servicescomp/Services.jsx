"use client";
import React, { useState } from "react";
import {
  Briefcase,
  TrendingUp,
  Handshake,
  Megaphone,
  Map,
  PenTool,
  Code,
  Users,
  ChevronUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Services() {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      icon: <Briefcase className="w-8 h-8 stroke-[1.5]" />,
      title: "Corporate Employee Transport",
      shortDesc:
        "Safe and reliable pickup and drop service with route planning and tracking.",
      fullDesc:
        "We provide complete transport services for corporate employees, ensuring safe and on-time travel. Our service includes route planning, real-time GPS tracking, and automatic attendance reports. Our drivers are disciplined and our operations team is always responsive.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 stroke-[1.5]" />,
      title: "Airport Transfers (24x7)",
      shortDesc:
        "Punctual airport pickup and drop service available day and night.",
      fullDesc:
        "Our airport transfer service ensures smooth and timely pickup and drop at any hour. We use flight tracking to adjust for delays and offer round-the-clock availability for both individual and corporate travelers.",
    },
    {
      icon: <Handshake className="w-8 h-8 stroke-[1.5]" />,
      title: "Inter-City / Outstation Rentals",
      shortDesc: "Comfortable and affordable vehicles for trips outside the city.",
      fullDesc:
        "We offer air-conditioned cars and buses for long-distance travel, including weekend trips, company training programs, and business tours. All vehicles come with experienced and polite drivers for a pleasant journey.",
    },
    {
      icon: <Megaphone className="w-8 h-8 stroke-[1.5]" />,
      title: "Custom Fleet Management",
      shortDesc: "Dedicated vehicle fleets for regular staff or client movement.",
      fullDesc:
        "We provide complete fleet management solutions for regular employee movement and client transportation. This includes branded vehicles, maintenance, and 24/7 tracking and support to ensure smooth operations.",
    },
    {
      icon: <Map className="w-8 h-8 stroke-[1.5]" />,
      title: "Educational & Institutional Transport",
      shortDesc: "Safe transport for schools and colleges with verified drivers.",
      fullDesc:
        "We manage transport for educational institutions with a focus on student safety. All buses are fitted with CCTV cameras, verified drivers and attendants, and follow all RTO rules and safety guidelines.",
    },
    {
      icon: <PenTool className="w-8 h-8 stroke-[1.5]" />,
      title: "Safety & Compliance Highlights",
      shortDesc: "Our safety measures and technology ensure reliable service.",
      fullDesc:
        "We follow strict safety rules and maintenance standards. Every vehicle has GPS and CCTV for real-time tracking, is regularly maintained, and fitted with speed control devices. All drivers are police verified and we offer 24/7 support for any issue.",
    },
    {
      icon: <Code className="w-8 h-8 stroke-[1.5]" />,
      title: "Full-Spectrum Mobility Solutions",
      shortDesc:
        "End-to-end transport solutions for all business and personal needs.",
      fullDesc:
        "We offer complete mobility services with real-time tracking and disciplined drivers. From single airport transfers to large corporate transport plans, our team handles everything with professionalism and care.",
    },
    {
      icon: <Users className="w-8 h-8 stroke-[1.5]" />,
      title: "TCS Travels Overview",
      shortDesc: "Your trusted partner for reliable and safe transport services.",
      fullDesc:
        "TCS Travels provides a full range of transport options like corporate buses, airport transfers, outstation rentals, and fleet management. Our focus on safety and timely service makes us a trusted travel partner for companies and individuals.",
    },
  ];

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const buttonClasses =
    "text-red-500 text-sm mt-5 cursor-pointer font-bold uppercase tracking-[0.2em] hover:text-red-600 transition-colors flex items-center gap-1";

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <div className="bg-orange-400 pt-16 pb-60 px-4 sm:px-8 relative shadow-inner">
        <h2 className="text-white text-3xl md:text-5xl font-extrabold text-center tracking-widest uppercase">
          OUR SERVICES
        </h2>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto -mt-48 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const isExpanded = expandedService === index;

            return (
              <motion.div
                key={index}
                className={`bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-100 overflow-hidden ${
                  isExpanded
                    ? "lg:col-span-4 shadow-2xl scale-[1.01]"
                    : "hover:shadow-xl"
                }`}
                initial={{ opacity: 0, y: 40, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateX: -5,
                  rotateY: 5,
                  boxShadow: "0 20px 30px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col h-full p-8 transition-all duration-300">
                  <div className="mb-5 p-3 bg-red-50 rounded-lg text-red-500">
                    {service.icon}
                  </div>

                  <h3 className="text-gray-900 font-extrabold text-lg mb-3 tracking-wide">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {service.shortDesc}
                  </p>

                  {/* Expandable content */}
                  <motion.div
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        {service.fullDesc}
                      </p>
                      <Link to={'/contactus'} className="bg-red-50 rounded-lg p-3 text-sm text-red-700 font-medium">
                        Need more details? Contact our team for a personalized consultation.
                      </Link>
                    </div>
                  </motion.div>

                  {/* Toggle Button */}
                  <motion.button
                    onClick={() => toggleService(index)}
                    className={buttonClasses}
                    // whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isExpanded ? (
                      <>
                        <span>LESS</span>
                        <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                      </>
                    ) : (
                      <>
                        <span>MORE</span>
                        <ChevronUp className="w-4 h-4 rotate-180 transition-transform duration-300" />
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="pt-20"></div>
    </div>
  );
}
