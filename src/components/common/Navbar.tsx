import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black text-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className={`text-2xl font-bold flex items-center ${
              isScrolled ? 'text-white' : 'text-black'
            }`}
          >
            <span className="text-[#B8860B]">Luxury</span>
            <span className="ml-1">Estates</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`relative group ${isScrolled ? 'text-white' : 'text-black'}`}
            >
              <span className="hover:text-[#B8860B] transition-colors">Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B8860B] transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              to="/properties" 
              className={`relative group ${isScrolled ? 'text-white' : 'text-black'}`}
            >
              <span className="hover:text-[#B8860B] transition-colors">Properties</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B8860B] transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              to="/about" 
              className={`relative group ${isScrolled ? 'text-white' : 'text-black'}`}
            >
              <span className="hover:text-[#B8860B] transition-colors">About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B8860B] transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              to="/contact" 
              className={`relative group ${isScrolled ? 'text-white' : 'text-black'}`}
            >
              <span className="hover:text-[#B8860B] transition-colors">Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B8860B] transition-all group-hover:w-full"></span>
            </Link>
            
            <div className="flex items-center space-x-3 ml-4">
              <a href="https://instagram.com" className={`${isScrolled ? 'text-white' : 'text-black'} hover:text-[#B8860B] transition-colors`}>
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" className={`${isScrolled ? 'text-white' : 'text-black'} hover:text-[#B8860B] transition-colors`}>
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" className={`${isScrolled ? 'text-white' : 'text-black'} hover:text-[#B8860B] transition-colors`}>
                <Twitter size={18} />
              </a>
            </div>
            
            <a 
              href="tel:+2348000000000" 
              className="bg-[#B8860B] text-white px-4 py-2 rounded flex items-center hover:bg-black transition-colors"
            >
              <Phone size={16} className="mr-2" />
              Call Now
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-white' : 'text-black'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`${isScrolled ? 'text-white' : 'text-black'} hover:text-[#B8860B] transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/properties" 
                className={`${isScrolled ? 'text-white' : 'text-black'} hover:text-[#B8860B] transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                Properties
              </Link>
              <Link 
                to="/about" 
                className={`${isScrolled ? 'text-white' : 'text-black'} hover:text-[#B8860B] transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`${isScrolled ? 'text-white' : 'text-black'} hover:text-[#B8860B] transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              <div className="flex items-center space-x-4 pt-2">
                <a href="https://instagram.com" className={`${isScrolled ? 'text-white' : 'text-black'} hover:text-[#B8860B] transition-colors`}>
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com" className={`${isScrolled ? 'text-white' : 'text-black'} hover:text-[#B8860B] transition-colors`}>
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com" className={`${isScrolled ? 'text-white' : 'text-black'} hover:text-[#B8860B] transition-colors`}>
                  <Twitter size={20} />
                </a>
              </div>
              
              <a 
                href="tel:+2348000000000" 
                className="bg-[#B8860B] text-white px-4 py-2 rounded flex items-center justify-center hover:bg-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={16} className="mr-2" />
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;