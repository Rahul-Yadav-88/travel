import { useState } from 'react';

export default function TrendingDestinations() {
  const [showAll, setShowAll] = useState(false);

  const destinations = [
    {
      title: "Cruises",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      size: "small"
    },
    {
      title: "Beach Tours",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      size: "large"
    },
    {
      title: "City Tours",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
      size: "tall"
    },
    {
      title: "Museum Tour",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      size: "small"
    },
    {
      title: "Food",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      size: "small"
    },
    {
      title: "Hiking",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
      size: "small"
    },
    // Additional destinations (shown when "See all" is clicked)
    {
      title: "Adventure Tours",
      image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800&q=80",
      size: "large"
    },
    {
      title: "Mountain Tours",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      size: "small"
    },
    {
      title: "Wildlife Safari",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
      size: "tall"
    },
    {
      title: "Wine Tours",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
      size: "small"
    },
    {
      title: "Photography Tours",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80",
      size: "small"
    },
    {
      title: "Shopping Tours",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      size: "small"
    }
  ];

  const displayedDestinations = showAll ? destinations : destinations.slice(0, 6);

  return (
    <div className="w-full bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Trending Destinations
          </h2>
          <button 
            onClick={() => setShowAll(!showAll)}
            className="text-sm sm:text-base text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium"
          >
            {showAll ? 'Show less' : 'See all'}
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 auto-rows-[180px] sm:auto-rows-[200px] md:auto-rows-[220px]">
          {displayedDestinations.map((destination, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1
                ${destination.size === 'large' ? 'col-span-2' : ''}
                ${destination.size === 'tall' ? 'row-span-2' : ''}
              `}
            >
              {/* Background Image */}
              <img
                src={destination.image}
                alt={destination.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-4 sm:p-5 md:p-6">
                <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                  {destination.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// import { useState } from 'react';

// export default function TrendingDestinations() {
//   const [showAll, setShowAll] = useState(false);

//   const destinations = [
//     {
//       title: "Cruises",
//       image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
//       rows: 1
//     },
//     {
//       title: "Beach Tours",
//       image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
//       rows: 2
//     },
//     {
//       title: "City Tours",
//       image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
//       rows: 3
//     },
//     {
//       title: "Museum Tour",
//       image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
//       rows: 1
//     },
//     {
//       title: "Food",
//       image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
//       rows: 2
//     },
//     {
//       title: "Hiking",
//       image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
//       rows: 1
//     },
//     // Additional destinations
//     {
//       title: "Adventure Tours",
//       image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800&q=80",
//       rows: 2
//     },
//     {
//       title: "Mountain Tours",
//       image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
//       rows: 1
//     },
//     {
//       title: "Wildlife Safari",
//       image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
//       rows: 3
//     },
//     {
//       title: "Wine Tours",
//       image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
//       rows: 1
//     },
//     {
//       title: "Photography Tours",
//       image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80",
//       rows: 2
//     },
//     {
//       title: "Shopping Tours",
//       image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
//       rows: 1
//     },
//     {
//       title: "Desert Safari",
//       image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
//       rows: 2
//     },
//     {
//       title: "Historical Tours",
//       image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80",
//       rows: 1
//     },
//     {
//       title: "Island Hopping",
//       image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
//       rows: 3
//     }
//   ];

//   const displayedDestinations = showAll ? destinations : destinations.slice(0, 6);

//   return (
//     <div className="w-full bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6 sm:mb-8 md:mb-10">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
//             Trending Destinations
//           </h2>
//           <button 
//             onClick={() => setShowAll(!showAll)}
//             className="text-sm sm:text-base text-gray-700 hover:text-orange-500 transition-colors duration-300 font-medium"
//           >
//             {showAll ? 'Show less' : 'See all'}
//           </button>
//         </div>

//         {/* Pinterest-style Masonry Grid */}
//         <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 sm:gap-4 md:gap-5 space-y-3 sm:space-y-4 md:space-y-5">
//           {displayedDestinations.map((destination, index) => (
//             <div
//               key={index}
//               className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
//               style={{
//                 height: `${destination.rows * 150}px`
//               }}
//             >
//               {/* Background Image */}
//               <img
//                 src={destination.image}
//                 alt={destination.title}
//                 className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
              
//               {/* Dark Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
//               {/* Content */}
//               <div className="relative h-full flex flex-col justify-end p-4 sm:p-5 md:p-6">
//                 <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
//                   {destination.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }