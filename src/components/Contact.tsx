import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'programs', label: 'Programs' },
  { id: 'education', label: 'Education' },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading
          title="Let's Connect"
          subtitle="Open to internships and opportunities in AI & data science — feel free to reach out."
        />

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Get In Touch</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="mailto:nayraaraby2@gmail.com"
              className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
            >
              <div className="bg-blue-500/20 p-3 rounded-full group-hover:bg-blue-500/30">
                <Mail size={20} />
              </div>
              <span>nayraaraby2@gmail.com</span>
            </a>
            
            <a 
              href="tel:+201557084472"
              className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
            >
              <div className="bg-green-500/20 p-3 rounded-full group-hover:bg-green-500/30">
                <Phone size={20} />
              </div>
              <span>+20 155 708 4472</span>
            </a>
            
            <div className="flex items-center gap-4 text-gray-300">
              <div className="bg-purple-500/20 p-3 rounded-full">
                <MapPin size={20} />
              </div>
              <span>Cairo, Egypt</span>
            </div>
            
            <a 
              href="https://www.linkedin.com/in/nayra-ahmed-841793333"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
            >
              <div className="bg-blue-600/20 p-3 rounded-full group-hover:bg-blue-600/30">
                <Linkedin size={20} />
              </div>
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="flex flex-col items-center gap-6">
            {/* Quick links */}
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </nav>

            {/* Social icons */}
            <div className="flex gap-3">
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
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/15 hover:scale-110 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <p className="text-gray-500 text-sm text-center">
              © {new Date().getFullYear()} Nayra Ahmed Araby. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;