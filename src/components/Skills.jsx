import React, { useState, useEffect } from 'react';
import { Database, Globe, Smartphone, Settings, } from 'lucide-react';
import Navbar from './Navbar';

// Skills Component
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [skillProgress, setSkillProgress] = useState({});

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: <Globe className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 90, description: 'Advanced component development, hooks, context API' },
        { name: 'Angular', level: 85, description: 'TypeScript, RxJS, Angular Material' },
        { name: 'JavaScript', level: 88, description: 'ES6+, async/await, DOM manipulation' },
        { name: 'TypeScript', level: 82, description: 'Type safety, interfaces, generics' },
        { name: 'HTML/CSS', level: 92, description: 'Semantic HTML, Flexbox, Grid, animations' },
        { name: 'Tailwind CSS', level: 87, description: 'Utility-first CSS, responsive design' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: <Database className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Spring Boot', level: 88, description: 'RESTful APIs, JPA, Spring Security' },
        { name: '.NET Core', level: 85, description: 'Web APIs, Entity Framework, LINQ' },
        { name: 'Node.js', level: 80, description: 'Express.js, middleware, authentication' },
        { name: 'Java', level: 87, description: 'OOP, collections, multithreading' },
        { name: 'C#', level: 83, description: 'LINQ, async/await, dependency injection' },
      ]
    },
    database: {
      title: 'Database & Tools',
      icon: <Settings className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MySQL', level: 85, description: 'Query optimization, stored procedures' },
        { name: 'SSMS', level: 82, description: 'Database management, query execution, performance tuning with SQL Server' },
        { name: 'MongoDB', level: 78, description: 'Document-based design, aggregation' },
        { name: 'Git', level: 90, description: 'Version control, branching, collaboration' },
        ]
        
    },
    ci_cd: {
  title: 'CI/CD & DevOps',
  icon: <Settings className="w-6 h-6" />,
  color: 'from-yellow-500 to-orange-500',
  skills: [
    { name: 'Jenkins', level: 70, description: 'CI/CD pipelines, build automation, Docker integration' },
    { name: 'GitLab CI/CD', level: 70, description: 'Pipeline configuration, deployment workflows, automation' },
    { name: 'Docker', level: 75, description: 'Containerization, image building, deployment' }
  ]
},

    mobile: {
      title: 'Mobile Development',
      icon: <Smartphone className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Flutter', level: 75, description: 'Dart, widgets, state management' },
      ]
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const newProgress = {};
      skillCategories[activeCategory].skills.forEach(skill => {
        newProgress[skill.name] = skill.level;
      });
      setSkillProgress(newProgress);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto m-5">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Comprehensive technical skills across the full development stack
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category.icon}
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {skill.name}
                </h3>
                <span className="text-lg font-bold text-white/80">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-white/10 rounded-full h-3 mb-4 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skillProgress[skill.name] || 0}%` }}
                ></div>
              </div>

              <p className="text-white/60 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Skills };