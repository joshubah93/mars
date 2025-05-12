import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Discover premium properties in Nigeria's most prestigious locations. 
          Our team is ready to help you find the perfect home or investment opportunity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/properties"
            className="bg-[#D4AF37] hover:bg-white text-black px-8 py-3 rounded font-semibold transition-colors"
          >
            Explore Properties
          </Link>
          <Link
            to="#contact"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;