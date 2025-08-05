import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const certifications = [
    "Introduction to Generative AI with AWS – Amazon & Udacity",
    "Microsoft AI Skills Fest (2025)",
    "Responsible & Ethical AI",
    "Introduction to Data Science",
    "Sustainability for Employability – United Nations"
  ];

  const activities = [
    "Aspire Leaders Program – Harvard-affiliated (Ongoing)",
    "InnovEgypt Program – TIEC & iSpark ",
    "E-Finance – Internship (Accepted)",
    "AIESEC Youth Exchange (Exploratory Experience)",
    "WHCL Competition – Finalist with ProofMe project"
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Education & Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Education */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-blue-400" size={24} />
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl text-blue-400 font-semibold">SUTech University</h4>
              <p className="text-gray-300">BSc in Data Science & Artificial Intelligence</p>
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar size={16} />
                <span>Expected Graduation: 2028</span>
              </div>
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-4 py-2 rounded-full text-center font-bold">
                GPA: 4.0
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-purple-400" size={24} />
              <h3 className="text-2xl font-semibold text-white">Certifications</h3>
            </div>
            
            <div className="space-y-3">
              <div className="bg-gold-500/20 text-yellow-400 px-3 py-2 rounded-lg text-center font-semibold mb-4">
                🏆 Top Achiever Award - 2025
              </div>
              {certifications.map((cert, index) => (
                <div key={index} className="text-gray-300 text-sm">
                  • {cert}
                </div>
              ))}
            </div>
          </div>
          
          {/* Activities */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-green-400" size={24} />
              <h3 className="text-2xl font-semibold text-white">Programs & Internships</h3>
            </div>
            
            <div className="space-y-3">
              {activities.map((activity, index) => (
                <div key={index} className="text-gray-300 text-sm">
                  • {activity}
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-500/20 rounded-lg">
              <h4 className="text-blue-400 font-semibold mb-2">Focus Areas</h4>
              <p className="text-gray-300 text-sm">
                🤖 Generative AI & Machine Learning<br/>
                💼 Leadership & Innovation<br/>
                🔬 Computer Vision & Applied Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;