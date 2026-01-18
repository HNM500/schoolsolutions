import React from 'react';

const Hero: React.FC = () => {
  const profileImage = '/hero-profile.png';

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-beige-light dark:bg-navy -z-10 clip-path-diagonal"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center pt-20">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-2">
            <span className="text-royal dark:text-beige font-semibold tracking-widest uppercase text-sm">25+ Years of Excellence</span>
            <h1 className="text-5xl md:text-7xl font-serif text-navy dark:text-beige leading-tight">
              Empowering International <span className="italic">Schools</span>
            </h1>
          </div>
          <p className="text-xl text-gray-700 dark:text-beige/80 leading-relaxed max-w-lg">
            Strategic consultancy transforming international education through innovation, AI integration, accreditation support, and world-class curricular frameworks for global excellence and institutional growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#schools" 
              className="bg-navy dark:bg-beige text-white dark:text-navy px-10 py-4 text-center rounded-sm font-semibold hover:bg-navy-light dark:hover:bg-beige-light transition-all shadow-xl"
            >
              EXPLORE OUR SERVICES
            </a>
            <a 
              href="#contact" 
              className="border-2 border-navy dark:border-beige text-navy dark:text-beige px-10 py-4 text-center rounded-sm font-semibold hover:bg-navy dark:hover:bg-beige hover:text-white dark:hover:text-navy transition-all"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
        
        <div className="relative group flex justify-center">
          {/* Background glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-br from-royal/10 via-navy/5 to-beige/20 dark:from-beige/10 dark:via-royal/5 dark:to-navy/20 rounded-3xl blur-3xl group-hover:from-royal/20 group-hover:via-navy/10 group-hover:to-beige/30 transition-all duration-500"></div>

          {/* Main image card - elongated rectangle */}
          <div
            className="relative rounded-2xl overflow-hidden border-8 border-white dark:border-navy bg-white dark:bg-navy transform hover:scale-105 transition-transform duration-500"
            style={{
              width: '500px',
              height: '700px',
              boxShadow: '0 25px 60px -15px rgba(0,0,0,0.35)'
            }}
          >
            <img
              src={profileImage}
              alt="Soukeina Mamodhoussen - International Educational Consultant"
              width={500}
              height={700}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-16 -left-8 bg-white dark:bg-navy p-6 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)] rounded-xl hidden lg:block border-l-4 border-royal dark:border-beige z-10 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-beige to-beige-light dark:from-beige/30 dark:to-beige/10 p-3 rounded-full shadow-inner">
                <i className="fas fa-quote-left text-royal dark:text-beige text-xl"></i>
              </div>
              <div>
                <p className="text-sm font-semibold text-navy dark:text-beige">Educational Management Expert</p>
                <p className="text-xs text-gray-500 dark:text-beige/60">CIS Evaluation Team Chair</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;