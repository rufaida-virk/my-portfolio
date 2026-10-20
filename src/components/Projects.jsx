import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { BotanicalLeaf, WavySectionDivider } from './BohoDecorations';
import { VideoModal } from './VideoModal';
import { Play, Lock, MessageSquareShare } from 'lucide-react';

export const Projects = () => {
  const { projects } = portfolioData;
  const [activeVideo, setActiveVideo] = useState(null);

  const scrollToContact = (projectName) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const messageInput = document.getElementById('contact-message');
      if (messageInput) {
        messageInput.value = `Hi Rufaida, I'd like to request walkthrough access for the source code of "${projectName}".`;
        messageInput.focus();
      }
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 relative">
      <WavySectionDivider />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-12 sm:mb-14">
          <div className="inline-flex items-center space-x-2">
            <BotanicalLeaf className="w-5 h-5 text-boho-sage" />
            <span className="font-handwriting text-2xl text-boho-terracotta dark:text-boho-rose font-bold">
              Featured Works
            </span>
            <BotanicalLeaf className="w-5 h-5 text-boho-sage transform scale-x-[-1]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-boho-brown dark:text-boho-cream font-bold">
            Full-Stack Projects
          </h2>
          <p className="font-body text-sm sm:text-base text-boho-brown/70 dark:text-boho-cream/70 max-w-xl mx-auto px-2">
            Production-grade full-stack MERN applications designed with scalable schemas and intuitive interfaces.
          </p>
          <div className="w-16 h-[2px] bg-boho-terracotta/40 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Projects Grid (Responsive 1-col on mobile/tablet, 2-col on lg) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-boho-cream dark:bg-boho-dark-card rounded-boho border border-boho-terracotta/25 dark:border-boho-sand/15 overflow-hidden shadow-boho hover:shadow-boho-hover transition-all duration-300 flex flex-col group"
            >
              {/* Project Thumbnail Image */}
              <div className="relative aspect-video overflow-hidden bg-boho-sand/40 border-b border-boho-terracotta/15 dark:border-boho-sand/10">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Watch Demo overlay button */}
                <button
                  onClick={() => setActiveVideo(project)}
                  className="absolute inset-0 bg-boho-brown/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                  aria-label={`Watch demo video for ${project.title}`}
                >
                  <div className="px-5 py-2.5 rounded-full bg-boho-terracotta text-white font-sans font-medium text-sm flex items-center space-x-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Play className="w-4 h-4 fill-white" />
                    <span>Watch Demo</span>
                  </div>
                </button>

                {/* Duration Badge */}
                <span className="absolute bottom-3 right-3 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-black/75 text-white font-mono text-xs">
                  {project.videoDuration}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-7 md:p-8 flex-1 flex flex-col justify-between space-y-5 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-boho-brown dark:text-boho-cream font-bold leading-snug">
                    {project.title}
                  </h3>

                  <p className="font-body text-sm sm:text-base text-boho-brown/85 dark:text-boho-cream/85 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                    {project.techTags.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 sm:px-3 py-1 rounded-lg text-xs font-sans font-semibold bg-boho-sand/60 dark:bg-boho-dark-surface text-boho-terracotta dark:text-boho-mustard border border-boho-terracotta/20 dark:border-boho-sand/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Responsive Action Buttons: Full-width stacked on mobile, row on sm+ */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-boho-terracotta/15 dark:border-boho-sand/10">
                  <button
                    onClick={() => setActiveVideo(project)}
                    className="w-full sm:flex-1 px-5 py-2.5 rounded-full bg-boho-terracotta text-white font-sans text-sm font-medium hover:bg-boho-terracotta-dark shadow-xs transition-colors flex items-center justify-center space-x-2 active:scale-95"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Watch Demo</span>
                  </button>

                  <button
                    onClick={() => scrollToContact(project.title)}
                    className="w-full sm:flex-1 px-5 py-2.5 rounded-full border border-boho-terracotta/50 dark:border-boho-sand/40 text-boho-brown dark:text-boho-cream font-sans text-sm font-medium hover:bg-boho-sand/50 dark:hover:bg-boho-dark-surface transition-colors flex items-center justify-center space-x-2 active:scale-95"
                  >
                    <Lock className="w-3.5 h-3.5 text-boho-terracotta dark:text-boho-mustard" />
                    <span>Source on Request</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note under grid */}
        <div className="mt-10 sm:mt-12 text-center p-3.5 sm:p-4 rounded-boho-sm bg-boho-sand/30 dark:bg-boho-dark-card border border-boho-terracotta/20 dark:border-boho-sand/10 max-w-2xl mx-auto">
          <p className="font-body text-xs sm:text-sm text-boho-brown/80 dark:text-boho-cream/80 italic flex items-center justify-center space-x-2">
            <MessageSquareShare className="w-4 h-4 text-boho-terracotta flex-shrink-0" />
            <span>"Source code is private. Happy to walk through it on a call or share access on request."</span>
          </p>
        </div>

      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <VideoModal
          isOpen={!!activeVideo}
          onClose={() => setActiveVideo(null)}
          videoUrl={activeVideo.videoUrl}
          title={activeVideo.title}
          poster={activeVideo.thumbnail}
        />
      )}
    </section>
  );
};
