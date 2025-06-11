import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import serviceImg from "../assets/project/services.jpeg";
import service2img from "../assets/services image s/service 2.png";
import service3img from '../assets/services image s/service 5.png';
import service4img from '../assets/services image s/service 6.png';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};

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


  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.5, pointerEvents: "none" },
    visible: { opacity: 1, scale: 1, pointerEvents: "auto" },
  };

  const headerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="bg-emerald-100">
      <motion.div
              className="relative flex items-center justify-center mt-22 w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
        <img
          src={serviceImg}
          alt="Our Services"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>

        <motion.div
          className="absolute w-full px-4 text-center"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white drop-shadow-lg z-10">
            Our Services
          </h2>
        </motion.div>
   
      </motion.div>

      <motion.main className="pt-[70px] px-[8%] [&::selection]:bg-green-600 [&::selection]:text-white bg-emerald-100  flex-1 scrollbar-green min-h-screen">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {[1, 2, 3].map((item, idx) => (
              <motion.div
                key={item}
                className="border-2 rounded-xl border-green-500 hover:shadow-lg transition-shadow duration-300"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
               <img
  src={
    item === 1
      ? service2img
      : item === 2
      ? service3img
      : service4img
  }
  alt={
    item === 1
      ? "Engineering, Procurement and Construction"
      : item === 2
      ? "Gas Marketing"
      : "Power and Energy Solutions"
  }
  className="w-full h-60 sm:h-80 md:h-96 lg:h-110 object-cover rounded-t-xl"
/>

                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                    {item === 1
                      ? "Engineering, Procurement and Construction"
                      : item === 2
                      ? "Gas Marketing"
                      : "Power and Energy Solutions"}
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg mb-4">
                    {item === 1
                      ? "EPC is a project delivery method where a single entity handles all aspects of a project"
                      : item === 2
                      ? "Buying and selling of natural gas to consumers and businesses"
                      : "Offer services and products to generate, distribute, and manage energy efficiently"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-15">
          <p className="text-gray-700 text-lg sm:text-xl lg:text-2xl text-center leading-relaxed sm:leading-loose space-y-6">
            Our experience and management services cover every phase of
            maintenance, engineering, procurement, construction and projects
            management services for the upstream, midstream and downstream of
            the oil, gas, energy industries.
          </p>
        </div>
      </motion.main>

      <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      transition={{ duration: 0.6 }}
      className="w-full flex flex-col py-12 mt-30 bg-white px-4 sm:px-10 lg:px-20"
    >
      <div className="space-y-10 px-4 sm:px-10 lg:px-20">
        <motion.h2 
          variants={item}
          className="text-2xl md:text-3xl font-bold text-green-600"
        >
          Phlouriche provides the following:
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full"
        >
          <ul className="space-y-6 md:space-y-8 text-lg md:text-xl text-gray-800">
            <motion.li 
              variants={item}
              className="flex items-start"
            >
              <span className="py-2 text-green-600">
                Procurement of Pipes, CNG Equipment, LNG Equipment, PRMS, Regulators, Meters, Filters etc.
              </span>
            </motion.li>
            
            <motion.li 
              variants={item}
              className="flex items-start"
            >
              <span className="py-2 text-green-600">
                At Phlouriche we are also involved in construction of pipes, oil and gas facilities.
              </span>
            </motion.li>
            
            <motion.li 
              variants={item}
              className="flex items-start"
            >
              <span className="py-2 text-green-600">
                We also have the following as our services Concept Design, Front End Engineering Design and Detailed Engineering
              </span>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </motion.div>

      {/* Optimized Back-to-Top Button */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-8 right-8 z-50 p-3
          bg-gradient-to-br from-green-500 to-green-600
          text-white rounded-full shadow-xl
          transition-all duration-300 transform cursor-pointer mouse
          ${isVisible ? 
            "opacity-100 scale-100 animate-soft-bounce water-ripple" : 
            "opacity-0 scale-50 pointer-events-none"
          }
          hover:from-green-600 hover:to-green-700
          hover:shadow-2xl
        `}
        aria-label="Back to top"
        style={{ willChange: 'transform, opacity' }}
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

export default Services;
