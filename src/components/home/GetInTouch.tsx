import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import ContactForm from '../common/ContactForm';

const GetInTouch: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Whether you're looking to buy, sell, or just have questions about our properties,
              our team is here to help you every step of the way.
            </p>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex">
                  <div className="bg-[#F8F3E2] rounded-full p-3 mr-4">
                    <Calendar size={24} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Schedule a Property Viewing</h3>
                    <p className="text-gray-600 mb-4">
                      Book a private tour of any of our properties at your convenience.
                    </p>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-black font-medium hover:text-[#D4AF37] transition-colors"
                    >
                      Book Now
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex">
                  <div className="bg-[#F8F3E2] rounded-full p-3 mr-4">
                    <Phone size={24} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Speak to a Real Estate Advisor</h3>
                    <p className="text-gray-600 mb-4">
                      Have questions? Our expert advisors are available to help.
                    </p>
                    <a 
                      href="tel:+2348000000000" 
                      className="inline-flex items-center text-black font-medium hover:text-[#D4AF37] transition-colors"
                    >
                      Call Us Now
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;