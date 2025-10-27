import React, { useState } from 'react'; // Import useState for state management
import { Briefcase, TrendingUp, Handshake, Megaphone, Map, PenTool, Code, Users, ChevronUp } from 'lucide-react'; // Added ChevronUp for the expanded state

export default function App() {
  // 1. State to track which service card is expanded
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      icon: <Briefcase className="w-8 h-8 stroke-[1.5]" />,
      title: "Strategic Consulting",
      shortDesc: "Guiding your business with expert advice on market analysis, risk assessment, and long-term vision.",
      fullDesc: "We provide comprehensive strategic roadmaps to ensure your business goals are met efficiently. Our consulting includes competitive analysis, operational optimization, and digital transformation planning, focusing on measurable growth and sustainable competitive advantage in dynamic markets.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 stroke-[1.5]" />,
      title: "Performance Management",
      shortDesc: "Implementing KPIs and frameworks to monitor, evaluate, and elevate individual and team performance.",
      fullDesc: "Our service helps establish clear objectives and key results (OKRs) across your organization. We deploy custom dashboards and reporting tools for real-time tracking, ensuring accountability and continuous improvement cycles that drive business outcomes.",
    },
    {
      icon: <Handshake className="w-8 h-8 stroke-[1.5]" />,
      title: "Executive Coaching",
      shortDesc: "Personalized development programs for leadership, communication, and emotional intelligence.",
      fullDesc: "We partner with senior leaders to unlock their full potential. Our coaching focuses on refining decision-making skills, mastering conflict resolution, and building high-performing cultures that translate directly into better organizational results and innovation.",
    },
    {
      icon: <Megaphone className="w-8 h-8 stroke-[1.5]" />,
      title: "Digital Marketing",
      shortDesc: "Full-funnel strategies covering SEO, paid media, content creation, and social engagement.",
      fullDesc: "Drive customer acquisition and brand visibility with our data-centric digital marketing services. We manage campaigns from ideation to execution, optimizing for conversion rates and maximizing return on ad spend across all major platforms.",
    },
    {
      icon: <Map className="w-8 h-8 stroke-[1.5]" />,
      title: "Custom Solutions",
      shortDesc: "Developing tailored software and system integrations to solve unique business challenges.",
      fullDesc: "When off-the-shelf software falls short, we design and build bespoke platforms. This includes enterprise resource planning (ERP) systems, specialized analytics tools, and secure cloud infrastructure tailored precisely to your operational workflow and scale.",
    },
    {
      icon: <PenTool className="w-8 h-8 stroke-[1.5]" />,
      title: "Business Planning",
      shortDesc: "Comprehensive financial modeling, market entry strategies, and risk mitigation plans.",
      fullDesc: "Our planning service provides the blueprint for your future success. We create detailed five-year financial forecasts, analyze potential investment scenarios, and develop robust contingency plans to safeguard against market volatility and operational disruption.",
    },
    {
      icon: <Code className="w-8 h-8 stroke-[1.5]" />,
      title: "Software Development",
      shortDesc: "Building scalable, secure, and modern web and mobile applications from scratch.",
      fullDesc: "We leverage agile methodologies to deliver cutting-edge software. Our expertise spans full-stack development, mobile apps (iOS/Android), and API integration, ensuring a seamless, high-performance product that users love.",
    },
    {
      icon: <Users className="w-8 h-8 stroke-[1.5]" />,
      title: "Talent Acquisition",
      shortDesc: "Identifying and securing top-tier talent to fill critical roles within your organization.",
      fullDesc: "Beyond simple recruitment, we offer strategic talent mapping, employer branding, and competency-based interviewing. We ensure that every hire not only meets the technical requirements but also aligns perfectly with your company's culture and long-term objectives.",
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
              bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg transition-all duration-500 overflow-hidden 
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
                    transition-all duration-500 ease-in-out 
                    ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} 
                    overflow-hidden
                  `}
                >
                  <div className="px-8 pb-8">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 text-base leading-relaxed mb-4">
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