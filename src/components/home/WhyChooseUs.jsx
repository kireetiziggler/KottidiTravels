import React from 'react';
import { Shield, Clock, Award, HeartHandshake } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Safe & Secure', desc: 'Verified professional drivers and well-maintained vehicles for your peace of mind.' },
  { icon: Clock, title: 'Punctual Service', desc: 'We value your time. Guaranteed on-time pickups and efficient route planning.' },
  { icon: Award, title: 'Best Price Guarantee', desc: 'Competitive and transparent pricing with no hidden charges.' },
  { icon: HeartHandshake, title: 'Customer Focus', desc: '24/7 support and personalized attention to ensure a smooth journey.' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-brand-bg">
      <div className="page-container">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold uppercase tracking-wider">Our Promise</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Why Choose Kottidi Travels?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-card text-center hover:-translate-y-2 transition duration-300">
              <div className="inline-block bg-orange-100 p-5 rounded-2xl text-brand-orange mb-6">
                <feature.icon size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;