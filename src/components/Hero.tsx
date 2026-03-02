
import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/home/project/public/Nayra Ahmed Araby Abdo.pdf';
    link.download = 'Nayra Ahmed Araby Abdo.pdf';
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Nayra Ahmed
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Araby
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Data Science & AI Student | ML, Deep Learning & LLMs | 
            <span className="text-blue-400 font-semibold"> GPA 4.0 Top Achiever</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="https://www.linkedin.com/in/nayra-ahmed-841793333" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a 
              href="mailto:nayraaraby2@gmail.com"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Mail size={20} />
              Contact Me
            </a>
            <button 
              onClick={downloadCV}
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
