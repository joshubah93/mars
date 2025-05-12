import React from 'react';
import Hero from '../components/home/Hero';
import PropertyTypeButtons from '../components/home/PropertyTypeButtons';
import FeaturedProperties from '../components/home/FeaturedProperties';
import LocationsSection from '../components/home/LocationsSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import GetInTouch from '../components/home/GetInTouch';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <PropertyTypeButtons />
      <FeaturedProperties />
      <LocationsSection />
      <WhyChooseUs />
      <Testimonials />
      <GetInTouch />
      <CallToAction />
    </div>
  );
};

export default HomePage;