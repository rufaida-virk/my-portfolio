import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('rufaida_portfolio_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('rufaida_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('rufaida_portfolio_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-boho-cream dark:bg-boho-dark-bg text-boho-brown dark:text-boho-cream transition-colors duration-300 font-body">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
