import React from "react";
import NewsletterImage from "../../assets/newsletter.png";

const Newsletter = () => {
  return (
    <section
      className="relative w-full h-[498px] overflow-hidden text-white "
      style={{
        backgroundImage: `url(${NewsletterImage})`,
        backgroundSize: "cover",          // fills width, may crop slightly
        backgroundPosition: "center",     // centers the image
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 h-full px-6 sm:px-12 lg:px-32 py-16">
        {/* Text & Form */}
        <div className="flex-1 max-w-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Subscribe To Our Mailing List <br /> And Stay Up To Date
          </h2>
          <p className="text-sm sm:text-base mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <form className="flex max-w-md">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none text-gray-800"
            />
            <button
              type="submit"
              className="bg-white text-gray-800 px-6 py-3 rounded-r-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

