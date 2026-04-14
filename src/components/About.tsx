import React from "react";
import { motion } from "framer-motion";
import { Code, BarChart3, BookOpen } from "lucide-react";

const About: React.FC = () => {
  const cards = [
    {
      icon: <Code size={28} />,
      title: "Full Stack Development",
      description:
        "Skilled in building end-to-end web applications using technologies like React, Tailwind CSS, and Python. Comfortable working across both frontend and backend to create responsive, user-friendly interfaces and efficient server-side logic.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "ServiceNow Automation",
      description:
        "Experienced in ServiceNow development for ITSM, including Incident & Problem Management, Business Rules, Script Includes, Flow Designer, and ATF. Worked in Agile environments, collaborating with cross-functional teams to streamline infrastructure services and enhance resolution times.",
    },
    {
      icon: <BookOpen size={28} />,
      title: "Continuous Learning",
      description:
        "Driven by a passion for technology, I continuously expand my knowledge through academic learning, hands-on projects, and staying up-to-date with industry trends. I actively explore new tools, sharpen my skills, and apply them to create impactful, real-world solutions.",
    },
  ];

  return (
    <section id="about" className="page-section py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-grow border-t border-dashed border-blue-400 mx-2"></div>
            <h2 className="text-3xl font-bold text-gray-800 whitespace-nowrap">
              About Me
            </h2>
            <div className="flex-grow border-t border-dashed border-blue-400 mx-2"></div>
          </div>

          {/* About Paragraph */}
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed text-center mb-16">
            I’m a Computer Science graduate student with professional experience in ServiceNow development and enterprise IT solutions. At Accenture, I worked on designing and optimizing ITSM systems that improved efficiency and reduced downtime.
            I enjoy solving real-world problems through clean, scalable solutions — whether it’s designing workflows, analyzing data, or building intelligent applications.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                  {card.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {card.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
