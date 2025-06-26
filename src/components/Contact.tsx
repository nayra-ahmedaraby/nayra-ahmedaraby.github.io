import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, MessageSquare, User, Clock, Lock, Eye, EyeOff } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: Date;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const { toast } = useToast();

  // Admin password (in a real app, this would be handled securely on the backend)
  const ADMIN_PASSWORD = "nayra2025";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAdminLogin = () => {
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowAdminPanel(false);
      setAdminPassword('');
      toast({
        title: "Admin Access Granted",
        description: "You can now view all messages.",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password.",
        variant: "destructive"
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before sending your message.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create new message
      const newMessage: Message = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date()
      };

      // Add message to the list
      setMessages(prev => [newMessage, ...prev]);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Let's Connect
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
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

              {/* Admin Access Button */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <button
                  onClick={() => setShowAdminPanel(!showAdminPanel)}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Lock size={16} />
                  Admin Access
                </button>
              </div>
            </div>

            {/* Admin Login Panel */}
            {showAdminPanel && !isAdmin && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Lock size={20} />
                  Admin Login
                </h3>
                <div className="space-y-4">
                  <input
                    type="password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
                  />
                  <button
                    onClick={handleAdminLogin}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                  >
                    Login
                  </button>
                </div>
              </div>
            )}

            {/* Admin Messages Panel */}
            {isAdmin && messages.length > 0 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                    <MessageSquare size={24} />
                    Received Messages ({messages.length})
                  </h3>
                  <button
                    onClick={() => setShowMessages(!showMessages)}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {showMessages ? <EyeOff size={16} /> : <Eye size={16} />}
                    {showMessages ? 'Hide' : 'Show'}
                  </button>
                </div>
                
                {showMessages && (
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {messages.map((msg) => (
                      <div key={msg.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                          <User size={16} className="text-blue-400" />
                          <span className="text-white font-medium">{msg.name}</span>
                          <span className="text-gray-400 text-sm">({msg.email})</span>
                        </div>
                        <p className="text-gray-300 mb-2 leading-relaxed">{msg.message}</p>
                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                          <Clock size={12} />
                          <span>{formatDate(msg.timestamp)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {isAdmin && messages.length === 0 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
                <MessageSquare size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Messages Yet</h3>
                <p className="text-gray-400">Messages will appear here when visitors contact you.</p>
              </div>
            )}
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Your Message"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                required
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 disabled:hover:scale-100"
              >
                <Send size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
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