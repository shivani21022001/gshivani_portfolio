import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "Perfume Paradise - E-Commerce Website",
      description: "Perfume Paradise is a frontend e-commerce web application built using React (Vite). It allows users to browse perfumes by brand, search products, add items to a cart, and login/signup to place orders. The project focuses on providing a clean UI and a realistic online shopping experience using React components.",
      image: "/PerfumeParadise.png",
      tags: ["React", "JacaScript", "HTML", "CSS", "Tailwind CSS"],
      githubUrl: "https://github.com/shivani21022001/E-Commerce-Website",
      liveUrl: "https://github.com/shivani21022001/E-Commerce-Website"
    },
    {
      id: 2,
      title: "Diabetes Diagnosis in Iraq",
      description: "A full-featured e-commerce platform with product management, cart functionality, payment processing, and user authentication built with React, Node.js, and MongoDB.",
      image: "https://st2.depositphotos.com/1092019/10966/i/950/depositphotos_109660860-stock-photo-diabetes-diagnosis-medical-concept.jpg",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      githubUrl: "https://github.com/shivani21022001/Diabetes-Diagnosis-in-Iraq",
      liveUrl: "/FinalReport_ML_ShivaniGadipe.pdf"
    },
    {
      id: 3,
      title: "How Code Reviews Relate to the Bugs in Software",
      description: "A task management application with features such as task creation, assignment, status tracking, and team collaboration, built with React and Firebase.",
      image: "https://media.istockphoto.com/id/1291641896/photo/program-code-on-computer-display-in-magnifying-glass-close-up.jpg?s=612x612&w=0&k=20&c=SZi1x4U-Gk3dyEQULcxsKtL3p65mjirMWlRp_Yd5KPo=",
      tags: ["React", "Firebase", "Material UI", "Authentication"],
      githubUrl: "https://github.com/shivani21022001/CS563-Study-Project",
      liveUrl: "/CS_563_Project_Final_Writeup.pdf"
    },
    {
      id: 4,
      title: "Brain Tumor Detection",
      description: "A personal portfolio website to showcase my projects and skills, built with React and styled with Tailwind CSS, featuring smooth animations and responsive design.",
      image: "https://www.news-medical.net/images/news/ImageForNews_796435_17321907019005277.jpg",
      tags: ["React", "Tailwind CSS", "Responsive Design", "Framer Motion"],
      githubUrl: "https://github.com",
      liveUrl: "/Shivani Major project.pdf"
    }
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="page-section bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-12">
            <div className="flex-grow border-t border-dashed border-blue-400 mx-2"></div>

            <h2 className="text-3xl font-bold text-center text-gray-800 whitespace-nowrap">
              My Projects
            </h2>

            <div className="flex-grow border-t border-dashed border-blue-400 mx-2"></div>
          </div>


          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.15 * index }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 project-card"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                      style={{ 
                        transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-xl font-bold truncate">{project.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                      
                      <a 
                        href={project.githubUrl}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-300 text-sm font-medium"
                      >
                        View Project
                        <ChevronRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/shivani21022001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              <Github size={20} className="mr-2" />
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;