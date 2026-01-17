
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-beige-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden grid lg:grid-cols-2">
          <div className="p-12 lg:p-20 bg-navy text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Contact Me Today</h2>
              <p className="text-beige/70 text-lg mb-12">
                Ready to transform your school's educational landscape or lead your school group to new heights of excellence? Let's connect.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-royal/20 flex items-center justify-center group-hover:bg-royal transition-colors">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <p className="text-xs text-beige/50 uppercase tracking-widest mb-1">Call</p>
                    <p className="text-xl font-medium tracking-wide">(+968) 7222 7329</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-royal/20 flex items-center justify-center group-hover:bg-royal transition-colors">
                    <i className="fab fa-whatsapp text-2xl"></i>
                  </div>
                  <div>
                    <p className="text-xs text-beige/50 uppercase tracking-widest mb-1">WhatsApp</p>
                    <p className="text-xl font-medium tracking-wide">(+44) 7944 304 364</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-royal/20 flex items-center justify-center group-hover:bg-royal transition-colors">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-xs text-beige/50 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-xl font-medium tracking-wide">soukeina@hotmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-royal/20 flex items-center justify-center group-hover:bg-royal transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </div>
                  <div>
                    <p className="text-xs text-beige/50 uppercase tracking-widest mb-1">LinkedIn</p>
                    <a href="https://linkedin.com/in/soukeina" className="text-xl font-medium tracking-wide hover:text-beige transition-colors">Soukeina Mamodhoussen</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-sm text-beige/50">Based in Muscat, Oman & London, UK</p>
            </div>
          </div>
          
          <div className="p-12 lg:p-20 flex flex-col justify-center">
            <h3 className="text-3xl font-serif text-navy mb-8">Request a Consultation</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-navy/50 uppercase tracking-widest mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border-b-2 border-beige-accent focus:border-navy outline-none transition-colors" placeholder="Your Full Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy/50 uppercase tracking-widest mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border-b-2 border-beige-accent focus:border-navy outline-none transition-colors" placeholder="your.email@school.org" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-navy/50 uppercase tracking-widest mb-2">Subject</label>
                <select className="w-full px-4 py-3 border-b-2 border-beige-accent focus:border-navy outline-none bg-transparent transition-colors">
                  <option>School Consultancy</option>
                  <option>School Group Strategic Planning</option>
                  <option>Board Advisory</option>
                  <option>Teacher Training</option>
                  <option>Other Enquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-navy/50 uppercase tracking-widest mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 border-b-2 border-beige-accent focus:border-navy outline-none transition-colors resize-none" placeholder="How can I support your institution?"></textarea>
              </div>
              <button className="w-full bg-navy text-white py-4 rounded-sm font-bold text-sm uppercase tracking-[0.2em] hover:bg-navy-light transition-all shadow-lg">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
