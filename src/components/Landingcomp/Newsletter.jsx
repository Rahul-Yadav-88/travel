import React, { useEffect, useRef } from "react";
import NewsletterImage from "../../assets/newsletter.png";

const Newsletter = () => {
  const sectionRef = useRef(null);

  // Subtle 3D parallax effect for background
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10;
      const y = (e.clientY / innerHeight - 0.5) * 10;

      if (sectionRef.current) {
        sectionRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) scale3d(1.02, 1.02, 1.02)`;
      }
    };

    const resetTransform = () => {
      if (sectionRef.current) {
        sectionRef.current.style.transform =
          "rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", resetTransform);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", resetTransform);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[498px] overflow-hidden text-white transition-transform duration-700 ease-out transform-gpu perspective-1000"
      style={{
        backgroundImage: `url(${NewsletterImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0"></div>

      {/* Floating text container */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 h-full px-6 sm:px-12 lg:px-32 py-16 z-10">
        <div className="flex-1 max-w-lg space-y-4 animate-floatText">
          <h2 className="text-2xl sm:text-3xl font-semibold drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
            We’d love to hear from you! <br /> Get in touch with us today.
          </h2>
          <p className="text-sm sm:text-base opacity-90 leading-relaxed drop-shadow-[0_3px_4px_rgba(0,0,0,0.3)]">
            Whether you’re looking for a custom corporate transport plan, a
            school fleet solution, or a one-time travel arrangement, our team is
            available around the clock to help you choose the best option.
          </p>

          <button
            type="submit"
            className="bg-white text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all duration-500 transform hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] animate-floatButton"
          >
            Contact Us
          </button>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        /* Floating text animation */
        @keyframes floatText {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-floatText {
          animation: floatText 5s ease-in-out infinite;
        }

        /* Floating button */
        @keyframes floatButton {
          0% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-8px) scale(1.05);
          }
          100% {
            transform: translateY(0px) scale(1);
          }
        }

        .animate-floatButton {
          animation: floatButton 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Newsletter;
