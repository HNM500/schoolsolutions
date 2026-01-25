import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Building2 } from 'lucide-react';
import { SCHOOL_SERVICES, CLIENT_SCHOOLS } from '../constants';
import ServiceCard from './ServiceCard';
import { Button } from './ui/button';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SolutionsPage: React.FC = () => {
  const [heroRef, isHeroVisible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });
  const [servicesRef, areServicesVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div className="pt-24">
      <Helmet>
        <title>Educational Solutions & Services | GCC Education</title>
        <meta name="description" content="Comprehensive educational consulting services including curriculum development, IB workshops, CIS accreditation support, and professional development for international schools." />
        <link rel="canonical" href="https://gcceducation.com/solutions" />
      </Helmet>

      {/* Hero Section */}
      <section ref={heroRef} className="bg-charcoal py-16 lg:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-charcoal/90" />
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-700 ease-out ${
            isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-terracotta mb-6">
            Partnering for Impact
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            Institutional{' '}
            <span className="italic text-gold">Excellence</span>
          </h1>
          <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
            Partnering with international schools to elevate educational standards through strategic intervention and professional growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-sandstone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={servicesRef}
            className={`grid md:grid-cols-2 gap-6 mb-16 transition-all duration-700 ease-out ${
              areServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {SCHOOL_SERVICES.map((service, idx) => (
              <ServiceCard key={idx} service={service} type="school" />
            ))}
          </div>

          {/* Schools Marquee */}
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

      {/* Back Navigation */}
      <section className="py-12 bg-white border-t border-sandstone">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Button
            asChild
            variant="ghost"
            className="text-stone hover:text-charcoal font-semibold text-sm uppercase tracking-widest"
          >
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
