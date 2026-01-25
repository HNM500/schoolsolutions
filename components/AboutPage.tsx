import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Globe, GraduationCap, Award, Languages, Cpu, TrendingUp } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap: Record<string, React.ReactNode> = {
  'fa-earth-americas': <Globe className="h-7 w-7 text-terracotta" />,
  'fa-graduation-cap': <GraduationCap className="h-7 w-7 text-terracotta" />,
  'fa-award': <Award className="h-7 w-7 text-terracotta" />,
  'fa-language': <Languages className="h-7 w-7 text-terracotta" />,
  'fa-microchip': <Cpu className="h-7 w-7 text-terracotta" />,
  'fa-chart-line': <TrendingUp className="h-7 w-7 text-terracotta" />,
};

const AboutPage: React.FC = () => {
  const [introRef, isIntroVisible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });
  const [achievementsRef, areAchievementsVisible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <div className="pt-24">
      <Helmet>
        <title>About Soukeina Mamodhoussen | GCC Education</title>
        <meta name="description" content="Discover the expertise of Soukeina Mamodhoussen - IB Workshop Leader and CIS Evaluation Team Chair with over 20 years of international education experience across four continents." />
        <link rel="canonical" href="https://gcceducation.com/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-charcoal py-16 lg:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-charcoal/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-terracotta mb-6">
            About Me
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            About <span className="italic text-gold">Soukeina</span>
          </h1>
          <p className="text-white/60 text-lg uppercase tracking-[0.2em] font-light">
            Global Educational Leadership & Strategic Consultancy
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section ref={introRef} className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-16 h-[2px] bg-terracotta mx-auto mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Image Column */}
            <div
              className={`relative transition-all duration-700 ease-out ${
                isIntroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative overflow-hidden rounded-sm shadow-xl">
                <img
                  src="/Soukeina_MC.png"
                  alt="Soukeina Mamodhoussen at MassChallenge Switzerland"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-sm text-stone mt-4 text-center italic">
                MassChallenge Switzerland Finalist
              </p>
            </div>

            {/* Text Column */}
            <div
              className={`text-stone leading-relaxed space-y-6 text-base transition-all duration-700 delay-200 ease-out ${
                isIntroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p>
                With over two decades of experience spanning four continents, my journey in international education has been defined by a commitment to excellence and a passion for cultural integration. From the vibrant classrooms of Kenya to the strategic boardrooms of Switzerland and Oman, I have dedicated my career to elevating the standards of global education.
              </p>

              <p>
                As a seasoned <strong className="text-charcoal">IB Workshop Leader</strong> and <strong className="text-charcoal">CIS Evaluation Team Chair</strong>, I possess a holistic view of the educational landscape. My work isn't just about implementing systems; it's about understanding the unique cultural fabric of each institution I partner with. I bridge the gap between high-level oversight and the day-to-day realities of pedagogical innovation.
              </p>

              <div className="bg-sandstone p-6 border-l-4 border-terracotta rounded-sm">
                <h3 className="text-xl font-serif text-charcoal mb-3 italic">The Multilingual Advantage</h3>
                <p className="text-sm text-stone">
                  Central to my professional identity is a deep-seated multilingual proficiency. Navigating diverse cultural landscapes requires more than just strategic knowledge; it requires the ability to communicate, empathise, and build trust across linguistic boundaries. This cross-cultural fluency ensures that my consultancy work remains inclusive, resonant, and effective in any global context.
                </p>
              </div>

              <p>
                My expertise lies in curriculum transformation, particularly in the realms of ESL/EAL, multilingualism, writing innovation, and the strategic integration of emerging technologies like Generative AI. I believe that a school's greatest asset is its faculty, and my professional development workshops are designed to energise and empower teachers for the challenges of 21st-century learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section ref={achievementsRef} className="py-16 lg:py-24 bg-sandstone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 transition-all duration-700 ease-out ${
              areAchievementsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-terracotta mb-4">
              Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal">Career Benchmarks</h2>
            <div className="w-16 h-[2px] bg-terracotta mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACHIEVEMENTS.map((item, idx) => (
              <Card
                key={idx}
                className={`bg-white border-0 shadow-sm hover:shadow-xl transition-all group rounded-sm ${
                  areAchievementsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 100}ms`, transitionDuration: '700ms' }}
              >
                <CardHeader className="p-6">
                  <div className="w-16 h-16 bg-sandstone rounded-full flex items-center justify-center mb-4 group-hover:bg-sage transition-colors">
                    {iconMap[item.icon] || <Award className="h-7 w-7 text-terracotta" />}
                  </div>
                  <CardTitle className="text-xl font-serif text-charcoal">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <CardDescription className="text-stone text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              asChild
              variant="outline"
              className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-12 py-6 font-semibold uppercase tracking-widest rounded-sm transition-colors duration-300"
            >
              <a href="/#contact">Discuss a Partnership</a>
            </Button>
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

export default AboutPage;
