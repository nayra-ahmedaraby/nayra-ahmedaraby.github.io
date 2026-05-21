
import React from 'react';
import { ExternalLink, Github, Award } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "HR Analytics Project",
      tech: "Python, Pandas, Scikit-learn, Databricks, Power BI",
      description: "Comprehensive data analytics project analyzing HR data to predict employee attrition. Combines advanced data analysis with machine learning and cloud-based processing on Databricks. Features data visualization dashboards and actionable insights for HR management.",
      impact: "Employee Attrition Prediction & Segmentation",
      githubUrl: "https://github.com/nayra-ahmedaraby/hrAnalysis-cloudData"
    },
    {
      title: "Fitness Tracker API",
      tech: "FastAPI, Python, MongoDB, Neural Networks, CSP",
      description: "Full-stack intelligent fitness planning application using Constraint Satisfaction Problems and machine learning. Generates personalized workout plans, predicts user adherence, and adapts plans dynamically based on user behavior. RESTful API with comprehensive database management.",
      impact: "AI-Driven Personalized Fitness Planning",
      githubUrl: "https://github.com/nayra-ahmedaraby/Fitness-Tracker-API"
    },
    {
      title: "CyberNest SOAR – AI Vulnerability Engine",
      tech: "AI, SSVC, EPSS, Automation",
      description: "AI-driven vulnerability prioritization and patch recommendation engine integrating SSVC (Stakeholder-Specific Vulnerability Categorization) and EPSS (Exploit Prediction Scoring System). Enhances automated incident response and enables risk-based decision-making for cybersecurity teams.",
      impact: "Automated Security Response",
      githubUrl: "https://github.com/CyberNest-SOAR/CyberNest-Soar"
    },
    {
      title: "Student Burnout Analysis – Final Project",
      tech: "Python, Pandas, Matplotlib, Seaborn, Power BI",
      description: "Comprehensive data analytics project investigating academic burnout among 28,000+ university students. Identifies root causes, quantifies burnout prevalence using the Maslach burnout model, and proposes data-driven interventions for student wellness and university support systems.",
      impact: "Data-Driven Insights for Student Wellness",
      githubUrl: "https://github.com/nayra-ahmedaraby/studentBurnouts_Analysis"
    },
    {
      title: "Linux Monitoring System",
      tech: "Bash, Shell Scripting, Linux Administration",
      description: "Enterprise-grade system for monitoring server health and security with real-time interactive dashboard. Provides live resource monitoring (CPU, RAM, Disk, Network), security checks, automated alerting, and comprehensive logging across multiple Linux distributions.",
      impact: "Enterprise Linux System Administration",
      githubUrl: "https://github.com/nayra-ahmedaraby/linux-monitoring-system"
    },
    {
      title: "Amazon PartyRock – AI Productivity Coach",
      tech: "Generative AI",
      description: "Generative AI-powered web application offering students personalized daily productivity tips, job match recommendations, and CV generation based on user skills. Leverages large language models for career guidance and professional development.",
      impact: "AI-Powered Career Guidance",
      githubUrl: "https://github.com/nayra-ahmedaraby/AI-Productivity-Coach"
    },
    {
      title: "Project Management Web App",
      tech: "PHP, MySQL, HTML/CSS/JS",
      description: "Full-stack project management system featuring Kanban board, task tracking, role-based access control (RBAC), deadline management, and team collaboration features. Built with modern web technologies for production-ready deployment.",
      impact: "Full-Stack Productivity Tool",
      githubUrl: "https://github.com/nayra-ahmedaraby/project-management-system"
    },
    {
      title: "Process Scheduling Simulation",
      tech: "Python, JavaScript, HTML/CSS",
      description: "Dual-platform CPU scheduling simulation tool. Python GUI and web-based versions demonstrating FCFS, SJF, Priority, and Round Robin algorithms with detailed performance metrics visualization and comparative analysis.",
      impact: "OS Concepts, CPU Scheduling Algorithms",
      githubUrl: "https://github.com/nayra-ahmedaraby/Process-Scheduling-Simulation-Project"
    },
    {
      title: "Student Grade Management System",
      tech: "Python, JSON, CSV",
      description: "Comprehensive system for managing student records, grades, GPA calculations, and academic data. Features easy data export, realistic academic workflows, and automated grade processing mirroring real university systems.",
      impact: "Reduced manual grade handling by 80%",
      githubUrl: "https://github.com/nayra-ahmedaraby/Student-Grade-Management-System"
    },
    {
      title: "SolveThe17 Hackathon Project",
      tech: "HTML, JavaScript",
      description: "Hackathon submission developing an inclusive platform addressing needs of people with special needs and children. Recognized for strong alignment with UN Sustainable Development Goals and social impact focus.",
      impact: "SDG Alignment & Social Impact",
      githubUrl: "https://github.com/nayra-ahmedaraby/SolveThe17-Hackathon"
    },
    {
      title: "Simple Web Server",
      tech: "Python, Sockets, Threading, HTML",
      description: "Custom-built web server handling multiple concurrent client requests using threading. Serves static HTML pages and includes dynamic endpoints for server status monitoring with low-level HTTP protocol implementation.",
      impact: "Network Programming & HTTP Handling",
      githubUrl: "https://github.com/nayra-ahmedaraby/Simple-Web-Server"
    },
    {
      title: "Ultrasonic Distance Measurement Device",
      tech: "Arduino, Physics",
      description: "IoT-based energy-saving sensor device automating room lighting through motion detection. Reduces energy waste by 60% by detecting absence of movement and controlling lights accordingly.",
      impact: "Energy Waste Reduction",
      githubUrl: "https://github.com/nayra-ahmedaraby/Ultrasonic-Distance-Measurement"
    },
    {
      title: "Data Analysis Dashboard",
      tech: "Power BI, SQL, Data Visualization",
      description: "Interactive dashboard analyzing complex datasets with advanced visual insights and statistical summaries. Demonstrates data visualization best practices and business intelligence principles.",
      impact: "Data-Driven Insights",
      githubUrl: "https://github.com/nayra-ahmedaraby"
    },
    {
      title: "Online Shopping Cart Database",
      tech: "SQL, PHP, CSS",
      description: "Backend database system for e-commerce platform with ERD design, transaction management, and efficient SQL queries for handling online shopping workflows.",
      impact: "Efficient Transactions",
      githubUrl: "https://github.com/nayra-ahmedaraby/Online-Shopping-Cart-Database"
    },
    {
      title: "Bus Ticket Booking System",
      tech: "Java, OOP, GUI",
      description: "Desktop application simulating ticket reservation system with user-friendly GUI, demonstrating OOP principles and real-world booking workflows.",
      impact: "User-Friendly Design",
      githubUrl: "https://github.com/nayra-ahmedaraby/Bus-Ticket-Booking-System"
    },
    {
      title: "Treasure Hunt in the Museum (C++)",
      tech: "C++, Data Structures",
      description: "Text-based adventure game showcasing creative application of linked lists and dynamic puzzle generation logic. Demonstrates advanced data structure usage in game development.",
      impact: "Creative Data Structure Application",
      githubUrl: "https://github.com/omarameen2005/Treasure-Hunt-in-a-Museum-Project"
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
