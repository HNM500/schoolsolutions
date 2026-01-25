import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <span className="text-xl font-serif font-medium tracking-wide block">
              SOUKEINA MAMODHOUSSEN
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/50 block mt-2">
              International Educational Consultant
            </span>
            <div className="w-12 h-[2px] bg-terracotta mt-6 mb-4" />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Transforming international education through strategic consultancy and innovative solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-white/70 hover:text-terracotta transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-white/70 hover:text-terracotta transition-colors text-sm">
                About
              </Link>
              <Link to="/solutions" className="text-white/70 hover:text-terracotta transition-colors text-sm">
                Solutions
              </Link>
              <Link to="/resources" className="text-white/70 hover:text-terracotta transition-colors text-sm">
                Resources
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6">
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://linkedin.com/in/soukeina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center hover:bg-terracotta transition-colors group"
              >
                <Linkedin className="h-4 w-4 text-white/70 group-hover:text-white" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://wa.me/447944304364"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center hover:bg-terracotta transition-colors group"
              >
                <MessageCircle className="h-4 w-4 text-white/70 group-hover:text-white" />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
            <p className="text-white/50 text-xs">
              Based in Muscat, Oman & London, UK
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Soukeina Mamodhoussen. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            GCC Education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
