import React from 'react';
import Hero from '../components/home/Hero';
import Fleet from '../components/home/Fleet';
import Packages from '../components/home/Packages';
import CustomizedBanner from '../components/home/CustomizedBanner';
import Destinations from '../components/home/Destinations';
import WhyChooseUs from '../components/home/WhyChooseUs';

const Home = () => {
  return (
    <>
      <Hero />
      <Fleet />
      <Packages />
      <CustomizedBanner />
      <Destinations />
      <WhyChooseUs />
    </>
  );
};

export default Home;