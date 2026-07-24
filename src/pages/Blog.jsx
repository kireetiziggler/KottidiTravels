import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Tirumala Darshan Guide 2026: How to Book Tickets & Plan Your Visit',
    excerpt: 'Complete guide to Tirumala Tirupati Devasthanams (TTD) darshan ticket booking, including special entry, VIP darshan, and online slot booking tips.',
    image: '/images/tirumala.webp',
    date: 'July 20, 2026',
    readTime: '8 min read',
    category: 'Travel Guide',
    slug: 'tirumala-darshan-guide-2026'
  },
  {
    id: 2,
    title: 'Tirupati to Chennai Taxi Fare: Complete Price Guide 2026',
    excerpt: 'Updated taxi fare from Tirupati to Chennai. Compare Innova, Dzire, and Tempo Traveller prices. Distance, travel time, and best routes explained.',
    image: '/images/chennai.jpg',
    date: 'July 15, 2026',
    readTime: '6 min read',
    category: 'Fares & Pricing',
    slug: 'tirupati-to-chennai-taxi-fare'
  },
  {
    id: 3,
    title: 'Top 10 Temples Near Tirupati You Must Visit',
    excerpt: 'Explore the most sacred temples near Tirupati including Srikalahasti, Kanipakam, Tiruvannamalai, and more. Perfect for a spiritual road trip.',
    image: '/images/srikalahasti.webp',
    date: 'July 10, 2026',
    readTime: '6 min read',
    category: 'Destinations',
    slug: 'top-10-temples-near-tirupati'
  },
  {
    id: 4,
    title: 'How to Reach Tirumala from Bangalore: Best Routes & Travel Options',
    excerpt: 'Planning a trip from Bangalore to Tirumala? Compare bus, train, and taxi options. Find the most comfortable and affordable way to reach Tirupati.',
    image: '/images/Tirumala_home2.webp',
    date: 'July 5, 2026',
    readTime: '5 min read',
    category: 'Travel Guide',
    slug: 'bangalore-to-tirumala-travel-guide'
  },
  {
    id: 5,
    title: 'Tempo Traveller Hire in Tirupati: Group Travel Guide & Prices',
    excerpt: 'Everything about Tempo Traveller rental in Tirupati for group pilgrimages. Capacity, pricing, booking tips, and popular group tour packages.',
    image: '/images/tempo.jpg',
    date: 'June 28, 2026',
    readTime: '4 min read',
    category: 'Vehicle Guide',
    slug: 'tempo-traveller-hire-tirupati'
  },
  {
    id: 6,
    title: 'Best Time to Visit Tirumala: Seasonal Guide for Pilgrims',
    excerpt: 'Learn about the best seasons, weather conditions, and crowd patterns for visiting Tirumala. Plan your pilgrimage for the most comfortable experience.',
    image: '/images/tirumala.webp',
    date: 'June 20, 2026',
    readTime: '3 min read',
    category: 'Travel Guide',
    slug: 'best-time-to-visit-tirumala'
  },
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Kottidi Travels Tirupati | Travel Tips & Guides</title>
        <meta name="description" content="Read expert travel guides, tips, and insights about Tirupati, Tirumala darshan, temple tours, and car rental services in South India." />
        <link rel="canonical" href="https://kottiditravelstirupati.in/blog" />
      </Helmet>

      <div className="bg-white pt-20 pb-20 min-h-screen">
        {/* Hero Header */}
        <div className="bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark py-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="page-container relative z-10">
            <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs">Travel Guides & Tips</span>
            <h1 className="text-4xl md:text-5xl font-black mt-4 mb-4">Kottidi Travels Blog</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
              Expert travel guides, tips, and insights for your spiritual journey across South India.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="page-container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const postUrl = `/blog/${post.slug}`;
              return (
                <article 
                  key={post.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group"
                >
                  <Link to={postUrl} className="block h-52 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      loading="lazy"
                      onError={(e) => {e.target.src = 'https://placehold.co/600x400?text=Kottidi+Travels'}}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-brand-orange text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-[10px] text-gray-400 font-medium mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-brand-orange" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} className="text-brand-orange" /> {post.readTime}
                      </span>
                    </div>
                    <Link to={postUrl}>
                      <h3 className="text-base font-bold text-gray-900 mb-3 leading-relaxed line-clamp-2 group-hover:text-brand-orange transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-500 leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link 
                      to={postUrl}
                      className="inline-flex items-center gap-2 text-brand-orange font-bold text-xs group/link"
                    >
                      Read More <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Newsletter CTA */}
          <div className="max-w-2xl mx-auto mt-16 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 md:p-10 text-center border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Get Travel Tips in Your Inbox</h3>
            <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
              Subscribe to receive the latest travel guides, tips, and exclusive offers from Kottidi Travels.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-5 py-3.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-brand-orange transition"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3.5 bg-brand-orange text-white font-bold rounded-xl shadow-lg hover:bg-orange-600 transition text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;