import React from 'react';
import { Link } from 'react-router-dom';

const CustomizedBanner = () => {
  return (
    <section className="py-16 bg-white">
      <div className="page-container">
        {/* Rounded Container, Centered, Smaller Width */}
        <div className="bg-brand-orange rounded-[3rem] p-10 md:p-12 relative overflow-hidden shadow-2xl max-w-5xl mx-auto">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
                Need a Custom Package?
              </h2>
              <p className="text-base md:text-lg text-orange-100 leading-relaxed">
                We can create a personalized itinerary based on your requirements and group size.
              </p>
            </div>
            <div className="shrink-0">
              <Link to="/contact" className="inline-block bg-white text-brand-orange font-bold text-base md:text-lg px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105">
                Contact Us for Custom Package
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomizedBanner;