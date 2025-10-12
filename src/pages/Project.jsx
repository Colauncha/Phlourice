



import projectImg from "../assets/project/services.jpeg";
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";
import gasFlow from "../assets/project/gas_flow_meter-removebg-preview.png";
import gasRegulator from "../assets/project/gas  regulator.png";
import reliefValves from "../assets/project/relief_valve-removebg-preview.png";
import PRMS from "../assets/project/prms.png";
import gasFilter from "../assets/project/gas_filter-removebg-preview.png";
import gasShrubber from "../assets/project/gas_shrubber-removebg-preview.png";
import valves from "../assets/project/vlaves-removebg-preview.png";
import csPipes from "../assets/project/cs pipes.jpg";
import gasTrain from "../assets/home images/gas-train-2048x695 1.png";




const Project = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const toggleVisibility = () => {
        setIsVisible(window.scrollY > 300);
      };
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };





  return (
     <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1 }}
    className="project-card"
  >
    <div className="bg-emerald-100 [&::selection]:bg-green-600 [&::selection]:text-white">
        <div className="relative flex items-center justify-center mt-22 w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
    
        <img 
          src={projectImg} 
          alt="Our Products" 
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        
      
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        
     
        <div className="absolute w-full px-4 text-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white drop-shadow-lg z-10">
            Product & Projects
          </h2>
        </div>
      </div>

      <main className="pt-[70px] px-[4%] [&::selection]:bg-green-600 [&::selection]:text-white bg-emerald-100 flex-1 scrollbar-green min-h-screen">
              
           



<section className="py-16 px-6 sm:px-10 lg:px-20">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-6 text-center">
      Gas Equipment procurement, installation and commissioning
    </h2>

    <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
      We procure, install and commission various equipment required to drive the gas value chain.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
      {/* Item */}
      <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-green-50 hover:border-green-200 cursor-pointer group">
        <img src={gasFlow} alt="Gas Flow Meter" className="h-32 object-contain mb-4 group-hover:scale-105 transition-transform duration-300" />
        <span className="text-green-600 font-medium group-hover:text-green-700">Gas Flow Meter</span>
      </div>

      <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-green-50 hover:border-green-200 cursor-pointer group">
        <img src={gasRegulator} alt="Gas Regulator" className="h-32 object-contain mb-4 group-hover:scale-105 transition-transform duration-300" />
        <span className="text-green-600 font-medium group-hover:text-green-700">Gas Regulator</span>
      </div>

      <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-green-50 hover:border-green-200 cursor-pointer group">
        <img src={reliefValves} alt="Relief Valves" className="h-32 object-contain mb-4 group-hover:scale-105 transition-transform duration-300" />
        <span className="text-green-600 font-medium group-hover:text-green-700">Relief Valves</span>
      </div>

      <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-green-50 hover:border-green-200 cursor-pointer group">
        <img src={PRMS} alt="PRMS" className="h-32 object-contain mb-4 group-hover:scale-105 transition-transform duration-300" />
        <span className="text-green-600 font-medium group-hover:text-green-700">PRMS</span>
      </div>

      <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-green-50 hover:border-green-200 cursor-pointer group">
        <img src={gasFilter} alt="Gas Filter" className="h-32 object-contain mb-4 group-hover:scale-105 transition-transform duration-300" />
        <span className="text-green-600 font-medium group-hover:text-green-700">Gas Filter</span>
      </div>

      <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-green-50 hover:border-green-200 cursor-pointer group">
        <img src={gasShrubber} alt="Gas Scrubber" className="h-32 object-contain mb-4 group-hover:scale-105 transition-transform duration-300" />
        <span className="text-green-600 font-medium group-hover:text-green-700">Gas Scrubber</span>
      </div>

      <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-green-50 hover:border-green-200 cursor-pointer group">
        <img src={valves} alt="Valves" className="h-32 object-contain mb-4 group-hover:scale-105 transition-transform duration-300" />
        <span className="text-green-600 font-medium group-hover:text-green-700">Valves</span>
      </div>

      <div className="flex flex-col items-center text-center border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:bg-green-50 hover:border-green-200 cursor-pointer group">
        <img src={csPipes} alt="CS Pipes" className="h-32 object-contain mb-4 group-hover:scale-105 transition-transform duration-300" />
        <span className="text-green-600 font-medium group-hover:text-green-700">CS Pipes</span>
      </div>
    </div>
  </div>
</section>


      
              
              <div className="max-w-8xl mx-auto mt-10 mb-30 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
                    
                  
                    <motion.img 
                      src={gasTrain} 
                      alt="Gas training facility" 
                      className="w-full max-w-full object-cover mb-6"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
              
                   
                    <motion.p 
                      className="text-2xl sm:text-3xl text-green-600 leading-tight mt-[-40px] sm:mt-[-50px] px-2 sm:px-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                      We are consistent with our core values and delivery of world class services
                    </motion.p>
              
                  </div>
              
              
              
            </main>



      {/* Scroll to Top Button  */}
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
    </motion.div>
  );
};



export default Project;