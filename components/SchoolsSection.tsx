
import React, { useState, useEffect, useRef } from 'react';
import { SCHOOL_SERVICES, CLIENT_SCHOOLS } from '../constants';
import ServiceCard from './ServiceCard';

const SchoolsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Logic for carousel: rotate every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === CLIENT_SCHOOLS.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Show 4 schools at once on desktop, fewer on smaller screens
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  };

  const visibleCount = getVisibleCount();
  const shiftPercentage = 100 / visibleCount;

  return (
    <section id="solutions" className="py-24 bg-beige-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block p-1 px-3 bg-navy text-beige text-[10px] font-bold uppercase tracking-widest mb-4">Partnering for Impact</div>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">Institutional Excellence</h2>
          <p className="text-gray-600 text-lg mb-12">Partnering with international schools to elevate educational standards through strategic intervention and professional growth.</p>
        </div>
        
        {/* Summary Grid - 2x2 with minimal descriptions */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {SCHOOL_SERVICES.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-sm border-t-4 border-navy shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-serif text-navy mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm italic mb-4">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#contact" 
            className="bg-navy text-white px-10 py-4 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-navy-light transition-all shadow-lg inline-flex items-center gap-2"
          >
            ENQUIRE NOW <i className="fas fa-arrow-right"></i>
          </a>
          <a 
            href="#/solutions" 
            className="border-2 border-navy text-navy px-10 py-4 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-navy hover:text-white transition-all inline-flex items-center gap-2"
          >
            FIND OUT MORE <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        {/* Schools Carousel */}
        <div className="pt-16 border-t border-beige-accent">
          <h3 className="text-center text-navy/40 uppercase tracking-[0.4em] text-[10px] font-bold mb-12">Select Schools I've Worked With</h3>
          
          <div className="relative group">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ 
                  transform: `translateX(-${(currentIndex * shiftPercentage) % (CLIENT_SCHOOLS.length * shiftPercentage)}%)` 
                }}
              >
                {/* Double the list for infinite-like scrolling effect */}
                {[...CLIENT_SCHOOLS, ...CLIENT_SCHOOLS].map((school, idx) => (
                  <div 
                    key={idx} 
                    className="flex-shrink-0 px-4"
                    style={{ width: `${shiftPercentage}%` }}
                  >
                    <div className="bg-white p-6 rounded-sm border border-beige-accent h-40 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all group/card">
                      <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center mb-4 group-hover/card:bg-royal/10 transition-colors">
                        <i className={`fas ${school.icon} text-royal text-xl`}></i>
                      </div>
                      <p className="text-[11px] font-bold text-navy uppercase tracking-widest leading-tight">
                        {school.name}
                      </p>
                      <p className="text-[9px] text-royal/60 mt-1 uppercase tracking-tighter">
                        {school.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots (Simple indication) */}
            <div className="flex justify-center gap-2 mt-10">
              {CLIENT_SCHOOLS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    currentIndex % CLIENT_SCHOOLS.length === idx ? 'bg-royal w-4' : 'bg-navy/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolsSection;
