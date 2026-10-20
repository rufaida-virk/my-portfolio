import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Coffee } from 'lucide-react';

export const Footer = () => {
  const { footerNote } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 sm:py-12 border-t border-boho-terracotta/20 dark:border-boho-sand/10 bg-boho-sand/20 dark:bg-boho-dark-surface/40 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
        
        {/* Footer text strictly following the brief */}
        <div className="flex items-center justify-center sm:justify-start space-x-2">
          <Coffee className="w-4 h-4 text-boho-terracotta flex-shrink-0" />
          <p className="font-body text-xs sm:text-sm text-boho-brown/85 dark:text-boho-cream/85">
            {footerNote}
          </p>
        </div>

        {/* Back-to-top button */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center space-x-2 px-4 py-2 rounded-full border border-boho-terracotta/30 dark:border-boho-sand/30 bg-boho-cream dark:bg-boho-dark-card hover:bg-boho-terracotta/10 text-boho-terracotta dark:text-boho-sand text-xs font-sans font-bold shadow-xs hover:-translate-y-0.5 active:scale-95 transition-all"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
