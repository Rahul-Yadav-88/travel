"use client"
import { useState } from "react"
import {
  Briefcase,
  TrendingUp,
  Handshake,
  Megaphone,
  Map,
  PenTool,
  Code,
  Users,
} from "lucide-react"
import { motion } from "framer-motion"
import ServiceCard from "../../components/Servicescomp/service-card"

export default function Services() {
  const [expandedService, setExpandedService] = useState(null)

  const services = [
    {
      icon: <Briefcase className="w-8 h-8 text-orange-400 stroke-[1.5]" />,
      title: "Corporate Employee Transport",
      shortDesc:
        "Safe and reliable pickup and drop service with route planning and tracking.",
      fullDesc:
        "We provide complete transport services for corporate employees, ensuring safe and on-time travel. Our service includes route planning, real-time GPS tracking, and automatic attendance reports. Our drivers are disciplined and our operations team is always responsive.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-400 stroke-[1.5]" />,
      title: "Airport Transfers (24x7)",
      shortDesc:
        "Punctual airport pickup and drop service available day and night.",
      fullDesc:
        "Our airport transfer service ensures smooth and timely pickup and drop at any hour. We use flight tracking to adjust for delays and offer round-the-clock availability for both individual and corporate travelers.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-orange-400 stroke-[1.5]" />,
      title: "Inter-City / Outstation Rentals",
      shortDesc:
        "Comfortable and affordable vehicles for trips outside the city.",
      fullDesc:
        "We offer air-conditioned cars and buses for long-distance travel, including weekend trips, company training programs, and business tours. All vehicles come with experienced and polite drivers for a pleasant journey.",
    },
    {
      icon: <Megaphone className="w-8 h-8 text-orange-400 stroke-[1.5]" />,
      title: "Custom Fleet Management",
      shortDesc:
        "Dedicated vehicle fleets for regular staff or client movement.",
      fullDesc:
        "We provide complete fleet management solutions for regular employee movement and client transportation. This includes branded vehicles, maintenance, and 24/7 tracking and support to ensure smooth operations.",
    },
    {
      icon: <Map className="w-8 h-8 text-orange-400 stroke-[1.5]" />,
      title: "Educational & Institutional Transport",
      shortDesc:
        "Safe transport for schools and colleges with verified drivers.",
      fullDesc:
        "We manage transport for educational institutions with a focus on student safety. All buses are fitted with CCTV cameras, verified drivers and attendants, and follow all RTO rules and safety guidelines.",
    },
    {
      icon: <PenTool className="w-8 h-8 text-orange-400 stroke-[1.5]" />,
      title: "Safety & Compliance Highlights",
      shortDesc:
        "Our safety measures and technology ensure reliable service.",
      fullDesc:
        "We follow strict safety rules and maintenance standards. Every vehicle has GPS and CCTV for real-time tracking, is regularly maintained, and fitted with speed control devices. All drivers are police verified and we offer 24/7 support for any issue.",
    },
    {
      icon: <Code className="w-8 h-8 text-orange-400 stroke-[1.5]" />,
      title: "Full-Spectrum Mobility Solutions",
      shortDesc:
        "End-to-end transport solutions for all business and personal needs.",
      fullDesc:
        "We offer complete mobility services with real-time tracking and disciplined drivers. From single airport transfers to large corporate transport plans, our team handles everything with professionalism and care.",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400 stroke-[1.5]" />,
      title: "TCS Travels Overview",
      shortDesc:
        "Your trusted partner for reliable and safe transport services.",
      fullDesc:
        "TCS Travels provides a full range of transport options like corporate buses, airport transfers, outstation rentals, and fleet management. Our focus on safety and timely service makes us a trusted travel partner for companies and individuals.",
    },
  ]

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black font-sans overflow-hidden">
      {/* Animated orange-blue glow background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
          animate={{ y: [0, 60, 0], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* Hero Section */}
      <motion.div
        className="relative h-[38vw] mb-20 rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(255,115,0,0.3)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/Images/buss.png)",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-slate-950/40 to-black/50" />

        {/* Floating Content */}
        <div className="relative h-full flex items-center justify-center px-8 text-center">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-4 drop-shadow-[0_0_10px_rgba(255,115,0,0.6)]">
              Experience Premium Transportation
            </h2>
            <p className="text-black text-lg font-semibold max-w-2xl mx-auto">
              Trusted by corporations and individuals for safe, reliable, and professional mobility solutions.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20">
        <h3 className="text-center text-3xl font-semibold text-orange-400 mb-10 tracking-wide">
          Our Core Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isExpanded={expandedService === index}
              onToggle={() => toggleService(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
