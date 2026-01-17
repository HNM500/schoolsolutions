
import React, { useState, useEffect } from 'react';

interface Props {
  isSummary?: boolean;
}

interface StatCard {
  number: string;
  label: string;
  description: string;
}

const About: React.FC<Props> = ({ isSummary = false }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const statCards: StatCard[] = [
    {
      number: '25+',
      label: 'Years Experience',
      description: 'Deep expertise in international educational standards, management, and accreditation.',
    },
    {
      number: '15+',
      label: 'Countries Served',
      description: 'Global footprint across Europe, Africa, Asia, North America, and the Middle East.',
    },
    {
      number: '35+',
      label: 'International Schools',
      description: 'Consulting experience with schools of various sizes, curricula and demographic.',
    },
    {
      number: '20+',
      label: 'Workshops and Conferences',
      description: 'Facilitation, keynotes, panels on multilingualism, literacy, EdTech, AI and inquiry-based learning.',
    },
    {
      number: '1,000+',
      label: 'Students Taught',
      description: 'Experience in British National Curriculum, American Curriculum, French Curriculum, International Baccalaureate, and International Primary Curriculum.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % statCards.length);
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, [statCards.length]);
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-block p-1 px-3 bg-beige text-navy text-xs font-bold uppercase tracking-widest mb-4">About Me</div>
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8">Bridging Global Expertise with Local Excellence</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  With over two decades of experience across four continents, I partner with international schools to elevate educational excellence through innovative curriculum design, transformative teacher training, and strategic leadership development.
                </p>
                {isSummary ? (
                  <p className="font-medium text-royal">
                    Dedicated to fostering global citizenship, multilingual proficiency, and institutional growth in international school settings.
                  </p>
                ) : (
                  <>
                    <p>
                      As an IB Workshop Leader and CIS Evaluation Team Chair, I bring a unique perspective that combines high-level institutional oversight with ground-level pedagogical innovation.
                    </p>
                  </>
                )}
              </div>
            </div>
            
            {isSummary && (
              <div className="pt-4">
                <a 
                  href="#/about" 
                  className="inline-flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-navy-light transition-all shadow-lg group"
                >
                  MORE ABOUT ME 
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
            )}
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-beige/10 rounded-lg -rotate-3"></div>
            <div className="relative bg-beige-light p-10 border border-beige-accent/20 rounded-sm min-h-[300px] flex items-center">
              <div className="w-full">
                {statCards.map((card, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ${
                      index === currentCardIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    <div>
                      <span className="block text-5xl font-serif text-royal font-bold mb-2">
                        {card.number}
                      </span>
                      <span className="text-sm uppercase tracking-[0.2em] text-navy font-bold">
                        {card.label}
                      </span>
                      <p className="mt-2 text-sm text-gray-600">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Card indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {statCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCardIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentCardIndex
                      ? 'w-8 bg-royal'
                      : 'w-2 bg-navy/30 hover:bg-navy/50'
                  }`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
