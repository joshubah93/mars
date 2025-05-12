import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.location}</p>
          </div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i}
              size={16}
              className={i < testimonial.rating ? "text-[#D4AF37] fill-[#D4AF37]" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700">"{testimonial.comment}"</p>
    </div>
  );
};

export default TestimonialCard;