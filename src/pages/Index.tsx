
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ProgramsAndInternships from '../components/ProgramsAndInternships';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ProgramsAndInternships />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
