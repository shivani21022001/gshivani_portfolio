import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Award, GraduationCap, BookOpen } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements?: string[];
}

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationItems: EducationItem[] = [
    {
      degree: "Master of Engineering in Computer Science",
      institution: "Oregon State University",
      period: "2024 - 2026",
      description: "Focused on software engineering, data analytics, and intelligent systems. Developing advanced skills in scalable application design, machine learning, and modern system architecture.",
      achievements: [
        "Current GPA: 3.60",
      ]
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "CMR College of Engineering & Technology",
      period: "2018 - 2022",
      description: "Built a strong foundation in programming, algorithms, and software development. Gained practical problem-solving experience through academic and technical projects.",
      achievements: [
        "Current GPA: 3.65",
      ]
    }
  ];

  const certifications = [
    "ServiceNow Certified Implementation Specialist - IT Service Management",
    "Certified Application Developer",
    "Certified System Administrator",
    "HackerRank- Java, Python"
  ];

  return (
    <section id="education" className="page-section bg-white">
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
              Education
            </h2>

            <div className="flex-grow border-t border-dashed border-blue-400 mx-2"></div>
          </div>


          <div className="max-w-4xl mx-auto">
            <div className="space-y-10 mb-12">
              {educationItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className="bg-gray-50 rounded-lg p-6 shadow-sm"
                >
                  <div className="flex items-start">
                    <div className="hidden sm:block mr-6">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <GraduationCap size={24} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{item.degree}</h3>
                          <h4 className="text-lg font-medium text-blue-600">{item.institution}</h4>
                        </div>
                        <div className="mt-2 md:mt-0 flex items-center text-gray-600">
                          <Calendar size={18} className="mr-2" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{item.description}</p>
                      
                      {item.achievements && (
                        <div>
                          <h5 className="font-medium text-gray-800 mb-2">Achievements:</h5>
                          <ul className="ml-6 list-disc space-y-1 text-gray-700">
                            {item.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                <Award size={24} className="mr-3 text-blue-600" />
                Certifications & Additional Training
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.8 + 0.1 * index }}
                    className="flex items-center p-4 bg-gray-50 rounded-lg"
                  >
                    <BookOpen size={15} className="mr-3 text-blue-600" />
                    <span className="text-gray-700">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;