



import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/about image s/about .jpeg";
import aboutImg2 from "../assets/about image s/about 2.png";
import aboutImg4 from "../assets/about image s/about 4.png";
import aboutImg5 from "../assets/about image s/about 5.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-emerald-100 [&::selection]:bg-green-600 [&::selection]:text-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.div
        className="relative flex items-center justify-center mt-22 w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] overflow-hidden" // Added overflow-hidden
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img
          src={aboutImg}
          alt="About Us"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="absolute w-full px-4 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white drop-shadow-lg">
            About Us
          </h2>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.main
        className="pt-[70px] px-4 sm:px-[4%] bg-emerald-100 flex-1 min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6"> 

          <div className="flex justify-center items-center px-4 min-h-screen">
  <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 md:gap-12 py-8">
    <div className="space-y-6 text-center lg:text-left flex flex-col justify-center">
      <h2 className="text-2xl md:text-4xl font-bold text-green-800">
        Turning Complex Energy Challenges into Simple Solutions
        <p className="text-green-900 font-normal text-base md:text-lg mt-1 mb-6 md:mb-12">
        Leveraging expertise and innovation to keep your projects moving forward.
      </p>
      </h2>
      

      <div className="flex flex-col gap-6 space-y-4 text-gray-700">
        <p className="text-lg sm:text-xl leading-relaxed">
          Phlouriche Nigeria Limited, founded in 2014, delivers reliable technical and engineering services in the energy sector.
        </p>

        <p className="text-lg sm:text-xl leading-relaxed">
          We blend expertise with innovation to help clients achieve successful project outcomes. With a growing presence in emerging markets, we've built a strong brand by meeting diverse customer needs.
        </p>

        <p className="text-lg sm:text-xl leading-relaxed">
          Our commitment is to tackle challenges, raise performance standards, and remain a trusted partner in today's evolving energy landscape.
        </p>
      </div>
    </div>

    <div className="flex items-center justify-center">
      <img
        src={aboutImg2}
        alt="About Phlouriche Nigeria Limited"
        className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>
          
         

         


        
         

        </div>
      </motion.main>
       <section className="w-full bg-white py-12">
  <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {/* Image Section */}
      <div className="flex justify-center md:justify-start">
        <img
          src={aboutImg5}
          alt="About Phlouriche Nigeria Limited"
          className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center space-y-6">
        <div>
          <h2 className="text-xs md:text-sm lg:text-base font-bold text-green-700">
            Why PHLOURICHE?
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-black mt-2">
            Proven Expertise Across the Energy Value Chain.
          </p>
        </div>

        <p className="text-xs md:text-sm lg:text-base text-gray-700">
          At Phlouriche, our strength lies in the breadth and depth of our experience.
        </p>

        <ul className="text-gray-700 text-base sm:text-lg space-y-2 pl-5 list-disc">
          <li>Engineering, procurement and construction (EPC)</li>
          <li>Operations and maintenance of Natural gas pipeline and ancillary.</li>
          <li>Natural gas compression and distribution.</li>
          <li>Procurement of Pipes and Gas equipment.</li>
          <li>Gas Trading and Marketing.</li>
          <li>Oilfield services.</li>
          <li>Independent Power Plant Projects.</li>
        </ul>
      </div>
    </div>
  </motion.div>
</section>


      

      

      {/* Mission/Vision Banner */}
<div className="mt-8 md:mt-16 overflow-hidden"> 
  <motion.div
    className="relative flex items-center justify-center w-full h-[200px] sm:h-[300px]"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <img
      src={aboutImg4}
      alt="Mission, Vision and Core Values"
      className="w-full h-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-black/30"></div>
    <div className="absolute w-full px-4 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg leading-tight">
        Mission, Vision and Core Values
      </h2>
    </div>
  </motion.div>
</div>

{/* Mission/Vision Text */}
<motion.div
  className="pt-10 pb-8 px-4 sm:px-[6%]" // ⬅️ reduced top & bottom padding
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
>
  <div className="flex items-center justify-center mt-10 px-6">
    <div className="max-w-7xl w-full">
      {/* Vision Header */}
      <div className="text-center mb-8"> {/* ⬅️ reduced bottom margin */}
        <h3 className="text-green-700 font-extrabold text-sm tracking-wide uppercase">
          Phlouriche’s Vision
        </h3>
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">
          Delivering Complete Energy Solutions With World-Class Standards.
        </h1>
        <p className="text-gray-600 text-base mt-2 mb-4">
          We are committed to providing reliable, innovative, and safe services that reflect our core values and dedication to excellence.
        </p>
      </div>

      {/* Two Vision Boxes */}
      <div className="space-y-6"> {/* ⬅️ reduced gap between boxes */}
        {/* Box 1 */}
        <div className="flex items-start gap-4 mt-6">
          <div className="bg-green-700 text-white font-semibold text-lg w-10 h-10 flex items-center justify-center">
            01
          </div>
          <div className="flex-1">
            <h2 className="text-green-700 font-semibold text-lg mb-1">
              Provide Complete Energy Solutions
            </h2>
            <p className="text-gray-800 text-base leading-relaxed">
              Our mission is to deliver comprehensive energy services with world-class quality, best safety practices, and unwavering commitment to our valued clients.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex items-start gap-4">
          <div className="bg-white border border-gray-300 text-green-700 font-semibold text-lg w-10 h-10 flex items-center justify-center">
            02
          </div>
          <div className="flex-1">
            <h2 className="text-green-700 font-semibold text-lg mb-1">
              To Be a World-Class Company
            </h2>
            <p className="text-gray-800 text-base leading-relaxed">
              We believe in people as the driving force of our success. At Phlouriche, our vision is to create a company where talent, innovation, and dedication make a lasting difference in the energy sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</motion.div>

      


      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-8 right-8 z-50 p-3
          bg-gradient-to-br from-green-500 to-green-600
          text-white rounded-full shadow-xl
          transition-all duration-300 transform
          ${isVisible ? 
            "opacity-100 scale-100 animate-soft-bounce" : 
            "opacity-0 scale-50 pointer-events-none"
          }
          hover:from-green-600 hover:to-green-700
          hover:shadow-2xl
        `}
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default About;