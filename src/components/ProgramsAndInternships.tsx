import React from 'react';
import { Briefcase, Award } from 'lucide-react';

const ProgramsAndInternships = () => {
  const programs = [
    {
      title: "FDAI – Ministry of Youth and Sports",
      type: "Program",
      description: "Member AI Committee- Collaborated with peers on projects and activities related to artificial intelligence"
    },
    {
      title: "Aspire Leaders Program – Harvard-affiliated",
      type: "Program",
      description: "Selected participant in a global leadership and personal development program focused on social impact and innovation."
    },
    {
      title: "InnovEgypt Program – TIEC & iSpark",
      type: "Program",
      description: "Innovation and entrepreneurship bootcamp to empower students with creative problem-solving and startup building tools."
    },
    {
      title: "E-Finance – Internship",
      type: "Internship",
      description: "Technical internship focusing on data visualization and analysis on financial data and know the work life cycle."
    },
    {
      title: "Mylerz – Internship",
      type: "Internship",
      description: "Small and introduction internship focusing on applied tech, hands-on industry experience and Data science & AI."
    },
    {
      title: "AIESEC Youth Exchange",
      type: "Exchange Program",
      description: "Participated in a short-term exchange program focusing on leadership and cultural learning."
    },
    {
      title: "Matsuo Lab – University of Tokyo",
      type: "Research Program",
      description: "Accepted participant in a prestigious AI research program at Matsuo Laboratory, University of Tokyo. Currently participating in world-class research on deep learning, artificial intelligence, and innovation ecosystem development."
    }
  ];

  const getProgramColor = (type: string) => {
    switch(type) {
      case 'Program':
        return 'bg-blue-500/20 border-blue-400/50 text-blue-400';
      case 'Internship':
        return 'bg-purple-500/20 border-purple-400/50 text-purple-400';
      case 'Exchange Program':
        return 'bg-green-500/20 border-green-400/50 text-green-400';
      case 'Research Program':
        return 'bg-red-500/20 border-red-400/50 text-red-400';
      default:
        return 'bg-gray-500/20 border-gray-400/50 text-gray-400';
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Programs & Internships
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getProgramColor(item.type)}`}>
                    <Briefcase size={14} />
                    {item.type}
                  </div>
                </div>
                <Award className="text-yellow-400 flex-shrink-0" size={24} />
              </div>

              <p className="text-gray-300 leading-relaxed mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsAndInternships;
