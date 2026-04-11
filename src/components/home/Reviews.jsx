import React, { useEffect } from 'react';

const Reviews = () => {
  useEffect(() => {
    // This loads the Google Reviews script automatically
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js"; // or your specific provider link
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="page-container px-4">
        <div className="text-center mb-10">
        </div>
        <div class="elfsight-app-47774371-6fb2-4c20-a88c-1f6626449156" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default Reviews;