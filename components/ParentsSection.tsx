import React from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';
import { PARENT_SERVICES } from '../constants';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ParentsSection: React.FC = () => {
  const [sectionRef, isSectionVisible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="parents"
      className="py-16 lg:py-24 bg-charcoal text-white relative overflow-hidden"
    >
      {/* Decorative Accent */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-terracotta/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Sticky Header */}
          <div
            className={`lg:sticky lg:top-32 transition-all duration-700 ease-out ${
              isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-terracotta mb-6">
              For Parents
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-[1.1]">
              Finding the{' '}
              <span className="italic text-gold">Perfect</span> School in Muscat
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Relocating to Muscat and overwhelmed by school choices? I provide expert guidance to ensure your child's educational journey starts in the right environment.
            </p>
            <div className="space-y-4 mb-10">
              {[
                'Objective advice across all curricula',
                'Deep understanding of the local landscape',
                'Admissions & transition support',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 text-white/80">
                  <CheckCircle className="h-5 w-5 text-gold" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Button
              asChild
              className="bg-terracotta hover:bg-terracotta/90 text-white font-semibold rounded-sm"
            >
              <a href="#contact">Book a Parent Advisory</a>
            </Button>
          </div>

          {/* Right Column - Cards */}
          <div
            className={`lg:col-span-2 grid md:grid-cols-2 gap-6 transition-all duration-700 delay-200 ease-out ${
              isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {PARENT_SERVICES.map((service, idx) => (
              <Card
                key={idx}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all rounded-sm group"
              >
                <CardHeader className="p-6">
                  <div className="w-8 h-[2px] bg-gold mb-4 group-hover:w-12 transition-all duration-300" />
                  <CardTitle className="text-xl font-serif text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-white/50 text-sm mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <ul className="space-y-3">
                    {service.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                        <ChevronRight className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentsSection;
