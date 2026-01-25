import React from 'react';
import { TESTIMONIALS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Testimonials: React.FC = () => {
  const [sectionRef, isSectionVisible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-16 lg:py-20 bg-white overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-10 transition-all duration-700 ease-out ${
            isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-terracotta mb-4">
            Trusted Worldwide
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal leading-[1.1]">
            What School Leaders{' '}
            <span className="italic text-terracotta">Say</span>
          </h2>
        </div>

        {/* Simple 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="transition-all duration-700 ease-out"
              style={{
                transitionDelay: `${idx * 100}ms`,
                opacity: isSectionVisible ? 1 : 0,
                transform: isSectionVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <div className="relative bg-sandstone p-5 rounded-sm h-full group hover:bg-sage transition-colors duration-300">
                {/* Quote content */}
                <div className="relative z-10">
                  <p className="text-charcoal text-base leading-relaxed mb-4 font-serif italic">
                    "{t.quote}"
                  </p>

                  {/* Author info */}
                  <div className="pt-4 border-t border-charcoal/10 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-charcoal text-xs uppercase tracking-wider">
                        {t.author}
                      </p>
                      <p className="text-[11px] text-terracotta font-medium mt-0.5 uppercase tracking-wider">
                        {t.location}
                      </p>
                    </div>
                    <span className="text-4xl font-serif text-terracotta/20 leading-none">"</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
