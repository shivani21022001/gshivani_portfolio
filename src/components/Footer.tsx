import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-4 relative">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} Shivani Gadipe. All rights reserved.
        </p>

        <button 
          onClick={scrollToTop}
          className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center mx-auto text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          <ArrowUp size={18} />
        </button>

        <p className="text-xs text-gray-400 mt-2">Scroll To Top</p>
      </div>
    </footer>
  );
};

export default Footer;