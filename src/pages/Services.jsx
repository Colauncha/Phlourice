import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import serviceImg from "../assets/project/services.jpeg";
import service2img from "../assets/services image s/service 2.png";
import service3img from '../assets/services image s/service 5.png';
import service4img from '../assets/services image s/service 6.png';
import scrrollImg from '../assets/services image s/scroll.png'
import settingsImg from '../assets/services image s/settings.png'
import pencilImg from '../assets/services image s/pencil.png'
import recycleImg from '../assets/services image s/recycle.png'

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

  const services = [
    {
      id: 1,
      number: "1",
      title: "Procurement of Equipment",
      description: "Supplying pipes, CNG and LNG equipment, PRMS, regulators, meters, filters, and more reliable solutions for the oil and gas sector.",
      icon: settingsImg
    },
    {
      id: 2,
      number: "2",
      title: "Construction & Facilities Development",
      description: "Building pipelines and oil & gas facilities with precision, safety, and world-class standards.",
      icon: scrrollImg
    },
    {
      id: 3,
      number: "3",
      title: "Engineering & Design",
      description: "From concept design to FEED and detailed engineering, we provide innovative designs tailored to project needs.",
      icon: pencilImg
    },
    {
      id: 4,
      number: "4",
      title: "EPC Project Delivery",
      description: "Single-source execution for engineering, procurement, and construction, ensuring seamless delivery.",
      icon: recycleImg
    }
  ];

  return (
    <div className="bg-emerald-100 [&::selection]:bg-green-600 [&::selection]:text-white">
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
      className="rounded-xl bg-green-200 shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] flex flex-col items-center text-center"
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
        className="w-[90%] h-60 sm:h-72 md:h-80 object-cover rounded-xl mt-4"
      />

      <div className="p-4 sm:p-6 flex flex-col items-center text-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
          {item === 1
            ? "Engineering, Procurement and Construction"
            : item === 2
            ? "Gas Marketing"
            : "Power and Energy Solutions"}
        </h3>
        <p className="text-gray-700 text-base sm:text-lg">
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

        
      </motion.main>








  {/* Services Section */}
    <section className="py-16"> 
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-12">
      <h2 className="text-lg font-bold text-green-800 mb-2">
        Ways We Power Your Success:
      </h2>
    </div>

    


    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center text-center">
      {services.map((service) => (
        <div
  key={service.id}
  className="space-y-4 p-6 bg-green-100 border border-green-300 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
>

          {/* Icon Circle */}
<div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full">
  <img
    src={service.icon}
    alt={service.title}
    className="w-11 h-11 object-contain"
  />
</div>


          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-700">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-base text-gray-700 leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

 







      

  
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
