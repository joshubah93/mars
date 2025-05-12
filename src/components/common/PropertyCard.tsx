import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Bed, Bath, Maximize2 } from 'lucide-react';
import { Property } from '../../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:scale-105">
      <div className="relative overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={property.title}
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-black text-white text-sm font-semibold px-3 py-1 rounded">
          For Sale
        </div>
        {property.featured && (
          <div className="absolute top-4 right-4 bg-[#B8860B] text-white text-sm font-semibold px-3 py-1 rounded">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin size={14} className="mr-1" />
          <span>{property.location}</span>
        </div>
        
        <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
        
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {property.description.length > 120 
            ? `${property.description.substring(0, 120)}...` 
            : property.description
          }
        </p>
        
        <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Bed size={16} className="mr-1" />
            <span>{property.beds || 'N/A'} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath size={16} className="mr-1" />
            <span>{property.baths || 'N/A'} Baths</span>
          </div>
          <div className="flex items-center">
            <Maximize2 size={16} className="mr-1" />
            <span>{property.size || 'N/A'}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center border-t pt-4">
          <div className="text-lg font-bold text-black">
            ₦{property.price.toLocaleString()}
          </div>
          <Link 
            to={`/properties/${property.id}`}
            className="flex items-center text-[#B8860B] hover:text-black transition-colors"
          >
            View Details
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;