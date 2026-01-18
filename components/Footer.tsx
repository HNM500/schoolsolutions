
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-dark text-white py-12 border-t border-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="text-lg font-serif font-bold tracking-widest block">SOUKEINA MAMODHOUSSEN</span>
            <span className="text-[10px] uppercase tracking-widest text-white/70 block">International Educational Consultant</span>
            <span className="text-xs text-white/50 mt-1 block">GCC Education</span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
            <Link to="/solutions" className="text-white/80 hover:text-white transition-colors">Solutions</Link>
            <a href="/#resources" className="text-white/80 hover:text-white transition-colors">Resources</a>
          </div>

          <div className="flex gap-6">
            <a href="https://linkedin.com/in/soukeina" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://wa.me/447944304364" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-[10px] uppercase tracking-widest text-white/50">
            &copy; {new Date().getFullYear()} Soukeina Mamodhoussen. All rights reserved. Professional Educational Consulting Services for Schools & Boards.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
