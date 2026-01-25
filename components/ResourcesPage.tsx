import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, Newspaper, Podcast, Award, BookOpen, Book, Microscope, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle } from './ui/card';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FEATURED_CONTENT = [
  {
    type: 'article',
    title: "Honouring students' multilingual repertoires and identities",
    subtitle: 'Our languages, our stories',
    description: 'Exploring the paradox of multilingualism in international schools and how students can deploy their multilingual repertoires and identities as resources for learning.',
    link: '/resources/multilingual-identities',
    isInternal: true,
    date: 'Autumn 2020',
    publication: 'EAL Journal',
    readTime: '12 min read',
    icon: Newspaper,
  },
  {
    type: 'podcast',
    title: 'Talking multilingualism and motivation with Soukeina Mamodhoussen',
    publication: 'The Motivated Classroom',
    description: "A conversation about multilingualism, translanguaging, and how we can leverage home languages in all classrooms to raise students' competence, relatedness and esteem.",
    link: 'https://open.spotify.com/episode/2J2v7h0mT04VE75XHWTpR9',
    date: 'Sep 2020',
    duration: '20 min',
    icon: Podcast,
  },
];

const RESOURCE_CATEGORIES = [
  {
    name: 'Accreditation & Standards',
    icon: Award,
    resources: [
      { title: 'Council of International Schools (CIS)', link: 'https://www.cois.org', description: 'Global accreditation for international schools' },
      { title: 'New England Association of Schools', link: 'https://www.neasc.org', description: 'Regional accreditation standards' },
      { title: 'Western Association of Schools', link: 'https://www.acswasc.org', description: 'Accreditation for diverse institutions' },
    ],
  },
  {
    name: 'Curriculum Frameworks',
    icon: BookOpen,
    resources: [
      { title: 'International Baccalaureate (IB)', link: 'https://www.ibo.org', description: 'Global educational framework' },
      { title: 'Cambridge Assessment', link: 'https://www.cambridgeinternational.org', description: 'International curriculum and qualifications' },
      { title: 'Advanced Placement (AP)', link: 'https://apcentral.collegeboard.org', description: 'College-level courses and exams' },
    ],
  },
  {
    name: 'Recommended Reading',
    icon: Book,
    resources: [
      { title: 'Leading in a Culture of Change', link: 'https://www.amazon.com/Leading-Culture-Change-Michael-Fullan/dp/0787987662', description: 'Michael Fullan' },
      { title: 'Visible Learning for School Leaders', link: 'https://www.amazon.com/Visible-Learning-School-Leaders-Maximizing/dp/1544360231', description: 'John Hattie' },
      { title: 'Instructional Rounds in Education', link: 'https://www.amazon.com/Instructional-Rounds-Education-Network-Approach/dp/1934742163', description: 'City, Elmore, Fiarman & Teitel' },
      { title: 'Coherence: The Right Drivers in Action', link: 'https://www.amazon.com/Coherence-Right-Drivers-Schools-Districts/dp/1483364941', description: 'Michael Fullan & Joanne Quinn' },
    ],
  },
  {
    name: 'Research & Publications',
    icon: Microscope,
    resources: [
      { title: 'ISC Research', link: 'https://www.iscresearch.com', description: 'Market intelligence for international schools' },
      { title: 'NAIS Independent Ideas', link: 'https://www.nais.org', description: 'Research and best practices' },
      { title: 'EdWeek Global Learning', link: 'https://www.edweek.org', description: 'Education news and analysis' },
    ],
  },
];

