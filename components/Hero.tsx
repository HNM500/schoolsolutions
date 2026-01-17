import React from 'react';

const Hero: React.FC = () => {
  const profileImage = '/hero-profile.png';

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-beige-light -z-10 clip-path-diagonal"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center pt-20">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-2">
            <span className="text-royal font-semibold tracking-widest uppercase text-sm">25+ Years of Excellence</span>
            <h1 className="text-5xl md:text-7xl font-serif text-navy leading-tight">
              Empowering International <span className="italic">Schools</span>
            </h1>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
            Strategic consultancy transforming international education through innovation, AI integration, accreditation support, and world-class curricular frameworks for global excellence and institutional growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#schools" 
              className="bg-navy text-white px-10 py-4 text-center rounded-sm font-semibold hover:bg-navy-light transition-all shadow-xl"
            >
              EXPLORE OUR SERVICES
            </a>
            <a 
              href="#contact" 
              className="border-2 border-navy text-navy px-10 py-4 text-center rounded-sm font-semibold hover:bg-navy hover:text-white transition-all"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
        
        <div className="relative group flex justify-center">
          <div className="absolute -inset-4 bg-navy/5 rounded-full blur-3xl group-hover:bg-royal/10 transition-all"></div>
          
          <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-white">
            <img 
              src={profileImage} 
              alt="Soukeina Mamodhoussen"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-10 -left-6 bg-white p-6 shadow-2xl rounded-lg hidden lg:block border-l-4 border-royal z-10">
            <div className="flex items-center gap-4">
              <div className="bg-beige p-3 rounded-full">
                <i className="fas fa-quote-left text-royal text-xl"></i>
              </div>
              <div>
                <p className="text-sm font-semibold text-navy">Educational Management Expert</p>
                <p className="text-xs text-gray-500">CIS Evaluation Team Chair</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;