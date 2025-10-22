// import React from "react";

// const TravelArticles = () => {
//   const articles = [
//     {
//       id: 1,
//       image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
//       title: "Kenya to Tanzania Safari: The Better African Safari Experience",
//       author: "Ali Tufan",
//       date: "April 08 2023",
//       tag: "Trips",
//     },
//     {
//       id: 2,
//       image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
//       title: "Exploring the Serengeti: A Wildlife Adventure",
//       author: "Emily Johnson",
//       date: "April 07 2023",
//       tag: "Trips",
//     },
//     {
//       id: 3,
//       image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
//       title: "Into the Wild: An Unforgettable Safari Journey",
//       author: "Maxwell Rhodes",
//       date: "April 08 2023",
//       tag: "Trips",
//     },
//   ];

//   return (
//     <section className="bg-[#060C3C] py-16 px-4 sm:px-8 md:px-16 lg:px-32">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
//         <h2 className="text-white text-2xl sm:text-3xl font-semibold">
//           Travel Articles
//         </h2>
//         <a
//           href="#"
//           className="text-white text-sm hover:underline hover:text-orange-400 transition-colors"
//         >
//           See all
//         </a>
//       </div>

//       {/* Articles Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {articles.map((article) => (
//           <div
//             key={article.id}
//             className=" rounded-xl overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-2xl"
//           >
//             {/* Image */}
//             <div className="relative">
//               <img
//                 src={article.image}
//                 alt={article.title}
//                 className="w-full h-52 sm:h-56 md:h-64 object-cover rounded-xl"
//               />
//               <span className="absolute top-3 left-3 bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow">
//                 {article.tag}
//               </span>
//             </div>

//             {/* Text */}
//             <div className="p-4 sm:p-2">
//               <p className="text-gray-300 text-xs sm:text-sm mb-2">
//                 {article.date} | By{" "}
//                 <span className="text-white font-medium">{article.author}</span>
//               </p>
//               <h3 className="text-white text-sm sm:text-base font-semibold leading-snug hover:text-orange-400 cursor-pointer transition-colors ">
//                 {article.title}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TravelArticles;

import React, { useState } from "react";

const TravelArticles = () => {
  const allArticles = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      title: "Kenya to Tanzania Safari: The Better African Safari Experience",
      author: "Ali Tufan",
      date: "April 08 2023",
      tag: "Trips",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
      title: "Exploring the Serengeti: A Wildlife Adventure",
      author: "Emily Johnson",
      date: "April 07 2023",
      tag: "Trips",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      title: "Into the Wild: An Unforgettable Safari Journey",
      author: "Maxwell Rhodes",
      date: "April 08 2023",
      tag: "Trips",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      title: "Safari Adventure in South Africa",
      author: "Olivia Brown",
      date: "April 10 2023",
      tag: "Trips",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      title: "Discovering the Wildlife of Botswana",
      author: "Liam Smith",
      date: "April 11 2023",
      tag: "Trips",
    },
  ];

  // State to control showing all articles
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="bg-[#060C3C] py-16 px-4 sm:px-8 md:px-16 lg:px-32">
      {/* Header */}
      <div className="flex flex-row flex-wrap justify-between items-center mb-10 gap-4">
        <h2 className="text-white text-2xl sm:text-3xl font-semibold">
          Travel Articles
        </h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-white text-sm hover:underline hover:text-orange-400 transition-colors"
        >
          {showAll ? "Show Less" : "See all"}
        </button>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {(showAll ? allArticles : allArticles.slice(0, 3)).map((article) => (
          <div
            key={article.id}
            className=" rounded-xl overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-52 sm:h-56 md:h-64 object-cover rounded-xl"
              />
              <span className="absolute top-3 left-3 bg-white text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow">
                {article.tag}
              </span>
            </div>

            {/* Text */}
            <div className="p-4 sm:p-2">
              <p className="text-gray-300 text-xs sm:text-sm mb-2">
                {article.date} | By{" "}
                <span className="text-white font-medium">{article.author}</span>
              </p>
              <h3 className="text-white text-sm sm:text-base font-semibold leading-snug hover:text-orange-400 cursor-pointer transition-colors">
                {article.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelArticles;
