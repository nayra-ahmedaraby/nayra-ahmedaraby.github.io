
import React from 'react';
import { ExternalLink, Github, Award } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Student Grade Management System",
      tech: "Python, JSON, CSV",
      description: "Built a system to manage student records, grades, and GPA with easy data export. Designed to mimic real academic workflows.",
      impact: "Reduced manual grade handling by 80%",
      githubUrl: "https://github.com/nayra-ahmedaraby/Student-Grade-Management-System"
    },
    {
      title: "Ultrasonic Distance Measurement Device",
      tech: "Arduino, Physics",
      description: "Built an energy-saving sensor device to automate room lighting. Reduced waste energy by detecting absence of movement.",
      impact: "Energy Waste Reduction",
      githubUrl: "https://github.com/nayra-ahmedaraby/Ultrasonic-Distance-Measurement"
    },
    {
      title: "Online Shopping Cart Database",
      tech: "SQL, PHP, CSS",
      description: "Designed ERD and backend for an e-commerce system to handle transactions efficiently.",
      impact: "Efficient Transactions",
      githubUrl: "https://github.com/nayra-ahmedaraby/Online-Shopping-Cart-Database"
    },
    {
      title: "Bus Ticket Booking System",
      tech: "Java, OOP, GUI",
      description: "Created desktop app for simulating ticket reservations with a user-friendly interface.",
      impact: "User-Friendly Design",
      githubUrl: "https://github.com/nayra-ahmedaraby/Bus-Ticket-Booking-System"
    },
    {
     title: "Simple Web Server",
     tech: "Python, Sockets, Threading, HTML",
     description: "Developed a custom web server that handles multiple client requests, serves static HTML pages, and includes a dynamic status endpoint showing server uptime.",
     impact: "Provided hands-on experience with low-level HTTP handling and socket programming.",
     githubUrl: "https://github.com/nayra-ahmedaraby/Simple-Web-Server"
    },
    {
      title: "SolveThe17 Hackathon Project",
      tech: "HTML, JavaScript",
      description: "Developed a platform for people with special needs and Kids. Won praise for aligning with Sustainable Development Goals.",
      impact: "SDG Alignment",
      githubUrl: "https://github.com/nayra-ahmedaraby/SolveThe17-Hackathon"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Key Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    title="View on GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <ExternalLink className="text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
                </div>
              </div>
              
              <p className="text-sm text-blue-400 font-medium mb-3">{project.tech}</p>
              
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex items-center gap-2 text-green-400">
                <Award size={16} />
                <span className="text-sm font-medium">{project.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
