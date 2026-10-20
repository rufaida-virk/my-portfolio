import React from 'react';

// Delicate botanical leaf sprig SVG
export const BotanicalLeaf = ({ className = "w-6 h-6 text-boho-sage" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M20 80 C 40 70, 60 50, 80 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M40 68 C 30 55, 38 42, 50 56 C 45 66, 40 68, 40 68 Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2" />
    <path d="M56 52 C 68 45, 75 55, 63 64 C 57 58, 56 52, 56 52 Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2" />
    <path d="M68 36 C 60 22, 70 15, 78 26 C 75 33, 68 36, 68 36 Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2" />
    <path d="M80 20 C 85 10, 95 18, 86 28 C 82 25, 80 20, 80 20 Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// Boho Sun / Mandala burst
export const BohoSun = ({ className = "w-12 h-12 text-boho-mustard" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="18" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <circle cx="50" cy="50" r="8" fill="currentColor" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <line
        key={i}
        x1="50"
        y1="24"
        x2="50"
        y2="14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        transform={`rotate(${angle} 50 50)`}
      />
    ))}
    {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => (
      <circle
        key={`dot-${i}`}
        cx="50"
        cy="20"
        r="1.8"
        fill="currentColor"
        transform={`rotate(${angle} 50 50)`}
      />
    ))}
  </svg>
);

// Boho Crescent Moon
export const BohoMoon = ({ className = "w-8 h-8 text-boho-rose" }) => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M36 10 C 22 15, 15 32, 24 46 C 30 52, 38 54, 46 50 C 35 48, 28 38, 30 26 C 31 18, 36 12, 36 10 Z"
      fill="currentColor"
      fillOpacity="0.3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="42" cy="18" r="2" fill="currentColor" />
  </svg>
);

// Organic Hand-drawn wavy divider between sections with leaves
export const WavySectionDivider = ({ className = "my-8 sm:my-12 text-boho-terracotta" }) => (
  <div className={`w-full max-w-full flex items-center justify-center overflow-hidden opacity-60 ${className}`}>
    <div className="flex items-center space-x-2 sm:space-x-3 w-full max-w-xl px-2 sm:px-4">
      <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-current to-current opacity-40"></div>
      <div className="flex items-center space-x-1.5 sm:space-x-2">
        <BotanicalLeaf className="w-4 h-4 sm:w-5 sm:h-5 text-boho-sage" />
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-boho-terracotta"></span>
        <BotanicalLeaf className="w-4 h-4 sm:w-5 sm:h-5 text-boho-sage transform scale-x-[-1]" />
      </div>
      <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-current to-current opacity-40"></div>
    </div>
  </div>
);
