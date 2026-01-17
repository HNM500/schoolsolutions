
import React, { useEffect } from 'react';
import { ACHIEVEMENTS } from '../constants';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 animate-fade-in">
      {/* Hero Section */}
      <section className="bg-navy py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 italic">About Soukeina</h1>
          <p className="text-beige text-xl uppercase tracking-[0.3em] font-light">Global Educational Leadership & Strategic Consultancy</p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg text-gray-700 leading-relaxed space-y-8 text-lg">
            <div className="flex justify-center mb-12">
                <div className="w-24 h-1 bg-beige"></div>
            </div>
            
            <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-navy first-letter:mr-3 first-letter:float-left">
              With over two decades of experience spanning four continents, my journey in international education has been defined by a commitment to excellence and a passion for cultural integration. From the vibrant classrooms of Kenya to the strategic boardrooms of Switzerland and Oman, I have dedicated my career to elevating the standards of global education.
            </p>
            
            <p>
              As a seasoned <strong>IB Workshop Leader</strong> and <strong>CIS Evaluation Team Chair</strong>, I possess a holistic view of the educational landscape. My work isn't just about implementing systems; it's about understanding the unique cultural fabric of each institution I partner with. I bridge the gap between high-level oversight and the day-to-day realities of pedagogical innovation.
            </p>

            <div className="bg-beige-light p-10 border-l-4 border-royal my-12">
              <h3 className="text-2xl font-serif text-navy mb-4 italic">The Multilingual Advantage</h3>
              <p className="mb-0 italic">
                Central to my professional identity is a deep-seated multilingual proficiency. Navigating diverse cultural landscapes requires more than just strategic knowledge; it requires the ability to communicate, empathize, and build trust across linguistic boundaries. This cross-cultural fluency ensures that my consultancy work remains inclusive, resonant, and effective in any global context.
              </p>
            </div>

            <p>
              My expertise lies in curriculum transformation, particularly in the realms of ESL/EAL, writing innovation, and the strategic integration of emerging technologies like Generative AI. I believe that a school's greatest asset is its faculty, and my professional development workshops are designed to energize and empower teachers for the challenges of 21st-century learning.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics & Achievements Grid */}
      <section className="py-24 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-serif text-navy">Career Benchmarks</h2>
                <div className="w-16 h-0.5 bg-royal mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ACHIEVEMENTS.map((item, idx) => (
                    <div key={idx} className="bg-white p-10 shadow-sm border-t-2 border-beige hover:shadow-xl transition-all group">
                        <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-royal/10 transition-colors">
                            <i className={`fas ${item.icon} text-3xl text-royal`}></i>
                        </div>
                        <h3 className="text-xl font-serif text-navy mb-4">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-20 text-center">
                <a 
                    href="#contact" 
                    className="inline-block border-2 border-navy text-navy px-12 py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all"
                >
                    Discuss a Partnership
                </a>
            </div>
        </div>
      </section>
      
      {/* Simple Navigation Back */}
      <section className="py-12 bg-white border-t border-beige-accent/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <a href="#/" className="text-navy/50 hover:text-navy transition-colors text-sm uppercase tracking-widest font-bold inline-flex items-center gap-2">
                <i className="fas fa-arrow-left"></i> Back to Home
            </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
