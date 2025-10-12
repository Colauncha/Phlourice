// import React from "react";
// import { motion } from "framer-motion";

// const Contact = () => {
//   return (
//     <motion.div
// className="w-full [&::selection]:bg-green-600 [&::selection]:text-white flex flex-col sm:flex-row items-center gap-8 sm:gap-52 bg-gray-50 pl-20 sm:pl-20 pr-20 sm:pr-10 py-8"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       <motion.p
//         className="text-green-700 text-xl sm:text-2xl font-medium text-center sm:text-left px-10"
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//       >
//         Contact us now for a free quote on your project
//       </motion.p>

 
//       <a href="tel:+2348059770443" className="w-full sm:w-auto">
//         <motion.button
//           className="bg-green-600 text-white px-10 sm:px-20 py-4 rounded-xl font-medium shadow-md 
//                     hover:shadow-lg
//                     hover:bg-green-700
//                     transition-all 
//                     duration-300
//                     transform
//                     hover:-translate-y-1 
//                     cursor-pointer
//                     w-full sm:w-auto"
//           whileHover={{ scale: 1.05 }} 
//           whileTap={{ scale: 0.95 }}   
//         >
//           Contact Us
//         </motion.button>
//       </a>
//     </motion.div>
//   );
// };

// export default Contact;








// import React from "react";
// import { motion } from "framer-motion";

// import contactBg from "../assets/contact image s/contact one.png";

// const Contact = () => {
//   return (
//     <motion.div
//       style={{ backgroundImage: `url(${contactBg})` }}
//       className="w-full [&::selection]:bg-green-600 [&::selection]:text-white flex flex-col sm:flex-row items-center gap-18 sm:gap-[25rem] bg-gray-50 pl-35 sm:pl-30 pr-20 sm:pr-10 py-8 bg-cover bg-center bg-no-repeat"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
   
//       <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
//         <motion.h2
//           className="text-green-700 text-xl sm:text-2xl font-bold mb-2"
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
//         >
//           Get in Touch
//         </motion.h2>
//         <motion.p
//           className="text-white text-2xl sm:text-3xl font-medium"
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           Contact us now for a free quote on your project
//         </motion.p>
//       </div>

     
//       <motion.div
//         initial={{ opacity: 0, x: 20 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
//       >
//         <a href="tel:+2348059770443" className="w-full sm:w-auto">
//           <motion.button
//             className="bg-green-600 text-white px-10 sm:px-20 py-4 rounded-xl font-medium shadow-md 
//                       hover:shadow-lg
//                       hover:bg-green-700
//                       transition-all 
//                       duration-300
//                       transform
//                       hover:-translate-y-1 
//                       cursor-pointer
//                       w-full sm:w-auto"
//             whileHover={{ scale: 1.05 }} 
//             whileTap={{ scale: 0.95 }}   
//           >
//             Contact Us
//           </motion.button>
//         </a>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Contact;


import React from "react";
import { motion } from "framer-motion";

import contactBg from "../assets/contact image s/contact one.png";

const Contact = () => {
  return (
    <motion.div
      style={{ backgroundImage: `url(${contactBg})` }}
      className="w-full [&::selection]:bg-green-600 [&::selection]:text-white flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4 bg-gray-50 px-6 sm:px-20 py-8 bg-cover bg-center bg-no-repeat"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left Section - Text Content */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-2 sm:mb-0">
        <motion.h2
          className="text-green-700 text-xl sm:text-2xl font-bold mb-1"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-white text-2xl sm:text-3xl font-medium leading-tight"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Contact us now for a free quote on your project
        </motion.p>
      </div>

      {/* Right Section - Button */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <a href="/contact" className="w-full sm:w-auto">
          <motion.button
            className="bg-green-600 text-white px-8 sm:px-16 py-3 rounded-xl font-medium shadow-md 
                      hover:shadow-lg
                      hover:bg-green-700
                      transition-all 
                      duration-300
                      transform
                      hover:-translate-y-1 
                      cursor-pointer
                      w-full sm:w-auto"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}   
          >
            Contact Us
          </motion.button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;