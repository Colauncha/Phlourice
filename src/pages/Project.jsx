// import React, { useState, useEffect } from "react";
// import projectImg from "../assets/project/services.jpeg";
// import { NavLink } from 'react-router-dom';
// import { FiArrowRight } from 'react-icons/fi';
// import gasTrain from "../assets/home images/gas-train-2048x695 1.png";
// import Projects from '../data/Projects';
// import { motion } from 'framer-motion';

// const Project = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//       const toggleVisibility = () => {
//         setIsVisible(window.scrollY > 300);
//       };
//       window.addEventListener('scroll', toggleVisibility);
//       return () => window.removeEventListener('scroll', toggleVisibility);
//     }, []);
    
//     const scrollToTop = () => {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     };

//   const [activeFilter, setActiveFilter] = useState('All Projects');
  
//   // Group projects by category
//   const projectsByCategory = Projects.reduce((acc, project) => {
//     if (!acc[project.category]) {
//       acc[project.category] = [];
//     }
//     acc[project.category].push(project);
//     return acc;
//   }, {});

//   // Get all unique categories
//   const categories = ['All Projects', ...Object.keys(projectsByCategory)];

//   return (
//      <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, margin: "-100px" }}
//     transition={{ duration: 1 }}
//     className="project-card"
//   >
//     <div className="bg-emerald-100">
//         <div className="relative flex items-center justify-center mt-22 w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
//         {/* Background Image with lazy loading */}
//         <img 
//           src={projectImg} 
//           alt="Our Products" 
//           className="w-full h-full object-cover"
//           loading="lazy"
//           decoding="async"
//         />
        
//         {/* Enhanced Overlay with gradient */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        
//         {/* Responsive Text */}
//         <div className="absolute w-full px-4 text-center">
//           <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white drop-shadow-lg z-10">
//             Product & Projects
//           </h2>
//         </div>
//       </div>

