import React from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../common/PropertyCard';
import { ArrowRight } from 'lucide-react';
import { featuredProperties } from '../../data/properties';

const FeaturedProperties: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our handpicked selection of premium properties across Nigeria
            </p>
          </div>
          <Link 
            to="/properties" 
            className="flex items-center mt-4 md:mt-0 text-black hover:text-[#D4AF37] transition-colors"
          >
            View All Properties
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;