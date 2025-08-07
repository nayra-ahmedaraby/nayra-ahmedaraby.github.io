import React from 'react';
import { GraduationCap, Award, Calendar, Briefcase } from 'lucide-react';

const Education = () => {
  const certifications = [
    "Introduction to Generative AI with AWS – Amazon & Udacity",
    "Microsoft AI Skills Fest (2025)",
    "Responsible & Ethical AI",
    "Introduction to Data Science",
    "Sustainability for Employability – United Nations"
  ];

  const activities = [
    "Attendee – GDG Cairo (AI & Innovation Sessions)",
    "Participant – Microsoft AI Skills Fest 2025",
    "Competitor – SolveThe17 Hackathon – EUI University",
    "WHCL Competition – Finalist with “ProofMe” project",
    "Volunteer & Group Leader – SUTech University"
  ];

  const programs = [
    {
      title: "Aspire Leaders Program – Harvard-affiliated (Ongoing)",
      description: "Selected participant in a global leadership and personal development program focused on social impact and innovation."
    },
    {
      title: "InnovEgypt Program – TIEC & iSpark",
      description: "Innovation and entrepreneurship bootcamp to empower students with creative problem-solving and startup building tools."
    },
    {
      title: "ُE-Finance – Internship (ongoing)",
      description: "Upcoming technical internship focusing on applied tech and hands-on industry experience."
    },
    {
      title: "AIESEC Youth Exchange (Exploratory Experience)",
      description: "Participated in a short-term exchange program focusing on leadership and cultural learning."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Education & Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Education */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-blue-400" size={24} />
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl text-blue-400 font-semibold">SUTech University</h4>
               <p className="text-gray-300">BSc in Data Science & Artificial Intelligence</p>
                  <p className="text-gray-400 text-sm">
                      🎓 Joint academic partnership with <span className="text-white font-medium">Amity University</span>, India.<br/>
    Will receive an additional certified degree upon graduation.
              </p>
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
              <h3 className="text-2xl font-semibold text-white">Activities</h3>
            </div>
            <div className="space-y-3">
              {activities.map((activity, index) => (
                <div key={index} className="text-gray-300 text-sm">
                  • {activity}
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-purple-500/20 rounded-lg">
              <h4 className="text-purple-400 font-semibold mb-2">Currently Learning</h4>
              <p className="text-gray-300 text-sm">
                📚 Computer Vision & Robotics<br />
                📌 Advanced AI, Deep Learning, Python for AI Certifications
              </p>
            </div>
          </div>

          {/* Programs & Internships */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-orange-400" size={24} />
              <h3 className="text-2xl font-semibold text-white">Programs & Internships</h3>
            </div>
            <div className="space-y-5">
              {programs.map((item, index) => (
                <div key={index}>
                  <h4 className="text-sm font-semibold text-orange-300">• {item.title}</h4>
                  <p className="text-gray-400 text-xs pl-4">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
