import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroSlides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    title: 'Find Your Dream Property',
    subtitle: 'Luxurious homes and prime land across Nigeria',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    title: 'Premium Real Estate',
    subtitle: 'Exclusive properties in the most sought-after locations',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
    title: 'Invest in Your Future',
    subtitle: 'Secure investment opportunities with exceptional returns',
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div className="h-full w-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transform transition-transform duration-700 opacity-0 translate-y-8 animate-fadeUp">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl transform transition-transform duration-700 delay-300 opacity-0 translate-y-8 animate-fadeUp">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4 transform transition-transform duration-700 delay-500 opacity-0 translate-y-8 animate-fadeUp">
                <Link
                  to="/properties"
                  className="bg-[#D4AF37] hover:bg-[#b89425] text-black px-8 py-3 rounded font-semibold transition-colors"
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
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full z-30 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full z-30 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-[#D4AF37]' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;