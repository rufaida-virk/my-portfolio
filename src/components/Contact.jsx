import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { BotanicalLeaf, WavySectionDivider } from './BohoDecorations';
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Github, MessageCircle } from 'lucide-react';

export const Contact = () => {
  const { social, location } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitted: false, loading: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.error) setStatus({ ...status, error: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ ...status, error: 'Please fill in all fields before sending.' });
      return;
    }

    setStatus({ ...status, loading: true });

    setTimeout(() => {
      setStatus({ submitted: true, loading: false, error: '' });
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 relative overflow-hidden w-full max-w-full">
      <WavySectionDivider />

      <div className="max-w-5xl mx-auto px-3 sm:px-6 w-full">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2">
            <BotanicalLeaf className="w-4 h-4 sm:w-5 sm:h-5 text-boho-sage" />
            <span className="font-handwriting text-xl sm:text-2xl text-boho-terracotta dark:text-boho-rose font-bold">
              Get in Touch
            </span>
            <BotanicalLeaf className="w-4 h-4 sm:w-5 sm:h-5 text-boho-sage transform scale-x-[-1]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl text-boho-brown dark:text-boho-cream font-bold break-words px-1">
            Let's create something together
          </h2>
          <p className="font-body text-xs sm:text-base text-boho-brown/70 dark:text-boho-cream/70 max-w-xl mx-auto px-2 break-words">
            Have a project in mind or want to discuss full-stack MERN opportunities? I'd love to hear from you.
          </p>
          <div className="w-14 sm:w-16 h-[2px] bg-boho-terracotta/40 mx-auto rounded-full mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 w-full">
          
          {/* Direct Details Column */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 w-full">
            <div className="bg-boho-sand/35 dark:bg-boho-dark-card rounded-xl sm:rounded-boho border border-boho-terracotta/20 dark:border-boho-sand/15 p-4 sm:p-7 shadow-xs space-y-5 sm:space-y-6 w-full overflow-hidden">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-boho-brown dark:text-boho-cream">
                Contact Details
              </h3>

              <div className="space-y-3.5 sm:space-y-4">
                <a
                  href={`mailto:${social.email}`}
                  className="flex items-center space-x-3 group p-2 rounded-lg hover:bg-boho-cream/60 dark:hover:bg-boho-dark-surface transition-colors w-full overflow-hidden"
                >
                  <div className="p-2 sm:p-2.5 rounded-full bg-boho-terracotta/10 text-boho-terracotta dark:text-boho-sand flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[11px] sm:text-xs uppercase font-sans text-boho-terracotta dark:text-boho-rose font-bold">
                      Email
                    </span>
                    <span className="text-xs sm:text-sm font-sans font-medium text-boho-brown dark:text-boho-cream group-hover:text-boho-terracotta truncate block">
                      {social.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${social.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 group p-2 rounded-lg hover:bg-boho-cream/60 dark:hover:bg-boho-dark-surface transition-colors w-full overflow-hidden"
                >
                  <div className="p-2 sm:p-2.5 rounded-full bg-boho-sage/15 text-boho-sage-dark dark:text-boho-sage-light flex-shrink-0">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[11px] sm:text-xs uppercase font-sans text-boho-terracotta dark:text-boho-rose font-bold">
                      Phone / WhatsApp
                    </span>
                    <span className="text-xs sm:text-sm font-sans font-medium text-boho-brown dark:text-boho-cream group-hover:text-boho-sage-dark truncate block">
                      {social.whatsappDisplay}
                    </span>
                  </div>
                </a>

                <div className="flex items-center space-x-3 p-2 w-full overflow-hidden">
                  <div className="p-2 sm:p-2.5 rounded-full bg-boho-mustard/15 text-boho-mustard-dark dark:text-boho-mustard flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[11px] sm:text-xs uppercase font-sans text-boho-terracotta dark:text-boho-rose font-bold">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-sans font-medium text-boho-brown dark:text-boho-cream truncate block">
                      {location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Link Badges */}
              <div className="pt-3.5 border-t border-boho-terracotta/15 dark:border-boho-sand/10">
                <span className="block text-[11px] sm:text-xs uppercase font-sans text-boho-brown/70 dark:text-boho-cream/70 mb-2.5 font-semibold">
                  Connect on Socials
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-boho-cream dark:bg-boho-dark-surface border border-boho-terracotta/20 dark:border-boho-sand/15 text-xs font-sans text-boho-brown dark:text-boho-cream hover:text-boho-terracotta transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-boho-cream dark:bg-boho-dark-surface border border-boho-terracotta/20 dark:border-boho-sand/15 text-xs font-sans text-boho-brown dark:text-boho-cream hover:text-boho-terracotta transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Working Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-boho-cream dark:bg-boho-dark-card rounded-xl sm:rounded-boho border border-boho-terracotta/25 dark:border-boho-sand/15 p-4 sm:p-7 md:p-8 shadow-boho w-full">
              {status.submitted ? (
                <div className="py-10 text-center space-y-3.5 animate-fadeIn">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-boho-sage/20 text-boho-sage-dark dark:text-boho-sage flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-boho-brown dark:text-boho-cream">
                    Thank you! Message Sent.
                  </h4>
                  <p className="font-body text-xs sm:text-sm md:text-base text-boho-brown/80 dark:text-boho-cream/80 max-w-md mx-auto">
                    Your note has been received. I'll get back to you as soon as possible!
                  </p>
                  <button
                    onClick={() => setStatus({ submitted: false, loading: false, error: '' })}
                    className="mt-3 px-5 py-2 rounded-full border border-boho-terracotta text-boho-terracotta dark:text-boho-sand text-xs font-sans font-bold hover:bg-boho-terracotta/10 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 w-full">
                  {status.error && (
                    <div className="p-2.5 sm:p-3 rounded-lg bg-red-100 text-red-800 text-xs font-sans">
                      {status.error}
                    </div>
                  )}

                  <div className="w-full">
                    <label htmlFor="contact-name" className="block text-[11px] sm:text-xs font-sans font-bold uppercase tracking-wider text-boho-terracotta dark:text-boho-sand mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rufaida Virk"
                      required
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-boho-sand/30 dark:bg-boho-dark-surface border border-boho-terracotta/20 dark:border-boho-sand/15 focus:outline-none focus:border-boho-terracotta text-boho-brown dark:text-boho-cream text-xs sm:text-sm transition-colors"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="contact-email" className="block text-[11px] sm:text-xs font-sans font-bold uppercase tracking-wider text-boho-terracotta dark:text-boho-sand mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rufaida@example.com"
                      required
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-boho-sand/30 dark:bg-boho-dark-surface border border-boho-terracotta/20 dark:border-boho-sand/15 focus:outline-none focus:border-boho-terracotta text-boho-brown dark:text-boho-cream text-xs sm:text-sm transition-colors"
                    />
                  </div>

                  <div className="w-full">
                    <label htmlFor="contact-message" className="block text-[11px] sm:text-xs font-sans font-bold uppercase tracking-wider text-boho-terracotta dark:text-boho-sand mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Let's build something beautiful together..."
                      required
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-boho-sand/30 dark:bg-boho-dark-surface border border-boho-terracotta/20 dark:border-boho-sand/15 focus:outline-none focus:border-boho-terracotta text-boho-brown dark:text-boho-cream text-xs sm:text-sm transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full py-3 sm:py-3.5 px-6 rounded-full bg-boho-terracotta text-white font-sans font-medium text-xs sm:text-sm tracking-wide shadow-boho hover:bg-boho-terracotta-dark transition-all flex items-center justify-center space-x-2 disabled:opacity-50 active:scale-95"
                  >
                    {status.loading ? (
                      <span>Sending note...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
