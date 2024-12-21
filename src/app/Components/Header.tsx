"use client"
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth Scroll effect for links
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Add offset to avoid header overlap
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-black text-white shadow-lg z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo on the Left */}
        <div className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
          Ahmed Portfolio
        </div>

        {/* Navigation Links in the Center */}
        <div className="hidden lg:flex items-center space-x-8 mx-auto">
          <a
            href="#home"
            className="text-white hover:text-blue-400"
            onClick={() => scrollToSection('home')}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-blue-400"
            onClick={() => scrollToSection('about')}
          >
            About
          </a>
          <a
            href="#skills"
            className="text-white hover:text-blue-400"
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white hover:text-blue-400"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover:text-blue-400"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </a>
        </div>

        {/* Buttons on the Right */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="mailto:ahmedmemon3344@gmail.com">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full"
            onClick={() => alert('Hiring button clicked!')}
          >
            Hire Me
          </button>
          </a>
          <a href="/my.pdf">
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full"
            onClick={() => alert('CV Download button clicked!')}
          >
            Visit My CV
          </button>
          </a>
        </div>
        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            {isOpen ? 'X' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible when isOpen is true) */}
      {isOpen && (
        <div className="lg:hidden bg-gradient-to-r from-blue-600 to-black text-white px-6 py-4 space-y-4">
          <a
            href="#home"
            className="block text-white hover:text-blue-400"
            onClick={() => {
              scrollToSection('home');
              setIsOpen(false); // Close menu after click
            }}
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-white hover:text-blue-400"
            onClick={() => {
              scrollToSection('about');
              setIsOpen(false);
            }}
          >
            About
          </a>
          <a
            href="#skills"
            className="block text-white hover:text-blue-400"
            onClick={() => {
              scrollToSection('skills');
              setIsOpen(false);
            }}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block text-white hover:text-blue-400"
            onClick={() => {
              scrollToSection('projects');
              setIsOpen(false);
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-white hover:text-blue-400"
            onClick={() => {
              scrollToSection('contact');
              setIsOpen(false);
            }}
          >
            Contact
          </a>

          {/* Buttons on Mobile */}
          <div className="mt-4 flex flex-col space-y-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full"
              onClick={() => {
                alert('Hiring button clicked!');
                setIsOpen(false); // Close menu after click
              }}
            >
              Hire Me
            </button>
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full"
              onClick={() => {
                alert('CV Download button clicked!');
                setIsOpen(false); // Close menu after click
              }}
            >
              Visit My CV
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
