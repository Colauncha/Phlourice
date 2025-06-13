import React, { useState, useEffect } from "react";
import heroimg from "../assets/home images/home 1.png";
import hero2img from "../assets/home images/home 2.png";
import hero3img from "../assets/home images/home 3.png";
import hero4img from "../assets/home images/home 4.png";
import hero5img from "../assets/home images/home 5.png";
import hero6img from "../assets/home images/home 6.png";
import hero7img from "../assets/home images/EPCM.png";
import hero8img from "../assets/home images/Independent Power plant.png";
import hero9img from "../assets/home images/Construction.png";
import cng from "../assets/home images/CNG box.png";
import procurement from "../assets/home images/Procurement of Pipes.png";
import lng from "../assets/home images/LNG box.png";
import energy from "../assets/home images/Energy solution box.png";
import prms from "../assets/home images/PRMS.png";
import construction from "../assets/home images/Construction box.png";
import boc from "../assets/home images/boc.png";
import ceplas from "../assets/home images/Ceplas-logo-e1601489741504 1.png";
import aggreco from "../assets/home images/aggreco-removebg-preview.png";
import okFood from "../assets/home images/ok_foods-removebg-preview.png";
import pepsico from "../assets/home images/pepsico-removebg-preview.png";
import tis from "../assets/home images/tis.png";
import walter from "../assets/home images/walter-removebg-preview.png";
import valton from "../assets/home images/valton.png";
import industrial from "../assets/home images/industrial.webp";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const projects = [
    { img: cng, title: "CNG Solutions" },
    { img: procurement, title: "Procurement Services" },
    { img: lng, title: "LNG Facilities" },
    { img: energy, title: "Energy Projects" },
    { img: prms, title: "PRMS" },
    { img: construction, title: "Construction Services" },
  ];

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

  const logoAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="hero-section"
      >
        <main className="pt-[70px] px-[4%] [&::selection]:bg-green-600 [&::selection]:text-white mt-5 bg-gradient-to-br from-green-50 to-emerald-100 flex-1 scrollbar-green min-h-screen">
          <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-6 px-4 sm:px-6 lg:px-8">
            {/* <div className="max-w-8xl mx-auto mb-30 px-4 sm:px-8 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
        
      
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900 py-5 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-green-600">Transforming</span> Energy{" "}
            <span className="text-green-600">Solutions</span> Into Reality
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
<span className="text-green-600">Phlouriche</span> Nigeria Limited stands at core of engineering, procurement and construction excellence.
            </motion.p>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed mt-4 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
            <span className="text-green-600">Specializing</span> in the design, operation, and maintenance of Natural Gas facilities, including Pipeline, CNG, LNG, gas processing plants, compression stations, above ground installation, pipeline construction, transmission and distribution network as well as CNG and LNG plants/stations as well as Independent Power Plants.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
<span className="text-green-600">We</span> deliver tailored technical solutions that enhance efficiency and sustainability.
            </motion.p>

          
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-start mt-8 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
       
            

             <motion.button
             whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      navigate("/about");
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-2xl text-3xl font-semibold transition duration-300 ease-in-out transform w-fit mt-10"
            >
                    About Phlouriche
                  </motion.button>

         
          </motion.div>
        </motion.div>

      
        <motion.div
          className="col-span-1 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <img
            src={heroimg}
            alt="Background"
            className="w-full h-auto object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </div> */}

            <div className="max-w-8xl mx-auto mb-30 px-4 sm:px-8 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                <motion.div
                  className="col-span-1 relative md:order-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <img
                    src={heroimg}
                    alt="Phlouriche Energy Solutions"
                    className="w-full h-auto object-cover "
                    loading="eager"
                  />
                </motion.div>

                <motion.div
                  className="flex flex-col justify-center md:order-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.h1
                    className="text-4xl md:text-5xl font-bold text-gray-900 py-5 leading-tight"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <span className="text-green-600">Transforming</span> Energy{" "}
                    <span className="text-green-600">Solutions</span> Into
                    Reality
                  </motion.h1>

                  <motion.p
                    className="text-lg text-gray-700 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                  >
                    <span className="text-green-600">Phlouriche</span> Nigeria
                    Limited stands at the core of engineering, procurement and
                    construction excellence.
                  </motion.p>

                  <motion.p
                    className="text-lg text-gray-700 leading-relaxed mt-4 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                  >
                    <span className="text-green-600">Specializing</span> in the
                    design, operation, and maintenance of Natural Gas
                    facilities, including Pipeline, CNG, LNG, gas processing
                    plants, compression stations, above ground installation,
                    pipeline construction, transmission and distribution network
                    as well as CNG and LNG plants/stations as well as
                    Independent Power Plants.
                  </motion.p>

                  <motion.p
                    className="text-lg text-gray-700 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                  >
                    <span className="text-green-600">We</span> deliver tailored
                    technical solutions that enhance efficiency and
                    sustainability.
                  </motion.p>

                  <motion.div
                    className="flex flex-col md:flex-row justify-between items-start md:items-start mt-8 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate("/about")}
                      className="bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-2xl text-xl md:text-2xl font-semibold transition duration-300 ease-in-out transform w-fit mt-4 md:mt-10"
                    >
                      About Phlouriche
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Marquee Section */}
            <div className="mb-30 overflow-hidden w-full">
              <Marquee autoFill pauseOnHover speed={30} className="w-full">
                <div
                  className="border border-green-600 m-1 rounded-full flex space-x-5 px-8 py-2 text-green-600 text-xl cursor-pointer 
               hover:bg-green-700 hover:text-white hover:scale-105 hover:shadow-md 
               transition-all duration-300 transform-gpu"
                >
                  Natural Gas Facilities
                </div>
                <div
                  className="border-1 border-green-600 m-1 rounded-full flex space-x-5 px-8 py-2 text-green-600 text-xl cursor-pointer 
               hover:bg-green-700 hover:text-white hover:scale-105 hover:shadow-md 
               transition-all duration-300 transform-gpu"
                >
                  Independent Power Plants
                </div>
                <div
                  className="border-1 border-green-600 m-1 rounded-full flex space-x-5 px-8 py-2 text-green-600 text-xl cursor-pointer 
               hover:bg-green-700 hover:text-white hover:scale-105 hover:shadow-md 
               transition-all duration-300 transform-gpu"
                >
                  Technical Solutions
                </div>
                <div
                  className="border-1 border-green-600 m-1 rounded-full flex space-x-5 px-8 py-2 text-green-600 text-xl cursor-pointer 
               hover:bg-green-700 hover:text-white hover:scale-105 hover:shadow-md 
               transition-all duration-300 transform-gpu"
                >
                  Pipeline Construction
                </div>
                <div
                  className="border-1 border-green-600 m-1 rounded-full flex space-x-5 px-8 py-2 text-green-600 text-xl cursor-pointer 
               hover:bg-green-700 hover:text-white hover:scale-105 hover:shadow-md 
               transition-all duration-300 transform-gpu"
                >
                  High Quality Equipment
                </div>
                <div
                  className="border-1 border-green-600 m-1 rounded-full flex space-x-5 px-8 py-2 text-green-600 text-xl cursor-pointer 
               hover:bg-green-700 hover:text-white hover:scale-105 hover:shadow-md 
               transition-all duration-300 transform-gpu"
                >
                  LNG Equipments
                </div>
                <div
                  className="border-1 border-green-600 m-1 rounded-full flex space-x-5 px-8 py-2 text-green-600 text-xl cursor-pointer 
               hover:bg-green-700 hover:text-white hover:scale-105 hover:shadow-md 
               transition-all duration-300 transform-gpu"
                >
                  CNG Equipments
                </div>

                <div
                  className="border-1 border-green-600 m-1 rounded-full flex space-x-5 px-8 py-2 text-green-600 text-xl cursor-pointer 
               hover:bg-green-700 hover:text-white hover:scale-105 hover:shadow-md 
               transition-all duration-300 transform-gpu"
                >
                  PRMS
                </div>
              </Marquee>
            </div>
            {/* End of Marquee Section */}

            {/* What we do section */}

            <div className="max-w-8xl mx-auto mb-30 px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.7fr_1.1fr_1.1fr] gap-x-10 gap-y-12 h-full items-stretch">
                <motion.div
                  className="flex flex-col h-full"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="inline-block border-2 border-green-600 rounded-2xl px-3 sm:px-4 py-1 sm:py-2 w-fit mb-4 xs:mb-6 sm:mb-8">
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold py-1 sm:py-2 text-black">
                      What we do
                    </h2>
                  </div>

                  <div className="text-6xl md:text-5xl leading-tight space-y-1 mb-4">
                    <p>
                      <span className="text-green-700">Discover</span>{" "}
                      Everything
                    </p>
                    <p>
                      <span className="text-green-700">About</span> Phlouriche
                    </p>
                    <p>
                      <span className="text-green-700">Nigeria</span> Limited's
                    </p>
                    <p>
                      <span className="text-green-700">Engineering</span>
                    </p>
                    <p>
                      <span className="text-green-700">Solutions.</span>
                    </p>
                  </div>

                  <p className="text-base md:text-lg text-black text-justify mt-2">
                    Phlouriche Nigeria Limited is your trusted partner in
                    delivering innovative engineering solutions tailored for the
                    energy sector. Our expertise spans the comprehensive design,
                    operation, and maintenance of Natural Gas
                    facilities—covering NG, CNG, and LNG—as well as Independent
                    Power Plants.
                  </p>
                </motion.div>

                <motion.div
                  className="flex h-full max-h-[600px]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={hero3img}
                      alt="Services"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 p-6.5 bg-black/30 rounded-2xl flex flex-col justify-between">
                      <h3 className="w-fit text-white font-bold text-xl md:text-lg border-2 border-white rounded-2xl px-4 py-2">
                        Facility Development
                      </h3>

                      <div className="text-white/90 text-[16px] rounded-2xl p-6.5 bg-white/30">
                        <p className="text-white/90 text-[20px] font-xl font-bold mb-2">
                          Natural Gas Solutions
                        </p>
                        <p>
                          Our expertise in NG, CNG, and LNG facilities ensures
                          top-tier solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-col h-full max-h-[600px] justify-between"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                  <div className="relative w-full h-full mb-8">
                    <img
                      src={hero4img}
                      alt="Services"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 p-6.5 bg-black/30 rounded-2xl flex flex-col justify-between">
                      <h3 className="w-fit text-white font-bold text-xl md:text-lg border-2 border-white rounded-2xl px-4 py-2">
                        Power Plant Development
                      </h3>

                      <div className="text-white/90 text-[16px] rounded-2xl p-6.5 bg-white/25">
                        <p className="text-white/90 text-[20px] font-xl font-bold">
                          Independent Power Plant
                        </p>
                        <p>
                          Delivering reliable energy solutions through advanced
                          design and maintenance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-12">
                    <p className="text-base md:text-lg text-black">
                      Ensure uninterrupted power supply with our integrated
                      approaches to facility maintenance and equipment supply.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/about")}
                className="
          bg-green-600 
          text-white 
          py-4 px-12 
          rounded-2xl 
          text-2xl 
          w-fit 
          mt-10 
          cursor-pointer
          font-semibold 
          shadow-md 
          hover:shadow-lg
          hover:bg-green-700
          transition-all 
          duration-300
          transform
          hover:-translate-y-1
        "
              >
                Explore →
              </motion.button>
            </div>

            {/* End of What we do section */}

            {/* Request Consultation Section */}

            <div className="max-w-8xl mx-auto mt-5 mb-30 px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.5fr_0.8fr_0.8fr] gap-x-6 gap-y-10 items-stretch">
                <motion.div
                  className="bg-gray-100 py-8 px-6.5 rounded-lg h-full"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="order-2 md:order-1">
                      <img
                        src={hero5img}
                        alt="Engineering expertise"
                        className="w-full h-auto"
                      />
                    </div>

                    <div className="order-1 md:order-2 space-y-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                        Elevate Your Projects With Our Expertise
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Our extensive experience in pipeline construction
                        ensures that every project is executed with precision,
                        delivering high-quality solutions tailored to your
                        needs.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-col h-full justify-end gap-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                      Transform Your Energy Projects with Phlouriche Nigeria
                      Limited.
                    </h4>
                  </div>
                  <div>
                    <img
                      src={hero6img}
                      alt="Energy project transformation"
                      className="w-60 h-50 object-contain"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-col justify-end items-start"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                  <p className="text-lg text-gray-600">
                    We provide customized solutions for energy initiatives,
                    ensuring quality equipment and expert maintenance to enhance
                    your operational success.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* End of Request Consultation Section */}

            {/* Our Services Section */}

            <div className="max-w-8xl mx-auto mt-5 mb-30 px-4">
              <motion.div
                className="inline-block border-2 border-green-600 rounded-2xl px-4 py-2 w-fit mb-15"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold py-2 text-black">
                  Our Services
                </h2>
              </motion.div>

              <motion.div
                className="w-full h-auto lg:h-180 rounded-2xl bg-green-800 mt-12 flex items-center justify-center relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="w-full max-w-310 lg:w-310 h-auto lg:h-205 rounded-2xl p-6 sm:p-10 md:p-15 flex flex-col bg-white z-10 shadow-[0_0_20px_rgba(0,0,0,0.15)] overflow-hidden">
                  <div className="flex flex-col h-full">
                    <h2 className="text-2xl sm:text-3xl font-semibold leading-relaxed text-center mb-6 sm:mb-10">
                      Innovative Energy Solutions
                    </h2>

                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 mt-5 mb-5"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ staggerChildren: 0.2 }}
                      variants={{
                        visible: { transition: { staggerChildren: 0.2 } },
                        hidden: {},
                      }}
                    >
                      <motion.div
                        className="relative group overflow-hidden rounded-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                      >
                        <img
                          src={hero7img}
                          alt="Natural Gas Facilities"
                          className="w-full h-60 sm:h-80 lg:h-110 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 sm:p-10 text-center">
                          <h3 className="text-white text-lg sm:text-xl font-bold drop-shadow-lg">
                            EPCM
                          </h3>
                        </div>
                      </motion.div>

                      <motion.div
                        className="relative group overflow-hidden rounded-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.7,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                      >
                        <img
                          src={hero8img}
                          alt="Independent Power Plants"
                          className="w-full h-60 sm:h-80 lg:h-110 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 sm:p-10 text-center">
                          <h3 className="text-white text-lg sm:text-xl font-bold drop-shadow-lg">
                            Independent Power Plants
                          </h3>
                        </div>
                      </motion.div>

                      <motion.div
                        className="relative group overflow-hidden rounded-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.7,
                          ease: "easeOut",
                          delay: 0.4,
                        }}
                      >
                        <img
                          src={hero9img}
                          alt="Pipeline Construction"
                          className="w-full h-60 sm:h-80 lg:h-110 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 sm:p-10 text-center">
                          <h3 className="text-white text-lg sm:text-xl font-bold drop-shadow-lg">
                            Pipeline Construction
                          </h3>
                        </div>
                      </motion.div>
                    </motion.div>

                    <motion.p
                      className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                        delay: 0.6,
                      }}
                    >
                      Phlouriche Nigeria Limited offers a wealth of expertise in
                      the design, operation, and maintenance of Natural Gas
                      facilities and Power Plants. Our commitment to delivering
                      high-quality equipment and tailored solutions ensures that
                      your projects achieve optimal performance and reliability.
                    </motion.p>

                    <motion.div
                      className="flex justify-end mt-auto"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                        delay: 0.8,
                      }}
                    >
                      <motion.button
                       whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                      onClick={() => navigate("/services")}
                        className="
                w-full sm:w-auto
                bg-green-600 
                text-white 
                py-3 sm:py-4 px-8 sm:px-12 
                rounded-2xl 
                text-xl sm:text-2xl 
                font-semibold 
                shadow-md 
                hover:shadow-lg
                hover:bg-green-700
                transition-all 
                duration-300
                transform
                hover:-translate-y-1
              "
                      >
                        Explore →
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* End of Our Services Section */}

            {/* Our Project Section */}

            <div className="max-w-8xl mx-auto mt-10 mb-30">
              <div className="inline-block border-2 border-green-600 rounded-2xl px-4 py-2 w-fit mb-15">
                <h2 className="text-5xl font-semibold py-2 text-black">
                  Our Projects
                </h2>
              </div>

              <div className="overflow-hidden">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={12}
                  slidesPerView={"auto"}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  speed={1000}
                  className="!pr-[calc(100vw-100%)]"
                >
                  {projects.map((project, index) => (
                    <SwiperSlide
                      key={index}
                      className="!w-auto first:!ml-[var(--swiper-padding)]"
                    >
                      <img
                        src={project.img}
                        alt={project.alt}
                        className="h-auto max-h-[400px] object-contain"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* End of Our Project Section */}

            {/* Client Img */}

            <div className="w-auto mx-auto mt-10 mb-30 flex flex-col items-center text-center bg-green-100 p-6">
              <div className="max-w-auto w-auto ">
                <motion.h2
                  className="text-4xl font-extrabold py-2 text-black mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Some of Our Clients
                </motion.h2>

                <motion.p
                  className="text-xl text-gray-600 leading-relaxed mb-10 max-w-6xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  As promised, we have delivered uncompromising Technical and
                  professional Services to several clients on different projects
                  and below are some of our happy clients…
                </motion.p>

                <div className="flex flex-wrap justify-center gap-8 mb-8">
                  {[pepsico, industrial, aggreco, okFood, walter, boc].map(
                    (logo, index) => (
                      <motion.img
                        key={`top-${index}`}
                        src={logo}
                        alt="Client logo"
                        className="w-40 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                        {...logoAnimation}
                        transition={{
                          ...logoAnimation.transition,
                          delay: index * 0.1,
                        }} // Stagger logos
                      />
                    )
                  )}
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                  {[valton, tis, ceplas].map((logo, index) => (
                    <motion.img
                      key={`bottom-${index}`}
                      src={logo}
                      alt="Client logo"
                      className="w-40 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                      {...logoAnimation}
                      transition={{
                        ...logoAnimation.transition,
                        delay: index * 0.1,
                      }} // Stagger logos
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* End Client Img */}

            {/* Contact Us */}

            {/* End Contact Us */}

            {/* Optimized Back-to-Top Button */}
            <button
              onClick={scrollToTop}
              className={`
          fixed bottom-8 right-8 z-50 p-3
          bg-gradient-to-br from-green-500 to-green-600
          text-white rounded-full shadow-xl
          transition-all duration-300 transform
          ${
            isVisible
              ? "opacity-100 scale-100 animate-soft-bounce water-ripple"
              : "opacity-0 scale-50 pointer-events-none"
          }
          hover:from-green-600 hover:to-green-700
          hover:shadow-2xl
        `}
              aria-label="Back to top"
              style={{ willChange: "transform, opacity" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </main>
      </motion.section>
    </>
  );
};

export default Home;
