import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaCode, FaEnvelope, FaFileDownload } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";
import RohuImage from "../../assets/rohu.jpg";
import ResumeFile from "../../assets/ROHINI C.pdf";

export const Home = () => {
  // Constants and state
  const roles = ["MERN Stack Developer", "Frontend Developer", "Web Developer", "Backend Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  // Consistent styling
  const mainFontStyle = {
    fontFamily: "'Playfair Display', serif"
  };
  
  // Effects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Handlers
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = ResumeFile;
    link.download = 'ROHINI_C_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Animation variants
  const textAnimations = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  const socialIconAnimation = {
    whileHover: { scale: 1.2, rotate: 8, color: "#808000" },
    whileTap: { scale: 0.9 }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 md:px-12"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side Content */}
          <motion.div 
            className="md:w-3/5 text-left z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Introduction */}
            <motion.h1
              className="text-3xl md:text-2xl font-bold mb-3 mt-15 bg-clip-text text-transparent leading-tight"
              style={{
                backgroundImage: "linear-gradient(to right, #556b2f, #808000)",
                ...mainFontStyle
              }}
              initial={textAnimations.initial}
              animate={textAnimations.animate}
              transition={{ ...textAnimations.transition, delay: 0.2 }}
            >
              Hello, My Name is ROHINI C.
            </motion.h1>

            {/* Main Heading */}
            <motion.h1 
              className="text-5xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent leading-tight"
              style={{ 
                backgroundImage: "linear-gradient(to right, #556b2f, #808000)",
                ...mainFontStyle
              }}
              initial={textAnimations.initial}
              animate={textAnimations.animate}
              transition={{ ...textAnimations.transition, delay: 0.3 }}
            >
              Building Scalable Full Stack Web Apps with Modern Technologies
            </motion.h1>

            {/* Animated Role Text */}
            <motion.div
              className="h-10 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.h2 
                className="text-xl md:text-2xl font-bold"
                key={roles[currentRoleIndex]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                style={{ 
                  color: "#9ACD32",
                  textShadow: "0px 0px 8px rgba(154, 205, 50, 0.4)",
                  ...mainFontStyle
                }}
              >
                {roles[currentRoleIndex]}
              </motion.h2>
            </motion.div>

            {/* Taglines */}
            <motion.p 
              className="text-gray-400 text-lg mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={mainFontStyle}
            >
              Who said coding can't be fun?
            </motion.p>

            <motion.p 
              className="text-gray-400 text-lg mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={mainFontStyle}
            >
              Let's build something awesome!
            </motion.p>

            {/* Social Icons */}
            <motion.div 
              className="flex space-x-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-300"
                whileHover={socialIconAnimation.whileHover}
                whileTap={socialIconAnimation.whileTap}
              >
                <FaGithub size={28} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-300"
                whileHover={socialIconAnimation.whileHover}
                whileTap={socialIconAnimation.whileTap}
              >
                <FaLinkedin size={28} />
              </motion.a>
              <motion.a 
                href="https://leetcode.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-300"
                whileHover={socialIconAnimation.whileHover}
                whileTap={socialIconAnimation.whileTap}
              >
                <FaCode size={28} />
              </motion.a>
              <motion.a 
                href="mailto:rohinic699@gmail.com" 
                className="text-gray-400 transition-colors duration-300"
                whileHover={socialIconAnimation.whileHover}
                whileTap={socialIconAnimation.whileTap}
              >
                <FaEnvelope size={28} />
              </motion.a>
            </motion.div>

            {/* Resume Download Button */}
            <motion.button
              onClick={handleResumeDownload}
              className="inline-flex items-center gap-2 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200"
              style={{ 
                background: "linear-gradient(to right, #556b2f, #808000)",
                ...mainFontStyle
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 15px rgba(128, 128, 0, 0.6)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload /> Download Resume
            </motion.button>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div 
            className="md:w-2/5 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              {/* Background Gradient Animation */}
              <motion.div 
                className="absolute -inset-2 rounded-xl"
                style={{ 
                  background: "linear-gradient(to right, #556b2f, #808000)" 
                }}
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "mirror" 
                }}
              />
              
              {/* Floating Dots Animation */}
              <motion.div
                className="absolute -inset-4 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      top: `${20 + Math.random() * 80}%`,
                      left: `${20 + Math.random() * 80}%`,
                      backgroundColor: "#9ACD32"
                    }}
                    animate={{
                      y: [0, -10, 0, 10, 0],
                      x: [0, 10, 0, -10, 0],
                      opacity: [0.6, 0.8, 0.6]
                    }}
                    transition={{
                      duration: 5 + Math.random() * 3,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </motion.div>
              
              {/* Main Image Container */}
              <motion.div 
                className="relative z-10 w-full h-full rounded-xl overflow-hidden shadow-xl"
                animate={{
                  boxShadow: [
                    "0 5px 15px rgba(0,0,0,0.3)",
                    "0 15px 25px rgba(85,107,47,0.4)",
                    "0 5px 15px rgba(0,0,0,0.3)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-xl z-20"
                  animate={{
                    borderColor: ["rgba(128,128,0,0)", "rgba(128,128,0,0.7)", "rgba(128,128,0,0)"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                {/* Profile Image with Zoom Effect */}
                <motion.div
                  className="w-full h-full"
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <img 
                    src={RohuImage} 
                    alt="Rohini C" 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
                
                {/* Overlay Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0"
                  animate={{
                    opacity: [0, 0.15, 0],
                    left: ["-100%", "100%", "100%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 4
                  }}
                />
                
                {/* Corner Accents */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute w-6 h-6 border-2 z-20"
                    style={{
                      borderColor: "#808000",
                      top: i < 2 ? "-2px" : "auto",
                      bottom: i >= 2 ? "-2px" : "auto",
                      left: i % 2 === 0 ? "-2px" : "auto",
                      right: i % 2 === 1 ? "-2px" : "auto",
                      borderTop: i < 2 ? "2px solid" : "none",
                      borderBottom: i >= 2 ? "2px solid" : "none",
                      borderLeft: i % 2 === 0 ? "2px solid" : "none",
                      borderRight: i % 2 === 1 ? "2px solid" : "none",
                      borderTopLeftRadius: i === 0 ? "10px" : "0",
                      borderTopRightRadius: i === 1 ? "10px" : "0",
                      borderBottomLeftRadius: i === 2 ? "10px" : "0",
                      borderBottomRightRadius: i === 3 ? "10px" : "0"
                    }}
                    animate={{
                      width: ["24px", "32px", "24px"],
                      height: ["24px", "32px", "24px"],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.2
                    }}
                  />
                ))}
                
                {/* Particle Effect */}
                <motion.div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: `${4 + Math.random() * 4}px`,
                        height: `${4 + Math.random() * 4}px`,
                        backgroundColor: "rgba(154, 205, 50, 0.6)",
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`
                      }}
                      animate={{
                        y: [0, -(20 + Math.random() * 80)],
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0.5]
                      }}
                      transition={{
                        duration: 2 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 5
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};