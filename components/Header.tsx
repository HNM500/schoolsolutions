import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Resources', href: '/resources' },
  ];

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-500',
        isScrolled
          ? 'bg-charcoal py-4 shadow-lg'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col group">
            <span
              className={cn(
                'text-lg font-serif font-medium tracking-wide transition-colors',
                isScrolled ? 'text-white' : 'text-charcoal'
              )}
            >
              SOUKEINA MAMODHOUSSEN
            </span>
            <span
              className={cn(
                'text-[10px] uppercase tracking-[0.2em] font-sans transition-colors',
                isScrolled ? 'text-white/60' : 'text-stone'
              )}
            >
              Educational Consultancy
            </span>
            <span
              className={cn(
                'text-[16px] italic tracking-[0.2em] font-serif transition-colors mt-0.5',
                isScrolled ? 'text-terracotta' : 'text-terracotta'
              )}
            >
              Grow. Cultivate. Collaborate.
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium transition-colors rounded-sm',
                  isScrolled
                    ? 'text-white/70 hover:text-white hover:bg-white/10'
                    : 'text-stone hover:text-charcoal hover:bg-sandstone',
                  location.pathname === link.href &&
                    (isScrolled ? 'text-white bg-white/10' : 'text-charcoal bg-sandstone')
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className={cn(
                'ml-4 font-semibold text-xs uppercase tracking-wider transition-colors duration-300 rounded-sm',
                isScrolled
                  ? 'bg-terracotta hover:bg-terracotta/90 text-white'
                  : 'bg-charcoal hover:bg-terracotta text-white'
              )}
            >
              <a href="/#contact">Book a Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  'rounded-sm',
                  isScrolled ? 'text-white hover:bg-white/10' : 'text-charcoal hover:bg-sandstone'
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-charcoal border-charcoal">
              <SheetHeader>
                <SheetTitle className="text-white font-serif">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'px-4 py-3 text-base font-medium rounded-sm transition-colors',
                      'text-white/70 hover:text-white hover:bg-white/10',
                      location.pathname === link.href && 'text-white bg-white/10'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-4 bg-terracotta hover:bg-terracotta/90 text-white font-semibold rounded-sm"
                >
                  <a href="/#contact" onClick={() => setIsOpen(false)}>
                    Book a Consultation
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Header;
