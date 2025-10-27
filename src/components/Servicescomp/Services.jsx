import React, { useState } from 'react'; // Import useState for state management
import { Briefcase, TrendingUp, Handshake, Megaphone, Map, PenTool, Code, Users, ChevronUp } from 'lucide-react'; // Added ChevronUp for the expanded state

export default function App() {
  // 1. State to track which service card is expanded
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      icon: <Briefcase className="w-8 h-8 stroke-[1.5]" />,
      title: "Corporate Employee Transport",
      shortDesc: "Safe, reliable pickup & drop services with route planning, tracking, and attendance reports.",
      fullDesc: "We offer end-to-end corporate employee transport solutions, ensuring staff travel is safe and punctual. Our service includes detailed **route planning**, real-time **GPS tracking**, and automated **attendance reports** for seamless operations management. This focuses on providing disciplined drivers and responsive operations.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 stroke-[1.5]" />,
      title: "Airport Transfers (24x7)",
      shortDesc: "Smooth, punctual, and reliable airport pickup and drop services with flight tracking.",
      fullDesc: "Experience stress-free travel with our **airport transfer service**. We guarantee smooth and punctual pickup & drop services with **real-time flight tracking** and **$24\\times7$ availability**. Ideal for corporate transfers and executives needing reliable connectivity to and from the airport.",
    },
    {
      icon: <Handshake className="w-8 h-8 stroke-[1.5]" />,
      title: "Inter-City / Outstation Rentals",
      shortDesc: "Affordable, air-conditioned vehicles for weekend trips, training camps, and business tours.",
      fullDesc: "Need transport outside the city? We provide affordable, **air-conditioned vehicles** for all your long-distance needs, including weekend trips, training camps, corporate retreats, and specialized business tours. All rentals come with a dedicated, experienced driver.",
    },
    {
      icon: <Megaphone className="w-8 h-8 stroke-[1.5]" />,
      title: "Custom Fleet Management",
      shortDesc: "Fully managed, dedicated fleets for regular employee movement or client transfers.",
      fullDesc: "Our custom fleet management service provides **fully managed, dedicated fleets** designed for regular employee commuting or bespoke client transfer requirements. This includes custom vehicle branding, maintenance, and 24/7 monitoring for complete operational peace of mind.",
    },
    {
      icon: <Map className="w-8 h-8 stroke-[1.5]" />,
      title: "Educational & Institutional Transport",
      shortDesc: "Dedicated buses with verified drivers, CCTV cameras, and RTO compliance for student safety.",
      fullDesc: "We specialize in secure and compliant transport for educational institutions. Services include dedicated buses with **verified drivers and attendants**, on-board **CCTV cameras**, and strict **compliance with RTO norms**, prioritizing student and staff safety above all.",
    },
    {
      icon: <PenTool className="w-8 h-8 stroke-[1.5]" />,
      title: "Safety & Compliance Highlights",
      shortDesc: "A summary of our commitment to safety, technology, and regulatory adherence for all services.",
      fullDesc: "Our dedication to safety is non-negotiable. Every vehicle in our fleet is supported by:\n\n" +
                "\\begin{itemize}\n" +
                "    \\item **GPS Tracking & CCTV:** Real-time location monitoring and surveillance.\n" +
                "    \\item **Vehicle Maintenance:** Vehicles are less than 5 years old and rigorously maintained.\n" +
                "    \\item **Speed Governors:** Mandatory installation for regulated driving speeds.\n" +
                "    \\item **Police-Verified Drivers:** Thorough background checks on all personnel.\n" +
                "    \\item **$24\\times7$ Support:** Non-stop operational and customer support.\n" +
                "\\end{itemize}",
    },
    {
      icon: <Code className="w-8 h-8 stroke-[1.5]" />,
      title: "Full-Spectrum Mobility Solutions",
      shortDesc: "Providing end-to-end mobility solutions for businesses, institutions, and individual clients.",
      fullDesc: "At TCS Travels, we are your partner in mobility. We provide **end-to-end solutions** backed by **real-time tracking**, **disciplined drivers**, and highly **responsive operations**. Our diverse range of services ensures we can cater to any transport requirement, from a single airport transfer to large-scale corporate fleet needs.",
    },
    {
      icon: <Users className="w-8 h-8 stroke-[1.5]" />,
      title: "TCS Travels Overview",
      shortDesc: "Explore our complete range of transport services with 24/7 monitoring.",
      fullDesc: "TCS Travels offers a complete range of services, including corporate staff buses, airport transfers, outstation rentals, and custom fleet management. Our core principle is delivering disciplined, safe, and responsive transport every time, making us the trusted choice for all your travel needs.",
    }
  ];

  // 2. Toggle function
  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const moreLinkClasses = "text-red-500 text-sm font-bold uppercase tracking-[0.2em] hover:text-red-600 transition-colors flex items-center gap-1";

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Header Section: Background for "OUR SERVICES" */}
      <div className="bg-orange-400 pt-16 pb-60 px-4 sm:px-8 relative rounded-b-[40px] shadow-inner">
        <h2 className="text-white text-5xl font-extrabold text-center tracking-widest uppercase">
          OUR SERVICES
        </h2>
      </div>
      
      {/* Services Grid: Layered on top of the background */}
      <div className="max-w-7xl mx-auto -mt-48 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const isExpanded = expandedService === index;
            // New logic: isCollapsed means another card is expanded
            const isCollapsed = expandedService !== null && !isExpanded;

            // Determine dynamic classes based on expansion state
            let cardClasses = `
              bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg transition-all duration-700 overflow-hidden 
              col-span-1 sm:col-span-2 md:col-span-2 
            `;
            
            if (isExpanded) {
              // Expanded card takes up full row
              cardClasses += ' lg:col-span-4 shadow-2xl scale-[1.01] z-20';
            } else if (isCollapsed) {
              // Collapsed cards are small icon/title buttons
              cardClasses += ' lg:col-span-1 shadow-sm hover:shadow-lg hover:bg-gray-100/50 cursor-pointer';
            } else {
              // Default initial state
              cardClasses += ' lg:col-span-1 hover:shadow-xl hover:scale-[1.03] cursor-pointer';
            }

            return (
              <div 
                key={index}
                className={cardClasses}
                // Click handler: switches the expansion if clicked, or expands if not already expanded.
                onClick={() => {
                  if (isCollapsed || !isExpanded) {
                    toggleService(index);
                  }
                }}
              >
                {/* Main Card Content */}
                <div 
                  className={`flex flex-col items-start h-full transition-all duration-300 
                  ${isCollapsed ? 'p-4' : 'p-8'} 
                  ${isExpanded ? 'pb-4' : ''}`}
                >
                  
                  {/* Icon */}
                  <div className={`mb-5 p-3 bg-red-50 rounded-lg transition-colors duration-300 ${isCollapsed ? 'text-red-400 mb-0' : 'text-red-500'}`}>
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-gray-900 font-extrabold transition-all duration-300 ${isCollapsed ? 'text-sm mb-0 mt-2' : 'text-lg mb-3 tracking-wide'}`}>
                    {service.title}
                  </h3>
                  
                  {/* Short Description - Only visible when NOT collapsed */}
                  {!isCollapsed && (
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                      {service.shortDesc}
                    </p>
                  )}

                  {/* Toggle Button - Only visible when NOT collapsed */}
                  {!isCollapsed && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents clicking the button from triggering the card's onClick
                        toggleService(index);
                      }}
                      className={moreLinkClasses}
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
                    </button>
                  )}
                </div>

                {/* Expanded Content with Animation */}
                <div 
                  className={`
                    transition-all duration-700 ease-in-out 
                    ${isExpanded ? 'max-h-[600px] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-y-hidden'} 
                  `}
                >
                  <div className="px-8 pb-8">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 text-base leading-relaxed mb-4 whitespace-pre-wrap">
                        {service.fullDesc}
                      </p>

                      <div className="bg-red-50 rounded-lg p-3 text-sm text-red-700 font-medium">
                        Need a deeper dive? Contact our team for a personalized consultation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="pt-20"></div>
    </div>
  );
}