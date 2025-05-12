import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/common/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-black text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Get in touch with our team of real estate experts. We're here to help you find your perfect property.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="text-[#B8860B] mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      123 Victoria Island<br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone size={24} className="text-[#B8860B] mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      <a href="tel:+2348000000000" className="hover:text-[#B8860B] transition-colors">
                        +234 800 000 0000
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail size={24} className="text-[#B8860B] mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@luxuryestates.ng" className="hover:text-[#B8860B] transition-colors">
                        info@luxuryestates.ng
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock size={24} className="text-[#B8860B] mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 h-[300px] rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46230061668!2d3.1159001391870973!3d6.548055301675105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1695041178762!5m2!1sen!2sng"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%)' }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>

            <div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;