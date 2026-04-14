import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="page-section bg-gray-50">
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
              Get In Touch
            </h2>
            <div className="flex-grow border-t border-dashed border-blue-400 mx-2"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Contact Information</h3>

              <div className="flex flex-col md:flex-row md:justify-center md:space-x-12 mb-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center justify-center mb-6 md:mb-0"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    <Mail size={20} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-gray-700">Email</h4>
                    <a href="mailto:gadipeshivani@gmail.com" className="text-blue-600 hover:underline">
                      gadipeshivani@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center justify-center"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-gray-700">Location</h4>
                    <p className="text-gray-600">Maryland Heights, Missouri, United States</p>
                  </div>
                </motion.div>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-800">Follow Me</h3>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/shivani21022001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shivani-gadipe-a3a9021a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;