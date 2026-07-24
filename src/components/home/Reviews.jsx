import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check if Elfsight script already exists
    if (!document.querySelector('script[src*="elfsight"]')) {
      const script = document.createElement('script');
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      script.onload = () => setLoaded(true);
      document.body.appendChild(script);
    } else {
      setLoaded(true);
    }
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="page-container px-4">
        <div className="text-center mb-10">
          <span className="text-brand-orange font-bold uppercase text-[10px] tracking-[0.2em]">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">What Our Customers Say</h2>
          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
            Trusted by thousands of pilgrims and travelers across South India.
          </p>
        </div>

        {!loaded && (
          <div className="flex justify-center items-center py-12">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs text-gray-400 font-medium">Loading reviews...</p>
            </div>
          </div>
        )}

        <div className={`elfsight-app-47774371-6fb2-4c20-a88c-1f6626449156 ${loaded ? '' : 'hidden'}`} data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default Reviews;