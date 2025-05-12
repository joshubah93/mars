import React from 'react';
import { Shield, Users, Award, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Luxury Estates</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Nigeria's premier luxury real estate company, delivering exceptional properties and unmatched service since 2010.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional real estate solutions that exceed our clients' expectations, 
                delivering premium properties while maintaining the highest standards of professionalism 
                and integrity in all our dealings.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and respected luxury real estate company in Nigeria, 
                known for our commitment to excellence, innovation, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Shield size={40} className="text-[#B8860B] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with the highest standards of professional ethics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users size={40} className="text-[#B8860B] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Client Focus</h3>
              <p className="text-gray-600">
                Our clients' satisfaction is at the heart of everything we do.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Award size={40} className="text-[#B8860B] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Clock size={40} className="text-[#B8860B] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-600">
                We deliver on our promises and value our clients' time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you discover the perfect property that matches your lifestyle and investment goals.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#B8860B] text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-[#B8860B] transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;