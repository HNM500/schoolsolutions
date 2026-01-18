
import React, { useState } from 'react';

const WEB3FORMS_ACCESS_KEY = '0542d9f0-3ab6-4478-bf64-c1298d8932bc';

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: 'School Consultancy',
    message: '',
  });
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: 'School Consultancy',
          message: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send message. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-beige-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden grid lg:grid-cols-2">
          <div className="p-6 sm:p-10 lg:p-20 bg-navy text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 sm:mb-8">Contact Me Today</h2>
              <p className="text-beige/70 text-base sm:text-lg mb-8 sm:mb-12">
                Ready to transform your school's educational landscape or lead your school group to new heights of excellence? Let's connect.
              </p>
              
              <div className="space-y-5 sm:space-y-8">
                <div className="flex items-center gap-4 sm:gap-6 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-royal/20 flex items-center justify-center group-hover:bg-royal transition-colors flex-shrink-0">
                    <i className="fas fa-phone text-sm sm:text-base"></i>
                  </div>
                  <div>
                    <p className="text-xs text-beige/50 uppercase tracking-widest mb-1">Call</p>
                    <p className="text-base sm:text-xl font-medium tracking-wide">(+968) 7222 7329</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-royal/20 flex items-center justify-center group-hover:bg-royal transition-colors flex-shrink-0">
                    <i className="fab fa-whatsapp text-xl sm:text-2xl"></i>
                  </div>
                  <div>
                    <p className="text-xs text-beige/50 uppercase tracking-widest mb-1">WhatsApp</p>
                    <p className="text-base sm:text-xl font-medium tracking-wide">(+44) 7944 304 364</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-royal/20 flex items-center justify-center group-hover:bg-royal transition-colors flex-shrink-0">
                    <i className="fas fa-envelope text-sm sm:text-base"></i>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-beige/50 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-base sm:text-xl font-medium tracking-wide truncate">soukeina@hotmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-royal/20 flex items-center justify-center group-hover:bg-royal transition-colors flex-shrink-0">
                    <i className="fab fa-linkedin-in text-sm sm:text-base"></i>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-beige/50 uppercase tracking-widest mb-1">LinkedIn</p>
                    <a href="https://linkedin.com/in/soukeina" className="text-base sm:text-xl font-medium tracking-wide hover:text-beige transition-colors block truncate">Soukeina Mamodhoussen</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10">
              <p className="text-sm text-beige/50">Based in Muscat, Oman & London, UK</p>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-20 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-serif text-navy mb-6 sm:mb-8">Request a Consultation</h3>

            {status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-800 font-medium">
                  Thank you for your message! I'll get back to you soon.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-800 font-medium">{errorMessage}</p>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-navy/50 uppercase tracking-widest mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-b-2 border-beige-accent focus:border-navy outline-none transition-colors"
                    placeholder="Your Full Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy/50 uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-b-2 border-beige-accent focus:border-navy outline-none transition-colors"
                    placeholder="your.email@school.org"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-navy/50 uppercase tracking-widest mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-b-2 border-beige-accent focus:border-navy outline-none bg-transparent transition-colors"
                >
                  <option>School Consultancy</option>
                  <option>School Group Strategic Planning</option>
                  <option>Board Advisory</option>
                  <option>Teacher Training</option>
                  <option>Other Enquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-navy/50 uppercase tracking-widest mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border-b-2 border-beige-accent focus:border-navy outline-none transition-colors resize-none"
                  placeholder="How can I support your institution?"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-navy text-white py-4 rounded-sm font-bold text-sm uppercase tracking-[0.2em] hover:bg-navy-light transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    SENDING...
                  </span>
                ) : (
                  'SEND MESSAGE'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
