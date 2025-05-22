import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('demo');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['demo', 'features', 'waitlist'];
      
      // Check if page is scrolled
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-10 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-sm' 
        : 'bg-white shadow-sm'
    }`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            GymBro
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a 
            href="#features" 
            className={`text-gray-700 hover:text-blue-500 font-medium px-2 py-1 relative ${
              activeSection === 'features' ? 'text-blue-500' : ''
            }`}
          >
            Features
            {activeSection === 'features' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"></span>
            )}
          </a>
          <a 
            href="#demo" 
            className={`text-gray-700 hover:text-blue-500 font-medium px-2 py-1 relative ${
              activeSection === 'demo' ? 'text-blue-500' : ''
            }`}
          >
            Demo
            {activeSection === 'demo' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full"></span>
            )}
          </a>
          <a 
            href="#waitlist" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-medium transition-colors flex items-center h-9"
          >
            Join Waitlist
          </a>
        </div>
        
        <div className="md:hidden flex items-center">
          <button className="text-gray-500 hover:text-gray-700 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 