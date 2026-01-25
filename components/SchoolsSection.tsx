import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2 } from 'lucide-react';
import { SCHOOL_SERVICES, CLIENT_SCHOOLS } from '../constants';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SchoolsSection: React.FC = () => {
  const [sectionRef, isSectionVisible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });
  const [cardsRef, areCardsVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="py-16 lg:py-24 bg-sandstone overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 max-w-3xl mx-auto transition-all duration-700 ease-out ${
            isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-terracotta mb-6">
            Partnering for Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-6 leading-[1.1]">
            Institutional{' '}
            <span className="italic text-terracotta">Excellence</span>
          </h2>
          <p className="text-stone text-lg leading-relaxed">
            Partnering with international schools to elevate educational standards through strategic intervention and professional growth.
          </p>
        </div>

        {/* Image + Service Cards Grid */}
        <div
          ref={cardsRef}
          className={`grid lg:grid-cols-5 gap-8 mb-12 transition-all duration-700 delay-100 ease-out ${
            areCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Image Column */}
          <div className="lg:col-span-2">
            <div className="relative h-full min-h-[300px] lg:min-h-full overflow-hidden rounded-sm">
              <img
                src="/ss_people_collab.jpg"
                alt="Team collaboration in education"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
            </div>
          </div>

          {/* Cards Column */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {SCHOOL_SERVICES.map((service, idx) => (
              <Card
                key={idx}
                className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-sm group"
              >
                <CardHeader className="p-5">
                  <div className="w-10 h-[2px] bg-terracotta mb-4 group-hover:w-16 transition-all duration-300" />
                  <CardTitle className="text-lg font-serif text-charcoal mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-stone text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-700 delay-200 ease-out ${
            areCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button
            asChild
            className="bg-charcoal hover:bg-terracotta text-white px-10 font-semibold text-sm uppercase tracking-wider group transition-colors duration-300"
          >
            <a href="/#contact">
              Enquire Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-10 font-semibold text-sm uppercase tracking-wider group transition-all duration-300"
          >
            <Link to="/solutions">
              Find Out More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Infinite Marquee Schools */}
        <div className="pt-16 border-t border-white/50">
          <h3 className="text-center text-stone uppercase tracking-[0.3em] text-xs font-semibold mb-8">
            Select Schools I've Worked With
          </h3>

          {/* Marquee Container */}
          <div className="relative overflow-hidden">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-sandstone to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-sandstone to-transparent z-10 pointer-events-none" />

            {/* Scrolling track */}
            <div className="flex animate-marquee">
              {/* First set of logos */}
              {CLIENT_SCHOOLS.map((school, idx) => (
                <div
                  key={`first-${idx}`}
                  className="flex-shrink-0 mx-3 sm:mx-4"
                >
                  <div className="bg-white px-5 py-4 min-w-[260px] sm:min-w-[300px] border border-white/80 rounded-sm flex items-center gap-4 group cursor-default">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-sandstone rounded-full flex items-center justify-center overflow-hidden shrink-0">
                      {school.logo ? (
                        <img
                          src={school.logo}
                          alt={school.name}
                          loading="lazy"
                          width={64}
                          height={64}
                          className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                        />
                      ) : (
                        <Building2 className="h-8 w-8 text-terracotta" />
                      )}
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-semibold text-charcoal uppercase tracking-wider leading-tight">
                        {school.name}
                      </p>
                      <p className="text-[10px] text-stone mt-1 uppercase tracking-tight">
                        {school.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {CLIENT_SCHOOLS.map((school, idx) => (
                <div
                  key={`second-${idx}`}
                  className="flex-shrink-0 mx-3 sm:mx-4"
                >
                  <div className="bg-white px-5 py-4 min-w-[260px] sm:min-w-[300px] border border-white/80 rounded-sm flex items-center gap-4 group cursor-default">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-sandstone rounded-full flex items-center justify-center overflow-hidden shrink-0">
                      {school.logo ? (
                        <img
                          src={school.logo}
                          alt={school.name}
                          loading="lazy"
                          width={64}
                          height={64}
                          className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                        />
                      ) : (
                        <Building2 className="h-8 w-8 text-terracotta" />
                      )}
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-semibold text-charcoal uppercase tracking-wider leading-tight">
                        {school.name}
                      </p>
                      <p className="text-[10px] text-stone mt-1 uppercase tracking-tight">
                        {school.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolsSection;
