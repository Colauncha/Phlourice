import React from "react";
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // Added this import

const Footer = () => {
  const footerItems = {
    menu: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Projects", href: "/project" } 
    ],


    contact: [
      { 
        icon: <FiMapPin className="text-green-300" />, 
        text: "7th floor, Mulliner towers, 39, Alfred Rewane Road, Ikoyi Lagos, Nigeria." 
      },
      { 
        icon: <FiPhone className="text-green-300" />, 
        text: <a href="tel:+2348059770443" className="hover:text-green-300">+234 805 977 0443</a> 
      },
      { 
        icon: <FiMail className="text-green-300" />, 
        text: <>
          <a href="mailto:phlouriche@gmail.com" className="hover:text-green-300">phlouriche@gmail.com</a>, 
          <a href="mailto:sakano@phlouriche.com" className="hover:text-green-300"> sakano@phlouriche.com</a>
        </> 
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

     return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="w-full bg-green-700 text-white py-20 px-6 sm:px-12"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_2fr] gap-y-12 gap-x-10">
          {/* Menu Column */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              Main Menu
            </motion.h2>
            <div className="flex flex-col gap-6 mt-6">
              {footerItems.menu.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    x: 5,
                    color: '#86efac'
                  }}
                >
                  <Link
                    to={item.href}
                    className="text-lg font-bold hover:text-green-300 transition-colors block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              Contact Our Team
            </motion.h2>
            <div className="flex flex-col gap-6 mt-6">
              {footerItems.contact.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3 text-base leading-relaxed"
                  variants={itemVariants}
                >
                  <motion.span whileHover={{ rotate: 15 }}>
                    {item.icon}
                  </motion.span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Empty Column */}
          <motion.div 
            variants={itemVariants}
            className="hidden lg:block"
          >
            
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div 
          className="mt-12 pt-6 border-t border-green-600 text-center text-sm text-green-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>© {new Date().getFullYear()} Phlouriche Nigeria Limited. All rights reserved.</p>
          <motion.div 
            className="flex justify-center gap-4 mt-4"
            variants={containerVariants}
          >
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item, index) => (
              <motion.a 
                key={index}
                href="#"
                className="hover:text-white transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;




