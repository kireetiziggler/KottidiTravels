import React from 'react';
import { ShieldCheck, Clock, BadgePercent, HeartHandshake, Languages, Map } from 'lucide-react';

const features = [
  { 
    icon: ShieldCheck, 
    title: 'Safe & Verified', 
    desc: 'Police-verified professional drivers and daily sanitized, well-maintained vehicles.' 
  },
  { 
    icon: Clock, 
    title: 'On-Time Pickup', 
    desc: '24/7 service with guaranteed on-time arrivals at Tirupati Station & Airport.' 
  },
  { 
    icon: BadgePercent, 
    title: 'No Hidden Costs', 
    desc: 'Transparent pricing. Tolls and permits are clearly explained—no surprise charges.' 
  },
  { 
    icon: Languages, 
    title: 'Multi-Language', 
    desc: 'Our drivers speak Telugu, English, Hindi, and Tamil for a comfortable experience.' 
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="page-container px-4">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-orange font-bold uppercase text-xs tracking-[0.3em]">The Kottidi Advantage</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mt-3 leading-tight">
              Why <span className="text-brand-orange">Choose Us</span>?
            </h2>
          </div>
          <p className="text-gray-500 text-sm md:text-base max-w-sm border-l-2 border-orange-200 pl-6 hidden lg:block italic">
            "Your safety and spiritual comfort are our primary mission in every mile we drive."
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100"
            >
              <div className="inline-block bg-orange-50 p-4 rounded-2xl text-brand-orange mb-8 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-500">
                <feature.icon size={32} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Quick Trust Bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="flex items-center gap-2 font-black text-gray-400 text-[10px] tracking-widest">
             <HeartHandshake size={20} /> 5000+ TRIPS COMPLETED
           </div>
           <div className="flex items-center gap-2 font-black text-gray-400 text-[10px] tracking-widest">
             <Map size={20} /> ALL SOUTH INDIA PERMITS
           </div>
           <div className="flex items-center gap-2 font-black text-gray-400 text-[10px] tracking-widest">
             <ShieldCheck size={20} /> GOOGLE VERIFIED
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;