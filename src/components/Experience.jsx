import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { BotanicalLeaf, WavySectionDivider } from './BohoDecorations';
import { Award, Briefcase, GraduationCap, Calendar } from 'lucide-react';

export const Experience = () => {
  const { experienceTimeline, certifications } = portfolioData;

  return (
    <section id="experience" className="py-14 sm:py-20 relative overflow-hidden w-full max-w-full">
      <WavySectionDivider />

      <div className="max-w-4xl mx-auto px-3 sm:px-6 w-full">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-10 sm:mb-16">
          <div className="inline-flex items-center space-x-2">
            <BotanicalLeaf className="w-4 h-4 sm:w-5 sm:h-5 text-boho-sage" />
            <span className="font-handwriting text-xl sm:text-2xl text-boho-terracotta dark:text-boho-rose font-bold">
              Timeline & Growth
            </span>
            <BotanicalLeaf className="w-4 h-4 sm:w-5 sm:h-5 text-boho-sage transform scale-x-[-1]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl text-boho-brown dark:text-boho-cream font-bold">
            Experience & Education
          </h2>
          <p className="font-body text-xs sm:text-base text-boho-brown/70 dark:text-boho-cream/70 max-w-xl mx-auto px-2">
            A chronological path through professional software engineering roles and ongoing academic studies.
          </p>
          <div className="w-14 sm:w-16 h-[2px] bg-boho-terracotta/40 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Vertical Timeline with responsive padding and marker alignment */}
        <div className="relative pl-6 sm:pl-10 space-y-7 sm:space-y-12 before:absolute before:left-[11px] sm:before:left-[19px] before:top-2 before:bottom-4 before:w-[3px] before:bg-gradient-to-b before:from-boho-terracotta before:via-boho-sage before:to-boho-mustard before:rounded-full w-full">
          {experienceTimeline.map((item, index) => {
            const isEducation = item.role.includes('BS');
            return (
              <div key={index} className="relative group w-full">
                
                {/* Botanical Leaf Node Marker (Centered on the line for mobile & desktop) */}
                <div className="absolute -left-[23px] sm:-left-[35px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-boho-cream dark:bg-boho-dark-bg border-2 border-boho-terracotta flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  {isEducation ? (
                    <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 text-boho-terracotta" />
                  ) : (
                    <BotanicalLeaf className="w-3 h-3 sm:w-4 sm:h-4 text-boho-sage" />
                  )}
                </div>

                {/* Card Container */}
                <div className="bg-boho-sand/35 dark:bg-boho-dark-card rounded-xl sm:rounded-boho border border-boho-terracotta/20 dark:border-boho-sand/15 p-4 sm:p-7 shadow-xs hover:shadow-boho transition-all duration-300 w-full overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-2">
                    <span className="font-serif text-base sm:text-xl font-bold text-boho-brown dark:text-boho-cream leading-snug break-words">
                      {item.role}
                    </span>
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-boho-terracotta/10 dark:bg-boho-terracotta/20 text-boho-terracotta dark:text-boho-sand text-[11px] sm:text-xs font-sans font-bold w-fit">
                      <Calendar className="w-3 h-3" />
                      <span>{item.period}</span>
                    </span>
                  </div>

                  {/* Company & Type */}
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-sans font-bold text-boho-sage-dark dark:text-boho-sage-light mb-2.5">
                    <Briefcase className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{item.company}</span>
                    {item.type && (
                      <span className="text-[10px] sm:text-xs px-1.5 py-0.5 rounded bg-boho-sand/70 dark:bg-boho-dark-surface font-normal text-boho-brown/80 dark:text-boho-cream/80">
                        {item.type}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="font-body text-xs sm:text-sm md:text-base text-boho-brown/85 dark:text-boho-cream/85 leading-relaxed break-words">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Certificates & Achievements section */}
        <div className="mt-14 sm:mt-20">
          <div className="text-center mb-6 sm:mb-8">
            <span className="font-handwriting text-xl text-boho-terracotta dark:text-boho-rose font-bold block">
              Recognition
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-boho-brown dark:text-boho-cream">
              Certificates & Achievements
            </h3>
          </div>

          <div className="max-w-md mx-auto px-2">
            {certifications.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="bg-boho-cream dark:bg-boho-dark-card rounded-xl sm:rounded-boho border-2 border-boho-mustard/40 p-4 sm:p-6 shadow-boho text-center relative overflow-hidden group hover:border-boho-mustard transition-colors"
              >
                <div className="p-2.5 w-11 h-11 sm:w-14 sm:h-14 mx-auto rounded-full bg-boho-mustard/15 text-boho-mustard-dark dark:text-boho-mustard flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <h4 className="font-serif text-base sm:text-xl font-bold text-boho-brown dark:text-boho-cream mb-1.5 break-words">
                  {cert.title}
                </h4>
                <span className="inline-block px-3 py-0.5 rounded-full text-xs font-sans font-semibold bg-boho-mustard/20 text-boho-mustard-dark dark:text-boho-mustard">
                  {cert.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
