import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { BotanicalLeaf } from './BohoDecorations';
import { Layout, Server, Database, Wrench } from 'lucide-react';

export const Skills = () => {
  const { skills } = portfolioData;

  const categories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Layout,
      cardBg: 'bg-[#C8663F] border-[#A84C28]',
      iconBg: 'bg-[#F6EEDD] text-[#C8663F]',
      titleColor: 'text-[#F6EEDD]',
      tagBg: 'bg-[#F6EEDD] text-[#802D0E] border border-[#802D0E]/20 hover:bg-white',
      list: skills.frontend
    },
    {
      id: 'backend',
      title: 'Backend & APIs',
      icon: Server,
      cardBg: 'bg-[#748746] border-[#5E6E34]',
      iconBg: 'bg-[#F6EEDD] text-[#5E6E34]',
      titleColor: 'text-[#F6EEDD]',
      tagBg: 'bg-[#F6EEDD] text-[#343F18] border border-[#343F18]/20 hover:bg-white',
      list: skills.backend
    },
    {
      id: 'database',
      title: 'Database Architecture',
      icon: Database,
      cardBg: 'bg-[#C48723] border-[#A66F17]',
      iconBg: 'bg-[#F6EEDD] text-[#9E6914]',
      titleColor: 'text-[#F6EEDD]',
      tagBg: 'bg-[#F6EEDD] text-[#543803] border border-[#543803]/20 hover:bg-white',
      list: skills.database
    },
    {
      id: 'tools',
      title: 'Tools & Platforms',
      icon: Wrench,
      cardBg: 'bg-[#B06666] border-[#964E4E]',
      iconBg: 'bg-[#F6EEDD] text-[#964E4E]',
      titleColor: 'text-[#F6EEDD]',
      tagBg: 'bg-[#F6EEDD] text-[#5C2323] border border-[#5C2323]/20 hover:bg-white',
      list: skills.tools
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-14 sm:py-24 relative bg-[#23140C] text-[#F6EEDD] border-y-2 border-boho-terracotta/40 shadow-inner overflow-hidden w-full max-w-full"
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 w-full">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-8 sm:mb-14">
          <div className="inline-flex items-center space-x-2">
            <BotanicalLeaf className="w-4 h-4 sm:w-5 sm:h-5 text-boho-mustard" />
            <span className="font-handwriting text-xl sm:text-2xl text-boho-mustard font-bold">
              Craft & Capabilities
            </span>
            <BotanicalLeaf className="w-4 h-4 sm:w-5 sm:h-5 text-boho-mustard transform scale-x-[-1]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#F6EEDD] font-bold break-words px-1">
            Technical Skills
          </h2>
          <p className="font-body text-xs sm:text-base text-[#EBDDC3]/85 max-w-xl mx-auto px-2 break-words leading-relaxed">
            A comprehensive overview of my core technologies across the MERN full-stack development spectrum.
          </p>
          <div className="w-14 sm:w-16 h-[2px] bg-boho-terracotta/60 mx-auto rounded-full mt-2"></div>
        </div>

        {/* 4 Solid Colored Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-7 w-full">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className={`${cat.cardBg} rounded-2xl sm:rounded-boho border-2 p-3.5 sm:p-6 md:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 w-full overflow-hidden`}
              >
                {/* Card Title & Icon */}
                <div className="flex items-start sm:items-center space-x-2.5 sm:space-x-3 mb-3.5 sm:mb-5 pb-2.5 sm:pb-3 border-b border-white/25">
                  <div className={`p-1.5 sm:p-2.5 rounded-xl ${cat.iconBg} shadow-xs flex-shrink-0 mt-0.5 sm:mt-0`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className={`font-serif text-base sm:text-xl md:text-2xl font-bold tracking-tight sm:tracking-wide ${cat.titleColor} break-words leading-snug flex-1`}>
                    {cat.title}
                  </h3>
                </div>

                {/* Modern Rounded-Rectangle Tags (Auto-wrap, no overflow) */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2.5 w-full">
                  {cat.list.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs md:text-sm font-sans font-bold shadow-xs transition-all duration-200 hover:scale-105 cursor-default break-words max-w-full ${cat.tagBg}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
