import React from 'react';
import { Briefcase, Award, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';

const ProgramsAndInternships = () => {
  const programs = [
    {
      title: "Matsuo Lab – University of Tokyo",
      type: "Research Program",
      status: "Current",
      duration: "2026",
      description: "Accepted into the prestigious Matsuo Lab AI research program at the University of Tokyo — researching deep learning and AI alongside leading researchers.",
      achievements: ["Research in AI & Deep Learning", "Innovation Ecosystem Development", "International Research Collaboration"]
    },
    {
      title: "Build with AI: Masr Edition – Google",
      type: "Google Training",
      status: "Completed",
      duration: "April - May 2026",
      description: "Selected as one of 5,000 developers in Egypt (supported by ITI) for Google's AI program — hands-on training in generative AI, machine learning, and Google Cloud, with weekly live labs.",
      achievements: ["Free GCP Credits", "Training from Google Experts", "ITI Recognized Program"]
    },
    {
      title: "Aspire Leaders Program – Harvard-affiliated",
      type: "Leadership Program",
      status: "Completed",
      duration: "2025 - 2026",
      description: "Selected as a global participant in the Harvard-affiliated Aspire Leaders Program — focused on leadership, social impact, and strategic thinking with a worldwide cohort.",
      achievements: ["Global Leadership Network", "Social Impact Focus", "Harvard Partnership"]
    },
    {
      title: "InnovEgypt Program – TIEC & iSpark",
      type: "Program",
      status: "Completed",
      duration: "2025",
      description: "Innovation and entrepreneurship bootcamp (TIEC & iSpark) on creative problem-solving, spotting market opportunities, and building viable startup models.",
      achievements: ["Startup Building Skills", "Innovation Methodology", "Entrepreneurship Concepts"]
    },
    {
      title: "FDAI – Ministry of Youth and Sports",
      type: "Program",
      status: "Current",
      duration: "2025 - 2026",
      description: "Active member of the AI Committee — collaborating on national AI initiatives and youth-empowerment activities in Egypt.",
      achievements: ["National AI Committee", "Policy Contribution", "Youth Empowerment"]
    },
    {
      title: "E-Finance – Internship",
      type: "Internship",
      status: "Completed",
      duration: "2025",
      description: "Technical internship in financial data analysis and visualization — applying data science to real banking and finance datasets.",
      achievements: ["Financial Data Analysis", "Real-World Experience", "Domain Knowledge"]
    },
    {
      title: "Mylerz – Internship",
      type: "Internship",
      status: "Completed",
      duration: "2024 - 2025",
      description: "Introductory technical internship — hands-on exposure to applied data science, AI, and professional tech workflows.",
      achievements: ["Hands-On Tech Experience", "Data Science Application", "Industry Exposure"]
    },
    {
      title: "AIESEC Youth Exchange",
      type: "Exchange Program",
      status: "Completed",
      duration: "2024",
      description: "Short-term international exchange focused on leadership development and cross-cultural learning.",
      achievements: ["Cultural Learning", "Leadership Development", "International Network"]
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
      case 'Google Training':
        return 'bg-yellow-500/20 border-yellow-400/50 text-yellow-400';
      case 'Leadership Program':
        return 'bg-indigo-500/20 border-indigo-400/50 text-indigo-400';
      default:
        return 'bg-gray-500/20 border-gray-400/50 text-gray-400';
    }
  };

  const getAccentBorder = (type: string) => {
    switch(type) {
      case 'Program': return 'border-l-blue-400';
      case 'Internship': return 'border-l-purple-400';
      case 'Exchange Program': return 'border-l-green-400';
      case 'Research Program': return 'border-l-red-400';
      case 'Google Training': return 'border-l-yellow-400';
      case 'Leadership Program': return 'border-l-indigo-400';
      default: return 'border-l-gray-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Current':
        return 'bg-green-500/20 text-green-400 border border-green-400/50';
      case 'Completed':
        return 'bg-blue-500/20 text-blue-400 border border-blue-400/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border border-gray-400/50';
    }
  };

  return (
    <section id="programs" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          title="Programs & Internships"
          subtitle="Selective programs, research, and internships I've taken part in — from the University of Tokyo to Google and Harvard-affiliated programs."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((item, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 border-l-4 ${getAccentBorder(item.type)} hover:bg-white/20 transition-all duration-300 group hover:scale-105`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getProgramColor(item.type)}`}>
                      <Briefcase size={14} />
                      {item.type}
                    </div>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={14} />
                    {item.duration}
                  </div>
                </div>
                <Award className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
              </div>

              <p className="text-gray-300 leading-relaxed mt-4 mb-4">
                {item.description}
              </p>

              <div className="border-t border-white/10 pt-3">
                <p className="text-xs font-semibold text-blue-400 mb-2">Key Achievements:</p>
                <div className="flex flex-wrap gap-2">
                  {item.achievements.map((achievement, idx) => (
                    <span key={idx} className="text-xs bg-blue-400/20 text-blue-300 px-2 py-1 rounded-full border border-blue-400/30">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsAndInternships;
