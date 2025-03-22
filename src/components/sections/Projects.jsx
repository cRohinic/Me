import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  
  // Added mainFontStyle constant
  const mainFontStyle = {
    fontFamily: "'Playfair Display', serif"
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/cRohinic/repos");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        let fetchedProjects = await response.json();
        
        // Custom order: FitShe, Naturro, Dreamy, Portfolio come first
        const priorityProjects = ["fitShe", "Naturro", "Dreamy", "Portfolio"];
        const sortedProjects = fetchedProjects.sort((a, b) => {
          const indexA = priorityProjects.indexOf(a.name);
          const indexB = priorityProjects.indexOf(b.name);
          return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
        });
        
        setProjects(sortedProjects);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);

  // Enhanced animation variants
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

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.6
      }
    },
    hover: {
      y: -6,
      scale: 1.02,
      borderColor: "rgba(132, 204, 22, 0.5)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.6,
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

  const linkVariants = {
    hover: {
      x: 5,
      color: "#d9fb87",
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  // Loading animation
  const loadingVariants = {
    animate: {
      opacity: [0.4, 1, 0.4],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 bg-black">
        <motion.div 
          variants={loadingVariants}
          animate="animate"
          className="text-xl font-medium text-lime-500"
        >
          Loading projects...
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64 bg-black">
        <div className="text-xl font-medium text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <section id="projects" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center text-lime-500 mb-12"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            ...mainFontStyle,
            letterSpacing: "0.5px"
          }}
        >
          Latest Projects
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div 
              key={project.id} 
              className="bg-black rounded-lg overflow-hidden border border-lime-900/40 transition-all duration-300 shadow-lg"
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              onHoverStart={() => setActiveProject(index)}
              onHoverEnd={() => setActiveProject(null)}
            >
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-semibold text-lime-500 mb-2"
                  style={{ 
                    ...mainFontStyle,
                    letterSpacing: "0.2px"
                  }}
                  animate={{ 
                    scale: activeProject === index ? 1.02 : 1,
                    transition: { duration: 0.3 }
                  }}
                >
                  {project.name}
                </motion.h3>
                <motion.p 
                  className="text-gray-300 mb-4 h-20 overflow-hidden"
                  style={{ 
                    ...mainFontStyle,
                    fontWeight: 300,
                    lineHeight: 1.6
                  }}
                >
                  {project.description || "A specialized development project with details available on repository."}
                </motion.p>
                <motion.a 
                  href={project.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-medium text-lime-500 transition-colors"
                  variants={linkVariants}
                  whileHover="hover"
                  style={{ 
                    ...mainFontStyle,
                    fontWeight: 500
                  }}
                >
                  View Project Details →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Show More Button */}
        {visibleProjects < projects.length && (
          <div className="flex justify-center mt-10">
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setVisibleProjects(visibleProjects + 4)}
              className="px-6 py-3 text-black font-medium bg-lime-500 rounded-lg shadow-md"
              style={{ 
                ...mainFontStyle,
                fontWeight: 500,
                letterSpacing: "0.3px"
              }}
            >
              Load Additional Projects
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};