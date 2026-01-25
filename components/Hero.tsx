import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  const profileImage = '/ss_lightbulb2.jpg';
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Grain texture overlay */}
      <div className="grain-overlay absolute inset-0 pointer-events-none" />

      {/* LAYER 0: Fixed background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sandstone via-cream to-sage opacity-50" />

      {/* Background gradient shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large terracotta blob - top right */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-br from-terracotta/8 to-gold/5 blur-3xl" />

        {/* Sage blob - bottom left */}
        <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-tr from-sage/20 to-sandstone/10 blur-3xl" />

        {/* Gold accent blob - center right */}
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-bl from-gold/6 to-transparent blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 lg:gap-12 items-center pt-24 pb-16 relative z-10">
        {/* Content */}
        <div className="space-y-6 md:pr-8">
          {/* Badge */}
          <div
            className={`transition-all duration-700 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-stone border-b-2 border-terracotta pb-1">
              20+ Years of Excellence
            </span>
          </div>

          {/* Headline */}
          <div
            className={`transition-all duration-700 delay-100 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-charcoal leading-[0.95] tracking-tight">
              Empowering{' '}
              <span className="text-gradient italic font-medium">International</span>
              <br />
              Schools
            </h1>
          </div>

          {/* Description */}
          <div
            className={`transition-all duration-700 delay-200 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-lg sm:text-xl text-stone leading-relaxed max-w-lg">
              Strategic consultancy transforming international education through innovation, AI integration, accreditation support, and world-class curricular frameworks.
            </p>
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 pt-6 transition-all duration-700 delay-300 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Button
              asChild
              size="lg"
              className="bg-charcoal hover:bg-terracotta text-white px-10 h-14 font-semibold text-sm uppercase tracking-wider group transition-colors duration-300"
            >
              <a href="/solutions">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-10 h-14 font-semibold text-sm uppercase tracking-wider transition-all duration-300"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>

        {/* Image */}
        <div
          className={`relative flex justify-center transition-all duration-1000 delay-200 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Decorative background elements */}
          <div className="absolute -z-10 w-full h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-br from-sandstone via-transparent to-sage rounded-full blur-3xl opacity-70" />
          </div>

          {/* Main image container */}
          <div className="relative w-full">
            {/* Image container */}
            <div className="relative overflow-hidden rounded-sm w-full max-w-[550px] lg:max-w-[600px] aspect-video mx-auto shadow-xl">
              <img
                src={profileImage}
                alt="Innovation in education - brain and lightbulb concept"
                className="w-full h-full object-cover"
              />

              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-500 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-stone">
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-stone to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
