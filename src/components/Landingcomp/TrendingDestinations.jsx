import { useState } from "react";

export default function TrendingDestinations() {
  const [showAll, setShowAll] = useState(false);

  const destinations = [
    { image: "Images/bus1.jpeg", size: "small" },
    { image: "Images/bus2.jpeg", size: "large" },
    { image: "Images/bus24.jpeg", size: "tall" },
    { image: "Images/bus4.jpeg", size: "small" },
    { image: "Images/bus22.jpeg", size: "small" },
    { image: "Images/bus16.jpeg", size: "small" },
    { image: "Images/bus17.jpeg", size: "large" },
    { image: "Images/bus8.jpeg", size: "small" },
    { image: "Images/bus21.jpeg", size: "tall" },
    { image: "Images/bus10.jpeg", size: "small" },
    { image: "Images/bus11.jpeg", size: "small" },
    { image: "Images/bus12.jpeg", size: "small" },
  ];

  const displayedDestinations = showAll ? destinations : destinations.slice(0, 6);

  return (
    <div className="w-full bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 perspective-1000 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Bus Fleet
          </h2>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm sm:text-base text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium"
          >
            {showAll ? "Show less" : "See all"}
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 auto-rows-[180px] sm:auto-rows-[220px] md:auto-rows-[240px]">
          {displayedDestinations.map((destination, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
              className={`group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transform-gpu 
                animate-float3D hover:scale-[1.08] hover:rotate-[1deg] transition-all duration-700 ease-out
                ${destination.size === "large" ? "col-span-2" : ""}
                ${destination.size === "tall" ? "row-span-2" : ""}
              `}
            >
              {/* Background Image */}
              <img
                src={destination.image}
                alt="Bus Fleet"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125"
              />

              {/* 3D Shadow Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-500 bg-gradient-to-r from-orange-400/40 via-transparent to-transparent"></div>

              {/* Light Reflection Animation */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        @keyframes float3D {
          0% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg);
          }
          25% {
            transform: translateY(-10px) rotateX(2deg) rotateY(1deg);
          }
          50% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg);
          }
          75% {
            transform: translateY(10px) rotateX(-2deg) rotateY(-1deg);
          }
          100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg);
          }
        }

        .animate-float3D {
          animation: float3D 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
