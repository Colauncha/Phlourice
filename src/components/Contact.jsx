import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      className="w-full flex flex-col sm:flex-row items-center gap-8 sm:gap-52 bg-gray-50 px-20 sm:px-10 py-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.p
        className="text-green-700 text-xl sm:text-2xl font-medium text-center sm:text-left px-20"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Contact us now for a free quote on your project
      </motion.p>

 
      <a href="tel:+2348059770443" className="w-full sm:w-auto">
        <motion.button
          className="bg-green-600 text-white px-10 sm:px-15 py-4 rounded-xl font-medium shadow-md 
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
  );
};

export default Footer;
