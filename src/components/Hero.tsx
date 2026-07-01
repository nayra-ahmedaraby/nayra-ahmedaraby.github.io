import { useState, useEffect } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail, FolderGit2, Sparkles } from 'lucide-react';
import { asset } from '@/lib/utils';

const ROLES = ['Machine Learning', 'Data Analytics', 'Deep Learning', 'Generative AI'];

const Hero = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect cycling through ROLES
  useEffect(() => {
    const current = ROLES[roleIndex];
    let delay = deleting ? 45 : 90;

    if (!deleting && text === current) {
      delay = 1400; // pause at full word
      const t = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(t);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
      return;
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, roleIndex]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = asset('/Nayra_Ahmed_Araby_CV.pdf');
    link.download = 'Nayra Ahmed Araby - CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    { value: '4.1/4.3', label: 'CGPA' },
    { value: '2×', label: "Top Achiever ('24 & '25)" },
    { value: 'Dual', label: 'SUTech × Amity Degree' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        {/* subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <div className="animate-fade-in max-w-4xl mx-auto">
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-green-500/10 border border-green-400/30 text-green-300 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            Open to internships & opportunities
          </div>

          <p className="text-blue-300 font-medium mb-3 flex items-center justify-center gap-2">
            <Sparkles size={18} /> Hi, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-5 leading-tight">
            Nayra Ahmed{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Araby
            </span>
          </h1>

          {/* Typewriter role */}
          <div className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6 h-10">
            <span className="text-gray-400">I work with </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {text}
            </span>
            <span className="text-blue-400 animate-pulse">|</span>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            AI & Data Science student passionate about turning data into real-world impact —
            from machine learning models to interactive dashboards.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-7 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              <FolderGit2 size={20} />
              View Projects
            </button>
            <button
              type="button"
              onClick={downloadCV}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              <Download size={20} />
              Download CV
            </button>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { href: 'https://www.linkedin.com/in/nayra-ahmed-841793333', Icon: Linkedin, label: 'LinkedIn' },
              { href: 'https://github.com/nayra-ahmedaraby', Icon: Github, label: 'GitHub' },
              { href: 'mailto:nayraaraby2@gmail.com', Icon: Mail, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/15 hover:scale-110 transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 min-w-[140px]"
              >
                <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollTo('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white animate-bounce"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
