
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">Trusted Worldwide</h2>
          <p className="text-gray-500 uppercase tracking-widest text-sm">Feedback from school leaders around the world</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="relative p-8 bg-beige-light rounded-sm flex flex-col justify-between h-full hover:-translate-y-2 transition-transform duration-300">
              <i className="fas fa-quote-right absolute top-6 right-6 text-beige text-4xl opacity-50"></i>
              <p className="text-gray-700 italic mb-8 relative z-10 leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="font-bold text-navy text-sm uppercase tracking-wider">{t.author}</p>
                <p className="text-xs text-royal font-medium">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
