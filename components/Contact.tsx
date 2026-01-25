import React, { useState } from 'react';
import { Phone, Mail, Linkedin, MessageCircle, MapPin, Loader2, CheckCircle, Award, Users } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollReveal } from '../hooks/useScrollReveal';

const WEB3FORMS_ACCESS_KEY = '0542d9f0-3ab6-4478-bf64-c1298d8932bc';

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [sectionRef, isSectionVisible] = useScrollReveal<HTMLElement>({ threshold: 0.1 });
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

  const contactInfo = [
    { icon: Phone, label: 'Call', value: '(+968) 7222 7329' },
    { icon: MessageCircle, label: 'WhatsApp', value: '(+44) 7944 304 364', href: 'https://wa.me/447944304364' },
    { icon: Mail, label: 'Email', value: 'soukeina@hotmail.com', href: 'mailto:soukeina@hotmail.com' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Soukeina Mamodhoussen', href: 'https://linkedin.com/in/soukeina' },
  ];

  const trustPoints = [
    { icon: Award, text: 'CIS Evaluation Team Chair' },
    { icon: Users, text: 'IB Workshop Leader' },
    { icon: CheckCircle, text: '25+ Years Experience' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden"
    >
      <div className="grid lg:grid-cols-2">
        {/* Left Panel - Image with Trust Content Overlay */}
        <div
          className={`relative bg-charcoal transition-all duration-700 ease-out ${
            isSectionVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/ss_books.jpg')`,
            }}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-charcoal/80" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-6 lg:p-8">
            <div>
              <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-terracotta mb-3">
                Get in Touch
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-white leading-[1.1] mb-3">
                Let's Transform{' '}
                <span className="italic text-terracotta">Education</span>{' '}
                Together
              </h2>
              <p className="text-white/70 text-sm max-w-md leading-relaxed">
                Ready to elevate your school's educational landscape? I'm here to help you achieve institutional excellence.
              </p>
            </div>

            {/* Trust Points */}
            <div className="my-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-3">Why Consult With Me</p>
              <div className="space-y-2">
                {trustPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-terracotta/20 flex items-center justify-center group-hover:bg-terracotta/40 transition-colors">
                      <point.icon className="w-3.5 h-3.5 text-terracotta" />
                    </div>
                    <span className="text-white/80 text-sm font-medium">{point.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-terracotta transition-colors">
                    <item.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <p className="text-[9px] text-white/40 uppercase tracking-widest">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-white hover:text-terracotta transition-colors text-sm font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-2 mt-auto">
              <MapPin className="h-3.5 w-3.5 text-white/40" />
              <p className="text-xs text-white/40">Based in Muscat, Oman & London, UK</p>
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div
          className={`bg-cream p-5 sm:p-6 lg:p-8 flex flex-col justify-center transition-all duration-700 delay-200 ease-out ${
            isSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <div className="max-w-lg mx-auto w-full">
            <h3 className="text-xl sm:text-2xl font-serif text-charcoal mb-1">
              Request a Consultation
            </h3>
            <p className="text-stone text-sm mb-5">
              Fill out the form below and I'll get back to you within 24 hours.
            </p>

            {status === 'success' && (
              <div className="mb-8 p-5 bg-sage border border-sage rounded-sm">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-charcoal" />
                  <p className="text-charcoal font-medium">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-8 p-5 bg-red-50 border border-red-200 rounded-sm">
                <p className="text-red-800 font-medium">{errorMessage}</p>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="floating-label-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="w-full px-3 py-3 pt-5 border-2 border-charcoal/10 rounded-sm bg-white text-charcoal text-sm focus:border-terracotta focus:ring-0 outline-none transition-colors"
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className="floating-label-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="w-full px-3 py-3 pt-5 border-2 border-charcoal/10 rounded-sm bg-white text-charcoal text-sm focus:border-terracotta focus:ring-0 outline-none transition-colors"
                  />
                  <label htmlFor="email">Email Address</label>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-[10px] font-semibold text-stone uppercase tracking-widest mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border-2 border-charcoal/10 rounded-sm bg-white text-charcoal text-sm focus:border-terracotta focus:ring-0 outline-none transition-colors cursor-pointer"
                >
                  <option>School Consultancy</option>
                  <option>School Group Strategic Planning</option>
                  <option>Board Advisory</option>
                  <option>Teacher Training</option>
                  <option>Other Enquiry</option>
                </select>
              </div>

              {/* Message */}
              <div className="floating-label-group">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder=" "
                  className="w-full px-3 py-3 pt-5 border-2 border-charcoal/10 rounded-sm bg-white text-charcoal text-sm focus:border-terracotta focus:ring-0 outline-none transition-colors resize-none"
                />
                <label htmlFor="message">How can I support your institution?</label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-charcoal hover:bg-terracotta text-white h-10 font-semibold text-xs uppercase tracking-widest transition-colors duration-300 rounded-sm"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
