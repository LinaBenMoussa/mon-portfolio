import { Award, Download, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import myImage from '../assets/img/Design sans titre-Photoroom.png' ;
import cv from '../assets/file/cv Lina BEN MOUSSA.pdf'

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const personalInfo = {
    name: 'Lina BEN MOUSSA',
    title: 'Software Engineer',
    location: 'Tunisia',
    email: 'linabenmoussa255@gmail.com',
    phone: '+216 50 488 680',
  };
  const downloadCV = () => {
      const link = document.createElement('a');
      link.href = cv;
      link.download = 'CV Lina BEN MOUSSA.pdf';
      link.click();
    };

  const tabContent = {
    story: {
  title: 'My Story',
  content: (
    <div className="space-y-6">
      <p className="text-white/70 leading-relaxed">
        I'm a passionate Software Engineer with a strong interest in full-stack development. 
        My journey began with a curiosity about how digital products work, which led me to pursue 
        computer science and develop expertise in modern web technologies.
      </p>
      <p className="text-white/70 leading-relaxed">
        I specialize in building scalable web applications using React, Angular, Spring Boot, and .NET. 
        My approach combines technical excellence with user-centered design, ensuring that every project 
        I work on delivers both functionality and exceptional user experience.
      </p>
      <p className="text-white/70 leading-relaxed">
        When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
        and sharing knowledge with the developer community. I believe in continuous learning and 
        staying updated with the latest industry trends.
      </p>
    </div>
  )
}
,
    experience: {
  title: 'Experience',
  content: (
    <div className="space-y-8">
      {/* Final Year Internship */}
      <div className="border-l-4 border-purple-400 pl-6">
        <div className="flex items-center gap-4 mb-2">
          <h3 className="text-xl font-semibold text-white">Final Year Intern</h3>
          <span className="text-sm text-white/60">Feb 2025 – May 2025</span>
        </div>
        <p className="text-purple-400 mb-3">Clinisys ERP, Sfax, Tunisia</p>
        <ul className="text-white/70 space-y-2">
          <li>• Developed an employee performance evaluation application.</li>
          <li>• Technologies used: React, Spring Boot, n8n, CI/CD, Docker, Jenkins, Kubernetes.</li>
        </ul>
      </div>

      {/* Summer Internship */}
      <div className="border-l-4 border-blue-400 pl-6">
        <div className="flex items-center gap-4 mb-2">
          <h3 className="text-xl font-semibold text-white">Intern Developer</h3>
          <span className="text-sm text-white/60">Jun 2024 – Jul 2024</span>
        </div>
        <p className="text-blue-400 mb-3">HTSOFT, Sfax, Tunisia</p>
        <ul className="text-white/70 space-y-2">
          <li>• Contributed to the development of a quality management web application for a client.</li>
          <li>• Improved internal processes related to quality control.</li>
          <li>• Technologies used: React, ASP.NET Core, MySQL.</li>
        </ul>
      </div>

      {/* PFA Internship */}
      <div className="border-l-4 border-green-400 pl-6">
        <div className="flex items-center gap-4 mb-2">
          <h3 className="text-xl font-semibold text-white">PFA Intern</h3>
          <span className="text-sm text-white/60">Feb 2024 – Mar 2024</span>
        </div>
        <p className="text-green-400 mb-3">REC-INOV, Sfax, Tunisia</p>
        <ul className="text-white/70 space-y-2">
          <li>• Developed a recruitment platform using artificial intelligence to optimize recruitment processes.</li>
          <li>• Technologies used: Machine Learning, React, Express.js, Node.js, MongoDB.</li>
        </ul>
      </div>

      {/* Introductory Internship */}
      <div className="border-l-4 border-pink-400 pl-6">
        <div className="flex items-center gap-4 mb-2">
          <h3 className="text-xl font-semibold text-white">Introductory Intern</h3>
          <span className="text-sm text-white/60">Jun 2023 – Jul 2023</span>
        </div>
        <p className="text-pink-400 mb-3">ASM, Sfax, Tunisia</p>
        <ul className="text-white/70 space-y-2">
          <li>• Built a medical appointment booking application.</li>
          <li>• Technologies used: Flutter, ASP.NET Core, SSMS.</li>
        </ul>
      </div>
    </div>
  )
}
,
    education: {
  title: 'Education',
  content: (
    <div className="space-y-8">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <div className="flex items-center gap-4 mb-4">
          <Award className="w-8 h-8 text-yellow-400" />
          <div>
            <h3 className="text-xl font-semibold text-white">
              Engineering Degree in Computer Science
            </h3>
            <p className="text-white/60">
              International Institute of Technology • 2022–2025
            </p>
          </div>
        </div>
        <p className="text-white/70">
          Program focused on software development, system architecture, and artificial intelligence.
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <div className="flex items-center gap-4 mb-4">
          <Award className="w-8 h-8 text-blue-400" />
          <div>
            <h3 className="text-xl font-semibold text-white">
              Preparatory Cycle in Physics and Chemistry
            </h3>
            <p className="text-white/60">
              Faculty of Sciences of Sfax • 2020–2022
            </p>
          </div>
        </div>
        <p className="text-white/70">
          Solid foundation in mathematics, physics, and chemistry with a focus on engineering studies.
        </p>
      </div>
    </div>
  )
}

  };
  return (
    
    <section >
      {/* Background Elements */}
       
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto mt-5">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Get to know more about my journey, experience, and passion for technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Info Card */}
          <div className="lg:col-span-1 ">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 sticky top-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <img src={myImage} alt="Profile" className="w-full h-full rounded-full rounded-t-none" />
                  
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{personalInfo.name}</h2>
                <p className="text-purple-400 mb-4">{personalInfo.title}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  {personalInfo.location}
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Mail className="w-5 h-5 text-purple-400" />
                  {personalInfo.email}
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Phone className="w-5 h-5 text-purple-400" />
                  {personalInfo.phone}
                </div>
              </div>

              

              <button onClick={() => downloadCV()} className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Download size={20} />
                Download CV
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex gap-4 mb-8 flex-wrap">
              {Object.entries(tabContent).map(([key, tab]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 min-h-[400px]">
              <h2 className="text-3xl font-bold text-white mb-6">
                {tabContent[activeTab].title}
              </h2>
              {tabContent[activeTab].content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;