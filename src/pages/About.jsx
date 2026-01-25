import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      <div className="bg-brand-dark py-16 text-center text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="page-container relative z-10">
            <h1 className="text-4xl font-bold mb-3">About Us</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Your reliable partner for divine journeys in Tirupati.</p>
         </div>
      </div>

      <div className="page-container py-16 space-y-20">
        <section className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img 
                src="/images/story.jpg" 
                alt="Journey" 
                className="rounded-[2rem] shadow-xl hover:rotate-0 transition duration-500"
                onError={(e) => {e.target.src = 'https://placehold.co/800x600?text=About+Us'}}
            />
          </div>
          <div className="flex-1 space-y-5">
            <span className="text-brand-orange font-bold uppercase tracking-wider text-sm">Our Story</span>
            <h2 className="text-3xl font-bold text-gray-900">A Journey of Faith & Service</h2>
            <p className="text-gray-600 leading-relaxed">
              Kottidi Travels was founded with a simple mission: to make pilgrimage journeys to Tirumala and surrounding temples as comfortable, safe, and hassle-free as possible.
            </p>
          </div>
        </section>

        {/* ... rest of the About page code remains same ... */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-brand-bg p-8 rounded-3xl border border-orange-100 flex gap-5 items-start">
            <div className="bg-brand-orange p-3 rounded-xl text-white shrink-0"><Eye size={24}/></div>
            <div>
               <h3 className="text-xl font-bold mb-3">Our Vision</h3>
               <p className="text-gray-600 leading-relaxed text-sm">To be the most preferred and respected travel service provider for pilgrimages in South India.</p>
            </div>
          </div>
           <div className="bg-brand-bg p-8 rounded-3xl border border-orange-100 flex gap-5 items-start">
             <div className="bg-brand-orange p-3 rounded-xl text-white shrink-0"><Target size={24}/></div>
             <div>
               <h3 className="text-xl font-bold mb-3">What We Offer</h3>
               <ul className="text-gray-600 leading-relaxed text-sm space-y-1 list-disc list-inside">
                 <li>Well-maintained AC vehicles</li>
                 <li>Experienced & polite drivers</li>
                 <li>Customizable tour packages</li>
                 <li>Transparent pricing</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="bg-brand-orange rounded-[2.5rem] p-10 text-center text-white relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Divine Journey?</h2>
            <Link to="/contact" className="inline-block bg-white text-brand-orange font-bold px-10 py-4 rounded-full shadow-lg hover:bg-gray-50 transition transform hover:scale-105">
              Contact Us Today
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;