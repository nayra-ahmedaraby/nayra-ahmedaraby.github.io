import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Let's Connect
        </h2>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Get In Touch</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="mailto:nayraaraby2@gmail.com"
              className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
            >
              <div className="bg-blue-500/20 p-3 rounded-full group-hover:bg-blue-500/30">
                <Mail size={20} />
              </div>
              <span>nayraaraby2@gmail.com</span>
            </a>
            
            <a 
              href="tel:+201557084472"
              className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
            >
              <div className="bg-green-500/20 p-3 rounded-full group-hover:bg-green-500/30">
                <Phone size={20} />
              </div>
              <span>+20 155 708 4472</span>
            </a>
            
            <div className="flex items-center gap-4 text-gray-300">
              <div className="bg-purple-500/20 p-3 rounded-full">
                <MapPin size={20} />
              </div>
              <span>Badr City, Cairo</span>
            </div>
            
            <a 
              href="https://www.linkedin.com/in/nayra-ahmed-841793333"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
            >
              <div className="bg-blue-600/20 p-3 rounded-full group-hover:bg-blue-600/30">
                <Linkedin size={20} />
              </div>
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
        
        <div className="text-center mt-16 text-gray-400">
          <p>&copy; 2025 Nayra Ahmed Araby. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;