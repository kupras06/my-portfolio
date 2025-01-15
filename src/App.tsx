import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Terminal, Download, Briefcase } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#E3E4FA]">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#262842] to-[#2C497F] text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Software Developer</h1>
            <p className="text-xl mb-8 text-[#8897BD]">Passionate about creating efficient, scalable solutions with modern technologies</p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-[#E3E4FA] text-[#262842] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Hire Me
              </a>
              <a href="#projects" className="border-2 border-[#8897BD] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#293961] transition-colors">
                View Projects
              </a>
              <a 
                href="/path-to-your-cv.pdf" 
                className="bg-[#293961] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2C497F] transition-colors flex items-center gap-2"
                download
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-white" id="skills">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#262842]">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg border border-[#8897BD] hover:shadow-xl transition-all bg-gradient-to-b from-white to-[#E3E4FA]/30">
              <Code2 className="w-12 h-12 text-[#2C497F] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#262842]">Frontend Development</h3>
              <p className="text-[#293961]">React, TypeScript, Tailwind CSS, Next.js</p>
            </div>
            <div className="p-8 rounded-lg border border-[#8897BD] hover:shadow-xl transition-all bg-gradient-to-b from-white to-[#E3E4FA]/30">
              <Database className="w-12 h-12 text-[#2C497F] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#262842]">Backend Development</h3>
              <p className="text-[#293961]">Node.js, Python, PostgreSQL, REST APIs</p>
            </div>
            <div className="p-8 rounded-lg border border-[#8897BD] hover:shadow-xl transition-all bg-gradient-to-b from-white to-[#E3E4FA]/30">
              <Terminal className="w-12 h-12 text-[#2C497F] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#262842]">DevOps & Tools</h3>
              <p className="text-[#293961]">Git, Docker, AWS, CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-[#E3E4FA]" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#262842]">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                alt="Project 1" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#262842]">E-Commerce Platform</h3>
                <p className="text-[#293961] mb-4">A full-stack e-commerce solution built with React, Node.js, and PostgreSQL</p>
                <div className="flex items-center space-x-2">
                  <ExternalLink className="w-5 h-5 text-[#2C497F]" />
                  <a href="#" className="text-[#2C497F] hover:text-[#262842] hover:underline">View Project</a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                alt="Project 2" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#262842]">Task Management App</h3>
                <p className="text-[#293961] mb-4">A collaborative task management tool with real-time updates</p>
                <div className="flex items-center space-x-2">
                  <ExternalLink className="w-5 h-5 text-[#2C497F]" />
                  <a href="#" className="text-[#2C497F] hover:text-[#262842] hover:underline">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#262842]">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a href="#" className="flex items-center space-x-2 text-[#293961] hover:text-[#2C497F] transition-colors">
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-[#293961] hover:text-[#2C497F] transition-colors">
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:your.email@example.com" className="flex items-center space-x-2 text-[#293961] hover:text-[#2C497F] transition-colors">
                <Mail className="w-6 h-6" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#262842] text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;