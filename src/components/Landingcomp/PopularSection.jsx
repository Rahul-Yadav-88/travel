import React, { useState } from 'react';

export default function PopularSection() {
  const [activeTab, setActiveTab] = useState('cities');

  const cities = [
    { name: "Things to do in Nashville", link: "#" },
    { name: "Things to do in Chicago", link: "#" },
    { name: "Things to do in Houston", link: "#" },
    { name: "Things to do in San Diego", link: "#" },
    { name: "Things to do in Atlanta", link: "#" },
    { name: "Things to do in Denver", link: "#" },
    { name: "Things to do in Las Vegas", link: "#" },
    { name: "Things to do in Miami", link: "#" },
    { name: "Things to do in Orlando", link: "#" },
    { name: "Things to do in Dallas", link: "#" },
    { name: "Things to do in New Orleans", link: "#" },
    { name: "Things to do in San Antonio", link: "#" },
    { name: "Things to do in San Francisco", link: "#" },
    { name: "Things to do in Seattle", link: "#" },
    { name: "Things to do in Austin", link: "#" },
    { name: "Things to do in Boston", link: "#" },
    { name: "Things to do in Colorado Springs", link: "#" },
    { name: "Things to do in Los Angeles", link: "#" },
    { name: "Things to do in Myrtle Beach", link: "#" },
    { name: "Things to do in Philadelphia", link: "#" },
    { name: "Things to do in Charleston", link: "#" },
    { name: "Things to do in Colorado", link: "#" },
    { name: "Things to do in Phoenix", link: "#" },
    { name: "Things to do in Pigeon Forge", link: "#" }
  ];

  const attractions = [
    { name: "Top attractions in New York", link: "#" },
    { name: "Top attractions in Paris", link: "#" },
    { name: "Top attractions in London", link: "#" },
    { name: "Top attractions in Rome", link: "#" },
    { name: "Top attractions in Dubai", link: "#" },
    { name: "Top attractions in Barcelona", link: "#" },
    { name: "Top attractions in Tokyo", link: "#" },
    { name: "Top attractions in Singapore", link: "#" },
    { name: "Top attractions in Amsterdam", link: "#" },
    { name: "Top attractions in Sydney", link: "#" },
    { name: "Top attractions in Bangkok", link: "#" },
    { name: "Top attractions in Istanbul", link: "#" }
  ];

  const currentData = activeTab === 'cities' ? cities : attractions;

  return (
    <div className="w-full bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-6 sm:gap-8 mb-6 sm:mb-8 border-b border-gray-300">
          <button
            onClick={() => setActiveTab('cities')}
            className={`pb-3 sm:pb-4 text-base sm:text-lg font-semibold transition-all duration-300 relative ${
              activeTab === 'cities'
                ? 'text-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Popular Cities
            {activeTab === 'cities' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('attractions')}
            className={`pb-3 sm:pb-4 text-base sm:text-lg font-semibold transition-all duration-300 relative ${
              activeTab === 'attractions'
                ? 'text-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Popular Attractions
            {activeTab === 'attractions' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
            )}
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-3 sm:gap-y-4">
          {currentData.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-sm sm:text-base text-gray-700 hover:text-orange-500 transition-colors duration-300 relative inline-block w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}