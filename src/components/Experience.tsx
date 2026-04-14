import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin } from "lucide-react";

// Logos from public folder
import accentureLogo from "/Accenture-logo.jpg";
import osuLogo from "/osu-foundation-logo.png";

type Role = {
  title: string;
  period: string;
  description: string[];
  skills: string[];
};

type ExperienceItem = {
  key: "accenture" | "osu";
  company: string;
  location: string;
  logo: string;
  roles: Role[];
};

const Experience: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [flipState, setFlipState] = useState<Record<ExperienceItem["key"], boolean>>({
    accenture: false,
    osu: false,
  });

  const handleFlip = (key: ExperienceItem["key"]) => {
    setFlipState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const experiences: ExperienceItem[] = [
    {
      key: "accenture",
      company: "Accenture",
      location: "Hyderabad, India",
      logo: accentureLogo,
      roles: [
        {
          title: "ServiceNow Developer",
          period: "July 2022 - September 2024",
          description: [
            "Developed and enhanced ServiceNow ITSM solutions, helping reduce recurring incidents by 20%.",
            "Built automated testing scripts and supported Agile development processes to ensure stable and reliable releases.",
            "Troubleshot critical production issues and performed root cause analysis, reducing system downtime by 40%.",
            "Improved workflows and system performance through automation and structured problem-solving.",
          ],
          skills: ["CSA", "CAD", "ITSM"],
        },
        {
          title: "ServiceNow Developer Intern",
          period: "June 2021 - December 2021",
          description: [
            "Assisted in designing and developing applications on the ServiceNow platform.",
            "Developed and updated Business Rules, Client Scripts, and UI Policies using JavaScript.",
            "Participated in requirement gathering discussions with project teams.",
            "Supported testing activities, including documentation and issue tracking.",
          ],
          skills: ["JavaScript", "Business Rules", "Client Scripts", "UI Policies"],
        },
      ],
    },
    {
      key: "osu",
      company: "OSU Foundation",
      location: "Corvallis, OR",
      logo: osuLogo,
      roles: [
        {
          title: "Finance Assistant (Part-time)",
          period: "February 2025 - March 2026",
          description: [
            "Supported gift administration processes through accurate data entry and organized record management.",
            "Managed document filing, scanning, and database updates to maintain audit-ready financial records.",
            "Collaborated with finance teams to assist with administrative and coordination tasks.",
            "Maintained confidentiality while handling sensitive financial information.",
          ],
          skills: ["Microsoft Office", "Data Entry", "Finance Coordination"],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-grow border-t border-dashed border-blue-400 mx-2"></div>
            <h2 className="text-3xl font-bold text-gray-800 whitespace-nowrap">
              Work Experience
            </h2>
            <div className="flex-grow border-t border-dashed border-blue-400 mx-2"></div>
          </div>

          {/* Cards */}
          <div className="flex flex-col items-center gap-10 max-w-4xl mx-auto">
            {experiences.map((exp) => (
              <div
                key={exp.key}
                className="relative w-full h-[300px] [perspective:1000px]"
              >
                <div
                  onClick={() => handleFlip(exp.key)}
                  className="relative w-full h-full transition-transform duration-700"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flipState[exp.key]
                      ? "rotateY(180deg)"
                      : "rotateY(0deg)",
                  }}
                >
                  {/* FRONT (Logo) */}
                  <div
                  className="absolute inset-0 flex items-center justify-center bg-white rounded-xl shadow-xl cursor-pointer group"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {/* Logo */}
                  <img
                    src={exp.logo}
                    alt={`${exp.company} Logo`}
                    className="max-h-[40%] max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl">
                    <span className="text-white text-sm font-semibold tracking-wide">
                      Click to flip
                    </span>
                  </div>
                </div>

                  {/* BACK (Roles) */}
                  <div
                    className="absolute inset-0 bg-gray-50 rounded-xl p-5 shadow-xl overflow-y-auto"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    {/* Company header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{exp.company}</h3>
                        <p className="text-sm text-gray-600 flex items-center mt-1">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500">Click to flip back</p>
                    </div>

                    {/* Roles list */}
                    <div className="space-y-6">
                      {exp.roles.map((role, idx) => (
                        <div
                          key={`${exp.key}-${idx}`}
                          className={idx !== 0 ? "pt-4 border-t border-gray-200" : ""}
                        >
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                            <h4 className="text-base font-semibold text-gray-800">
                              {role.title}
                            </h4>

                            <div className="text-sm text-gray-600 flex items-center">
                              <Calendar size={16} className="mr-1" />
                              <span>{role.period}</span>
                            </div>
                          </div>

                          <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                            {role.description.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>

                          <div className="flex flex-wrap gap-2 mt-3">
                            {role.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* END BACK */}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;