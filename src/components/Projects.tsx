import React, { useState } from 'react';
import { Github, Award, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "HR Analytics Project",
      tech: "Python, Pandas, Scikit-learn, Databricks, Power BI",
      description: "Advanced HR analytics solution for predicting and preventing employee attrition using machine learning. Key features: - Data Analysis: Processed 2000+ employee records identifying key turnover drivers - ML Models: Scikit-learn achieving 85%+ accuracy - Cloud Processing: Databricks for scalable pipelines - Visualizations: Interactive Power BI dashboards - Segmentation: 5 employee risk personas - Impact: Reduced predicted attrition by 25%",
      shortDescription: "Predict employee attrition using advanced ML and data analysis on Databricks cloud.",
      fullDetails: "This comprehensive HR analytics project combines advanced data analysis with machine learning to predict and prevent employee attrition across organizations.\n- Data Analysis Phase: Processed 2000+ employee records, analyzing salary progression, department dynamics, and work experience\n- ML Implementation: Built scikit-learn predictive models achieving 85%+ accuracy in attrition prediction\n- Cloud Infrastructure: Utilized Databricks for scalable cloud processing, enabling real-time data pipelines\n- Visualization Strategy: Created interactive Power BI dashboards with department breakdowns, risk heatmaps, and trend analysis\n- Employee Segmentation: Identified 5 distinct employee personas with tailored retention strategies\n- Key Achievements: Reduced predicted attrition by 25%, identified cost-saving retention opportunities, enabled data-driven HR decision-making\n- Business Impact: Transformed HR strategy from reactive to proactive based on predictive insights",
      impact: "Employee Attrition Prediction & Segmentation",
      githubUrl: "https://github.com/nayra-ahmedaraby/hrAnalysis-cloudData",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      images: [
        { url: "/dashboards/Screenshot 2026-05-09 150024.png", title: "HR Analytics - Risk Heatmap", description: "Comprehensive employee risk assessment with department breakdown and attrition prediction scores" },
        { url: "/dashboards/Screenshot 2026-05-09 150104.png", title: "HR Analytics - Executive Summary", description: "Executive-level KPIs, department-wise performance metrics, and strategic HR insights" },
        { url: "/dashboards/Screenshot 2026-05-09 150146.png", title: "HR Analytics - Personas", description: "5-persona employee segmentation with targeted retention strategies for each group" }
      ]
    },
    {
      title: "Fitness Tracker API",
      tech: "FastAPI, Python, MongoDB, Neural Networks, CSP",
      description: "Intelligent fitness planning system using AI and constraint satisfaction for personalized workouts. Core components: - Constraint Satisfaction: CSP algorithms optimize workout plans - Neural Networks: Deep learning predicts adherence with 82% accuracy - Personalization: Generates unique 12-week plans - Dynamic Adaptation: Real-time adjustments - RESTful API: 25+ endpoints - Database: MongoDB with optimized schemas",
      shortDescription: "AI-powered fitness planning with constraint satisfaction and neural networks for personalized workouts.",
      fullDetails: "A sophisticated fitness platform combining Constraint Satisfaction Problems (CSP) with machine learning for truly personalized workout planning.\n- Algorithm Design: CSP engine optimizes workout selection against multiple constraints (time, equipment, goals, recovery)\n- ML Implementation: Neural networks trained on 500+ profiles predict adherence with 82% accuracy\n- Backend Architecture: FastAPI with async operations handling concurrent requests efficiently\n- Database Design: MongoDB with optimized schemas for profiles, workout history, and metrics\n- Plan Generation: Generates 12-week personalized programs dynamically updated weekly\n- Adaptation System: Real-time adjustments based on user feedback and performance\n- API Development: 25+ RESTful endpoints for mobile app and web integration\n- Success Metrics: 78% user retention rate, 85% workout completion\n- Technical Innovation: Combined discrete optimization (CSP) with continuous optimization (neural networks)",
      impact: "AI-Driven Personalized Fitness Planning",
      githubUrl: "https://github.com/Momen959/fitness_workout_planner",
      thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop"
    },
    {
      title: "CyberNest SOAR - AI Vulnerability Engine",
      tech: "AI, SSVC, EPSS, Automation",
      description: "Automated security vulnerability prioritization using AI and industry frameworks. Key capabilities: - SSVC Integration: Stakeholder-specific categorization - EPSS Scoring: Exploit prediction system - AI Triage: Reduces manual triage time by 87% - Risk Scoring: Multi-factor assessment - Automated Responses: Intelligent patching - Real-time Monitoring: Across 1000+ assets - Compliance: CVSS, NIST standards",
      shortDescription: "AI-powered vulnerability prioritization using SSVC and EPSS for automated security response.",
      fullDetails: "An advanced cybersecurity platform automating vulnerability assessment and incident response using AI and industry-standard frameworks.\n- Framework Integration: Combines SSVC for organizational context with EPSS for exploitability assessment\n- AI Triage System: Machine learning reduces manual triage time by 87%, auto-categorizing by business impact\n- Risk Scoring Engine: Multi-factor assessment combining CVSS scores, threat intelligence, and context\n- Automated Response: Intelligent patching recommendations and remediation workflows\n- Monitoring Infrastructure: Continuous scanning across 1000+ organizational assets\n- Incident Automation: 50+ automated response playbooks for common patterns (ransomware, lateral movement)\n- Real-time Dashboards: Executive and technical views showing trends, patch status, compliance\n- Compliance Alignment: Meets CVSS 3.1, NIST CSF, industry-specific requirements\n- Performance Metrics: 95% patch deployment within SLA, 40% faster incident response",
      impact: "Automated Security Response",
      githubUrl: "https://github.com/CyberNest-SOAR/CyberNest-Soar",
      thumbnail: "https://github.com/user-attachments/assets/8fd502a7-10b6-44a5-b5d4-be1360c351e8"
    },
    {
      title: "Student Burnout Analysis - Final Project",
      tech: "Python, Pandas, Matplotlib, Seaborn, Power BI",
      description: "Comprehensive burnout research analyzing 28,000+ university students using Maslach Inventory model. Analysis includes: - Dataset: 28,000+ responses across 15 universities - Burnout Assessment: MBI scoring methodology - Root Cause Analysis: Sleep, social support, academic pressure - Segmentation: 6 risk personas - Interventions: 20+ recommendations - Impact: 45% high-risk identified - Visualizations: 50+ Power BI dashboards",
      shortDescription: "Analyzed 28K+ students using Maslach model to identify burnout drivers and wellness interventions.",
      fullDetails: "A comprehensive academic research project investigating burnout patterns across 28,000+ university students with deep statistical analysis.\n- Dataset Scope: 28,000+ responses from 15 universities with demographic, academic, behavioral data\n- Assessment Framework: Maslach Burnout Inventory providing three-factor burnout scores\n- Statistical Analysis: Correlation analysis, regression modeling, clustering with significance testing\n- Root Cause Identification: Sleep deprivation (r=0.68) and academic pressure (r=0.72) as primary drivers; social support (r=-0.64) protective\n- Student Segmentation: 6 personas from thriving to severely burned out with intervention recommendations\n- Risk Quantification: 45% high-risk, 30% moderate-risk, 25% low-risk\n- Degree Program Analysis: Engineering and Medicine students 2.5x more burned out than others\n- Intervention Strategies: 20+ evidence-based recommendations including curriculum redesign, mental health expansion\n- Interactive Dashboards: 50+ Power BI visualizations with filters by degree, year, city\n- Policy Recommendations: Framework for university governance addressing systemic causes",
      impact: "Data-Driven Insights for Student Wellness",
      githubUrl: "https://github.com/nayra-ahmedaraby/studentBurnouts_Analysis",
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      images: [
        { url: "/dashboards/Screenshot 2026-05-10 095847.png", title: "Burnout Drivers: Root Cause Analysis", description: "Correlation matrix showing academic pressure, sleep hours, and social support as primary burnout factors" },
        { url: "/dashboards/Screenshot 2026-05-10 095906.png", title: "Demographics & Risk Segments", description: "Demographic breakdown by age, city, degree with burnout severity heat map" },
        { url: "/dashboards/Screenshot 2026-05-10 095936.png", title: "Student Burnout KPIs", description: "45% high-risk, 30% moderate-risk, 25% low-risk distribution with actionable insights" }
      ]
    },
    {
      title: "Linux Monitoring System",
      tech: "Bash, Shell Scripting, Linux Administration",
      description: "Enterprise monitoring system for Linux infrastructure with real-time dashboards and security automation. Features: - Live Monitoring: Real-time CPU, RAM, disk, network with 5-second refresh - Resource Tracking: Historical data for trend analysis - Security Checks: 15+ automated scans - Anomaly Detection: Intelligent alerting - Automated Responses: Handler for threats - Multi-Distribution: Ubuntu, CentOS, RedHat, Debian",
      shortDescription: "Real-time Linux server monitoring with security checks and automated alerting system.",
      fullDetails: "An enterprise-grade monitoring solution for Linux infrastructure delivering comprehensive real-time system oversight.\n- Core Monitoring: Live CPU, memory, disk I/O, network throughput with 5-second polling\n- Performance Metrics: Historical data enabling trend analysis and capacity planning\n- Resource Alerts: Threshold-based alerts for high CPU (>85%), memory (>90%), disk (>95%)\n- Security Automation: 15+ automated checks including permissions, firewall, SELinux, ports\n- Threat Detection: Anomaly detection identifying suspicious processes, unusual connections, unauthorized users\n- Automated Response: Handlers for threats (kill processes, block IPs, trigger incidents)\n- Multi-Distribution Support: Auto-detection for Ubuntu, CentOS, RedHat, Debian\n- Logging Infrastructure: Audit logs for forensic analysis and compliance (HIPAA, SOC 2)\n- Dashboard Interface: Text-based interactive with color-coded alerts and drill-down\n- Performance Impact: Minimal overhead (<2% CPU, <50MB RAM) for production",
      impact: "Enterprise Linux System Administration",
      githubUrl: "https://github.com/nayra-ahmedaraby/linux-monitoring-system",
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop"
    },
    {
      title: "Amazon PartyRock - AI Productivity Coach",
      tech: "Generative AI",
      description: "Generative AI career development platform for students and professionals. Key features: - Daily Coaching: Personalized productivity tips - Skill Analysis: Automatic CV parsing - Job Matching: ML-powered recommendations - CV Generation: ATS-optimized resume creation - Career Path Planning: 5-year roadmaps - Interview Prep: Personalized questions - Networking: Skill-based suggestions - Analytics: Progress tracking",
      shortDescription: "AI productivity assistant providing personalized tips, job matching, and CV generation.",
      fullDetails: "A comprehensive generative AI career development platform leveraging large language models for student and professional empowerment.\n- Daily Productivity Coaching: Personalized tips aligned with learning style, goals, available time\n- Skill Assessment: Automatic CV parsing identifying technical/soft skill strengths and gaps\n- Intelligent Job Matching: ML algorithms matching skills to 10,000+ opportunities with scoring\n- CV Generation: Intelligent resume builder with ATS optimization and industry-specific formatting\n- Career Path Planning: AI-generated 5-year roadmaps showing progression and skill development\n- Interview Preparation: Personalized questions, guidance, and weakness-specific practice\n- Networking Recommendations: Connection suggestions based on shared skills and goals\n- Portfolio Guidance: Recommendations for projects and certifications\n- Progress Analytics: Track upskilled competencies and job readiness score\n- Learning Resources: Curated course and book recommendations\n- Continuous Learning: Platform adapts based on interactions and career progression",
      impact: "AI-Powered Career Guidance",
      githubUrl: "https://github.com/nayra-ahmedaraby/AI-Productivity-Coach",
      thumbnail: "https://tse1.mm.bing.net/th/id/OIP.D6-exLoRlwZ8I35XNBQ38gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      title: "Project Management Web App",
      tech: "PHP, MySQL, HTML/CSS/JS",
      description: "Complete project management system for team collaboration and task organization. Core features: - Kanban Boards: Visual workflow across columns - Team Management: RBAC with multiple roles - Task Tracking: Detailed cards with metadata - Timeline View: Gantt chart visualization - Communication: Integrated comments and logs - Notifications: Real-time alerts - Reporting: Productivity dashboards - Database: MySQL optimized for scalability",
      shortDescription: "Complete project management system with Kanban boards and team collaboration tools.",
      fullDetails: "A comprehensive full-stack project management platform built with PHP and MySQL enabling efficient team collaboration.\n- Kanban Board System: Interactive boards with drag-and-drop across To-Do, In Progress, Review, Complete\n- User Roles & Permissions: RBAC with Admin, Manager, Developer, Viewer roles with granular permissions\n- Task Management: Rich cards with descriptions, dates, priorities, hours, resource allocation\n- Project Organization: Multi-project support with settings, team assignments, permissions\n- Timeline Management: Gantt charts for deadline tracking, dependency management, workload balancing\n- Team Communication: Comment system, activity logs, audit trails for all modifications\n- Notification System: Real-time alerts for assignments, deadlines (3 days before), updates, mentions\n- Reporting Dashboards: Completion rates, sprint velocity, team metrics, bottleneck identification\n- Performance Optimization: MySQL indexes for 500+ concurrent users, caching mechanisms\n- Responsive Design: Mobile-friendly supporting tablet and smartphone access",
      impact: "Full-Stack Productivity Tool",
      githubUrl: "https://github.com/nayra-ahmedaraby/project-management-system",
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
    },
    {
      title: "Process Scheduling Simulation",
      tech: "Python, JavaScript, HTML/CSS",
      description: "Educational simulator for CPU scheduling algorithms demonstrating real-world OS concepts. Supported algorithms: - FCFS: First Come First Serve - SJF: Shortest Job First - Priority: Process prioritization - Round Robin: Time-quantum based - Metrics: Waiting time, turnaround time, CPU utilization - Visualizations: Gantt charts and timelines - Comparative Analysis: Side-by-side comparison - Dual Platforms: Desktop and web versions",
      shortDescription: "Interactive CPU scheduling algorithm simulator for FCFS, SJF, Priority, and Round Robin.",
      fullDetails: "An educational tool demonstrating CPU scheduling algorithms core to operating systems design with dual-platform availability.\n- FCFS Algorithm: First Come First Serve with execution order and timing traces\n- SJF Scheduling: Shortest Job First with average waiting time analysis; preemptive and non-preemptive modes\n- Priority Scheduling: Process prioritization with aging algorithm preventing starvation\n- Round Robin: Time-quantum based fair scheduling with configurable quantum (1-10ms)\n- Performance Metrics Tracking: Waiting time, turnaround time, response time, CPU utilization\n- Visual Representation: Gantt charts, queue visualization, state transitions (Ready, Running, Blocked)\n- Comparative Analysis: Side-by-side algorithm comparison with statistical analysis\n- Configurable Inputs: Process count, burst times, arrival times, priorities, quantum\n- Python Desktop Version: GUI-based for classroom demonstrations\n- JavaScript Web Version: Browser-based for online learning\n- Educational Value: Demonstrates scheduler impact on system performance",
      impact: "OS Concepts, CPU Scheduling Algorithms",
      githubUrl: "https://github.com/nayra-ahmedaraby/Process-Scheduling-Simulation-Project",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      title: "Student Grade Management System",
      tech: "Python, JSON, CSV",
      description: "Comprehensive academic management system for student records and performance tracking. Key components: - Student Database: 1000+ records with personal/enrollment data - Grade Processing: Automated calculations from assignments/tests - GPA Computation: Cumulative and semester GPA with weighted calculations - Data Management: Full CRUD operations - Export Functionality: JSON and CSV reports - Academic Workflows: Semester processing and transcripts - Validation Rules: University policies enforcement",
      shortDescription: "Student record management system with automated grade processing and GPA calculation.",
      fullDetails: "A complete academic management system automating student record tracking and grade management mirroring real university systems.\n- Student Database: Storage for 1000+ records with personal info, enrollment, contact, history\n- Course Management: Catalog with credits, prerequisites, rubrics, instructor assignments\n- Grade Processing: Automated calculation combining assignments (20%), quizzes (20%), midterms (30%), finals (30%)\n- GPA Computation: Cumulative GPA with weighted credits, semester GPA, honors classifications\n- Data Import/Export: JSON and CSV support for institutional integration\n- Academic Workflows: Semester processing, audits, transcript generation, standing determination\n- Validation Rules: Enforces policies, credit limits, prerequisites, regulations\n- Report Generation: Grade distribution, GPA trends, cohort analysis, departmental stats\n- Error Handling: Robust checking for invalid data, duplicates, constraint violations",
      impact: "Reduced manual grade handling by 80%",
      githubUrl: "https://github.com/nayra-ahmedaraby/Student-Grade-Management-System",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      title: "SolveThe17 Hackathon Project",
      tech: "HTML, JavaScript",
      description: "Social-impact hackathon project creating inclusive digital platform addressing UN Sustainable Development Goals. Focus areas: - Accessibility First: WCAG 2.1 AAA compliance - Special Needs Support: Customizable interface - Children Interface: Age-appropriate design - Assistive Features: Text-to-speech, high-contrast modes - Social Impact: Resource connections and support - SDG Alignment: Multiple sustainable development goals",
      shortDescription: "Inclusive web platform addressing accessibility needs for special needs and children.",
      fullDetails: "A comprehensive social-impact hackathon project building an inclusive web platform aligned with UN Sustainable Development Goals.\n- Accessibility Foundation: WCAG 2.1 AAA compliance supporting visual, hearing, motor, cognitive impairments\n- Special Needs Support: Customizable features for dyslexia, ADHD, cognitive load reduction\n- Children Interface: Age-appropriate design with simplified navigation and engaging visuals\n- Assistive Technologies: Text-to-speech, high-contrast modes, keyboard-only navigation, speech-to-text\n- Simplified Language: Content at multiple reading levels (child-friendly, teen, adult)\n- Resource Library: Connections to educational resources, support services, programs\n- Community Features: Peer support forums, resource sharing, mentor connections\n- SDG Alignment: Addresses SDG 3 (Health), SDG 4 (Education), SDG 5 (Equality)\n- User Testing: Developed with target user input for practical solutions\n- Awards & Recognition: Recognized in hackathon for social impact and technical excellence",
      impact: "SDG Alignment & Social Impact",
      githubUrl: "https://github.com/nayra-ahmedaraby/SolveThe17-Hackathon",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
    },
    {
      title: "Simple Web Server",
      tech: "Python, Sockets, Threading, HTML",
      description: "Custom-built web server demonstrating low-level network programming and HTTP protocol. Implementation details: - Socket Programming: TCP implementation for connections - Concurrent Handling: Multi-threaded architecture for 100+ connections - HTTP Protocol: Full HTTP/1.1 support - Static Content: Serves HTML/CSS/JS with MIME types - Dynamic Endpoints: /status for server health - Error Handling: Proper HTTP error codes - Request Parsing: Headers, parameters, body extraction",
      shortDescription: "Custom Python web server with threading and HTTP protocol implementation.",
      fullDetails: "A low-level web server implementation demonstrating fundamental network programming and HTTP protocol concepts.\n- Socket Programming: TCP socket creation, binding, accepting connections with error handling\n- Concurrent Architecture: Multi-threaded handling with thread pool limiting to 100 connections\n- HTTP Protocol Implementation: Full HTTP/1.1 compliance with GET, POST, HEAD methods\n- Request Parsing: HTTP header parsing, query parameters, request body extraction\n- Static Content Serving: HTML/CSS/JavaScript with automatic MIME type detection\n- Dynamic Endpoints: /status providing real-time metrics (uptime, connections, requests)\n- Error Handling: Proper responses (400 Bad Request, 404 Not Found, 500 Server Error)\n- Performance Optimization: Thread pooling, keep-alive connections, efficient I/O\n- Logging System: Event logging for debugging and monitoring\n- Educational Value: Well-commented code demonstrating socket API, threading, HTTP",
      impact: "Network Programming & HTTP Handling",
      githubUrl: "https://github.com/nayra-ahmedaraby/Simple-Web-Server",
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop"
    },
    {
      title: "Ultrasonic Distance Measurement Device",
      tech: "Arduino, Physics",
      description: "Smart IoT lighting system with ultrasonic motion detection for energy optimization. System features: - Ultrasonic Sensor: HC-SR04 detecting motion in 2-5 meter range - Arduino Control: Microcontroller for logic and relay control - Motion Detection: Configurable threshold and hold time - Relay Control: AC light switching based on occupancy - Energy Savings: 60% reduction through automation - Safety Features: Manual override and emergency mode - Scalability: Multi-light and multi-room deployment",
      shortDescription: "Smart lighting automation with ultrasonic motion detection for energy savings.",
      fullDetails: "An IoT-based energy management device using ultrasonic sensors for intelligent lighting automation.\n- Hardware Components: HC-SR04 sensor, Arduino microcontroller, relay module, LED, power supply\n- Sensor Technology: Ultrasonic detection within 2-5 meter range with 25ms response\n- Processing Logic: Arduino decision-making with configurable threshold and 2-10 second hold\n- Lighting Control: Electrical relay switching AC lights based on detected occupancy\n- Energy Efficiency: 60% waste reduction through automated control\n- Safety Features: Manual override, emergency mode keeping lights on, low-battery alerts\n- Expandability: Multi-light or multi-room deployment support\n- Calibration System: Sensitivity adjustment for different room sizes and heights\n- Status Indicators: LED showing device state (on/detecting/idle)\n- Power Management: Low-power design with sleep modes",
      impact: "Energy Waste Reduction",
      githubUrl: "https://github.com/nayra-ahmedaraby/Ultrasonic-Distance-Measurement",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      title: "Data Analysis Dashboard",
      tech: "Power BI, SQL, Data Visualization",
      description: "Advanced business intelligence dashboard for data-driven decision making. Dashboard components: - Data Integration: SQL queries from multiple sources (100K+ records) - Visualizations: 25+ interactive charts and KPI cards - Filtering: Dynamic filters by date, category, region - Statistical Analysis: Averages, medians, anomaly detection - KPI Tracking: Real-time business health metrics - Drill-Down: Navigate to transaction-level data - Mobile Optimization: Responsive design - Refresh Schedule: Automated daily updates",
      shortDescription: "Interactive Power BI dashboard with advanced data visualization and SQL queries.",
      fullDetails: "A comprehensive business intelligence dashboard built with Power BI delivering advanced data analysis and visualization.\n- Data Architecture: SQL queries from multiple sources with 100,000+ transaction records\n- Visual Design: 25+ interactive visualizations (heatmaps, scatter, trends, bubbles, KPIs)\n- User Interactivity: Dynamic filters by date range, region, category, metrics\n- Statistical Capabilities: Averages, medians, standard deviations, anomaly detection\n- KPI Monitoring: Executive dashboard with critical business indicators (revenue, growth, retention)\n- Drill-Down Analysis: Navigate from summaries to transaction-level data\n- Performance Optimization: Query optimization for sub-second dashboard refresh\n- Mobile Responsiveness: Responsive design for tablet and mobile viewing\n- Data Refresh: Automated daily updates with freshness indicators\n- Best Practices: Follows Power BI guidelines for clarity and accessibility",
      impact: "Data-Driven Insights",
      githubUrl: "https://github.com/nayra-ahmedaraby",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      title: "Online Shopping Cart Database",
      tech: "SQL, PHP, CSS",
      description: "Robust e-commerce backend system with optimized database design for retail operations. Database architecture: - Schema Design: Normalized ERD with customers, products, orders, items - Data Integrity: Foreign keys and triggers - Queries: 20+ optimized SQL queries - Transactions: ACID-compliant checkout workflow - Performance: Indexes reducing query time by 70% - Cart Management: Persistent with quantities and inventory - Order Processing: Complete workflow tracking",
      shortDescription: "E-commerce database system with transaction management and SQL optimization.",
      fullDetails: "A robust e-commerce backend featuring comprehensive database design and transaction management for retail operations.\n- Database Schema: Normalized ERD with customers, products, orders, cart items, inventory, payments\n- Data Integrity: Foreign key constraints and triggers ensuring consistency\n- SQL Optimization: 20+ optimized queries for search, filtering, cart, processing\n- Transactions: ACID-compliant multi-step checkout and payment operations\n- Performance Tuning: Strategic indexes on key columns reducing query time by 70%\n- Cart System: Persistent shopping cart with quantity adjustments and validation\n- Order Lifecycle: Complete workflow from creation through fulfillment tracking\n- Payment Integration: Secure design following PCI DSS compliance\n- Reporting Queries: Revenue by product/category, popularity, customer lifetime value\n- Scalability: Efficient design supporting 100,000+ daily transactions",
      impact: "Efficient Transactions",
      githubUrl: "https://github.com/nayra-ahmedaraby/Online-Shopping-Cart-Database",
      thumbnail: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=300&fit=crop"
    },
    {
      title: "Bus Ticket Booking System",
      tech: "Java, OOP, GUI",
      description: "Desktop bus ticket reservation system showcasing OOP principles and user interface design. System features: - Object Design: Bus, Route, Passenger, Ticket classes - Seat Management: Visual map with real-time tracking - Booking Workflow: Multi-step reservation process - User Interface: Swing GUI with intuitive navigation - Database: Storage of bookings and routes - Search Functionality: Filter by route, date, time - Ticket Generation: PDF with booking details - Pricing System: Dynamic based on distance and demand",
      shortDescription: "Desktop ticket booking system demonstrating Java OOP and GUI design.",
      fullDetails: "A comprehensive desktop application demonstrating object-oriented programming principles in a practical bus ticket booking system.\n- Object Design: Classes for Bus, Route, Passenger, Ticket with inheritance and polymorphism\n- Seat Management: Visual map with color-coded availability and real-time updates\n- Booking Workflow: Multi-step process including route, seat, passenger info, payment\n- User Interface: Swing-based GUI with intuitive navigation and error dialogs\n- Data Persistence: File-based or database storage of bookings and routes\n- Search & Filter: Advanced search by route, date, time, duration, price\n- Ticket Generation: PDF creation with booking reference, details, and fare\n- Pricing Logic: Dynamic pricing based on distance, category, advance booking\n- Cancellation System: Flexible policy with automatic seat release and refunds\n- Admin Dashboard: Reports on occupancy, revenue, trends, popular routes\n- Design Patterns: Singleton (database), Observer (updates), Factory (tickets)",
      impact: "User-Friendly Design",
      githubUrl: "https://github.com/nayra-ahmedaraby/Bus-Ticket-Booking-System",
      thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
    },
    {
      title: "Treasure Hunt in the Museum (C++)",
      tech: "C++, Data Structures",
      description: "Interactive text-based adventure game with sophisticated data structure implementation. Game architecture: - Linked Lists: Room and puzzle data structures - Game State: Inventory tracking with pointers - Puzzle Generation: Dynamic creation with branching - Navigation: Graph-like museum layout - Inventory Management: Add, remove, search operations - Puzzle Solving: Multi-step complex logic - Story Progression: Dynamic narrative branching - Memory Management: Proper allocation/deallocation",
      shortDescription: "Interactive adventure game demonstrating C++ data structures and linked lists.",
      fullDetails: "A creative text-based adventure game showcasing sophisticated data structure applications and game development concepts.\n- Linked Lists Implementation: Room and puzzle data using linked lists for dynamic memory management\n- Game State Management: Inventory system as linked list of items with pointer operations\n- Dynamic Puzzle Generation: Puzzles created during gameplay with varying difficulty\n- Museum Navigation: Graph-like structure with interconnected rooms and passages\n- Inventory System: Complete item tracking with space limitations\n- Puzzle Logic: Complex multi-step puzzles requiring item combination and problem-solving\n- Story Progression: Dynamic narrative branching based on player choices\n- Memory Optimization: Proper dynamic allocation/deallocation with careful pointer usage\n- Interactive Features: Hints system, limited moves, treasure hunting with scoring\n- Game Mechanics: Command parsing, error handling, status display\n- Extensibility: Modular design for adding puzzles and sections\n- Educational Value: Demonstrates linked lists, dynamic memory, algorithms in game context",
      impact: "Creative Data Structure Application",
      githubUrl: "https://github.com/omarameen2005/Treasure-Hunt-in-a-Museum-Project",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
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
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </button>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                  {project.title}
                </h3>

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
                        src={selectedProject.images[currentImageIndex].url}
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
                  <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>

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

                  {/* GitHub Link */}
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 font-medium"
                  >
                    <Github size={20} />
                    View on GitHub
                  </a>
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
