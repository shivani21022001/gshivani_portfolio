import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 px-6"
    >
      <div className="max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Intro */}
          <motion.p
          className="text-blue-600 text-2xl font-medium mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hello{" "}
          <motion.span
            style={{ display: "inline-block" , fontSize: "30px" }}
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          >
            👋
          </motion.span>
          , I'm
        </motion.p>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Shivani Gadipe
          </motion.h1>

          {/* Typing Effect */}
          <motion.h2
            className="text-2xl md:text-3xl text-blue-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Software Developer",
                2000,
                "Software Engineer",
                2000,
                "ServiceNow Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </motion.h2>

          {/* Short Description */}
          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            I build scalable and reliable software solutions that improve systems and user experience. With enterprise development experience and a strong engineering foundation, I focus on creating impactful technology.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
            >
              View My Work
            </a>

            <a
              href="/All_SHIVANI GADIPE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              View Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <a
              href="https://github.com/shivani21022001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/shivani-gadipe-a3a9021a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:gadipeshivani@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.5,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <a href="#about" className="flex flex-col items-center">
          <span className="text-sm text-gray-600 mb-2">
            Scroll down
          </span>
          <ArrowDown size={20} className="text-blue-600" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
