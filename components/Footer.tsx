
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-dark dark:bg-navy text-beige py-12 border-t border-navy dark:border-beige/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="text-lg font-serif font-bold tracking-widest block">SOUKEINA MAMODHOUSSEN</span>
            <span className="text-[10px] uppercase tracking-widest text-beige-accent">International Educational Consultant</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
            <a href="#/" className="hover:text-white transition-colors">Home</a>
            <a href="#/about" className="hover:text-white transition-colors">About Me</a>
            <a href="#schools" className="hover:text-white transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/soukeina" className="w-10 h-10 rounded-full bg-navy dark:bg-beige/20 flex items-center justify-center hover:bg-royal dark:hover:bg-beige transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://wa.me/447944304364" className="w-10 h-10 rounded-full bg-navy dark:bg-beige/20 flex items-center justify-center hover:bg-royal dark:hover:bg-beige transition-colors">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-navy dark:border-beige/20 border-opacity-30 text-center">
          <p className="text-[10px] uppercase tracking-widest text-beige-accent dark:text-beige/60 opacity-50">
            &copy; {new Date().getFullYear()} Soukeina Mamodhoussen. All rights reserved. Professional Educational Consulting Services for Schools & Boards.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
