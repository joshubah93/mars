import React from 'react';
import { Award, Clock, Shield, Users } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Award size={36} className="text-[#D4AF37]" />,
    title: 'Premium Properties',
    description: 'We offer only the highest quality properties that meet our strict standards for luxury and value.',
  },
  {
    id: 2,
    icon: <Shield size={36} className="text-[#D4AF37]" />,
    title: 'Secure Investments',
    description: 'All our properties have clear titles and proper documentation to secure your investment.',
  },
  {
    id: 3,
    icon: <Users size={36} className="text-[#D4AF37]" />,
    title: 'Expert Advisors',
    description: 'Our team of experienced real estate professionals provide personalized guidance and support.',
  },
  {
    id: 4,
    icon: <Clock size={36} className="text-[#D4AF37]" />,
    title: 'Timely Delivery',
    description: 'We ensure all property transactions and developments are completed on schedule.',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With years of experience in Nigeria's real estate market, we provide exceptional service and premium properties
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center bg-white p-3 rounded-full mb-4 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-black hover:bg-[#D4AF37] text-white font-medium px-8 py-3 rounded transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;