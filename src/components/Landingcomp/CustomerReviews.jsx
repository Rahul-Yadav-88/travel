import React from "react";

const reviews = [
  {
    img: "https://i.pravatar.cc/100?img=1",
    name: "Albert Cole",
    // role: "Designer",
  },
  {
    img: "https://i.pravatar.cc/100?img=2",
    name: "Alison Dawn",
    // role: "WordPress Developer",
  },
  {
    img: "https://i.pravatar.cc/100?img=3",
    name: "Daniel Parker",
    // role: "Front-end Developer",
  },
];

export default function CustomerReviews() {
  return (
    <section className="bg-linear-to-r from-orange-200 via-pink-100 to-orange-200 py-20  text-center overflow-hidden">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#0a093d]">
        Customer Reviews
      </h2>

      {/* Responsive Quote */}
      <div
        className="
          mt-8 
          text-orange-500 
          font-serif 
          mx-auto 
          leading-none
          text-[80px] 
          sm:text-[100px] 
          md:text-[130px] 
          lg:text-[160px]
        "
      >
        “
      </div>

      {/* Review Text */}
      <p className="max-w-2xl mx-auto mt-8 text-gray-800 text-base md:text-lg leading-relaxed px-4">
        The tours in this website are great. I had been really enjoy with my
        family! The team is very professional and taking care of the customers.
        Will surely recommend to my friend to join this company!
      </p>

      {/* Review Cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-12 px-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex items-center bg-white shadow-md rounded-full px-5 py-3 w-full sm:w-[270px] max-w-[320px] transition-all duration-300 hover:shadow-lg"
          >
            <img
              src={review.img}
              alt={review.name}
              className="w-12 h-12 rounded-full object-cover mr-3"
            />
            <div className="text-left">
              <h3 className="text-sm font-semibold text-[#0a093d]">
                {review.name}
              </h3>
              <p className="text-xs text-gray-600">{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
