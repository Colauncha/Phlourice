
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
