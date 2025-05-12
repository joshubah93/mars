import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { ChevronLeft, ChevronRight, MapPin, Calendar, ArrowRight, Check, X } from 'lucide-react';
import ContactForm from '../components/common/ContactForm';

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [property, setProperty] = useState(properties.find(p => p.id === Number(id)));
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setProperty(properties.find(p => p.id === Number(id)));
  }, [id]);
  
  if (!property) {
    return (
      <div className="pt-24 pb-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
        <p className="mb-6">The property you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/properties"
          className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-[#D4AF37] transition-colors"
        >
          Browse Properties
        </Link>
      </div>
    );
  }
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === property.images.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
  };
  
  const propertyFeatures = [
    { id: 'certificate', name: 'Certificate of Occupancy', available: property.features?.includes('certificate') },
    { id: 'water', name: 'Constant Water Supply', available: property.features?.includes('water') },
    { id: 'electricity', name: 'Electricity', available: property.features?.includes('electricity') },
    { id: 'eco', name: 'Eco-friendly', available: property.features?.includes('eco') },
  ];
  
  const similarProperties = properties
    .filter(p => p.type === property.type && p.id !== property.id)
    .slice(0, 3);
  
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Property Images Slider */}
      <div className="relative h-[50vh] md:h-[70vh] bg-black">
        <div className="h-full w-full">
          {property.images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`${property.title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2 rounded-full z-10 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2 rounded-full z-10 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Image indicator dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {property.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-[#D4AF37]' : 'bg-white/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pb-16 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Property Details */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex flex-wrap items-center justify-between mb-2">
                <div className="flex items-center text-gray-600">
                  <MapPin size={16} className="mr-1" />
                  <span>{property.location}</span>
                </div>
                <div className="bg-black text-white px-3 py-1 rounded-sm text-sm">
                  For Sale
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              <div className="text-2xl font-bold text-[#D4AF37] mb-4">
                ₦{property.price.toLocaleString()}
              </div>
              <p className="text-gray-600 mb-6">{property.description}</p>
            </div>
            
            {/* Property Features */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Property Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {propertyFeatures.map((feature) => (
                  <div 
                    key={feature.id}
                    className="flex items-center p-3 border rounded border-gray-200"
                  >
                    {feature.available ? (
                      <Check size={18} className="text-green-500 mr-3" />
                    ) : (
                      <X size={18} className="text-red-500 mr-3" />
                    )}
                    <span className={feature.available ? 'text-gray-800' : 'text-gray-500'}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Property Location Map */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Location</h2>
              <div className="bg-gray-200 h-[300px] rounded-lg flex items-center justify-center">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46230061668!2d3.1159001391870973!3d6.548055301675105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1695041178762!5m2!1sen!2sng"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%)' }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Property Location"
                ></iframe>
              </div>
            </div>
            
            {/* Similar Properties */}
            {similarProperties.length > 0 && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Similar Properties</h2>
                  <Link
                    to="/properties"
                    className="text-black hover:text-[#D4AF37] flex items-center transition-colors"
                  >
                    View All
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                  {similarProperties.map((p) => (
                    <Link key={p.id} to={`/properties/${p.id}`} className="group">
                      <div className="bg-white rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                        <div className="relative h-48">
                          <img 
                            src={p.images[0]} 
                            alt={p.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold group-hover:text-[#D4AF37] transition-colors">{p.title}</h3>
                          <div className="flex justify-between items-center mt-2">
                            <div className="text-gray-600 text-sm">{p.location}</div>
                            <div className="font-bold">₦{p.price.toLocaleString()}</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Interested in this property?</h3>
              <ContactForm />
            </div>
            
            {/* Schedule Viewing */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Schedule a Viewing</h3>
              <div className="flex items-start mb-4">
                <Calendar size={20} className="text-[#D4AF37] mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Book a Tour</h4>
                  <p className="text-sm text-gray-600">
                    Visit this property in person and explore all its features
                  </p>
                </div>
              </div>
              <a
                href="#"
                className="block w-full text-center bg-black hover:bg-[#D4AF37] text-white py-3 rounded transition-colors"
              >
                Schedule Now
              </a>
            </div>
            
            {/* Property Overview */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Property Overview</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Property ID:</span>
                  <span className="font-medium">{property.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Property Type:</span>
                  <span className="font-medium">{property.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-medium">For Sale</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">{property.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Size:</span>
                  <span className="font-medium">{property.size || 'N/A'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;