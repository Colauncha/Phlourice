// import React from "react";
// import { motion } from 'framer-motion';
// import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
// import { Link } from 'react-router-dom'; // Added this import

// const Footer = () => {
//   const footerItems = {
//     menu: [
//       { name: "Home", href: "/" },
//       { name: "About Us", href: "/about" },
//       { name: "Services", href: "/services" },
//       { name: "Projects", href: "/project" } 
//     ],


//     contact: [
//       { 
//         icon: <FiMapPin className="text-green-300" />, 
//         text: "7th floor, Mulliner towers, 39, Alfred Rewane Road, Ikoyi Lagos, Nigeria." 
//       },
//       { 
//         icon: <FiPhone className="text-green-300" />, 
//         text: <a href="tel:+2348059770443" className="hover:text-green-300">+234 805 977 0443</a> 
//       },
//       { 
//         icon: <FiMail className="text-green-300" />, 
//         text: <>
//           <a href="mailto:phlouriche@gmail.com" className="hover:text-green-300">phlouriche@gmail.com</a>, 
//           <a href="mailto:sakano@phlouriche.com" className="hover:text-green-300"> sakano@phlouriche.com</a>
//         </> 
//       }
//     ]
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100
//       }
//     }
//   };

//      return (
//     <motion.footer
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: "-100px" }}
//       variants={containerVariants}
//       className="w-full [&::selection]:bg-green-600 [&::selection]:text-white bg-white-700 text-black py-20 px-6 sm:px-12"
//     >
//       <div className="container mx-auto px-4 sm:px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_2fr] gap-y-12 gap-x-10">
//           {/* Menu Column */}
//           <motion.div variants={itemVariants}>
//             <motion.h2 
//               className="text-xl font-bold"
//               whileHover={{ scale: 1.05 }}
//             >
//               Main Menu
//             </motion.h2>
//             <div className="flex flex-col gap-6 mt-6">
//               {footerItems.menu.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   variants={itemVariants}
//                   whileHover={{ 
//                     x: 5,
//                     color: '#86efac'
//                   }}
//                 >
//                   <Link
//                     to={item.href}
//                     className="text-lg font-bold hover:text-green-300 transition-colors block"
//                   >
//                     {item.name}
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Contact Column */}
//           <motion.div variants={itemVariants}>
//             <motion.h2 
//               className="text-xl font-bold"
//               whileHover={{ scale: 1.05 }}
//             >
//               Contact Our Team
//             </motion.h2>
//             <div className="flex flex-col gap-6 mt-6">
//               {footerItems.contact.map((item, index) => (
//                 <motion.div 
//                   key={index}
//                   className="flex items-start gap-3 text-base leading-relaxed"
//                   variants={itemVariants}
//                 >
//                   <motion.span whileHover={{ rotate: 15 }}>
//                     {item.icon}
//                   </motion.span>
//                   <span>{item.text}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Empty Column */}
//           <motion.div 
//             variants={itemVariants}
//             className="hidden lg:block"
//           >
            
//           </motion.div>
//         </div>

//         {/* Copyright Section */}
//         <motion.div 
//           className="mt-12 pt-6 border-t border-green-600 text-center text-sm text-green-100"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5 }}
//         >
//           <p>© {new Date().getFullYear()} Phlouriche Nigeria Limited. All rights reserved.</p>
//           <motion.div 
//             className="flex justify-center gap-4 mt-4"
//             variants={containerVariants}
//           >
//             {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item, index) => (
//               <motion.a 
//                 key={index}
//                 href="#"
//                 className="hover:text-white transition-colors"
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.1 }}
//               >
//                 {item}
//               </motion.a>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.footer>
//   );
// };

// export default Footer;




import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/phlouriche.png";

const Footer = () => {
  const footerLinks = {
    quickLinks: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Project", href: "/project" },
    ],
    resources: [
      { name: "Help & Support", href: "/help" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  };

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      {/* <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"> */}
      <div className="w-full px-[6%] py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15">

        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            
            <motion.img 
                      src={logo} 
                      alt="Logo" 
                      className="w-[60px]"
                      whileHover={{ 
                        rotate: [0, -3, 3, 0],
                        transition: { duration: 1 } 
                      }}
                    />
          </div>
          <p className="text-lg mb-4 leading-relaxed text-green-600">
            Transforming energy solutions into Reality
          </p>
          
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-600 mb-4">Quick Links</h3>
          <ul className="space-y-6">
            {footerLinks.quickLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.href}
                  className="text-sm text-gray-900 hover:text-green-600 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-gray-600 mb-4">Resources</h3>
          <ul className="space-y-6">
            {footerLinks.resources.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.href}
                  className="text-sm text-gray-900 hover:text-green-600 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <div className="flex items-start gap-2 text-gray-900 text-sm mb-3">
            <FiMapPin className="text-green-600 mt-1" />
            <span>
              7th floor, Mulliner towers, 39, Alfred Rewane Road, Ikoyi, Lagos,
              Nigeria.
            </span>
          </div>
          <div className="flex items-start gap-2 text-gray-900 text-sm mb-3">
            <FiPhone className="text-green-600 mt-1" />
            <a href="tel:+2348059770443" className="hover:text-green-600">
              +234 805 977 0443
            </a>
          </div>
          <div className="flex items-start gap-2 text-gray-900 text-sm mb-4">
            <FiMail className="text-green-600 mt-1" />
            <span>
              <a href="mailto:phlouriche@gmail.com" className="hover:text-green-900">
                phlouriche@gmail.com
              </a>
              <br />
              <a href="mailto:sakano@phlouriche.com" className="hover:text-green-900">
                sakano@phlouriche.com
              </a>
            </span>
          </div>
         <form className="flex flex-col gap-3 mt-8 w-full max-w-md mb-8">
  <p className="text-gray-800 text-lg font-medium">
    Subscribe for More Info
  </p>

  <div className="flex w-full">
    <input
      type="email"
      placeholder="example@gmail.com"
      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md text-sm focus:outline-none"
    />
    <button
      type="submit"
      className="bg-green-600 text-white px-4 py-2 text-sm rounded-r-md hover:bg-green-700 transition"
    >
      Subscribe
    </button>
  </div>
</form>

        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-green-200 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Phlouriche. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
