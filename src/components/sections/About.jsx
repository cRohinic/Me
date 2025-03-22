import { motion } from "framer-motion"; // Import framer-motion
import { RevealOnScroll } from "../RevealOnScroll";
import AboutImage from "../../assets/rohi.jpeg"; // Import the same image

export const About = () => {
  // Organize skills into more categories for better presentation
  const frontendSkills = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS",
    "Tailwind CSS",
    "EJS",
    "Figma",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "TypeScript",
    "RESTful APIs",
    "WebSocket",
  ];

  const databaseSkills = ["MongoDB", "PostgreSQL"];
  
  const architectureSkills = [
    "MVC", 
    "Microservices"
  ];

  const devOpsSkills = [
    "AWS",
    "AWS EC2",
    "NGINX",
    "PM2",
  ];

  const devTools = [
    "VS Code",
    "Git",
    "GitHub",
    "npm",
    "Postman",
  ];

  const thirdPartyAPIs = ["Razorpay", "Google Auth", "Google Analytics", "JWT"];

  const dataStructures = [
    "Array",
    "String",
    "Linked List",
    "Stack",
    "Queue",
    "HashMap",
    "Trie",
    "Heap",
    "Tree",
    "Graph",
  ];

  // Font style that will be used consistently throughout the component
  const mainFontStyle = {
    fontFamily: "'Playfair Display', serif"
  };

  // Container animation variants
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
  
  // Item animation variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Education data in chronological order (most recent first)
  const educationData = [
    { degree: "MERN Stack Development", institution: "Brototype, Kochi", year: "Oct 2023 - Dec 2025" },
    { degree: "BSc Chemistry", institution: "Kerala University", year: "Aug 2020 - May 2023" },
  ];

  // Work experience data in chronological order (most recent first)
  const experienceData = [
    {
      degree: "MERN Stack Developer Intern",
      institution: "Zm QR Code Services, Gundur",
      year: "Jan 2025 – Feb 2025",
      description: [
        "Developed and maintained full-stack web applications using MERN stack technologies.",
        "Built responsive and user-friendly interfaces using React.js and Tailwind CSS.",
        "Created RESTful APIs and integrated third-party services.",
        "Collaborated with team members using Git for version control.",
      ],
    },
  ];

  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-12">
      <RevealOnScroll>
        {/* About Me Section Title - Properly positioned at the top */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-10 bg-clip-text text-transparent text-center leading-tight"
          style={{ 
            backgroundImage: "linear-gradient(to right, #556b2f, #808000)",
            ...mainFontStyle
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Who Am I ?
        </motion.h2>
        
        {/* Experience Section - Moved to top and made more prominent */}
        <motion.div 
          className="max-w-6xl mx-auto mb-16 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="rounded-xl p-8 border-white/10 border shadow-lg hover:-translate-y-2 transition-all bg-black/30 backdrop-blur-sm"
            whileHover={{ 
              boxShadow: "0 15px 30px rgba(128, 128, 0, 0.3)" 
            }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent"
              style={{ 
                backgroundImage: "linear-gradient(to right, #9ACD32, #808000)",
                ...mainFontStyle
              }}
            >
              💼 Professional Experience
            </motion.h2>
            
            <div className="space-y-6">
              {experienceData.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l-3 border-[#9ACD32] pb-6"
                >
                  {/* Larger Timeline dot for experience */}
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-[#9ACD32] shadow-[0_0_10px_rgba(154,205,50,0.8)]"></div>
                  
                  {/* Enhanced Content */}
                  <div className="bg-black/20 p-6 rounded-lg border border-white/10 hover:border-[#9ACD32]/30 transition-all">
                    <h3 className="font-bold text-2xl text-[#9ACD32]" style={mainFontStyle}>{item.degree}</h3>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-2">
                      <p className="text-gray-300 font-medium">{item.institution}</p>
                      <p className="text-gray-400 mt-1 md:mt-0">{item.year}</p>
                    </div>
                    
                    {item.description && (
                      <motion.ul 
                        className="list-none mt-4 space-y-3 text-gray-300"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                      >
                        {item.description.map((desc, idx) => (
                          <motion.li 
                            key={idx}
                            variants={itemVariants}
                            className="flex items-start"
                          >
                            <span className="text-[#9ACD32] mr-2 mt-1">▹</span>
                            <span>{desc}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Profile Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Image - Left Side with enhanced animations */}
            <motion.div 
              className="md:w-2/5 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div 
                className="relative w-72 h-72 md:w-96 md:h-96"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Enhanced Animated Background */}
                <motion.div 
                  className="absolute -inset-4 rounded-xl"
                  style={{ 
                    background: "linear-gradient(45deg, #556b2f, #808000, #9ACD32)" 
                  }}
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    repeatType: "mirror" 
                  }}
                />
                
                {/* Main Image Container with Enhanced Animations */}
                <motion.div 
                  className="relative z-10 w-full h-full rounded-xl overflow-hidden shadow-xl"
                  animate={{
                    boxShadow: [
                      "0 5px 15px rgba(0,0,0,0.3)",
                      "0 15px 30px rgba(85,107,47,0.5)",
                      "0 5px 15px rgba(0,0,0,0.3)"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  {/* Enhanced Animated Border */}
                  <motion.div
                    className="absolute inset-0 border-3 border-transparent rounded-xl z-20"
                    animate={{
                      borderColor: ["rgba(154,205,50,0)", "rgba(154,205,50,0.8)", "rgba(154,205,50,0)"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  
                  {/* Glowing Overlay */}
                  <motion.div
                    className="absolute inset-0 z-30 rounded-xl"
                    animate={{
                      boxShadow: [
                        "inset 0 0 0px rgba(154,205,50,0)",
                        "inset 0 0 15px rgba(154,205,50,0.3)",
                        "inset 0 0 0px rgba(154,205,50,0)"
                      ]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  
                  {/* Animated Image with subtle zoom */}
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
                      src={AboutImage} 
                      alt="Rohini C" 
                      className="w-full h-full object-cover" 
                    />
                  </motion.div>
                  
                  {/* Enhanced Corner Accents */}
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute w-8 h-8 border-3 z-20"
                      style={{
                        borderColor: "#9ACD32",
                        top: i < 2 ? "-2px" : "auto",
                        bottom: i >= 2 ? "-2px" : "auto",
                        left: i % 2 === 0 ? "-2px" : "auto",
                        right: i % 2 === 1 ? "-2px" : "auto",
                        borderTop: i < 2 ? "3px solid" : "none",
                        borderBottom: i >= 2 ? "3px solid" : "none",
                        borderLeft: i % 2 === 0 ? "3px solid" : "none",
                        borderRight: i % 2 === 1 ? "3px solid" : "none",
                        borderTopLeftRadius: i === 0 ? "12px" : "0",
                        borderTopRightRadius: i === 1 ? "12px" : "0",
                        borderBottomLeftRadius: i === 2 ? "12px" : "0",
                        borderBottomRightRadius: i === 3 ? "12px" : "0"
                      }}
                      animate={{
                        width: ["32px", "40px", "32px"],
                        height: ["32px", "40px", "32px"],
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
                </motion.div>
              </motion.div>
            </motion.div>
 
            {/* Content - Right Side with enhanced styling */}
            <motion.div 
              className="md:w-3/5"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div 
                className="rounded-xl p-8 border-white/10 border bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm hover:-translate-y-2 transition-all"
                whileHover={{ 
                  boxShadow: "0 15px 30px rgba(128, 128, 0, 0.2)" 
                }}
              >
                
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold mb-6 text-[#9ACD32]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    ...mainFontStyle,
                    textShadow: "0px 0px 10px rgba(154, 205, 50, 0.4)",
                  }}
                >
                  Hello, I'm Rohini C
                </motion.h3>
                
                <motion.div
                  className="relative mb-6 pl-4 border-l-2 border-[#9ACD32]"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <p className="text-lg text-[#9ACD32] italic" style={mainFontStyle}>
                    "Transforming ideas into seamless digital experiences"
                  </p>
                </motion.div>
                
                <motion.p 
                  className="text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={mainFontStyle}
                >
            I'm a passionate MERN stack developer with one year of hands-on experience in building personal projects and two months of internship experience. As a self-taught developer, I have a strong foundation in creating scalable, high-performance applications. My journey from a BSc in Chemistry to MERN-stack development reflects my adaptability and relentless drive to master new technologies.
                </motion.p>
                
                <motion.p 
                  className="text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={mainFontStyle}
                >
                  Proficient in MongoDB, Express.js, React, and Node.js, I create seamless user experiences, 
                  integrating secure payment systems, API functionalities, and cloud deployments. My projects 
                  range from e-commerce platforms to gym management applications, focusing on performance, security, 
                  and usability.
                </motion.p>
                
                {/* Key highlights with icons */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {[
                    { icon: "", text: "Specialized in full-stack MERN development" },
                    { icon: "", text: "Proficient in RESTful API design & integration" },
                    { icon: "", text: "Experienced with AWS cloud deployments" },
                    { icon: "", text: "Focus on application security & performance" }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="flex items-center p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-all"
                    >
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <span className="text-gray-200" style={mainFontStyle}>{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Education Section - Repositioned after experience and profile */}
        <motion.div 
          className="max-w-6xl mx-auto mb-16 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.div
            className="rounded-xl p-8 border-white/10 border hover:-translate-y-2 transition-all bg-black/20 backdrop-blur-sm"
            whileHover={{ 
              boxShadow: "0 10px 25px rgba(128, 128, 0, 0.2)" 
            }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent"
              style={{ 
                backgroundImage: "linear-gradient(to right, #9ACD32, #808000)",
                ...mainFontStyle
              }}
            >
              🎓 Education
            </motion.h2>
            
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-[#808000] pb-6"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-5px] top-0 w-3 h-3 rounded-full bg-[#808000]"></div>
                  
                  {/* Content */}
                  <div className="bg-black/10 p-5 rounded-lg border border-white/10">
                    <h3 className="font-bold text-xl text-[#9ACD32]" style={mainFontStyle}>{item.degree}</h3>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-2">
                      <p className="text-gray-300">{item.institution}</p>
                      <p className="text-gray-400 mt-1 md:mt-0">{item.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section - Maintained at the bottom */}
        <div className="max-w-6xl mx-auto w-full">
          <motion.div
            className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all bg-black/20 backdrop-blur-sm"
            whileHover={{ 
              boxShadow: "0 10px 25px rgba(128, 128, 0, 0.2)" 
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent text-center"
              style={{ 
                backgroundImage: "linear-gradient(to right, #556b2f, #808000)",
                ...mainFontStyle
              }}
            >
              I Work With:
            </motion.h2>

            {/* Main Skills Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <SkillSection title="Frontend" skills={frontendSkills} mainFontStyle={mainFontStyle} />
              </motion.div>
              <motion.div variants={itemVariants}>
                <SkillSection title="Backend" skills={backendSkills} mainFontStyle={mainFontStyle} />
              </motion.div>
              <motion.div variants={itemVariants}>
                <SkillSection title="Databases" skills={databaseSkills} mainFontStyle={mainFontStyle} />
              </motion.div>
            </motion.div>

            {/* Secondary Skills Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <SkillSection title="Architecture" skills={architectureSkills} mainFontStyle={mainFontStyle} />
              </motion.div>
              <motion.div variants={itemVariants}>
                <SkillSection title="DevOps" skills={devOpsSkills} mainFontStyle={mainFontStyle} />
              </motion.div>
              <motion.div variants={itemVariants}>
                <SkillSection title="Development Tools" skills={devTools} mainFontStyle={mainFontStyle} />
              </motion.div>
            </motion.div>

            {/* Third Skills Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <SkillSection title="Third-Party APIs" skills={thirdPartyAPIs} mainFontStyle={mainFontStyle} />
              </motion.div>
              <motion.div variants={itemVariants}>
                <SkillSection title="Data Structures" skills={dataStructures} mainFontStyle={mainFontStyle} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

// Reusable Component for Skills with motion
const SkillSection = ({ title, skills, mainFontStyle }) => (
  <motion.div 
    className="rounded-xl p-4 hover:-translate-y-1 transition-all border border-white/10"
    whileHover={{ 
      boxShadow: "0 10px 25px rgba(128, 128, 0, 0.15)" 
    }}
  >
    <h3 
      className="text-lg font-bold mb-3" 
      style={{ 
        color: "#9ACD32",
        textShadow: "0px 0px 8px rgba(154, 205, 50, 0.4)",
        ...mainFontStyle
      }}
    >
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((tech, key) => (
        <motion.span
          key={key}
          className="bg-opacity-10 py-1 px-3 rounded-full text-sm transition"
          style={{ 
            backgroundColor: "rgba(85, 107, 47, 0.1)",
            color: "#808000",
            ...mainFontStyle
          }}
          whileHover={{ 
            backgroundColor: "rgba(85, 107, 47, 0.2)",
            boxShadow: "0 2px 8px rgba(85, 107, 47, 0.2)",
            scale: 1.05
          }}
          whileTap={{ scale: 0.95 }}
        >
          {tech}
        </motion.span>
      ))}
    </div>
  </motion.div>
);