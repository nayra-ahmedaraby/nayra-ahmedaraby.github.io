import React, { useState, useEffect } from 'react';
import { Github, Award, ExternalLink, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { asset } from '@/lib/utils';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Close the project modal on Escape and lock background scroll while it's open
  useEffect(() => {
    if (!selectedProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const projects: any[] = [
    {
      title: "HR Analytics Project",
      tech: "Python, Pandas, Scikit-learn, Power BI",
      role: "Team",
      description: "Machine-learning project to predict employee attrition on the IBM HR Attrition dataset (1,470 employees). Compared Logistic Regression, Random Forest, and Gradient Boosting — the best model (Gradient Boosting) reached ~0.79 ROC-AUC. K-Means segmentation groups employees into personas, with results shown in matplotlib charts and a Power BI dashboard.",
      shortDescription: "Predict employee attrition with scikit-learn models (~0.79 ROC-AUC) and segment employees into personas.",
      fullDetails: "A team coursework project (Data Science, Year 2) applying machine learning to predict and explain employee attrition.\n- Dataset: IBM HR Employee Attrition dataset (1,470 employees) with demographic, compensation, and job-satisfaction features\n- Models Compared: Logistic Regression, Random Forest, and Gradient Boosting with balanced class weights; best model selected by test ROC-AUC\n- Results: Gradient Boosting ~0.79 ROC-AUC, Random Forest ~0.77, Logistic Regression ~0.76 (evaluated with confusion matrix, precision, and recall)\n- Top Drivers: Feature importance highlighted monthly income, age, total working years, tenure, and overtime as the strongest attrition signals\n- Segmentation: K-Means clustering to group employees into personas (e.g. high-risk, highly engaged, loyal long-term)\n- Visualization: matplotlib/seaborn charts plus a Power BI dashboard with department breakdowns and risk heatmaps\n- My role: part of a student team — see GitHub for the full breakdown",
      impact: "Attrition Prediction & Employee Segmentation",
      githubUrl: "https://github.com/nayra-ahmedaraby/hrAnalysis-cloudData",
      thumbnail: "/dashboards/thumb_hr.jpg",
      images: [
        { url: "/dashboards/hr_model_comparison.png", title: "Model Comparison (Test ROC-AUC)", description: "Logistic Regression, Random Forest, and Gradient Boosting compared on the test set — Gradient Boosting leads at ~0.79 ROC-AUC" },
        { url: "/dashboards/hr_feature_importance.png", title: "Top Drivers of Attrition", description: "Random Forest feature importance: monthly income, age, tenure, and overtime emerge as the strongest predictors of attrition" },
        { url: "/dashboards/hr_confusion_matrix.png", title: "Confusion Matrix — Best Model", description: "Confusion matrix for the best model on the held-out test set (stay vs. leave)" },
        { url: "/dashboards/hr_employee_clusters.png", title: "Employee Segments (K-Means)", description: "K-Means clustering (k=4) projected to 2D with PCA, showing distinct employee personas" },
        { url: "/dashboards/Screenshot 2026-05-09 150024.png", title: "Power BI - Risk Heatmap", description: "Employee risk assessment with department breakdown and attrition scores" },
        { url: "/dashboards/Screenshot 2026-05-09 150104.png", title: "Power BI - Executive Summary", description: "Executive-level KPIs and department-wise HR metrics" }
      ]
    },
    {
      title: "Fitness Tracker API",
      tech: "FastAPI, Python, CSP",
      role: "Team",
      description: "A FastAPI backend that generates personalized workout plans using a constraint-satisfaction (CSP) planner, with a rule-based fallback and a module for predicting workout adherence. Organized in a clean controllers / models / repositories / planners structure.",
      shortDescription: "FastAPI backend that builds personalized workout plans with a CSP planner and adherence prediction.",
      fullDetails: "A team-built FastAPI service for personalized fitness planning, combining classic AI search with a layered backend.\n- CSP Planner: Builds workout plans by satisfying constraints such as available time, goals, and recovery\n- Rule-Based Planner: A simpler fallback strategy alongside the CSP engine\n- Adherence Prediction: A module that estimates how likely a user is to stick to a plan\n- Architecture: FastAPI with a layered design — controllers, models, repositories, and planners\n- API: RESTful endpoints documented in the project's API docs\n- My role: contributed as part of a student team (repo hosted on a teammate's account)",
      impact: "AI-Assisted Personalized Fitness Planning",
      githubUrl: "https://github.com/Momen959/fitness_workout_planner",
      thumbnail: "/dashboards/thumb_fitness.jpg",
      images: [
        { url: "/dashboards/fitness_api.png", title: "REST API Endpoints (illustrative)", description: "Representative overview of the FastAPI endpoints: users, rule-based and CSP workout plans, and adherence prediction" }
      ]
    },
    {
      title: "CyberNest SOAR - AI Vulnerability Engine",
      tech: "AI, SSVC, EPSS, Automation",
      role: "Team",
      description: "A security orchestration project that prioritizes vulnerabilities using industry frameworks — SSVC for stakeholder context and EPSS for exploit likelihood — combined with AI-assisted triage and automated response workflows.",
      shortDescription: "Vulnerability prioritization using SSVC and EPSS with AI-assisted triage and automated response.",
      fullDetails: "A team project building a SOAR-style platform for vulnerability management using established security frameworks.\n- Framework Integration: SSVC for organizational/decision context and EPSS for exploit-likelihood scoring\n- AI-Assisted Triage: Helps categorize and prioritize vulnerabilities by impact\n- Risk Scoring: Combines CVSS, exploitability, and context into a prioritization signal\n- Automated Response: Remediation and patching workflow recommendations\n- Standards: Built around CVSS and NIST-aligned concepts\n- My role: contributed as part of the CyberNest team (repo hosted on the team org)",
      impact: "Framework-Based Vulnerability Prioritization",
      githubUrl: "https://github.com/CyberNest-SOAR/CyberNest-Soar",
      videoUrl: "https://youtu.be/jfMy3eFXPFY",
      thumbnail: "/dashboards/cybernest_demo.jpg",
      images: [
        { url: "/dashboards/cybernest_dash_command.png", title: "SOC Command Center", description: "Global real-time threat detection telemetry — total events, active campaigns, severity distribution, and attack vectors" },
        { url: "/dashboards/cybernest_dash_ai.png", title: "AI Operations Center", description: "AI model health for risk scoring, noise reduction, playbook and patch recommendation — accuracy, precision, recall, F1, ROC-AUC" },
        { url: "/dashboards/cybernest_dash_forensics.png", title: "Alert Forensics", description: "Ingested event registry with triage, risk scoring, and host/network mitigation actions" },
        { url: "/dashboards/cybernest_dash_intel.png", title: "Threat Intel Center", description: "IOC intelligence with reputation and confidence, plus MISP threat-sharing events" }
      ]
    },
    {
      title: "Student Burnout Analysis",
      tech: "Python, Pandas, Matplotlib, Seaborn, Power BI",
      role: "Solo",
      description: "A solo data-analytics project on a ~28,000-row Kaggle student dataset. I engineered a composite burnout score inspired by the Maslach model, stratified students into Low/Medium/High burnout, and explored the drivers — academic pressure, study hours, sleep, and satisfaction — in Power BI.",
      shortDescription: "Solo analysis of ~28K students: built a Maslach-inspired burnout score and explored its drivers in Power BI.",
      fullDetails: "A solo coursework project (Data Analytics & Visualization) analyzing student wellbeing on a large public dataset.\n- Dataset: Kaggle Student Depression dataset (~28,000 rows), cleaned and enriched from 11 to ~20 columns\n- Burnout Score: Composite metric inspired by the Maslach model, weighting emotional exhaustion, cynicism, and reduced efficacy\n- Segmentation: Students grouped into Low / Medium / High burnout bands\n- Findings: A notable share of students fall in the high-burnout band, which tracks strongly with academic pressure, longer study hours, less sleep, and lower satisfaction\n- Visualization: Power BI dashboards breaking down burnout drivers and demographics\n- Full work (notebook + .pbix) is on GitHub",
      impact: "Data-Driven Insights into Student Wellbeing",
      githubUrl: "https://github.com/nayra-ahmedaraby/studentBurnouts_Analysis",
      thumbnail: "/dashboards/thumb_burnout.jpg",
      images: [
        { url: "/dashboards/Screenshot 2026-05-10 095847.png", title: "Burnout Drivers: Root Cause Analysis", description: "Correlation matrix showing academic pressure, sleep hours, and social support as primary burnout factors" },
        { url: "/dashboards/Screenshot 2026-05-10 095906.png", title: "Demographics & Risk Segments", description: "Demographic breakdown by age, city, degree with burnout severity heat map" },
        { url: "/dashboards/Screenshot 2026-05-10 095936.png", title: "Student Burnout KPIs", description: "Distribution of students across Low / Medium / High burnout bands with key metrics" }
      ]
    },
    {
      title: "Linux Monitoring System",
      tech: "Bash, Shell Scripting, Linux Administration",
      role: "Team",
      description: "A modular Bash monitoring tool for Linux servers. It tracks system resources (CPU, memory, disk, network, load), runs a suite of security checks, and presents everything through a colored terminal dashboard with logging and alerts.",
      shortDescription: "Modular Bash tool for Linux resource monitoring, security checks, and alerting via a terminal dashboard.",
      fullDetails: "A solo Bash project providing server monitoring and basic security auditing, organized into clean, reusable script modules.\n- Resource Monitoring: Separate scripts for CPU, memory, disk, network, and system load\n- Security Checks: SSH login attempts, open ports, file integrity (against a baseline hash), user accounts, running services, and zombie processes\n- Terminal Dashboard: Interactive menu and color-coded UI with progress bars\n- Logging & Alerts: Log writer, log rotation, daily reports, and threshold-based alerts\n- Setup: An install script plus a config file for thresholds and options\n- Code on GitHub with a cheatsheet and output-format docs",
      impact: "Linux System Monitoring & Security Auditing",
      githubUrl: "https://github.com/nayra-ahmedaraby/linux-monitoring-system",
      thumbnail: "/dashboards/thumb_linux.jpg",
      images: [
        { url: "/dashboards/linux_dashboard.png", title: "Terminal Dashboard (illustrative)", description: "Representative view of the monitoring TUI: live resource bars, security checks, and threshold alerts" }
      ]
    },
    {
      title: "Treasure Hunt in the Museum",
      tech: "C++, Data Structures (Linked Lists)",
      role: "Team",
      description: "A console-based adventure game built in C++ to practice core data structures. Rooms, the player's inventory, and puzzles are modeled with linked lists, with manual dynamic memory management throughout — a hands-on DSA project.",
      shortDescription: "Console adventure game in C++ using linked lists and dynamic memory — a core data-structures project.",
      fullDetails: "A team data-structures project: a text-based museum adventure game that puts classic DSA concepts into practice.\n- Linked Lists: Rooms, inventory, and puzzle data modeled as linked lists\n- Dynamic Memory: Manual allocation/deallocation with careful pointer handling\n- Navigation: Moving between interconnected rooms of the museum\n- Inventory System: Add, remove, and search items the player collects\n- Puzzles: Multi-step puzzles that gate progress through the game\n- Built as a team coursework project for the Data Structures course",
      impact: "Core Data Structures & Algorithms (C++)",
      githubUrl: "https://github.com/omarameen2005/Treasure-Hunt-in-a-Museum-Project",
      thumbnail: "/dashboards/thumb_treasure.jpg",
      images: [
        { url: "/dashboards/treasure_hunt.png", title: "Gameplay (compiled with g++)", description: "Real output from the C++ game: choosing a room, solving a numeric riddle, score tracking, and moving between linked-list rooms" }
      ]
    },
    {
      title: "MINIMIND - Kids Learning App",
      tech: "React, Vite, Express, React Router",
      role: "Team",
      description: "A children's educational web app (SolveThe17 hackathon) that teaches tech topics — Coding, AI, Cybersecurity, Networks, Engineering, and Arts — through a playful, kid-friendly interface with onboarding, interest selection, course cards with progress, and a chat tab.",
      shortDescription: "Kid-friendly learning app teaching tech topics (AI, coding, cybersecurity) with a playful, guided UI.",
      fullDetails: "A team hackathon project: a friendly learning platform that introduces children to technology topics in simple language.\n- Onboarding: Guest entry, name prompt, and an interest picker (AI, Coding, Cybersecurity, Networks, Engineering, Arts)\n- Explore: Course cards with kid-friendly explanations and per-topic progress tracking\n- My Learning & Chat: Sections for tracking enrolled topics and a chat tab\n- Auth: Sign In / Sign Up plus a 'Continue as Guest' flow\n- Stack: React + Vite frontend with React Router, backed by a small Express server\n- Built as a team under hackathon time constraints",
      impact: "Playful Tech Education for Children",
      githubUrl: "https://github.com/nayra-ahmedaraby/SolveThe17-Hackathon",
      thumbnail: "/dashboards/minimind_face.png",
      images: [
        { url: "/dashboards/minimind_explore.png", title: "Explore - Course Library", description: "The main learning dashboard with kid-friendly course cards (AI, Coding, Cybersecurity, Networks, Arts, Engineering) and progress tracking" },
        { url: "/dashboards/minimind_levels.png", title: "Levels Map - Learning Path", description: "A gamified level map for each topic (Beginner → Intermediate → Advanced → Pro → Hero → Legend) with friendly mascots" },
        { url: "/dashboards/minimind_welcome.png", title: "Welcome Screen", description: "The friendly MINIMIND landing page with Sign In, Sign Up, and Continue as Guest" },
        { url: "/dashboards/minimind_interests.png", title: "Interest Selection", description: "Onboarding step where a child picks the topics they're curious about" }
      ]
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          title="Key Projects"
          subtitle="A selection of my work across machine learning, data analytics, and software — click any card for details."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 group"
            >
              {/* Thumbnail Image - Clickable */}
              <button
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
                className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600"
                title={`View ${project.title} details`}
              >
                <img
                  src={asset(project.thumbnail)}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </button>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.role && (
                    <span
                      className={`shrink-0 mt-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border ${
                        project.role === 'Solo'
                          ? 'bg-green-500/15 text-green-300 border-green-400/40'
                          : 'bg-amber-500/15 text-amber-300 border-amber-400/40'
                      }`}
                    >
                      {project.role}
                    </span>
                  )}
                </div>

                <p className="text-sm text-blue-400 font-medium mb-3">{project.tech}</p>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.shortDescription}</p>

                <div className="flex items-center gap-2 text-green-400">
                  <Award size={16} />
                  <span className="text-sm font-medium line-clamp-1">{project.impact}</span>
                </div>

                {/* Footer with Icons */}
                <div className="flex gap-3 mt-4 pt-4 border-t border-white/10">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex-1 flex items-center justify-center"
                    title="View on GitHub"
                  >
                    <Github size={20} />
                  </a>
                  {project.videoUrl && (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-400 transition-colors flex-1 flex items-center justify-center"
                      title="Watch demo video"
                    >
                      <Play size={20} />
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setCurrentImageIndex(0);
                    }}
                    className="flex-1 flex items-center justify-center text-gray-400 group-hover:text-blue-400 transition-colors"
                    title="View project details"
                  >
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See more on GitHub */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm mb-4">
            These are selected highlights — more coursework and team projects live on my GitHub.
          </p>
          <a
            href="https://github.com/nayra-ahmedaraby"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 font-medium border border-white/20 hover:border-white/40 hover:scale-105"
          >
            <Github size={20} />
            See all projects on GitHub
          </a>
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedProject(null)}>
            <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {/* Close Button - Fixed positioning */}
              <div className="fixed top-4 right-4 z-50">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-white hover:text-gray-300 transition-colors bg-black/70 hover:bg-black/90 p-2 rounded-full"
                  aria-label="Close modal"
                  title="Close"
                >
                  <X size={32} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mt-8">
                
                {/* Images Section */}
                {selectedProject.images && selectedProject.images.length > 0 ? (
                  <div className="mb-8">
                    {/* Main Image */}
                    <div className="relative mb-6 h-96 rounded-xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600">
                      <img
                        src={asset(selectedProject.images[currentImageIndex].url)}
                        alt={selectedProject.images[currentImageIndex].title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Image Info */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {selectedProject.images[currentImageIndex].title}
                      </h3>
                      <p className="text-gray-300">
                        {selectedProject.images[currentImageIndex].description}
                      </p>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mb-6">
                      {selectedProject.images.map((_: any, idx: number) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            idx === currentImageIndex
                              ? 'bg-blue-400 w-8'
                              : 'bg-gray-600 hover:bg-gray-500'
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mb-6">
                      <button
                        onClick={() => setCurrentImageIndex((currentImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length)}
                        className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center gap-2"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={20} />
                        Previous
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex((currentImageIndex + 1) % selectedProject.images.length)}
                        className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center gap-2"
                        aria-label="Next image"
                      >
                        Next
                        <ChevronRight size={20} />
                      </button>
                    </div>

                    {/* Counter */}
                    <p className="text-center text-gray-400 text-sm mb-8 pb-8 border-b border-white/10">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </p>
                  </div>
                ) : null}

                {/* Project Details */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                    {selectedProject.role && (
                      <span
                        className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold border ${
                          selectedProject.role === 'Solo'
                            ? 'bg-green-500/15 text-green-300 border-green-400/40'
                            : 'bg-amber-500/15 text-amber-300 border-amber-400/40'
                        }`}
                      >
                        {selectedProject.role === 'Solo' ? 'Solo project' : 'Team project'}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-blue-400 font-medium mb-6">{selectedProject.tech}</p>

                  <div className="text-gray-300 leading-relaxed mb-6 space-y-2">
                    {(selectedProject.fullDetails || selectedProject.description).split('\n').map((line: string, idx: number) => (
                      <p key={idx} className={line.startsWith('-') ? 'ml-4' : ''}>
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 text-green-400 mb-8">
                    <Award size={20} />
                    <span className="font-medium text-lg">{selectedProject.impact}</span>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 font-medium"
                    >
                      <Github size={20} />
                      View on GitHub
                    </a>
                    {selectedProject.videoUrl && (
                      <a
                        href={selectedProject.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-red-600/90 hover:bg-red-600 text-white rounded-lg transition-all duration-300 font-medium"
                      >
                        <Play size={20} />
                        Watch Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
