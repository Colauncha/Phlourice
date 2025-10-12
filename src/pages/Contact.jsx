


// import contactImg from "../assets/contact image s/one contact.png";
// import { motion } from 'framer-motion';
// import { useState, useEffect } from "react";





// const Contact = () => {
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





//   return (
//      <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, margin: "-100px" }}
//     transition={{ duration: 1 }}
//     className="project-card"
//   >
  
//          <div className="bg-emerald-100 [&::selection]:bg-green-600 [&::selection]:text-white">
//                 <div className="relative flex items-center justify-center mt-22 w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
            
//                 <img 
//                   src={contactImg} 
//                   alt="Our Products" 
//                   className="w-full h-full object-cover"
//                   loading="lazy"
//                   decoding="async"
//                 />
                
              
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
                
             
//                 <div className="absolute w-full px-4 text-center">
//                   <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white drop-shadow-lg z-10">
//                     Contact Us
//                   </h2>
//                 </div>
//               </div>





//         {/* Scroll to Top Button */}
//       <button
//         onClick={scrollToTop}
//         className={`
//           fixed bottom-8 right-8 z-50 p-3
//           bg-gradient-to-br from-green-500 to-green-600
//           text-white rounded-full shadow-xl
//           transition-all duration-300 transform
//           ${isVisible ? 
//             "opacity-100 scale-100 animate-soft-bounce" : 
//             "opacity-0 scale-50 pointer-events-none"
//           }
//           hover:from-green-600 hover:to-green-700
//           hover:shadow-2xl
//         `}
//         aria-label="Back to top"
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
//         </div>
//     </motion.div>
//   );
// };



// export default Contact;



import contactImg from "../assets/contact image s/one contact.png";
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";

const Project = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    });

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simple validation
        if (!formData.fullName || !formData.email || !formData.phone) {
            alert('Please fill in all required fields');
            return;
        }
        
        // In a real application, you would send this data to a server
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            message: ''
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
                {/* Hero Section */}
                <div className="relative flex items-center justify-center mt-22 w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
                    <img 
                        src={contactImg} 
                        alt="Our Products" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
                    <div className="absolute w-full px-4 text-center">
                        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white drop-shadow-lg z-10">
                            Contact Us
                        </h2>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    
                    {/* Contact Container */}
                    <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-3xl overflow-hidden">
                        {/* Contact Info */}
                        <div className="lg:w-1/2 p-8 bg-emerald-100 [&::selection]:bg-green-600 [&::selection]:text-white overflow-x-hidden">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className="text-lg font-bold text-green-700 mb-2">
                                    Get In Touch
                                </h3>
                                <p className="font-bold text-xl text-black mb-2">
                                    Always Here To Help You
                                </p>
                                <p className="text-gray-600 mt-4 mb-8">We are always open to meaningful conversions on opportunities, projects, or parternerships with you and our team of experts.</p>

                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        {/* Phone */}
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M22 16.92V19.92C22 20.52 21.53 21 20.94 21C10.44 21 2 12.56 2 3.06C2 2.47 2.48 2 3.08 2H6.08C6.66 2 7.13 2.45 7.14 3.03C7.21 4.92 7.54 6.78 8.12 8.57C8.24 9 8.06 9.46 7.7 9.7L5.81 11.12C7.22 14.48 9.52 16.78 12.88 18.19L14.3 16.3C14.54 15.94 15 15.76 15.43 15.88C17.22 16.46 19.08 16.79 20.97 16.86C21.55 16.87 22 17.34 22 17.92Z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className=" text-gray-600">Phone Number</h4>
                                            <p className="font-semibold text-gray-900">+234 805 977 0443</p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className=" text-gray-600">Email Address</h4>
                                            <p className="font-semibold text-gray-900">phlouriche@gmail.com</p>
                                            <p className="font-semibold text-gray-900">sakano@phlouriche.com</p>
                                        </div>
                                    </div>
                                    </div>


                                    {/* Location */}
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-gray-600">Office Location</h4>
                                            <p className="font-semibold text-gray-900">
                                                7th floor, Mulliner towers, 39, Alfred Rewane Road, Ikoyi Lagos, Nigeria.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:w-1/2 p-8 rounded-3xl">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Send a Message</h3>
                                <p className="text-gray-800 mb-6">
                                    Please fill the form below with your details and message, our team will get back to you as soon as possible
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Full Name */}
                                    <div>
                                        
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                                            placeholder="Full Name *"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                       
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                                            placeholder=" Email *"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                      
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                                            placeholder=" Phone Number *"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows="5"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200"
                                            placeholder=" Write a Message"
                                        ></textarea>
                                    </div>

                                    {/* Submit Button (reduced width) */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[60%] bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition transform hover:scale-105"
          >
            Send Message
          </button>
        </div>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>

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
        </motion.div>
    );
};

export default Project;