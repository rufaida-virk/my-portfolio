import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { BotanicalLeaf, WavySectionDivider } from './BohoDecorations';
import { MapPin, Briefcase, Code, GraduationCap, Compass } from 'lucide-react';

export const About = () => {
  const { about } = portfolioData;

  const factIcons = {
    'Location': MapPin,
    'Experience': Briefcase,
    'Focus': Code,
    'Studying': GraduationCap,
    'Currently building': Compass
  };

  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <WavySectionDivider />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-2">
            <BotanicalLeaf className="w-5 h-5 text-boho-sage" />
            <span className="font-handwriting text-2xl text-boho-terracotta dark:text-boho-rose font-bold">
              My Journey
            </span>
            <BotanicalLeaf className="w-5 h-5 text-boho-sage transform scale-x-[-1]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-boho-brown dark:text-boho-cream font-bold">
            About Me
          </h2>
          <div className="w-16 h-[2px] bg-boho-terracotta/40 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Story Box */}
        <div className="bg-boho-sand/40 dark:bg-boho-dark-surface/60 rounded-boho border border-boho-terracotta/20 dark:border-boho-sand/15 p-5 sm:p-8 md:p-10 shadow-boho mb-10 sm:mb-12 relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 pointer-events-none opacity-20 hidden sm:block">
            <BotanicalLeaf className="w-32 h-32 text-boho-sage" />
          </div>
          
          <p className="font-body text-sm sm:text-base md:text-lg text-boho-brown/90 dark:text-boho-cream/90 leading-relaxed sm:leading-loose">
            {about.story}
          </p>
        </div>

        {/* Quick Facts Cards (1-col on mobile, 2-col on sm, 3-col on lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {about.quickFacts.map((fact, index) => {
            const Icon = factIcons[fact.label] || Code;
            return (
              <div
                key={index}
                className={`p-4 sm:p-5 rounded-boho-sm bg-boho-cream dark:bg-boho-dark-card border border-boho-terracotta/20 dark:border-boho-sand/15 shadow-xs hover:shadow-boho transition-all duration-300 hover:-translate-y-1 ${
                  fact.label === 'Studying' ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="flex items-start space-x-3 sm:space-x-3.5">
                  <div className="p-2 sm:p-2.5 rounded-full bg-boho-sand/60 dark:bg-boho-dark-surface text-boho-terracotta dark:text-boho-mustard flex-shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="block font-sans text-[11px] sm:text-xs uppercase tracking-wider text-boho-terracotta/80 dark:text-boho-rose font-bold mb-1">
                      {fact.label}
                    </span>
                    <span className="block font-body text-xs sm:text-sm md:text-base text-boho-brown dark:text-boho-cream font-medium">
                      {fact.value}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
