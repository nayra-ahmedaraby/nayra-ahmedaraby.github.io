
import React from 'react';
import { MapPin, Phone, Mail, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-blue-400" size={24} />
                <h3 className="text-2xl font-semibold text-white">Career Objective</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Data Science & AI student with strong academic excellence (GPA 4.0) and practical 
                experience in real-world projects. Passionate about applying AI in Computer Vision 
                and Robotics, with a proven ability to lead teams and deliver impactful solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-blue-400" size={20} />
                <span>81 Mohamed Farid St, Zahret Al-Assema Compound, Badr City, Cairo</span>
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
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">English</span>
                    <span className="text-blue-400">B1</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">French</span>
                    <span className="text-blue-400">Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full w-2/3"></div>
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