//       <main className="pt-[70px] px-[4%] [&::selection]:bg-green-600 [&::selection]:text-white bg-emerald-100 flex-1 scrollbar-green min-h-screen">
//         <section className="max-w-8xl mx-auto pb-20">
//           {/* Category Filters */}
//           <div className="flex flex-wrap gap-3 mb-12 justify-center">
//             {categories.map(category => (
//               <button
//                 key={category}
//                 onClick={() => setActiveFilter(category)}
//                 className={`px-6 py-2 rounded-full font-medium transition-colors ${
//                   activeFilter === category
//                     ? 'bg-green-600 text-white hover:bg-green-700'
//                     : 'border border-green-600 text-green-600 hover:bg-green-600 hover:text-white cursor-pointer'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           {/* Projects Grid - Grouped by Category */}
//           {activeFilter === 'All Projects' ? (
//             // Show all projects grouped by category
//             Object.entries(projectsByCategory).map(([category, categoryProjects]) => (
//               <div key={category} className="mb-16">
//                 <h3 className="text-3xl font-bold text-green-800 mb-8 border-b-2 border-green-200 pb-2">
//                   {category} Projects
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                   {categoryProjects.map(project => (
//                     <ProjectCard key={project.id} project={project} />
//                   ))}
//                 </div>
//               </div>
//             ))
//           ) : (
//             // Show only selected category
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
//               {projectsByCategory[activeFilter]?.map(project => (
//                 <ProjectCard key={project.id} project={project} />
//               ))}
//             </div>
//           )}

//           {/* Call to Action */}
//           {/* <div className="mt-20 text-center">
//             <h3 className="text-3xl font-bold text-gray-800 mb-6">Ready to start your project?</h3>
//              <a href="tel:+2348059770443">
//             <button className="bg-green-600 text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-green-700 duration-300 transition-all shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-1">
//               Contact Our Team
//             </button>
//             </a>
//           </div> */}
//         </section>

//         {/* Gas Train  */}
        
//         <div className="max-w-8xl mx-auto mt-10 mb-30 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
              
//               {/* Image */}
//               <motion.img 
//                 src={gasTrain} 
//                 alt="Gas training facility" 
//                 className="w-full max-w-full object-cover mb-6"
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//               />
        
//               {/* Text */}
//               <motion.p 
//                 className="text-3xl sm:text-4xl text-green-600 leading-tight mt-[-40px] sm:mt-[-50px] px-2 sm:px-4"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
//               >
//                 We are consistent with our core values and delivery of world class services
//               </motion.p>
        
//             </div>
        
        
//         {/* End Gas Train  */}
//       </main>

//       {/* Scroll to Top Button - MOVED HERE FROM PROJECT CARD */}
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
//     </motion.div>
//   );
// };

// // Project Card Component (unchanged except removed scroll-to-top button)
// const ProjectCard = ({ project }) => (
//   <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group animate-fadeInUp">
//     <div className="relative h-60 overflow-hidden">
//       <img
//         src={project.image}
//         alt={project.title}
//         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//         loading="lazy"
//         decoding="async"
//         style={{
//           background: `linear-gradient(90deg, #f0fdf4 25%, #dcfce7 50%, #f0fdf4 75%)`,
//           backgroundSize: '400% 400%',
//           animation: 'shimmer 1.5s infinite'
//         }}
//         onLoad={(e) => {
//           e.target.style.background = 'none';
//           e.target.style.animation = 'none';
//         }}
//       />
//       <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
//         {project.category}
//       </div>
//     </div>
//     <div className="p-6">
//       <div className="flex justify-between items-start mb-2">
//         <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
//         <span className="text-gray-500 text-sm">{project.year}</span>
//       </div>
//       <p className="text-gray-600 mb-4">{project.description}</p>
      
//       <ul className="space-y-1 mb-6">
//         {project.features.map((feature, i) => (
//           <li key={i} className="flex items-center text-gray-700">
//             <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
//             {feature}
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// );

// export default Project;



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
              
           
<section className="py-16 px-6 sm:px-10 lg:px-20 bg-white">
  <div className="max-w-6xl mx-auto">
    
    <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-6 text-center">
      Gas Equipment procurement, installation and commissioning
    </h2>

  
    <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
      We procure, install and commission various equipment required to drive the gas value chain.
    </p>


    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
  
      <div className="flex flex-col items-center text-center">
        <img src={gasFlow} alt="Gas Flow Meter" className="h-32 object-contain mb-4" />
        <span className="text-green-600 font-medium">Gas Flow Meter</span>
      </div>

      <div className="flex flex-col items-center text-center">
        <img src={gasRegulator} alt="Gas Regulator" className="h-32 object-contain mb-4" />
        <span className="text-green-600 font-medium">Gas Regulator</span>
      </div>

      <div className="flex flex-col items-center text-center">
        <img src={reliefValves} alt="Relief Valves" className="h-32 object-contain mb-4" />
        <span className="text-green-600 font-medium">Relief Valves</span>
      </div>

      <div className="flex flex-col items-center text-center">
        <img src={PRMS} alt="PRMS" className="h-32 object-contain mb-4" />
        <span className="text-green-600 font-medium">PRMS</span>
      </div>

      <div className="flex flex-col items-center text-center">
        <img src={gasFilter} alt="Gas Filter" className="h-32 object-contain mb-4" />
        <span className="text-green-600 font-medium">Gas Filter</span>
      </div>

      <div className="flex flex-col items-center text-center">
        <img src={gasShrubber} alt="Gas Scrubber" className="h-32 object-contain mb-4" />
        <span className="text-green-600 font-medium">Gas Scrubber</span>
      </div>

      <div className="flex flex-col items-center text-center">
        <img src={valves} alt="Valves" className="h-32 object-contain mb-4" />
        <span className="text-green-600 font-medium">Valves</span>
      </div>

      <div className="flex flex-col items-center text-center">
        <img src={csPipes} alt="CS Pipes" className="h-32 object-contain mb-4" />
        <span className="text-green-600 font-medium">CS Pipes</span>
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
                      className="text-3xl sm:text-4xl text-green-600 leading-tight mt-[-40px] sm:mt-[-50px] px-2 sm:px-4"
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