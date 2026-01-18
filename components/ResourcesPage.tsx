import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Featured content - Article and Podcast
const FEATURED_CONTENT = [
  {
    type: 'article',
    title: "Honouring students' multilingual repertoires and identities",
    subtitle: 'Our languages, our stories',
    description: 'Exploring the paradox of multilingualism in international schools and how students can deploy their multilingual repertoires and identities as resources for learning.',
    image: '/article-placeholder.jpg',
    link: '/resources/multilingual-identities',
    isInternal: true,
    date: 'Autumn 2020',
    publication: 'EAL Journal',
    readTime: '12 min read',
    icon: 'fa-newspaper',
  },
  {
    type: 'podcast',
    title: 'Talking multilingualism and motivation with Soukeina Mamodhoussen',
    publication: 'The Motivated Classroom',
    description: 'A conversation about multilingualism, translanguaging, and how we can leverage home languages in all classrooms to raise students\' competence, relatedness and esteem.',
    image: '/podcast-placeholder.jpg',
    link: 'https://open.spotify.com/episode/2J2v7h0mT04VE75XHWTpR9',
    date: 'Sep 2020',
    duration: '20 min',
    icon: 'fa-podcast',
  },
];

// Resource links organized by category
const RESOURCE_CATEGORIES = [
  {
    name: 'Accreditation & Standards',
    icon: 'fa-award',
    resources: [
      { title: 'Council of International Schools (CIS)', link: 'https://www.cois.org', description: 'Global accreditation for international schools' },
      { title: 'New England Association of Schools', link: 'https://www.neasc.org', description: 'Regional accreditation standards' },
      { title: 'Western Association of Schools', link: 'https://www.acswasc.org', description: 'Accreditation for diverse institutions' },
    ],
  },
  {
    name: 'Curriculum Frameworks',
    icon: 'fa-book-open',
    resources: [
      { title: 'International Baccalaureate (IB)', link: 'https://www.ibo.org', description: 'Global educational framework' },
      { title: 'Cambridge Assessment', link: 'https://www.cambridgeinternational.org', description: 'International curriculum and qualifications' },
      { title: 'Advanced Placement (AP)', link: 'https://apcentral.collegeboard.org', description: 'College-level courses and exams' },
    ],
  },
  {
    name: 'Recommended Reading',
    icon: 'fa-book',
    resources: [
      { title: 'Leading in a Culture of Change', link: 'https://www.amazon.com/Leading-Culture-Change-Michael-Fullan/dp/0787987662', description: 'Michael Fullan' },
      { title: 'Visible Learning for School Leaders', link: 'https://www.amazon.com/Visible-Learning-School-Leaders-Maximizing/dp/1544360231', description: 'John Hattie' },
      { title: 'Instructional Rounds in Education', link: 'https://www.amazon.com/Instructional-Rounds-Education-Network-Approach/dp/1934742163', description: 'City, Elmore, Fiarman & Teitel' },
      { title: 'Coherence: The Right Drivers in Action', link: 'https://www.amazon.com/Coherence-Right-Drivers-Schools-Districts/dp/1483364941', description: 'Michael Fullan & Joanne Quinn' },
    ],
  },
  {
    name: 'Research & Publications',
    icon: 'fa-microscope',
    resources: [
      { title: 'ISC Research', link: 'https://www.iscresearch.com', description: 'Market intelligence for international schools' },
      { title: 'NAIS Independent Ideas', link: 'https://www.nais.org', description: 'Research and best practices' },
      { title: 'EdWeek Global Learning', link: 'https://www.edweek.org', description: 'Education news and analysis' },
    ],
  },
];

