// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import aboutImg from "../assets/about image s/about .jpeg";
// import aboutImg2 from "../assets/about image s/about 2.png";
// import aboutImg4 from "../assets/about image s/about 4.png";
// import aboutImg5 from "../assets/about image s/about 5.png";

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       setIsVisible(window.scrollY > 300);
//     };
//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
// window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className="bg-emerald-100">

 
//       <motion.div
//         className="relative flex items-center justify-center mt-22 w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1 }}
//       >
//         <img
//           src={aboutImg}
//           alt="About Us"
//           className="w-full h-full object-cover"
//           loading="lazy"
//           decoding="async"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
//         <div className="absolute w-full px-4 text-center">
//           <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white drop-shadow-lg z-10">
//             About Us
//           </h2>
//         </div>
//       </motion.div>

   


// <motion.main
//   className="pt-[70px] px-[4%] [&::selection]:bg-green-600 [&::selection]:text-white bg-emerald-100 flex-1 min-h-screen"
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   viewport={{ once: true }}
//   transition={{ duration: 1 }}
// >


//   <div className="max-w-7xl mx-auto">
//     <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 md:gap-12 py-8">
   
//       <div className="space-y-6">
//         <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-12">
//           Get to know our company
//         </h2>

//         <div className="flex flex-col justify-between gap-10 space-y-4 text-gray-700">
//           <p className="text-xl leading-relaxed">
//             Phlouriche Nigeria Limited was founded in 2014 with the
//             objective of providing Technical and Engineering services for
//             the energy sector, we are recognized as a first class service
//             provider.
//           </p>

//           <p className="text-xl leading-relaxed">
//             We are fast expanding and boasts of our presence in the
//             emerging markets and have successfully created a brand of our
//             own by leveraging our comprehensive capabilities to meet our
//             customer's demand and ensure successful completion of their
//             projects.
//           </p>

//           <p className="text-xl leading-relaxed">
//             Be sure that we are{" "}
//             <span className="font-semibold text-green-700">
//               "committed"{" "}
//             </span>
//             to take on the challenge of different assignments, raising our
//             performance bar to be counted as one of the most trusted
//             service companies in the emerging market.
//           </p>
//         </div>
//       </div>

  
//       <div className="flex items-center justify-center">
//         <img
//           src={aboutImg2}
//           alt="About Phlouriche Nigeria Limited"
//           className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-lg"
//         />
//       </div>
//     </div>

    
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 py-8 mt-12">
    
//       <div className="flex ">
//         <img
//           src={aboutImg5}
//           alt="About Phlouriche Nigeria Limited"
//           className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
//         />
//       </div>

    
//       <div className="flex flex-col justify-center space-y-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-green-700">
//           Our experience includes:
//         </h2>

//         <ul className="text-gray-700 w-100 text-lg list-disc list-inside">
//           <li>Engineering, procurement and construction.</li>
//           <li>
//             Operations and maintenance of Natural gas pipeline and
//             ancillary.
//           </li>
//           <li>Natural gas compression and distribution.</li>
//           <li>Procurement of pipes and Gas equipment.</li>
//           <li>Gas Trading and Marketing.</li>
//           <li>Oil field services.</li>
//           <li>Independent Power Plant.</li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </motion.main>


    
//       <div className="mt-30">
//         <motion.div
//           className="relative flex items-center justify-center w-full h-full"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//         >
//           <img
//             src={aboutImg4}
//             alt="Mission, Vision and Core Values"
//             className="w-full h-full object-cover"
//             loading="lazy"
//           />
//           <div className="absolute inset-0 "></div>
//           <div className="absolute w-full px-4 text-center">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white drop-shadow-lg z-10 leading-tight">
//               Mission, Vision and Core Values
//             </h2>
//           </div>
//         </motion.div>
//       </div>

   
//       <motion.div
//         className="pt-[70px] px-[6%] mt-4"
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1 }}
//       >
//         <div className="flex flex-col items-center justify-center text-center text-2xl gap-10 max-w-7xl mx-auto py-8 space-y-10">
//           <p>
//             Our mission is to provide complete energy solutions, in a manner
//             that is consistent with our core value and delivery of world class
//             services to our valued clients with best safety practices.
//           </p>
//           <p>
//             To be a World Class Company, through our strong belief in people and
//             a desire to make a real difference. Many companies employ people to
//             run a business, whereas We have made our mission to transform our
//             Company to recognize our people as driving force and the asset of
//             the Company.
//           </p>
//         </div>
//       </motion.div>

        
//       <button
//         onClick={scrollToTop}
//         className={`
//           fixed bottom-8 right-8 z-50 p-3
//           bg-gradient-to-br from-green-500 to-green-600
//           text-white rounded-full shadow-xl
//           transition-all duration-300 transform
//           ${isVisible ? 
//             "opacity-100 scale-100 animate-soft-bounce water-ripple" : 
//             "opacity-0 scale-50 pointer-events-none"
//           }
//           hover:from-green-600 hover:to-green-700
//           hover:shadow-2xl
//         `}
//         aria-label="Back to top"
//         style={{ willChange: 'transform, opacity' }}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
//         </svg>
//       </button>

