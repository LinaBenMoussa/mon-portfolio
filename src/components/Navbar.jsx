import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'certifications', path: '#certifications' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-white/5 border-b border-white/10">
      <div className="flex justify-between items-center p-6">
        <div className="text-white font-bold text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Portfolio.
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="text-white/80 hover:text-white cursor-pointer transition-all duration-300 hover:scale-105 relative group"
            >
              {item.name}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white/80 hover:text-white transition-colors duration-300 p-1"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full backdrop-blur-sm bg-violet-500 border-b border-white/10 transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="p-6 space-y-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              onClick={handleNavClick}
              className="block text-white/80 hover:text-white cursor-pointer transition-all duration-300 hover:translate-x-2 relative group"
            >
              {item.name}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-8 transition-all duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;