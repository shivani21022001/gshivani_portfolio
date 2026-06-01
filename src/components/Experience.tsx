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

  const [flipState, setFlipState] = useState<
    Record<ExperienceItem["key"], boolean>
  >({
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
      location: "USA / India",
      logo: accentureLogo,
      roles: [
        {
          title: "ServiceNow Developer",
          period: "Jan 2026 - Present",
          description: [
            "Developed and customized enterprise-level ServiceNow solutions across ITSM, CMDB, Service Catalog, and workflow automation modules for Fortune 500 clients.",
            "Designed and implemented Business Rules, Client Scripts, UI Policies, UI Actions, Script Includes, and Flow Designer workflows.",
            "Integrated ServiceNow with external enterprise systems using REST/SOAP APIs, IntegrationHub, and custom scripting.",
            "Supported Incident, Problem, Change, Request, and Asset Management processes while ensuring CMDB integrity and ITIL compliance.",
            "Collaborated with business stakeholders and Agile/Scrum teams to deliver scalable ServiceNow applications.",
            "Conducted ATF testing, regression testing, defect analysis, and release validation.",
          ],
          skills: [
            "ServiceNow",
            "ITSM",
            "CMDB",
            "Flow Designer",
            "REST APIs",
            "IntegrationHub",
            "ATF",
            "Agile",
          ],
        },
        {
          title: "ServiceNow Developer",
          period: "Jul 2020 - Sep 2024",
          description: [
            "Designed and customized enterprise ServiceNow applications, increasing process efficiency by 30%.",
            "Enhanced ITSM modules including Incident, Problem, Change, Service Catalog, and CMDB management.",
            "Developed workflow automation using Business Rules, Client Scripts, Script Includes, Flow Designer, and REST API integrations.",
            "Conducted ATF testing, regression testing, release validation, and defect analysis.",
            "Provided Tier 2/3 production support through troubleshooting and root cause analysis.",
            "Managed CMDB lifecycle processes and collaborated with Agile teams to drive sprint delivery.",
            "Led Scrum ceremonies including sprint planning, stand-ups, retrospectives, and backlog grooming.",
          ],
          skills: [
            "ServiceNow",
            "JavaScript",
            "Business Rules",
            "Client Scripts",
            "Flow Designer",
            "REST APIs",
            "CMDB",
            "ITSM",
            "Scrum",
            "ATF",
          ],
        },
      ],
    },
    {
      key: "osu",
      company: "OSU Foundation",
      location: "Corvallis, Oregon, USA",
      logo: osuLogo,
      roles: [
        {
          title: "Finance Assistant",
          period: "Feb 2025 - Dec 2025",
          description: [
            "Supported gift administration and donor record management through accurate data entry and documentation.",
            "Maintained financial records by organizing, scanning, filing, and updating databases.",
            "Assisted finance and administrative teams with coordination and operational tasks.",
            "Ensured confidentiality and compliance while handling sensitive donor and financial information.",
            "Improved record accuracy and document accessibility through organized data management processes.",
          ],
          skills: [
            "Financial Administration",
            "Data Entry",
            "Record Management",
            "Microsoft Office",
            "Documentation",
            "Team Collaboration",
          ],
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
                className="relative w-full h-[380px] [perspective:1000px]"
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
                  {/* FRONT */}
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-white rounded-xl shadow-xl cursor-pointer group"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <img
                      src={exp.logo}
                      alt={`${exp.company} Logo`}
                      className="max-h-[40%] max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl">
                      <span className="text-white text-sm font-semibold tracking-wide">
                        Click to flip
                      </span>
                    </div>
                  </div>

                  {/* BACK */}
                  <div
                    className="absolute inset-0 bg-gray-50 rounded-xl p-5 shadow-xl overflow-y-auto"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">
                          {exp.company}
                        </h3>
                        <p className="text-sm text-gray-600 flex items-center mt-1">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500">Click to flip back</p>
                    </div>

                    <div className="space-y-6">
                      {exp.roles.map((role, idx) => (
                        <div
                          key={`${exp.key}-${idx}`}
                          className={
                            idx !== 0 ? "pt-4 border-t border-gray-200" : ""
                          }
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