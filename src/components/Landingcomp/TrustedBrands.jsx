"use client";
import { motion as M } from "framer-motion";

export default function TrustedBrands() {
  const brands = [
    { name: "Amazon", logo: "/Images/1.jpeg" },
    { name: "AMD", logo: "/Images/2.jpeg" },
    { name: "Dropcam", logo: "/Images/3.jpeg" },
    { name: "Logitech", logo: "/Images/4.jpeg" },
    { name: "Spotify", logo: "/Images/5.jpeg" },
    { name: "Google", logo: "/Images/6.jpeg" },
  ];

  const allBrands = [...brands, ...brands]; // duplicate for infinite scroll

  return (
    <div className="w-full bg-white py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
          Trusted by the world’s best
        </h2>
      </div>

      {/* Scrolling Logo Section */}
      <div className="relative w-full">
        <M.div
          className="flex animate-scroll items-center py-4"
          whileHover={{ scale: 1.01 }}
        >
          {allBrands.map((brand, index) => (
            <M.div
              key={index}
              className="shrink-0 px-6 sm:px-8 md:px-12 lg:px-16"
              whileHover={{
                rotateY: 15,
                rotateX: 10,
                scale: 1.1,
                transition: { type: "spring", stiffness: 200, damping: 10 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <M.img
                src={brand.logo}
                alt={brand.name}
                loading="lazy"
                className="h-14 sm:h-18 md:h-20 rounded-2xl lg:h-24 xl:h-28 object-contain mix-blend-multiply brightness-110"
                animate={{
                  y: [0, -5, 0],
                  rotateZ: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </M.div>
          ))}
        </M.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
