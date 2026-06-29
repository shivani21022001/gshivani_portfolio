import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin } from "lucide-react";

// Logos from public folder
import accentureLogo from "/Accenture-logo.jpg";
import sterliteLogo from "/Sterlite_Technologies_logo.jpg";
import capgeminiLogo from "/Capgemini_Logo.png";

type Role = {
  title: string;
  period: string;
  description: string[];
  skills: string[];
};

type ExperienceItem = {
  key: "accenture" | "sterlite" | "capgemini";
  company: string;
  location: string;
  logo?: string;
  roles: Role[];
};

const Experience: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [flipState, setFlipState] = useState<
    Record<ExperienceItem["key"], boolean>
  >({
    accenture: false,
    sterlite: false,
    capgemini: false,
  });

  const handleFlip = (key: ExperienceItem["key"]) => {
    setFlipState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const experiences: ExperienceItem[] = [
    {
      key: "accenture",
      company: "Accenture",
      location: "USA",
      logo: accentureLogo,
      roles: [
        {
          title: "Senior ServiceNow Developer",
          period: "Jan 2026 - Present",
          description: [
            "Developed and deployed enterprise ServiceNow ITSM, ITOM, HRSD, CSM, CMDB, and Service Catalog solutions using App Engine Studio, Flow Designer, UI Builder, IntegrationHub, and Employee Center, improving operational efficiency by 40%.",
            "Built scalable Business Rules, Client Scripts, Script Includes, UI Policies, UI Actions, ACLs, Glide API, Service Portal, and Scoped Applications using JavaScript (ES6+), reducing manual effort by 50%.",
            "Designed secure REST API, Scripted REST API, SOAP API, IntegrationHub, MID Server, OAuth 2.0, SAML SSO, Azure AD, and third-party integrations, enabling seamless connectivity across 20+ enterprise systems.",
            "Implemented Discovery, Service Mapping, Service Graph Connector, CMDB, and Asset Management solutions, improving configuration data accuracy to 98% and strengthening IT operations.",
            "Delivered intelligent automation using AI Agent Studio, Now Assist, AI Search, Virtual Agent, Performance Analytics, Predictive Intelligence, and Generative AI Integration, reducing incident resolution time by 35%.",
            "Developed modern Employee Center, UI Builder, Service Portal, Knowledge Management, and Service Catalog solutions, increasing employee self-service adoption and improving user satisfaction by 30%.",
            "Improved release quality using Automated Test Framework (ATF), Functional Testing, Regression Testing, UAT, Agile/Scrum, Azure DevOps, Git, Jenkins, and CI/CD Pipelines, reducing production defects by 45%.",
            "Collaborated with architects, product owners, and Agile teams to deliver enterprise ServiceNow solutions while performing code reviews, technical mentoring, performance optimization, security governance (RBAC & ACLs), and platform support for 50,000+ users.",
          ],
          skills: [
            "ServiceNow",
            "ITSM",
            "ITOM",
            "HRSD",
            "CSM",
            "CMDB",
            "Service Catalog",
            "App Engine Studio",
            "Flow Designer",
            "UI Builder",
            "IntegrationHub",
            "JavaScript",
            "REST APIs",
            "SAML SSO",
            "Azure AD",
            "AI Agent Studio",
            "ATF",
            "CI/CD",
          ],
        },
      ],
    },
    {
      key: "sterlite",
      company: "Sterlite India",
      location: "India",
      logo: sterliteLogo,
      roles: [
        {
          title: "ServiceNow Technical Consultant",
          period: "Jul 2022 - Aug 2024",
          description: [
            "Gathered business requirements and delivered ServiceNow ITSM, HRSD, CSM, CMDB, Service Catalog, and Knowledge Management solutions, improving service delivery by 35%.",
            "Customized the ServiceNow Platform using Business Rules, Client Scripts, Script Includes, UI Policies, UI Actions, ACLs, Glide API, Flow Designer, and App Engine Studio, reducing manual effort by 40%.",
            "Developed secure integrations using REST APIs, SOAP APIs, IntegrationHub, MID Server, OAuth 2.0, SAML SSO, LDAP, JSON, XML, and Azure AD, connecting enterprise applications seamlessly.",
            "Implemented Discovery, Service Mapping, Service Graph Connector, CMDB, Asset Management, UI Builder, Employee Center, and Virtual Agent, improving CMDB accuracy to 98%.",
            "Built intelligent workflows using AI Agent Studio, Now Assist, AI Search, Performance Analytics, Predictive Intelligence, Workflow Automation, and Generative AI Integration, reducing request resolution time by 30%.",
            "Delivered high-quality releases using ATF, Functional Testing, Regression Testing, UAT, Azure DevOps, Git, Jenkins, Agile, and CI/CD Pipelines, reducing production issues by 40%.",
            "Partnered with architects and Agile teams to deliver enterprise ServiceNow solutions, performing technical consulting, code reviews, stakeholder management, RBAC, ACLs, and platform optimization while supporting large-scale implementations.",
          ],
          skills: [
            "ServiceNow",
            "ITSM",
            "HRSD",
            "CSM",
            "CMDB",
            "Knowledge Management",
            "Flow Designer",
            "App Engine Studio",
            "IntegrationHub",
            "API Integrations",
            "AI Agent Studio",
            "ATF",
            "Azure DevOps",
            "CI/CD",
            "Agile",
          ],
        },
      ],
    },
    {
      key: "capgemini",
      company: "Capgemini India",
      location: "India",
      logo: capgeminiLogo,
      roles: [
        {
          title: "ServiceNow Developer",
          period: "Jun 2019 - Jun 2022",
          description: [
            "Developed ServiceNow ITSM, HRSD, CMDB, Service Catalog, and Knowledge Management solutions using JavaScript, Business Rules, Client Scripts, Script Includes, UI Policies, and Glide API, improving workflow efficiency by 30%.",
            "Built Flow Designer, Service Catalog, Record Producers, and Catalog Client Scripts, automating business processes and reducing manual effort by 35%.",
            "Developed secure REST APIs, SOAP APIs, IntegrationHub, MID Server, JSON, XML, and OAuth 2.0 integrations, enabling seamless connectivity across enterprise applications.",
            "Configured Discovery, Service Mapping, CMDB, Asset Management, UI Builder, Employee Center, and Service Portal, improving configuration accuracy to 98% and enhancing user experience.",
            "Customized the platform using ACLs, UI Actions, Import Sets, Transform Maps, Scheduled Jobs, Fix Scripts, Email Notifications, and Scoped Applications, delivering scalable and secure ServiceNow solutions.",
            "Executed ATF, Functional Testing, Regression Testing, UAT, Agile, Azure DevOps, Git, Jenkins, and CI/CD Pipelines, reducing production defects by 40% while supporting successful enterprise deployments.",
          ],
          skills: [
            "ServiceNow",
            "JavaScript",
            "Business Rules",
            "Client Scripts",
            "Flow Designer",
            "REST APIs",
            "IntegrationHub",
            "CMDB",
            "UI Builder",
            "ATF",
            "Azure DevOps",
            "CI/CD",
            "Agile",
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
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} Logo`}
                        className="max-h-[40%] max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-center px-4 text-xl font-semibold text-gray-700 bg-gray-100 rounded-xl">
                        {exp.company}
                      </div>
                    )}

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