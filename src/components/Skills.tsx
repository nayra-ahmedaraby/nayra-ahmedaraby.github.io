
import React from 'react';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-blue-400" size={24} />,
      title: "Programming",
      skills: ["Python", "Java", "HTML", "JavaScript", "SQL", "Git", "Arduino"]
    },
    {
      icon: <Wrench className="text-purple-400" size={24} />,
      title: "Tools & Platforms",
      skills: ["TensorFlow", "VS Code", "AWS", "Generative AI", "PartyRock", "Ultrasonic Sensors", "Power-BI"]
    },
    {
      icon: <Brain className="text-green-400" size={24} />,
      title: "Concepts",
      skills: ["Machine Learning",  "LLMs", "OOP", "Databases", "Networking", "Data Visualization"]
    },
    {
      icon: <Database className="text-orange-400" size={24} />,
      title: "Soft Skills",
      skills: ["Leadership", "Teamwork", "Public Speaking", "Project Management"]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="inline-block bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
