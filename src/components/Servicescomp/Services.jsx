import React, { useState } from 'react';
import { Briefcase, TrendingUp, Handshake, Megaphone, Map, PenTool, Code, Users, ChevronUp } from 'lucide-react';

export default function App() {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      icon: <Briefcase className="w-10 h-10 stroke-[1.5]" />,
      title: "About Us",
      shortDesc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
      fullDesc: "Safe and reliable pickup & drop services with route planning, GPS tracking, and attendance reports. At TCS Travels, we provide end-to-end mobility solutions for businesses, institutions, and individual clients."
    },
    {
      icon: <TrendingUp className="w-10 h-10 stroke-[1.5]" />,
      title: "Management",
      shortDesc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
      fullDesc: "Smooth, punctual airport transfers with real-time flight tracking and 24×7 availability. We monitor flight schedules in real-time to ensure timely pickups and drops."
    },
    {
      icon: <Handshake className="w-10 h-10 stroke-[1.5]" />,
      title: "Coaching",
      shortDesc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
      fullDesc: "Affordable, air-conditioned vehicles for weekend trips, training camps, and business tours. Our well-maintained fleet ensures comfortable long-distance travel."
    },
    {
      icon: <Megaphone className="w-10 h-10 stroke-[1.5]" />,
      title: "Marketing",
      shortDesc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
      fullDesc: "Fully managed dedicated fleets for regular employee movement or client transfers. We handle everything from vehicle maintenance to driver management."
    },
    {
      icon: <Map className="w-10 h-10 stroke-[1.5]" />,
      title: "Products",
      shortDesc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
      fullDesc: "Dedicated buses with verified drivers and attendants, CCTV cameras, and compliance with RTO norms. We prioritize student safety with GPS tracking."
    },
    {
      icon: <PenTool className="w-10 h-10 stroke-[1.5]" />,
      title: "Planning",
      shortDesc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
      fullDesc: "Real-time vehicle monitoring with GPS tracking and CCTV cameras for complete safety and transparency. Track your vehicles live and receive alerts."
    },
    {
      icon: <Code className="w-10 h-10 stroke-[1.5]" />,
      title: "Development",
      shortDesc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
      fullDesc: "All drivers are police-verified with professional training ensuring safe and courteous service. Our rigorous screening process ensures reliability."
    },
    {
      icon: <Users className="w-10 h-10 stroke-[1.5]" />,
      title: "Our Team",
      shortDesc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
      fullDesc: "Round-the-clock customer support and operations team ready to assist you anytime. Whether it's an emergency or a query, we're here to help."
    }
  ];

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden">
      {/* Orange Background Section */}
      <div className="bg-orange-400 pt-10 pb-28 px-8">
        <h2 className="text-white text-5xl font-bold text-center tracking-wider">
          OUR SERVICES
        </h2>
      </div>
      
      {/* Services Grid with overlap */}
      <div className="bg-gray-100 -mt-24 px-8 py-6 flex-1 overflow-y-auto">
        <div className="grid grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-md flex flex-col transition-all duration-500 ease-in-out overflow-hidden ${
                expandedService === index ? 'col-span-4 row-span-1' : 'col-span-1'
              }`}
            >
              <div className={`p-5 ${expandedService === index ? 'pb-3' : ''}`}>
                <div className="text-orange-400 mb-3">
                  {service.icon}
                </div>
                
                <h3 className="text-gray-900 font-bold text-base mb-2">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-xs leading-relaxed mb-3">
                  {service.shortDesc}
                </p>

                <button 
                  onClick={() => toggleService(index)}
                  className="text-orange-400 text-xs font-bold uppercase tracking-wide hover:text-orange-500 transition-colors"
                >
                  MORE
                </button>
              </div>

              {/* Expanded Content */}
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  expandedService === index 
                    ? 'max-h-80 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-5 pb-5">
                  <div className="border-t border-gray-200 pt-3">
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {service.fullDesc}
                    </p>

                    <div className="bg-orange-50 rounded-lg p-3 mb-3">
                      <h4 className="text-orange-600 text-sm font-bold mb-2">Service Highlights</h4>
                      <p className="text-gray-700 text-xs leading-relaxed">
                        GPS Tracking & CCTV | Vehicles &lt;5 years | Speed Governors | Police-Verified Drivers | 24×7 Support
                      </p>
                    </div>

                    <button 
                      onClick={() => toggleService(index)}
                      className="text-orange-400 text-xs font-bold uppercase tracking-wide hover:text-orange-500 transition-colors flex items-center gap-1"
                    >
                      <span>LESS</span>
                      <ChevronUp className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}