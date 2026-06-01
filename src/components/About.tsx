import React from "react";
import { motion } from "framer-motion";
import { Code, BarChart3, BookOpen } from "lucide-react";

const About: React.FC = () => {
  const cards = [
    {
      icon: <Code size={28} />,
      title: "ServiceNow Development",
      description:
        "Experienced in designing, customizing, and supporting enterprise ServiceNow solutions across ITSM, CMDB, Service Catalog, workflow automation, and platform administration. Skilled in Business Rules, Client Scripts, Script Includes, UI Policies, UI Actions, Flow Designer, and ACLs.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Automation & Integrations",
      description:
        "Strong background in automating business processes, improving IT operations, and integrating ServiceNow with external enterprise systems using REST/SOAP APIs, IntegrationHub, and custom scripting. Experienced in ATF testing, regression testing, defect tracking, and release validation.",
    },
    {
      icon: <BookOpen size={28} />,
      title: "Software Engineering & Learning",
      description:
        "Passionate about continuous learning and building scalable technology solutions. Skilled in JavaScript, Python, Java, SQL, React.js, REST APIs, cloud technologies, Agile/Scrum, and machine learning concepts through academic projects and hands-on development experience.",
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
            I am a Software Engineer and ServiceNow Developer with over 4 years of
            experience in enterprise application development, ITSM process optimization,
            workflow automation, and platform integrations. I specialize in building
            scalable ServiceNow solutions across Incident, Problem, Change, Service
            Catalog, and CMDB modules, while using JavaScript, REST APIs, Flow Designer,
            and Automated Test Framework to improve system performance and reliability.
            Along with my ServiceNow expertise, I bring strong foundations in full-stack
            development, cloud technologies, databases, Agile/Scrum collaboration, and
            machine learning projects.
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
