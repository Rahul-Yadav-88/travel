import React from 'react';
import { Shield, Clock, Award, Users, Building2, Quote, Target, TrendingUp, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const coreValues = [
    { icon: Clock, title: 'Punctuality', description: 'We respect your time — every trip begins and ends exactly as scheduled.' },
    { icon: Shield, title: 'Safety', description: 'Each vehicle is GPS-equipped, CCTV-monitored, and maintained beyond compliance standards.' },
    { icon: Award, title: 'Integrity', description: 'Transparent pricing, clear communication, and honest partnerships.' },
    { icon: Users, title: 'Customer First', description: 'Every client, big or small, gets personal attention and responsive service' }
  ];

  const infrastructure = [
    { text: 'Centralized operations center', icon: Building2 },
    { text: 'Fleet maintenance workshop', icon: CheckCircle },
    { text: 'On-site route supervisors', icon: Users },
    { text: 'Fully digitized trip log system', icon: TrendingUp }
  ];

  const stats = [
    { number: '13+', label: 'Years of Excellence', suffix: '' },
    { number: '1000', label: 'Happy Clients', suffix: '+' },
    { number: '99.9', label: 'Safety Record', suffix: '%' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Animated Background */}
      <div className="relative bg-gradient-to-br from-orange-400 via-orange-400 to-orange-500 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold tracking-wide">About TCS Travels | Leading Corporate Transport Partner</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">About TCS Travels</h1>
          <p className="text-2xl text-orange-50 max-w-3xl leading-relaxed">
            TCS Travels is a Delhi-based professional transport service provider offering reliable corporate
staff movement, airport transfers, school transport, and tour solutions — powered by a modern
fleet, trained chauffeurs, and 13+ years of operational excellence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Introduction with Accent */}
        <div className="py-20">
          <div className="bg-gradient-to-r from-orange-50 to-white rounded-3xl p-12 shadow-sm border border-orange-100">
            <div className="max-w-4xl">
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-6"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Leading the Way in Professional Transport</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Founded in 2010, TCS Travels set out with a simple vision — to redefine corporate and group
transportation in India by combining professionalism with technology and human care.
From a modest start with just a few vehicles, we have grown into one of the most trusted names
in organized employee and institutional transport, operating across Delhi NCR and multiple
states.
With over 13 years of experience, our company continues to stand for reliability, punctuality,
and safety — ensuring smooth, on-time travel experiences for thousands of passengers daily
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We provide complete mobility management for: <br />
• Corporates and industrial units <br />
• Schools and educational institutions <br />
• Airport transfer clients <br />
• Short tours, events, and outstation rentals <br />
Our philosophy is simple — every trip matters, every passenger matters, and every minute
counts.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With 13+ years of operational excellence, we specialize in reliable, safe, and technology-driven travel 
                solutions for companies, institutions, and individual travelers across India.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission - Premium Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="group relative bg-white rounded-3xl shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">🌟 Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
               
We transform everyday travel into an experience of comfort, reliability, and innovation — redefining corporate and institutional transportation for the modern era. <br />
We aim to create a mobility ecosystem that: <br />
• We prioritize passenger safety through technology, discipline, and genuine care. <br />
• Builds long-term trust with clients through transparent and ethical operations. <br />
• Integrates modern innovation to make every journey efficient and sustainable. <br />
• Empowers people and businesses to travel seamlessly, confidently, and on time. <br />
• Contributes to a cleaner future with eco-friendly and compliant fleet operations. <br />
Every service we deliver moves us toward our vision — making TCS Travels a symbol of reliability, innovation, and excellence.
              </p>
            </div>
          </div>
          
          <div className="group relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl shadow-xl p-10 text-white hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -ml-20 -mb-20 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">🎯 Our Mission</h2>
              <p className="text-orange-50 text-lg leading-relaxed">
                To deliver professional, safe, and reliable travel services through a blend of modern
technology and dedicated manpower. <br />
We continuously invest in: <br />
• GPS-based fleet management and route optimization. <br />
• We offer real-time tracking dashboards that provide clients with complete visibility and control over their trips. <br />
• We conduct comprehensive driver training programs focused on safety, professionalism, and courteous service to ensure the best travel experience. <br />
•Our 24×7 operations support ensures instant issue resolution and seamless coordination for uninterrupted travel experiences.<br />
Every process we build and every decision we make aligns with one mission — to ensure peace
of mind for our clients and passengers.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values - Modern Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 px-4 py-2 rounded-full mb-4">
              <span className="text-orange-600 font-semibold text-sm tracking-wide">WHAT DRIVES US</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-10 h-10 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure - Premium Layout */}
        <div className="mb-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 opacity-10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="mb-12">
              <div className="inline-block bg-orange-500/20 px-4 py-2 rounded-full mb-4">
                <span className="text-orange-400 font-semibold text-sm tracking-wide">OUR STRENGTH</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-4">World-Class Infrastructure</h2>
              <p className="text-gray-300 text-lg max-w-2xl">
                Equipped with state-of-the-art facilities to ensure seamless operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {infrastructure.map((item, index) => (
                <div key={index} className="flex items-start bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white text-lg font-medium pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-24">
          <div className="bg-gradient-to-r from-orange-50 via-white to-orange-50 rounded-3xl p-12 border border-orange-100">
            <div className="grid md:grid-cols-3 gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-3">
                    {stat.number}{stat.suffix}
                  </div>
                  <p className="text-gray-700 font-semibold text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Message - Elegant Quote */}
        <div className="mb-24">
          <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-12 md:p-16 overflow-hidden">
            <div className="absolute top-0 left-0 opacity-10">
              <Quote className="w-48 h-48 text-white" />
            </div>
            <div className="absolute bottom-0 right-0 opacity-10">
              <Quote className="w-64 h-64 text-white transform rotate-180" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <span className="text-orange-100 font-semibold tracking-wide">LEADERSHIP MESSAGE</span>
              </div>
              <p className="text-3xl md:text-4xl font-bold text-white leading-relaxed mb-8">
                "At TCS Travels, we believe transport is not just about moving people — it's about trust, 
                safety, and consistency."
              </p>
              <div className="w-24 h-1 bg-white/30 mx-auto mb-6"></div>
              <p className="text-xl text-orange-100 font-semibold">Managing Director, TCS Travels</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}