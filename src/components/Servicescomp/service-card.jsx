"use client"
import { motion } from "framer-motion"
import { ChevronUp } from "lucide-react"
import { Link } from "react-router-dom"

export default function ServiceCard({ service, index, isExpanded, onToggle }) {
  return (
    <motion.div
      className={`group relative h-full ${isExpanded ? "lg:col-span-3" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* 3D Card Container */}
      <motion.div
        className="relative h-full"
        whileHover={{
          rotateX: 5,
          rotateY: -5,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

        {/* Main Card */}
        <motion.div
          className="relative h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 overflow-hidden group-hover:border-orange-500/30 transition-colors duration-300"
          whileHover={{
            boxShadow: "0 20px 60px rgba(249, 115, 22, 0.2), 0 0 40px rgba(59, 130, 246, 0.1)",
          }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Icon Container */}
            <motion.div
              className="mb-6 p-4 bg-gradient-to-br from-orange-500/20 to-orange-500/5 rounded-xl border border-orange-500/20 w-fit group-hover:from-orange-500/30 group-hover:to-orange-500/10 transition-all duration-300"
              whileHover={{
                scale: 1.1,
                rotate: 8,
              }}
              animate={{
                rotateZ: [-25, 25, -25],
              }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="text-orange-400">{service.icon}</div>
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300 line-clamp-2">
              {service.title}
            </h3>

            {/* Short Description */}
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow group-hover:text-slate-300 transition-colors duration-300">
              {service.shortDesc}
            </p>

            {/* Expandable Content */}
            <motion.div
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
                marginTop: isExpanded ? 16 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="border-t border-slate-700/50 pt-4">
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{service.fullDesc}</p>
                <Link to={'/contactus'}>
                <motion.div
                  className="bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-lg p-4 text-sm text-orange-300 font-medium hover:border-orange-500/40 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  Need more details? Contact our team for a personalized consultation.
                </motion.div>
                </Link>
              </div>
            </motion.div>

            {/* Toggle Button */}
            <motion.button
              onClick={onToggle}
              className="mt-6 text-orange-400 text-sm font-bold uppercase tracking-widest hover:text-orange-300 transition-colors duration-300 flex items-center gap-2 group/btn"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{isExpanded ? "Show Less" : "Learn More"}</span>
              <motion.div
                animate={{
                  rotate: isExpanded ? 0 : 180,
                }}
                transition={{ duration: 0.3 }}
              >
                <ChevronUp className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
              </motion.div>
            </motion.button>
          </div>

          {/* Shine Effect on Hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 2,
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
