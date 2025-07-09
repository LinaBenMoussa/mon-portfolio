import React from 'react';
import { Download, Eye, Github, Linkedin, Mail, Code, Zap } from 'lucide-react';
import myImage from '../assets/img/Design sans titre-Photoroom.png' ;
import cv from '../assets/file/cv Lina BEN MOUSSA.pdf'
import react from "../assets/icon/react.png";
import angular from "../assets/icon/angular.png";
import net from "../assets/icon/net.png";
import spring from "../assets/icon/springboot.png";
const Accueil = () => {
  const skills = [
    { name: 'React', icon: react, color: 'text-blue-400' },
    { name: 'Spring Boot', icon: spring, color: 'text-green-400' },
    { name: 'Angular', icon: angular, color: 'text-red-400' },
    { name: '.NET', icon: net, color: 'text-purple-400' }
  ];
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'CV Lina BEN MOUSSA.pdf';
    link.click();
  };

  return (
    <section>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>
      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12 lg:py-20">
        {/* Profile Image */}
        <div className="relative mb-12 lg:mb-0">
          <div className="relative w-72 h-72 mx-auto lg:mx-0">
            {/* Simple image placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <img src={myImage} className='w-72 h-72'></img>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white animate-bounce shadow-lg">
              <Code size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-white animate-bounce delay-500 shadow-lg">
              <Zap size={24} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 lg:ml-16 text-center lg:text-left">
          <div className="mb-8">
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-white/90">Hi, I'm </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Lina BEN MOUSSA
              </span>
            </h1>
            <h2 className="text-3xl lg:text-4xl text-white/80 font-light mb-6">
              Software Engineer
            </h2>
            <p className="text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed">
              Passionate about creating innovative solutions with modern technologies. 
              I build scalable applications that make a difference in the digital world.
            </p>
          </div>

          {/* Skills Icons */}
          <div className="flex justify-center lg:justify-start gap-6 mb-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="group relative"
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 cursor-pointer border border-white/5 hover:border-white/20">
                <img src={skill.icon} alt={skill.name} className={`w-12 h-12 ${skill.color} group-hover:scale-125 transition-transform duration-300`} />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <a href='#projects'>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transform">
              <div className="flex items-center gap-2">
                <Eye size={20} className="group-hover:scale-110 transition-transform duration-300" />
                View my projects
              </div>
            </button>
            </a>
            <a>
            <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2" onClick={() => downloadCV()}>
                <Download size={20} className="group-hover:scale-110 transition-transform duration-300" />
                Download CV
              </div>
            </button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4">
            {[
              { icon: Github, href: 'https://github.com/LinaBenMoussa' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/linabenmoussa/' },
              { icon: Mail, href: 'mailto:linabenmoussa255@gmail.com' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/5 hover:border-white/20"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

     

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-2000"></div>
    </section>
  );
};

export default Accueil;