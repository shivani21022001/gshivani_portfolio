import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaJava, FaGitAlt, FaDatabase, FaPython, FaCuttlefish, FaTools } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { MdOutlineGroups, MdOutlineAccessTime, MdOutlineRecordVoiceOver, MdOutlinePsychology } from 'react-icons/md';

interface SkillIcon {
  name: string;
  icon: JSX.Element;
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const technicalIcons: SkillIcon[] = [
    { name: 'C/C++', icon: <FaCuttlefish size={32} color="#00599C" /> },
    { name: 'Java', icon: <FaJava size={32} color="#f89820" /> },
    { name: 'Python', icon: <FaPython size={32} color="#3776AB" /> },
    { name: 'HTML/CSS', icon: <FaHtml5 size={32} color="#E34F26" /> },
    { name: 'JavaScript', icon: <FaJs size={32} color="#F7DF1E" /> },
    { name: 'TypeScript', icon: <SiTypescript size={32} color="#007ACC" /> },
    { name: 'React', icon: <FaReact size={32} color="#61DAFB" /> },
    { name: 'Node.js', icon: <FaNodeJs size={32} color="#3C873A" /> },
    { name: 'SQL/NoSQL', icon: <FaDatabase size={32} color="#4DB33D" /> },
    { name: 'Git/GitHub', icon: <FaGitAlt size={32} color="#F05032" /> },
    { name: 'ServiceNow', icon: <FaTools size={32} color="#00A1B1" /> },
  ];

  const softIcons: SkillIcon[] = [
    { name: 'Problem Solving', icon: <MdOutlinePsychology size={32} /> },
    { name: 'Team Collaboration', icon: <MdOutlineGroups size={32} /> },
    { name: 'Time Management', icon: <MdOutlineAccessTime size={32} /> },
    { name: 'Communication', icon: <MdOutlineRecordVoiceOver size={32} /> },
  ];

  const tools = ['VS Code', 'GitHub', 'Figma', 'Postman', 'JIRA', 'ServiceNow'];

  return (
    <section id="skills" className="page-section bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-12">
            <div className="flex-grow border-t border-dashed border-blue-400 mx-2"></div>
            <h2 className="text-3xl font-bold text-center text-gray-800 whitespace-nowrap">My Skills</h2>
            <div className="flex-grow border-t border-dashed border-blue-400 mx-2"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-semibold mb-8 text-gray-800">Technical Skills</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                  {technicalIcons.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center text-gray-700">
                      {skill.icon}
                      <span className="text-sm mt-2 text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-semibold mb-8 text-gray-800">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-6">
                  {softIcons.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center text-gray-700">
                      {skill.icon}
                      <span className="text-sm mt-2 text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-16 w-full flex flex-col items-center">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {tools.map((tool, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, delay: 0.05 * index }}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm border border-blue-500 shadow-sm"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;