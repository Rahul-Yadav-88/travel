import { MapPin, GitBranch, User, Users } from 'lucide-react';

export default function StatsFeatureCards() {
  const stats = [
    {
      icon: <MapPin className="w-10 h-10" />,
      value: "932M",
      label: "Total Donations"
    },
    {
      icon: <GitBranch className="w-10 h-10" />,
      value: "24M",
      label: "Campaigns Closed"
    },
    {
      icon: <User className="w-10 h-10" />,
      value: "10M",
      label: "Happy People"
    },
    {
      icon: <Users className="w-10 h-10" />,
      value: "65M",
      label: "Our Volunteers"
    }
  ];

  const features = [
    {
      title: "Best staycation deals",
      description: "Enjoy these pool staycation promotions in Bangalore",
      buttonText: "See activities",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
    },
    {
      title: "All Time Favourite Activities in Dubai",
      description: "Don't forget to check out these activities while you're here",
      buttonText: "See activities",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80"
    }
  ];

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="flex justify-center mb-2 sm:mb-3 md:mb-4 text-orange-500">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg h-64 sm:h-72 md:h-80 group">
              {/* Background Image with Blur Effect on Hover */}
              <img 
                src={feature.image} 
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:blur-md group-hover:scale-105"
              />
              
              {/* Content Overlay */}
              <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8">
                <p className="text-xs sm:text-sm text-white/90 mb-1 sm:mb-2">
                  {feature.description}
                </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                  {feature.title}
                </h3>
                <button className="bg-white text-gray-900 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base font-medium w-fit hover:bg-gray-100 hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-md active:scale-95">
                  {feature.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}