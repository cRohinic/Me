import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [sending, setSending] = useState(false);
  
  // Added main font style to match
  const mainFontStyle = {
    fontFamily: "'Playfair Display', serif"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        setSending(false);
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setSending(false);
        alert("Oops! Something went wrong. Please try again.");
      });
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    }
  };
  
  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15
      }
    }
  };
  
  const inputVariants = {
    hidden: { 
      x: -20, 
      opacity: 0 
    },
    visible: i => ({ 
      x: 0, 
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }),
    focus: {
      scale: 1.01,
      borderColor: "rgba(132, 204, 22, 1)",
      boxShadow: "0 0 10px rgba(132, 204, 22, 0.3)",
      transition: { duration: 0.2 }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#9fe02f",
      boxShadow: "0 4px 12px rgba(132, 204, 22, 0.3)",
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  // Loading animation
  const loadingVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-black"
    >
      <motion.div 
        className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6 border border-lime-900/40 rounded-lg"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8 text-lime-500 text-center"
          variants={titleVariants}
          style={{ 
            ...mainFontStyle,
            letterSpacing: "0.5px"
          }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.form 
          className="space-y-6" 
          onSubmit={handleSubmit}
          variants={formVariants}
        >
          <motion.div 
            className="relative"
            variants={inputVariants}
            custom={0}
          >
            <motion.input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className="w-full bg-black/80 border border-lime-900/40 rounded-lg px-4 py-3 text-white transition focus:outline-none"
              placeholder="Name..."
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              whileFocus="focus"
              style={mainFontStyle}
            />
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={inputVariants}
            custom={1}
          >
            <motion.input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className="w-full bg-black/80 border border-lime-900/40 rounded-lg px-4 py-3 text-white transition focus:outline-none"
              placeholder="example@gmail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              whileFocus="focus"
              style={mainFontStyle}
            />
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={inputVariants}
            custom={2}
          >
            <motion.textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              className="w-full bg-black/80 border border-lime-900/40 rounded-lg px-4 py-3 text-white transition focus:outline-none"
              placeholder="Your Message..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              whileFocus="focus"
              style={mainFontStyle}
            />
          </motion.div>
          
          <motion.button
            type="submit"
            className="w-full bg-lime-500 text-black py-3 px-6 rounded-lg font-medium"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            disabled={sending}
            style={{ 
              ...mainFontStyle,
              fontWeight: 500,
              letterSpacing: "0.3px"
            }}
          >
            {sending ? (
              <motion.span
                variants={loadingVariants}
                animate="animate"
              >
                Sending...
              </motion.span>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};