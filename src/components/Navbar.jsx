import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('demo');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const NavLink = ({ href, label, isButton = false }) => {
    const isActive = activeSection === href.replace('#', '');
    const baseClasses = isButton 
      ? "px-6 py-2.5 text-sm font-medium rounded-full shadow-sm transition-all duration-200"
      : "relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md";
      
    const activeClasses = isButton
      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
      : `${isActive ? 'text-blue-600' : 'text-gray-700'} hover:bg-blue-50/50`;

    return (
      <a
        href={href}
        onClick={() => setMobileMenuOpen(false)}
        className={`${baseClasses} ${activeClasses}`}
      >
        {label}
        {!isButton && isActive && (
          <span className="absolute bottom-0 left-1/2 w-12 h-0.5 bg-blue-500 transform -translate-x-1/2"></span>
        )}
      </a>
    );
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm' 
        : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="group">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
              GymBro
            </span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-2">
          <NavLink href="#demo" label="Demo" />
          <NavLink href="#features" label="Features" />
          <div className="w-px h-5 bg-gray-200 mx-1"></div>
          <NavLink href="#waitlist" label="Join Waitlist" isButton={true} />
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="p-2 rounded-md hover:bg-blue-50 text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-60 py-4 border-t border-gray-100' : 'max-h-0 overflow-hidden py-0 border-none'
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col space-y-3">
          <NavLink href="#demo" label="Demo" />
          <NavLink href="#features" label="Features" />
          <NavLink href="#waitlist" label="Join Waitlist" isButton={true} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 