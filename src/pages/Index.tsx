import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ProgramsAndInternships from '../components/ProgramsAndInternships';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Reveal from '../components/Reveal';
import BackToTop from '../components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><Skills /></Reveal>
      {/* slide disabled: Projects contains a position:fixed modal that a transform would break */}
      <Reveal slide={false}><Projects /></Reveal>
      <Reveal><ProgramsAndInternships /></Reveal>
      <Reveal><Education /></Reveal>
      <Reveal><Contact /></Reveal>
      <BackToTop />
    </div>
  );
};

export default Index;
