import React, { useState, useEffect } from "react";
import logo from "../assets/phlouriche.png";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const navigate = useNavigate();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 950) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: -20,
      opacity: 0,
      scale: 0.95
    },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25
      }
    },
    hover: {
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 500 
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      y: -50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 1.2
      }
    }
  };

  const showMobileMenu = windowWidth < 950;

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 20,
          mass: 0.5
        }
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className={`fixed top-0 left-0 right-0 z-50 w-full flex justify-between items-center py-[15px] px-[6%] bg-white transition-all duration-1600 ${
        hasScrolled
          ? "shadow-[0_4px_6px_-1px_rgba(16,185,129,0.2)]"
          : "shadow-none"
      }`}>
        <motion.img 
          src={logo} 
          alt="Logo" 
          className="w-[60px]"
          whileHover={{ 
            rotate: [0, -3, 3, 0],
            transition: { duration: 1 } 
          }}
        />

        {showMobileMenu && (
          <motion.button
            onClick={toggleMenu}
            className="z-50 p-2 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="w-6 h-0.5 bg-green-600 mb-1.5"
              animate={isMenuOpen ? {
                rotate: 45,
                y: 6,
                backgroundColor: "#059669"
              } : {
                rotate: 0,
                y: 0,
                backgroundColor: "#059669"
              }}
              transition={{ type: "spring", stiffness: 400 }}
            />
            <motion.div
              className="w-6 h-0.5 bg-green-600 mb-1.5"
              animate={isMenuOpen ? {
                opacity: 0,
                width: 0
              } : {
                opacity: 1,
                width: "100%"
              }}
              transition={{ type: "spring", stiffness: 400 }}
            />
            <motion.div
              className="w-6 h-0.5 bg-green-600"
              animate={isMenuOpen ? {
                rotate: -45,
                y: -6,
                backgroundColor: "#059669"
              } : {
                rotate: 0,
                y: 0,
                backgroundColor: "#059669"
              }}
              transition={{ type: "spring", stiffness: 400 }}
            />
          </motion.button>
        )}

        {!showMobileMenu && (
          <>
            <motion.ul 
              className="py-[12px] px-[30px] rounded-[30px] shadow-[0_0_10px_2px_rgba(24,187,84,0.2)] bg-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.3, duration: 1.2 }
              }}
            >
              {['/', '/about', '/services', '/project'].map((path, i) => (
                <motion.li
                  key={i}
                  className="inline-block mx-[10px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-green-600 text-white py-[8px] px-[3px] rounded-[30px]"
                        : "hover:text-green-600"
                    }
                  >
                    <span className="py-[5px] px-[20px] transition-colors duration-800 inline-block">
                      {path === '/' ? 'HOME' : 
                      path === '/about' ? 'ABOUT US' :
                      path === '/services' ? 'SERVICES' : 'PROJECT'}
                    </span>
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a 
              href="/contact"
              initial={{ opacity: 0, x: 10 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                transition: { delay: 0.4, duration: 1.0 }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-green-600 text-white py-[12px] px-[25px] border-0 outline-0 rounded-[30px] cursor-pointer text-[16px] transition-all duration-900 ease-in-out hover:bg-green-700 shadow-md shadow-green-200">
                Contact Us
              </button>
            </motion.a>
          </>
        )}

        <AnimatePresence>
          {showMobileMenu && isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center pt-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 150, damping: 25 }}
            >
              <ul className="w-full text-center">
                {['/', '/about', '/services', '/project'].map((path, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: i * 0.1 + 0.2 }
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="py-4"
                  >
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive ? "text-green-600 font-bold" : "text-gray-800 hover:text-green-600"
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-xl transition-colors duration-600 inline-block">
                        {path === '/' ? 'HOME' : 
                        path === '/about' ? 'ABOUT US' :
                        path === '/services' ? 'SERVICES' : 'PROJECT'}
                      </span>
                    </NavLink>
                  </motion.li>
                ))}

                <motion.li
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { delay: 0.6 }
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="mt-6"
                >
                  <button
                    onClick={() => {
                      navigate("/contact", { replace: true });
                      setIsMenuOpen(false);
                    }}
                    className="bg-green-600 text-white py-3 px-8 rounded-[30px] text-lg hover:bg-green-700 transition-colors duration-600"
                  >
                    Contact Us
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Navbar;
