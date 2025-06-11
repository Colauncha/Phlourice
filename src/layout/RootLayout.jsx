import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import ScrollTop from '../components/ScrollTop'
import { motion } from 'framer-motion';
import { LazyMotion, domAnimation } from "framer-motion";
import CustomCursor from '../components/CustomCursor';

const RootLayout = () => {
  return (
    <div >

    <CustomCursor />

      <LazyMotion features={domAnimation}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >

      
        <Navbar />

       <ScrollTop /> 
        
        <Outlet />
      
      <div className='h-30 bg-emerald-100'></div>
      <Contact />
      <div className='h-30 bg-emerald-100'></div>
      <Footer />

       </motion.div>
    </LazyMotion>
    </div>
  )
}

export default RootLayout