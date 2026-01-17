import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'About', href: '#/about' },
    { name: 'Solutions', href: '#/solutions' },
    { name: 'Resources', href: '#resources' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#/" className="flex flex-col">
              <span className={`text-xl font-serif font-bold tracking-wider ${isScrolled ? 'text-beige' : 'text-navy'}`}>
                SOUKEINA MAMODHOUSSEN
              </span>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-sans ${isScrolled ? 'text-beige-accent' : 'text-navy-light'}`}>
                Educational Consultancy
              </span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isScrolled ? 'text-beige hover:text-white' : 'text-navy hover:text-royal'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className={`px-6 py-2 rounded-sm text-sm font-semibold transition-all duration-200 ${
                  isScrolled 
                    ? 'bg-beige text-navy hover:bg-white' 
                    : 'bg-navy text-white hover:bg-navy-light shadow-md'
                }`}
              >
                BOOK A CONSULTATION
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-beige' : 'text-navy'}`}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-navy text-beige border-t border-navy-light shadow-2xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 border-b border-white/5 text-base font-medium hover:bg-navy-light"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;