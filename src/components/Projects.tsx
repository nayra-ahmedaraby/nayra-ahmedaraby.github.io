
import React from 'react';
import { ExternalLink, Github, Award } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Amazon PartyRock – AI Productivity Coach",
      tech: "Generative AI",
      description: "Created a generative AI web app that offers students daily tips, suggests job matches, and builds CVs based on user skills.",
      impact: "AI-Powered Career Guidance",
      githubUrl: "https://github.com/nayra-ahmedaraby/AI-Productivity-Coach"
    },
    {
      title: "SolveThe17 Hackathon Project",
      tech: "HTML, JavaScript",
      description: "Developed a platform for people with special needs and Kids. Won praise for aligning with Sustainable Development Goals.",
      impact: "SDG Alignment",
      githubUrl: "https://github.com/nayra-ahmedaraby/SolveThe17-Hackathon"
    },
    {
      title: "CyberNest SOAR – AI Vulnerability Engine",
      tech: "AI, SSVC, EPSS, Automation",
      description: "Developed an AI-driven vulnerability prioritization and patch recommendation engine integrating SSVC and EPSS to enhance automated incident response and risk-based decision-making.",
      impact: "Automated Security Response",
      githubUrl: "https://github.com/CyberNest-SOAR/CyberNest-Soar"
    },
    {
      title: "Project Management Web App",
      tech: "PHP, MySQL, HTML/CSS/JS",
      description: "Built a full-stack project management system featuring Kanban board, task tracking, role-based access control, and deadline management.",
      impact: "Full-Stack Productivity Tool",
      githubUrl: "https://github.com/nayra-ahmedaraby/project-management-system"
    },
    {
      title: "Treasure Hunt in the Museum (C++)",
      tech: "C++, Data Structures",
      description: "A procedural text-based adventure game using linked lists and dynamic puzzle logic.",
      impact: "Creative Data Structure Application",
      githubUrl: "https://github.com/omarameen2005/Treasure-Hunt-in-a-Museum-Project"
    },
    {
      title: "Process Scheduling Simulation",
      tech: "Python, JavaScript, HTML/CSS",
      description: "Two versions (Python GUI & Web-based) simulating CPU scheduling algorithms (FCFS, SJF, Priority, Round Robin) with performance metrics visualization.",
      impact: "OS Concepts ,CPU scheduling algorithms ",
      githubUrl: "https://github.com/nayra-ahmedaraby/Process-Scheduling-Simulation-Project"
    },
    {
      title: "Data Analysis Dashboard",
      tech: "Power BI, SQL, Data Visualization",
      description: "Dashboard analyzing datasets with visual insights and statistical summaries.",
      impact: "Data-Driven Insights",
      githubUrl: "https://github.com/nayra-ahmedaraby"
    },
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
      title: "HR Analytics Project",
      tech: "Python, Pandas, Scikit-learn, Databricks, Power BI",
      description: "Comprehensive data analytics project for analyzing HR data and predicting employee attrition. Combines data analysis and machine learning techniques with cloud-based processing on Databricks.",
      impact: "Employee Attrition Prediction & Segmentation",
      githubUrl: "https://github.com/nayra-ahmedaraby/hrAnalysis-cloudData"
    },
    {
      title: "Fitness Tracker API",
      tech: "FastAPI, Python, MongoDB, Neural Networks, CSP",
      description: "Intelligent fitness planning application using Constraint Satisfaction Problems and machine learning to generate personalized workout plans. Predicts user adherence and adapts plans dynamically.",
      impact: "AI-Driven Personalized Fitness Planning",
      githubUrl: "https://github.com/nayra-ahmedaraby/Fitness-Tracker-API"
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