const ResourcesPage: React.FC = () => {
  return (
    <div className="pt-24 animate-fade-in">
      <Helmet>
        <title>Resources | GCC Education</title>
        <meta name="description" content="Curated resources for international education professionals - accreditation guides, curriculum frameworks, professional development, and thought leadership content." />
        <link rel="canonical" href="https://gcceducation.com/resources" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-navy py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-1 px-3 bg-beige text-navy text-[10px] font-bold uppercase tracking-widest mb-4">Knowledge Hub</div>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Resources</h1>
          <p className="text-beige text-xl max-w-3xl mx-auto">Curated insights, tools, and references for international education leaders committed to excellence.</p>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-royal uppercase tracking-[0.3em] text-[11px] font-bold">Featured</span>
            <h2 className="text-4xl font-serif text-navy mt-2">Thought Leadership</h2>
            <div className="w-16 h-1 bg-beige mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {FEATURED_CONTENT.map((item, idx) => {
              const CardContent = (
                <>
                  {/* Image placeholder with icon */}
                  <div className="h-48 bg-gradient-to-br from-navy to-royal flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors"></div>
                    <i className={`fas ${item.icon} text-6xl text-white/30 group-hover:scale-110 transition-transform duration-300`}></i>
                    <div className="absolute top-4 left-4">
                      <span className="bg-beige text-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-4 text-[11px] text-navy/50 uppercase tracking-widest mb-4">
                      <span>{'publication' in item ? item.publication : ''}</span>
                      <span className="w-1 h-1 rounded-full bg-navy/30"></span>
                      <span>{item.date}</span>
                      <span className="w-1 h-1 rounded-full bg-navy/30"></span>
                      <span>{item.type === 'article' ? item.readTime : item.duration}</span>
                    </div>
                    <h3 className="text-2xl font-serif text-navy mb-2 group-hover:text-royal transition-colors">
                      {item.title}
                    </h3>
                    {'subtitle' in item && (
                      <p className="text-royal italic mb-4">{item.subtitle}</p>
                    )}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-royal font-semibold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                      {item.type === 'article' ? 'Read Article' : 'Listen Now'}
                      <i className="fas fa-arrow-right text-xs"></i>
                    </span>
                  </div>
                </>
              );

              if ('isInternal' in item && item.isInternal) {
                return (
                  <Link
                    key={idx}
                    to={item.link}
                    className="group block bg-beige-light rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {CardContent}
                  </Link>
                );
              }

              return (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-beige-light rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  {CardContent}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resource Links Section */}
      <section className="py-24 bg-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-royal uppercase tracking-[0.3em] text-[11px] font-bold">Essential Links</span>
            <h2 className="text-4xl font-serif text-navy mt-2">Resource Library</h2>
            <div className="w-16 h-1 bg-beige-accent mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {RESOURCE_CATEGORIES.map((category, catIdx) => (
              <div key={catIdx} className="bg-white rounded-sm shadow-md overflow-hidden">
                {/* Category Header */}
                <div className="bg-navy px-6 py-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <i className={`fas ${category.icon} text-beige`}></i>
                  </div>
                  <h3 className="text-lg font-serif text-white">{category.name}</h3>
                </div>

                {/* Resource Links */}
                <div className="divide-y divide-beige-light">
                  {category.resources.map((resource, resIdx) => (
                    <a
                      key={resIdx}
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-6 py-5 hover:bg-beige-light/50 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-semibold text-navy group-hover:text-royal transition-colors">
                            {resource.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">{resource.description}</p>
                        </div>
                        <i className="fas fa-external-link-alt text-xs text-navy/30 group-hover:text-royal transition-colors mt-1"></i>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Have a Resource to Share?</h2>
          <p className="text-beige/70 text-lg mb-8">
            I'm always looking to expand this collection with valuable resources for the international education community.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-beige text-navy px-10 py-4 rounded-sm font-semibold hover:bg-white transition-colors shadow-lg"
          >
            GET IN TOUCH
          </a>
        </div>
      </section>

      {/* Simple Navigation Back */}
      <section className="py-12 bg-white border-t border-beige-accent/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link to="/" className="text-navy/50 hover:text-navy transition-colors text-sm uppercase tracking-widest font-bold inline-flex items-center gap-2">
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