//     </div>
//   );
// };

// export default About;



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
    <div className="bg-emerald-100 overflow-x-hidden"> {/* Added overflow-x-hidden */}
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
        className="pt-[70px] px-4 sm:px-[4%] bg-emerald-100 flex-1 min-h-screen" // Changed px-[4%] to px-4 sm:px-[4%]
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6"> {/* Added container padding */}
          {/* First Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 md:gap-12 py-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-12">
                Get to know our company
              </h2>

              <div className="flex flex-col gap-6 space-y-4 text-gray-700">
                <p className="text-lg sm:text-xl leading-relaxed">
                  Phlouriche Nigeria Limited was founded in 2014 with the
                  objective of providing Technical and Engineering services for
                  the energy sector, we are recognized as a first class service
                  provider.
                </p>

                <p className="text-lg sm:text-xl leading-relaxed">
                  We are fast expanding and boasts of our presence in the
                  emerging markets and have successfully created a brand of our
                  own by leveraging our comprehensive capabilities to meet our
                  customer's demand and ensure successful completion of their
                  projects.
                </p>

                <p className="text-lg sm:text-xl leading-relaxed">
                  Be sure that we are{" "}
                  <span className="font-semibold text-green-700">
                    "committed"{" "}
                  </span>
                  to take on the challenge of different assignments, raising our
                  performance bar to be counted as one of the most trusted
                  service companies in the emerging market.
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

          {/* Second Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-8 mt-8 md:mt-12">
            <div className="flex justify-center md:justify-start">
              <img
                src={aboutImg5}
                alt="About Phlouriche Nigeria Limited"
                className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-700">
                Our experience includes:
              </h2>

              <ul className="text-gray-700 text-base sm:text-lg space-y-2 pl-5 list-disc">
                <li>Engineering, procurement and construction.</li>
                <li>
                  Operations and maintenance of Natural gas pipeline and
                  ancillary.
                </li>
                <li>Natural gas compression and distribution.</li>
                <li>Procurement of pipes and Gas equipment.</li>
                <li>Gas Trading and Marketing.</li>
                <li>Oil field services.</li>
                <li>Independent Power Plant.</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.main>

      {/* Mission/Vision Banner */}
      <div className="mt-12 md:mt-30 overflow-hidden"> {/* Added overflow-hidden */}
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
        className="pt-[50px] px-4 sm:px-[6%] mt-4" // Changed px-[6%] to px-4 sm:px-[6%]
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col items-center justify-center text-center text-lg sm:text-xl md:text-2xl gap-6 max-w-7xl mx-auto py-8">
          <p>
            Our mission is to provide complete energy solutions, in a manner
            that is consistent with our core value and delivery of world class
            services to our valued clients with best safety practices.
          </p>
          <p>
            To be a World Class Company, through our strong belief in people and
            a desire to make a real difference. Many companies employ people to
            run a business, whereas We have made our mission to transform our
            Company to recognize our people as driving force and the asset of
            the Company.
          </p>
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