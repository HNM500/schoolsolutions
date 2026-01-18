import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links - mix of page routes and anchor links
  const navLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'About', href: '/about', isRoute: true },
    { name: 'Solutions', href: '/solutions', isRoute: true },
    { name: 'Resources', href: '/#resources', isRoute: false },
  ];

  // Handle anchor link clicks
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.includes('#') ? href.split('#')[1] : null;
    if (hash && location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-navy py-2 shadow-lg'
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex flex-col">
              <span className={`text-xl font-serif font-bold tracking-wider ${
                isScrolled
                  ? 'text-beige'
                  : 'text-navy'
              }`}>
                SOUKEINA MAMODHOUSSEN
              </span>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-sans ${
                isScrolled
                  ? 'text-white/80'
                  : 'text-navy-light'
              }`}>
                Educational Consultancy
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isScrolled
                        ? 'text-beige hover:text-white'
                        : 'text-navy hover:text-royal'
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isScrolled
                        ? 'text-beige hover:text-white'
                        : 'text-navy hover:text-royal'
                    }`}
                  >
                    {link.name}
                  </a>
                )
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
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-3 rounded-md min-w-[44px] min-h-[44px] ${
                isScrolled
                  ? 'text-beige'
                  : 'text-navy'
              }`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-navy text-beige border-t border-navy-light shadow-2xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-4 border-b border-white/5 text-base font-medium hover:bg-navy-light active:bg-navy-light"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleAnchorClick(e, link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block px-4 py-4 border-b border-white/5 text-base font-medium hover:bg-navy-light active:bg-navy-light"
                >
                  {link.name}
                </a>
              )
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mx-2 mt-4 px-6 py-4 bg-beige text-navy text-center rounded-sm font-semibold hover:bg-beige-light active:bg-beige-light transition-colors"
            >
              BOOK A CONSULTATION
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
