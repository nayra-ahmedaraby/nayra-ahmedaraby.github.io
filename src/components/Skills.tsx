
import React from 'react';
import { Code, Database, Wrench, Brain, Cloud, BarChart3 } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-blue-400" size={24} />,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "C++", "Bash/Shell", "SQL", "PHP", "HTML/CSS"]
    },
    {
      icon: <Brain className="text-purple-400" size={24} />,
      title: "AI & Machine Learning",
      skills: ["Scikit-learn", "Neural Networks", "Generative AI", "CSP (Constraint Satisfaction)", "Predictive Modeling"]
    },
    {
      icon: <Database className="text-green-400" size={24} />,
      title: "Databases & Backends",
      skills: ["MongoDB", "MySQL", "SQL Server", "FastAPI", "REST APIs", "OOP Design", "Data Structures"]
    },
    {
      icon: <BarChart3 className="text-indigo-400" size={24} />,
      title: "Data Analysis & Visualization",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Data Analytics", "Statistical Analysis", "Dashboard Design"]
    },
    {
      icon: <Cloud className="text-yellow-400" size={24} />,
      title: "Cloud & DevOps",
      skills: ["Google Cloud Platform (GCP)", "Databricks", "AWS", "Docker", "Linux Administration", "System Monitoring", "Git/Version Control"]
    },
    {
      icon: <Wrench className="text-red-400" size={24} />,
      title: "Professional Skills",
      skills: ["Project Management", "Technical Documentation", "Problem Solving", "Leadership", "Team Collaboration", "Agile Methodologies", "Presentation Skills", "Research & Innovation"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          title="Technical Skills"
          subtitle="Expertise developed through industry internships, research programs, and innovative projects"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 px-3 py-1.5 rounded-full text-xs font-medium border border-blue-400/30 hover:border-blue-400/60 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-400/30">
            <h4 className="text-lg font-semibold text-white mb-3">🏆 Focus Areas</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✓ Machine Learning & AI</li>
              <li>✓ Data Analysis & Visualization</li>
              <li>✓ Backend & APIs</li>
              <li>✓ Cloud & Data Tools</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl p-6 border border-green-400/30">
            <h4 className="text-lg font-semibold text-white mb-3">🚀 Featured Tech Stack</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✓ Python + FastAPI</li>
              <li>✓ Cloud (GCP, Databricks)</li>
              <li>✓ MongoDB + SQL</li>
              <li>✓ AI/ML Frameworks</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-400/30">
            <h4 className="text-lg font-semibold text-white mb-3">📚 Continuous Learning</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✓ Advanced Deep Learning</li>
              <li>✓ Computer Vision</li>
              <li>✓ Robotics & IoT</li>
              <li>✓ AI Certifications</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
