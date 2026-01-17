import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import AboutPage from './components/AboutPage';
import SolutionsPage from './components/SolutionsPage';
import SchoolsSection from './components/SchoolsSection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      
      // Only treat hash routes starting with #/ as page routes
      // Other hashes like #contact, #solutions are anchor links
      if (hash.startsWith('#/')) {
        setCurrentPath(hash);
        window.scrollTo(0, 0);
      } else if (hash !== '#/') {
        // For anchor links (like #contact), ensure we're on home page
        setCurrentPath('#/');
        // Wait for React to render home page, then scroll to anchor
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            // Account for fixed header height
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 150);
      } else {
        setCurrentPath('#/');
      }
    };

    // Handle initial load
    const initialHash = window.location.hash || '#/';
    if (initialHash.startsWith('#/')) {
      setCurrentPath(initialHash);
    } else if (initialHash !== '#/') {
      // If page loads with an anchor link, set to home and scroll
      setCurrentPath('#/');
      setTimeout(() => {
        const element = document.querySelector(initialHash);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isAboutPage = currentPath === '#/about';
  const isSolutionsPage = currentPath === '#/solutions';

  return (
    <div className="min-h-screen bg-beige-light">
      <Header />
      <main>
        {isAboutPage ? (
          <AboutPage />
        ) : isSolutionsPage ? (
          <SolutionsPage />
        ) : (
          <>
            <Hero />
            <About isSummary={true} />
            <SchoolsSection />
            <Testimonials />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;