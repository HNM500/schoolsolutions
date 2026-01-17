
import React from 'react';
import { PARENT_SERVICES } from '../constants';

const ParentsSection: React.FC = () => {
  return (
    <section id="parents" className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Decorative Accent */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-royal/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Finding the <span className="italic text-beige">Perfect</span> School in Muscat
            </h2>
            <p className="text-beige/80 text-lg mb-8 leading-relaxed">
              Relocating to Muscat and overwhelmed by school choices? I provide expert guidance to ensure your child's educational journey starts in the right environment.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-beige">
                <i className="fas fa-check-circle"></i>
                <span>Objective advice across all curricula</span>
              </div>
              <div className="flex items-center gap-4 text-beige">
                <i className="fas fa-check-circle"></i>
                <span>Deep understanding of the local landscape</span>
              </div>
              <div className="flex items-center gap-4 text-beige">
                <i className="fas fa-check-circle"></i>
                <span>Admissions & transition support</span>
              </div>
            </div>
            <a 
              href="#contact" 
              className="mt-10 inline-block bg-beige text-navy px-10 py-4 rounded-sm font-bold hover:bg-white transition-all shadow-xl"
            >
              BOOK A PARENT ADVISORY
            </a>
          </div>
          
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {PARENT_SERVICES.map((service, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-white/10 hover:bg-white/10 transition-all">
                <h3 className="text-2xl font-serif mb-4 text-beige">{service.title}</h3>
                <p className="text-white/70 mb-6 italic text-sm">{service.description}</p>
                <ul className="space-y-3">
                  {service.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                      <span className="text-beige mt-1">
                        <i className="fas fa-chevron-right text-[10px]"></i>
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentsSection;