const ResourcesPage: React.FC = () => {
  const [featuredRef, isFeaturedVisible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });
  const [libraryRef, isLibraryVisible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <div className="pt-24">
      <Helmet>
        <title>Resources | GCC Education</title>
        <meta name="description" content="Curated resources for international education professionals - accreditation guides, curriculum frameworks, professional development, and thought leadership content." />
        <link rel="canonical" href="https://gcceducation.com/resources" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-charcoal py-16 lg:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-charcoal/90" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-terracotta mb-6">
            Knowledge Hub
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            <span className="italic text-gold">Resources</span>
          </h1>
          <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
            Curated insights, tools, and references for international education leaders committed to excellence.
          </p>
        </div>
      </section>

      {/* Featured Content Section */}
      <section ref={featuredRef} className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 transition-all duration-700 ease-out ${
              isFeaturedVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-terracotta mb-4">
              Featured
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal">Thought Leadership</h2>
            <div className="w-16 h-[2px] bg-terracotta mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {FEATURED_CONTENT.map((item, idx) => {
              const IconComponent = item.icon;
              const CardContentElement = (
                <>
                  <div className="h-48 bg-gradient-to-br from-charcoal to-charcoal/80 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors" />
                    <IconComponent className="h-16 w-16 text-white/20 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-terracotta text-white text-[10px] font-semibold px-3 py-1 rounded-sm uppercase tracking-wider">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-[11px] text-stone uppercase tracking-widest mb-4">
                      <span>{item.publication}</span>
                      <span className="w-1 h-1 rounded-full bg-terracotta/40" />
                      <span>{item.date}</span>
                      <span className="w-1 h-1 rounded-full bg-terracotta/40" />
                      <span>{item.type === 'article' ? item.readTime : item.duration}</span>
                    </div>
                    <h3 className="text-2xl font-serif text-charcoal mb-2 group-hover:text-terracotta transition-colors">
                      {item.title}
                    </h3>
                    {'subtitle' in item && (
                      <p className="text-terracotta italic mb-4">{item.subtitle}</p>
                    )}
                    <p className="text-stone leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-charcoal font-semibold text-sm uppercase tracking-widest group-hover:text-terracotta group-hover:gap-4 transition-all">
                      {item.type === 'article' ? 'Read Article' : 'Listen Now'}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </>
              );

              if ('isInternal' in item && item.isInternal) {
                return (
                  <Link
                    key={idx}
                    to={item.link}
                    className={`group block bg-sandstone rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                      isFeaturedVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    {CardContentElement}
                  </Link>
                );
              }

              return (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block bg-sandstone rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    isFeaturedVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {CardContentElement}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resource Links Section */}
      <section ref={libraryRef} className="py-16 lg:py-24 bg-sandstone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 transition-all duration-700 ease-out ${
              isLibraryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-terracotta mb-4">
              Essential Links
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal">Resource Library</h2>
            <div className="w-16 h-[2px] bg-terracotta mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {RESOURCE_CATEGORIES.map((category, catIdx) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={catIdx}
                  className={`overflow-hidden border-0 shadow-sm rounded-sm transition-all duration-700 ${
                    isLibraryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${catIdx * 100}ms` }}
                >
                  <CardHeader className="bg-charcoal px-6 py-4 flex-row items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-terracotta" />
                    </div>
                    <CardTitle className="text-lg font-serif text-white">
                      {category.name}
                    </CardTitle>
                  </CardHeader>

                  <div className="divide-y divide-sandstone bg-white">
                    {category.resources.map((resource, resIdx) => (
                      <a
                        key={resIdx}
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-6 py-5 hover:bg-sandstone transition-colors group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="font-semibold text-charcoal group-hover:text-terracotta transition-colors">
                              {resource.title}
                            </h4>
                            <p className="text-sm text-stone mt-1">{resource.description}</p>
                          </div>
                          <ExternalLink className="h-4 w-4 text-stone/50 group-hover:text-terracotta transition-colors shrink-0 mt-1" />
                        </div>
                      </a>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Have a Resource to Share?
          </h2>
          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            I'm always looking to expand this collection with valuable resources for the international education community.
          </p>
          <Button
            asChild
            className="bg-terracotta hover:bg-terracotta/90 text-white font-semibold rounded-sm"
          >
            <a href="/#contact">Get in Touch</a>
          </Button>
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

export default ResourcesPage;
