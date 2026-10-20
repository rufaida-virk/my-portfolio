import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { BotanicalLeaf } from './BohoDecorations';

export const Navbar = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full overflow-hidden ${
          isScrolled
            ? 'bg-boho-cream/95 dark:bg-boho-dark-bg/95 backdrop-blur-md shadow-sm border-b border-boho-terracotta/15 dark:border-boho-sand/10 py-2.5 sm:py-3.5'
            : 'bg-boho-cream/85 dark:bg-boho-dark-bg/85 backdrop-blur-sm py-3.5 sm:py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-3 sm:px-6 flex items-center justify-between w-full">
          {/* Logo / Name */}
          <a
            href="#home"
            className="group flex items-center space-x-1 sm:space-x-2 text-base sm:text-xl font-serif font-bold text-boho-brown dark:text-boho-cream transition-colors min-w-0"
          >
            <span className="text-lg sm:text-2xl text-boho-terracotta font-serif truncate">Rufaida</span>
            <span className="hidden sm:inline text-boho-sage text-xs sm:text-sm font-handwriting font-bold tracking-wider">.mern</span>
            <BotanicalLeaf className="hidden sm:block w-4 h-4 sm:w-5 sm:h-5 text-boho-terracotta/70 group-hover:rotate-12 transition-transform duration-300" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-sans tracking-wide transition-all relative py-1 ${
                    isActive
                      ? 'text-boho-terracotta dark:text-boho-sand font-bold'
                      : 'text-boho-brown/80 dark:text-boho-cream/75 hover:text-boho-terracotta dark:hover:text-boho-cream'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-boho-terracotta rounded-full"></span>
                  )}
                </a>
              );
            })}

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className="p-2 rounded-full border border-boho-terracotta/30 dark:border-boho-sand/30 text-boho-terracotta dark:text-boho-mustard hover:bg-boho-sand/50 dark:hover:bg-boho-dark-card transition-all"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Buttons (Compact to prevent overflow on narrow screens) */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:hidden flex-shrink-0">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className="p-1.5 sm:p-2 rounded-full border border-boho-terracotta/30 dark:border-boho-sand/30 text-boho-terracotta dark:text-boho-mustard active:scale-95 transition-transform"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-1.5 sm:p-2 rounded-lg text-boho-brown dark:text-boho-cream active:scale-95 transition-transform"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-boho-cream/98 dark:bg-boho-dark-surface/98 backdrop-blur-md border-b border-boho-terracotta/20 px-4 sm:px-6 py-4 sm:py-5 shadow-lg animate-fadeIn w-full">
            <div className="flex flex-col space-y-2.5 sm:space-y-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-serif py-1.5 px-3 rounded-lg transition-colors ${
                    activeSection === link.name.toLowerCase()
                      ? 'text-boho-terracotta dark:text-boho-sand font-bold bg-boho-sand/40 dark:bg-boho-dark-card'
                      : 'text-boho-brown dark:text-boho-cream hover:text-boho-terracotta'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Backdrop for mobile drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden backdrop-blur-[2px]"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};
