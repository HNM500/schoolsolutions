import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';

interface Props {
  isSummary?: boolean;
}

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const CountUpStat: React.FC<{ stat: StatItem; isVisible: boolean; delay: number }> = ({
  stat,
  isVisible,
  delay,
}) => {
  const displayValue = useCountUp(
    { end: stat.value, suffix: stat.suffix, duration: 2000, delay },
    isVisible
  );

  return (
    <div className="text-center">
      <span className="block text-5xl sm:text-6xl lg:text-7xl font-serif text-terracotta font-medium tabular-nums">
        {displayValue}
      </span>
      <span className="block mt-2 text-xs uppercase tracking-[0.2em] text-stone font-semibold">
        {stat.label}
      </span>
    </div>
  );
};

const About: React.FC<Props> = ({ isSummary = false }) => {
  const [sectionRef, isSectionVisible] = useScrollReveal<HTMLElement>({ threshold: 0.2 });
  const [statsRef, areStatsVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });

  const stats: StatItem[] = [
    { value: 20, suffix: '+', label: 'Years Experience' },
    { value: 15, suffix: '+', label: 'Countries' },
    { value: 35, suffix: '+', label: 'Schools' },
    { value: 1000, suffix: '+', label: 'Students' },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 lg:py-24 bg-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sandstone/30 to-transparent pointer-events-none" />

      {/* Additional decorative shape */}
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-sage/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div
            className={`space-y-6 transition-all duration-700 ease-out ${
              isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-terracotta mb-6">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal leading-[1.1] mb-8">
                Bridging Global Expertise with{' '}
                <span className="italic text-terracotta">Local Excellence</span>
              </h2>
              <div className="space-y-6 text-stone leading-relaxed text-lg">
                <p>
                  With over two decades of experience across four continents, I partner with international schools to elevate educational excellence through innovative curriculum design, transformative teacher training, and strategic leadership development.
                </p>
                {isSummary ? (
                  <p className="font-medium text-charcoal">
                    Dedicated to fostering global citizenship, multilingual proficiency, and institutional growth in international school settings.
                  </p>
                ) : (
                  <p>
                    As an IB Workshop Leader and CIS Evaluation Team Chair, I bring a unique perspective that combines high-level institutional oversight with ground-level pedagogical innovation.
                  </p>
                )}
              </div>
            </div>

            {isSummary && (
              <div className="pt-4">
                <Button
                  asChild
                  className="bg-charcoal hover:bg-terracotta text-white font-semibold text-sm uppercase tracking-wider group transition-colors duration-300"
                >
                  <a href="/about">
                    More About Me
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            )}
          </div>

          {/* Image Column */}
          <div
            className={`relative transition-all duration-700 delay-200 ease-out ${
              isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Decorative frame offset - Layer 1 */}
            <div className="absolute -inset-4 border border-terracotta/20 rounded-sm -rotate-2 pointer-events-none" />

            {/* Decorative frame offset - Layer 2 */}
            <div className="absolute -inset-4 border border-charcoal/10 rounded-sm rotate-1 pointer-events-none" />

            {/* Main image */}
            <div className="relative">
              {/* Image */}
              <div className="relative overflow-hidden rounded-sm bg-sandstone aspect-[4/5]">
                <img
                  src="/hero-profile.png"
                  alt="Soukeina Mamodhoussen"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating credential badge */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white px-6 py-4 shadow-xl rounded-sm border-l-4 border-terracotta">
              <p className="text-sm font-serif font-semibold text-charcoal">Educational Management Expert</p>
              <p className="text-xs text-stone mt-1 uppercase tracking-wider">CIS Evaluation Team Chair</p>
            </div>
          </div>
        </div>

        {/* Stats Section with Count-up */}
        <div
          ref={statsRef}
          className={`mt-16 lg:mt-20 pt-16 border-t border-sandstone transition-all duration-700 ease-out ${
            areStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <CountUpStat
                key={stat.label}
                stat={stat}
                isVisible={areStatsVisible}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
