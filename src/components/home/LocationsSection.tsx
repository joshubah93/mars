import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const locations = [
  {
    id: 1,
    name: 'Lagos',
    image: 'https://images.pexels.com/photos/2041556/pexels-photo-2041556.jpeg',
    propertyCount: 32,
  },
  {
    id: 2,
    name: 'Abuja',
    image: 'https://images.pexels.com/photos/1031593/pexels-photo-1031593.jpeg',
    propertyCount: 24,
  },
  {
    id: 3,
    name: 'Port Harcourt',
    image: 'https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg',
    propertyCount: 18,
  },
  {
    id: 4,
    name: 'Enugu',
    image: 'https://images.pexels.com/photos/2249960/pexels-photo-2249960.jpeg',
    propertyCount: 15,
  },
];

const LocationsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">Explore By Location</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover premium properties in Nigeria's most prestigious locations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location) => (
            <Link 
              key={location.id}
              to={`/properties?location=${location.name}`}
              className="group relative rounded-lg overflow-hidden h-80 shadow-md"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors z-10"></div>
              <img 
                src={location.image} 
                alt={location.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                <h3 className="text-xl font-semibold flex items-center mb-2">
                  <MapPin size={18} className="mr-2 text-[#D4AF37]" />
                  {location.name}
                </h3>
                <p className="text-sm text-gray-200">
                  {location.propertyCount} Properties
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;