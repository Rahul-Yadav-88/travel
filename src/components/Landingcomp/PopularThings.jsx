import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PopularThings() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const tours = [
    {
      title: "City Tours",
      count: "100+ Tours",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80"
    },
    {
      title: "Cultural Tours",
      count: "100+ Tours",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80"
    },
    {
      title: "Day Cruises",
      count: "100+ Tours",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
    },
    {
      title: "Bus Tours",
      count: "100+ Tours",
      image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80"
    },
    {
      title: "Beach Tours",
      count: "100+ Tours",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
    },
    {
      title: "Food Tours",
      count: "100+ Tours",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % tours.length);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered, tours.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % tours.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + tours.length) % tours.length);
  };

  return (
    <div className="w-full bg-white py-8 sm:py-12 md:py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-6 sm:mb-8 md:mb-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Popular things to do
          </h2>
          <button className="text-sm sm:text-base text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium">
            See all
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative max-w-6xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Previous Button - Hidden on mobile */}
        <button
          onClick={prevSlide}
          className="hidden sm:block absolute -left-4 sm:-left-6 md:-left-8 lg:-left-12 xl:-left-16 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-orange-500" />
        </button>

        {/* Next Button - Hidden on mobile */}
        <button
          onClick={nextSlide}
          className="hidden sm:block absolute -right-4 sm:-right-6 md:-right-8 lg:-right-12 xl:-right-16 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-orange-500" />
        </button>

        {/* Cards Slider */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-3 sm:gap-4 md:gap-5 lg:gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / 6)}%)`
            }}
          >
            {/* Render tours multiple times for infinite effect */}
            {[...tours, ...tours, ...tours].map((tour, index) => (
              <div
                key={index}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex-shrink-0 w-[calc(50%-6px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(16.666%-20px)] h-44 sm:h-56 md:h-64 hover:-translate-y-1"
              >
                {/* Background Image */}
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-3 sm:p-4 md:p-5">
                  <h3 className="text-white text-sm sm:text-lg md:text-xl font-bold mb-0.5 sm:mb-1">
                    {tour.title}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm">
                    {tour.count}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
          {tours.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentIndex % tours.length
                  ? 'bg-orange-500 w-6 sm:w-8'
                  : 'w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}