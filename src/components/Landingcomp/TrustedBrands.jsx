export default function TrustedBrands() {
  const brands = [
    "Amazon",
    "AMD", 
    "Dropcam",
    "Logitech",
    "Spotify",
    "Amazon",
    "AMD",
    "Dropcam"
  ];

  return (
    <div className="w-full bg-white py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
          Trusted by the world"s best
        </h2>
      </div>

      {/* Sliding Logo Container - Full width */}
      <div className="relative w-full">
        {/* Gradient Overlays - Smaller on mobile, larger on desktop */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 lg:w-48 xl:w-56 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 lg:w-48 xl:w-56 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none"></div>

        {/* Slider */}
        <div className="flex animate-scroll items-center py-4">
          {/* First set of brands */}
          {brands.map((brand, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 px-6 sm:px-8 md:px-12 lg:px-16"
            >
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 whitespace-nowrap hover:text-orange-500 transition-colors duration-300 cursor-pointer select-none">
                {brand}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 px-6 sm:px-8 md:px-12 lg:px-16"
            >
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 whitespace-nowrap hover:text-orange-500 transition-colors duration-300 cursor-pointer select-none">
                {brand}
              </span>
            </div>
          ))}
        </div>
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
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}