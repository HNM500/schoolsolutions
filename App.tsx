import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import AboutPage from './components/AboutPage';
import SolutionsPage from './components/SolutionsPage';
import SchoolsSection from './components/SchoolsSection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Home page component
const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle anchor links on page load (e.g., /#contact)
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      <Helmet>
        <title>GCC Education | International Educational Consultancy</title>
        <meta name="description" content="GCC Education offers expert international educational consultancy services. Strategic guidance for schools, curriculum development, IB workshops, and CIS accreditation support." />
        <link rel="canonical" href="https://gcceducation.com/" />
      </Helmet>
      <Hero />
      <About isSummary={true} />
      <SchoolsSection />
      <Testimonials />
      <Contact />
    </>
  );
};

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-beige-light dark:bg-navy-dark transition-colors duration-300">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;