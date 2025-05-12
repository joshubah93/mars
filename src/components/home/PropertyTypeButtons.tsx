import React from 'react';
import { Link } from 'react-router-dom';
import { Home, MapPin } from 'lucide-react';

const PropertyTypeButtons: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Are You Looking For?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link
            to="/properties?type=land"
            className="group bg-white hover:bg-[#B8860B] border-2 border-black rounded-lg p-8 transition-all duration-300 flex flex-col items-center"
          >
            <div className="bg-[#F8F3E2] group-hover:bg-white rounded-full p-5 mb-4 transition-colors">
              <MapPin size={48} className="text-black group-hover:text-[#B8860B]" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-white transition-colors">Land</h3>
            <p className="text-gray-600 text-center group-hover:text-white transition-colors h-12 mb-6">
              Premium land in prime locations for development.
            </p>
            <div className="bg-black text-white group-hover:bg-white group-hover:text-[#B8860B] px-8 py-2 rounded transition-colors w-36 text-center">
              Explore Land
            </div>
          </Link>
          
          <Link
            to="/properties?type=houses"
            className="group bg-white hover:bg-[#B8860B] border-2 border-black rounded-lg p-8 transition-all duration-300 flex flex-col items-center"
          >
            <div className="bg-[#F8F3E2] group-hover:bg-white rounded-full p-5 mb-4 transition-colors">
              <Home size={48} className="text-black group-hover:text-[#B8860B]" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-white transition-colors">Houses</h3>
            <p className="text-gray-600 text-center group-hover:text-white transition-colors h-12 mb-6">
              Luxurious houses in desirable neighborhoods.
            </p>
            <div className="bg-black text-white group-hover:bg-white group-hover:text-[#B8860B] px-8 py-2 rounded transition-colors w-36 text-center">
              View Houses
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PropertyTypeButtons;