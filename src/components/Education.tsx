import React from 'react';
import { GraduationCap, Award, Calendar, Star, Target, Zap } from 'lucide-react';

const Education = () => {
  const certifications = [
    {
      title: "Introduction to Generative AI with AWS",
      issuer: "Amazon & Udacity",
      year: "2025"
    },
    {
      title: "Microsoft AI Skills Fest",
      issuer: "Microsoft",
      year: "2025"
    },
    {
      title: "Responsible & Ethical AI",
      issuer: "Industry Expert",
      year: "2025"
    },
    {
      title: "Introduction to Data Science",
      issuer: "Professional Development",
      year: "2024"
    },
    {
      title: "Sustainability for Employability",
      issuer: "United Nations",
      year: "2024"
    }
  ];

  const activities = [
    {
      type: "Organizing",
      title: "Third Financial Inclusion, Digitalization & AI Summit 2025",
      organization: "FDAI - Ministry of Youth and Sports",
      icon: "🎯"
    },
    {
      type: "Speaking & Competition",
      title: "WHCL Competition Finalist (4th Place)",
      organization: "ProofMe Project",
      icon: "🏆"
    },
    {
      type: "Hackathon",
      title: "SolveThe17 Hackathon Competitor",
      organization: "EUI University",
      icon: "💡"
    },
    {
      type: "Community",
      title: "GDG Cairo – AI & Innovation Sessions",
      organization: "Google Developers Group",
      icon: "👥"
    },
    {
      type: "Leadership",
      title: "Volunteer & Group Leader",
      organization: "SUTech University",
      icon: "👨‍🎓"
    }
  ];

  const learningGoals = [
    { area: "Computer Vision", status: "In Progress" },
    { area: "Robotics", status: "In Progress" },
    { area: "Advanced Deep Learning", status: "Certified" },
    { area: "Python for AI", status: "Certified" }
  ];



  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Education & Achievements
        </h2>
        <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Academic excellence combined with continuous professional development and community engagement
        </p>

        {/* Main Education Card */}
        <div className="mb-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-10 border border-blue-400/50">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <GraduationCap className="text-blue-400" size={32} />
              <div>
                <h3 className="text-3xl font-bold text-white">SUTech University</h3>
                <p className="text-blue-300">Bachelor of Engineering Technology in Data Science & Artificial Intelligence</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-6 py-3 rounded-full font-bold text-lg">
              GPA: 4.0
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-gray-300">
                🎓 <span className="font-semibold text-white">International Partnership:</span><br />
                Joint academic program with <span className="text-blue-300 font-medium">Amity University, India</span>
              </p>
              <p className="text-gray-300 text-sm">
                Will receive dual-certified degrees upon graduation
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl border border-white/20">
              <Calendar className="text-green-400" size={20} />
              <div>
                <p className="text-gray-400 text-sm">Expected Graduation</p>
                <p className="text-white font-semibold">2028</p>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          
          {/* Certifications Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <Star className="text-yellow-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Certifications & Awards</h3>
            </div>

            {/* Top Achiever Badge */}
            <div className="mb-6 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/50 rounded-xl p-4">
              <p className="text-yellow-400 font-bold text-center mb-1">🏆 Top Achiever Award</p>
              <p className="text-gray-300 text-center text-sm">2024 & 2025</p>
            </div>

            {/* Certifications List */}
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/5 hover:bg-white/10 rounded-lg p-4 border border-white/10 transition-all">
                  <p className="text-white font-semibold text-sm">{cert.title}</p>
                  <p className="text-blue-300 text-xs mt-1">{cert.issuer} • {cert.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Activities Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-green-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Leadership & Activities</h3>
            </div>

            <div className="space-y-3">
              {activities.map((activity, index) => (
                <div key={index} className="bg-white/5 hover:bg-white/10 rounded-lg p-4 border border-white/10 transition-all">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{activity.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-white font-semibold text-sm">{activity.title}</p>
                      </div>
                      <p className="text-blue-300 text-xs">{activity.organization}</p>
                      <p className="text-gray-400 text-xs mt-1 inline-block bg-blue-500/20 px-2 py-1 rounded mt-2">
                        {activity.type}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Continuous Learning Section */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-400/50">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="text-purple-400" size={28} />
            <h3 className="text-2xl font-bold text-white">Currently Learning & Future Goals</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {learningGoals.map((goal, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 border border-purple-400/30">
                <p className="text-purple-300 font-semibold text-sm">{goal.area}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    goal.status === 'Certified' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {goal.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
