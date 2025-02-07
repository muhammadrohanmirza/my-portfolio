
// 'use client'

// import React from 'react'
// import { useState, useEffect } from 'react';

// const Header = () => {

//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//       const handleScroll = () => {
//         setIsScrolled(window.scrollY > 20);
//       };
//       window.addEventListener('scroll', handleScroll);
//       return () => window.removeEventListener('scroll', handleScroll);
//     }, []);
//   return (
//     <>
//     {/* Navigation */}
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20">
//           <div className="flex items-center">
//             <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
//               John.dev
//             </span>
//           </div>
//           <div className="flex items-center space-x-8">
//             <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
//             <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
//             <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
//             <a href="#contact" 
//                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-all transform hover:scale-105">
//               Contact Me
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//     </>
//   )
// }

// export default Header

'use client'
 // At the top of your file, add this import
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Download, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Replace the existing navigation with this new responsive version
  return (
    <>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Rohan.Dev
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex text-white items-center space-x-8">
              <a href="#about" className="hover:text-blue-400  transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#contact" 
                 className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-all transform hover:scale-105">
                Contact Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden text-white transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0 h-64' 
              : 'opacity-0 -translate-y-4 h-0'
          } overflow-hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md rounded-lg mb-4">
              <a
                href="#about"
                onClick={handleNavClick}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={handleNavClick}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                onClick={handleNavClick}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="block px-3 py-2 rounded-md text-base font-medium bg-blue-500 hover:bg-blue-600 text-center transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      </>
  );
}