import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { BotanicalLeaf, BohoSun, BohoMoon } from './BohoDecorations';
import { Linkedin, Github, Mail, MessageCircle, FileText } from 'lucide-react';

export const Hero = () => {
  const { owner, profession, tagline, location, experienceSummary, stats, social, profileImage, cvPath } = portfolioData;

  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-4 sm:left-10 opacity-30 dark:opacity-20 pointer-events-none animate-boho-float">
        <BohoSun className="w-14 h-14 sm:w-20 sm:h-20 text-boho-mustard" />
      </div>
      <div className="absolute bottom-6 right-4 sm:right-12 opacity-30 dark:opacity-20 pointer-events-none animate-boho-float-slow">
        <BohoMoon className="w-10 h-10 sm:w-14 sm:h-14 text-boho-rose" />
      </div>
      <div className="absolute top-1/2 left-2 opacity-20 dark:opacity-15 pointer-events-none hidden lg:block">
        <BotanicalLeaf className="w-16 h-16 text-boho-sage" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Text & Content Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6 order-2 lg:order-1">
            
            {/* Handwritten Greeting */}
            <div className="flex items-center space-x-2">
              <span className="font-handwriting text-2xl sm:text-3xl text-boho-terracotta dark:text-boho-rose font-bold">
                Hello, I'm
              </span>
              <BotanicalLeaf className="w-5 h-5 sm:w-6 sm:h-6 text-boho-sage inline-block transform rotate-12" />
            </div>

            {/* Large Serif Name */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-boho-brown dark:text-boho-cream font-bold tracking-tight leading-[1.2]">
              {owner}
            </h1>

            {/* Role & Tagline */}
            <div className="space-y-2 max-w-xl">
              <p className="font-sans font-bold text-base sm:text-lg md:text-xl text-boho-terracotta dark:text-boho-mustard tracking-wide uppercase">
                {profession}
              </p>
              <p className="font-body text-sm sm:text-base md:text-lg text-boho-brown/85 dark:text-boho-cream/85 italic leading-relaxed">
                "{tagline}"
              </p>
            </div>

            {/* Location & Experience Line */}
            <p className="font-sans text-xs sm:text-sm text-boho-brown/70 dark:text-boho-cream/70 tracking-wider uppercase flex flex-wrap items-center justify-center lg:justify-start gap-1.5">
              <span>{location}</span>
              <span className="text-boho-terracotta font-bold">·</span>
              <span>{experienceSummary}</span>
            </p>

            {/* Two Action Buttons (Responsive full-width on mobile, auto on sm+) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto pt-2">
              <a
                href="#projects"
                className="w-full sm:w-auto text-center px-7 py-3 rounded-full bg-boho-terracotta text-white font-sans font-medium text-sm sm:text-base tracking-wide shadow-boho hover:bg-boho-terracotta-dark hover:shadow-boho-hover transition-all duration-300 transform active:scale-95"
              >
                View My Work
              </a>
              <a
                href={cvPath}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="w-full sm:w-auto text-center px-7 py-3 rounded-full border-2 border-boho-terracotta text-boho-terracotta dark:text-boho-cream dark:border-boho-sand/40 font-sans font-medium text-sm sm:text-base tracking-wide hover:bg-boho-terracotta/10 dark:hover:bg-boho-dark-card transition-all duration-300 flex items-center justify-center space-x-2 active:scale-95"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 sm:space-x-4 pt-2 text-boho-brown/70 dark:text-boho-cream/70">
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full border border-boho-terracotta/20 dark:border-boho-sand/20 hover:text-boho-terracotta hover:border-boho-terracotta dark:hover:text-boho-mustard transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full border border-boho-terracotta/20 dark:border-boho-sand/20 hover:text-boho-terracotta hover:border-boho-terracotta dark:hover:text-boho-mustard transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${social.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-full border border-boho-terracotta/20 dark:border-boho-sand/20 hover:text-boho-terracotta hover:border-boho-terracotta dark:hover:text-boho-mustard transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${social.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat"
                className="p-2.5 rounded-full border border-boho-terracotta/20 dark:border-boho-sand/20 hover:text-boho-terracotta hover:border-boho-terracotta dark:hover:text-boho-mustard transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            {/* Stat Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 pt-2">
              {stats.map((chip, idx) => (
                <div
                  key={idx}
                  className="px-3 sm:px-4 py-1.5 rounded-full bg-boho-sand/70 dark:bg-boho-dark-card border border-boho-terracotta/25 dark:border-boho-sand/20 text-xs sm:text-sm font-sans text-boho-brown dark:text-boho-cream shadow-xs flex items-center space-x-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-boho-terracotta"></span>
                  <span>{chip.value}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Arch Frame Photo */}
          <div className="lg:col-span-5 flex justify-center relative order-1 lg:order-2">
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[320px]">
              
              {/* Botanical illustrations encircling the frame */}
              <div className="absolute -top-5 -right-5 pointer-events-none z-10 animate-boho-float">
                <BotanicalLeaf className="w-12 h-12 sm:w-16 sm:h-16 text-boho-sage" />
              </div>
              <div className="absolute -bottom-5 -left-5 pointer-events-none z-10">
                <BotanicalLeaf className="w-10 h-10 sm:w-14 sm:h-14 text-boho-terracotta transform -scale-x-100" />
              </div>

              {/* Decorative arch border background */}
              <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 sm:translate-x-3 sm:translate-y-3 rounded-t-[140px] sm:rounded-t-[160px] rounded-b-[20px] sm:rounded-b-[24px] border-2 border-boho-terracotta/30 dark:border-boho-sand/30 bg-boho-sand/30 dark:bg-boho-dark-surface pointer-events-none"></div>

              {/* Arch Photo Container */}
              <div className="relative overflow-hidden rounded-t-[140px] sm:rounded-t-[160px] rounded-b-[20px] sm:rounded-b-[24px] border-2 border-boho-terracotta shadow-boho bg-boho-sand/50">
                <img
                  src={profileImage}
                  alt={owner}
                  className="w-full h-[320px] sm:h-[380px] md:h-[420px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              </div>

              {/* Warm decorative badge */}
              <div className="absolute -bottom-3 right-3 sm:right-4 bg-boho-cream dark:bg-boho-dark-card border border-boho-terracotta/30 dark:border-boho-sand/30 px-3 py-1 rounded-full shadow-sm text-xs font-handwriting text-boho-terracotta dark:text-boho-rose font-bold">
                MERN Artisan ✨
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
