import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold flex items-center mb-4">
              <span className="text-[#D4AF37]">Luxury</span>
              <span className="ml-1">Estates</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Providing premium real estate solutions with a focus on luxury properties
              across Nigeria's most prestigious locations.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-white hover:text-[#D4AF37] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-white hover:text-[#D4AF37] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-[#D4AF37] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" className="text-white hover:text-[#D4AF37] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/properties?type=land" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Land
                </Link>
              </li>
              <li>
                <Link to="/properties?type=houses" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Houses
                </Link>
              </li>
              <li>
                <Link to="#about" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#contact" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">Locations</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Lagos</li>
              <li className="text-gray-300">Abuja</li>
              <li className="text-gray-300">Port Harcourt</li>
              <li className="text-gray-300">Enugu</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-[#D4AF37]" />
                <span className="text-gray-300">
                  123 Victoria Island, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-[#D4AF37]" />
                <a href="tel:+2348000000000" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  +234 800 000 0000
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-[#D4AF37]" />
                <a href="mailto:info@luxuryestates.ng" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  info@luxuryestates.ng
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Luxury Estates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;