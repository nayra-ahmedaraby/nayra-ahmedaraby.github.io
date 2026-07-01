
import React from 'react';
import { MapPin, Phone, Mail, Target } from 'lucide-react';
import SectionHeading from './SectionHeading';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading title="About Me" />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-400/10 border border-blue-400/20">
                  <Target className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">Career Objective</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Second-year AI & Data Science student with a 4.1/4.3 CGPA and practical experience in AI tools,
                leadership, and innovation. Passionate about leveraging technology for social impact through 
                machine learning, deep learning, and large language models. Actively involved in national tech 
                programs and real-world AI projects.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-blue-400" size={20} />
                <span>Cairo, Egypt</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="text-blue-400" size={20} />
                <span>+20 155 708 4472</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="text-blue-400" size={20} />
                <span>nayraaraby2@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Languages</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Arabic</span>
                    <span className="text-blue-400">Native</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2.5 rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">English</span>
                    <span className="text-blue-400">B2</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2.5 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">French</span>
                    <span className="text-blue-400">Intermediate</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2.5 rounded-full w-2/3"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">German</span>
                    <span className="text-blue-400">Beginner</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2.5 rounded-full w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
