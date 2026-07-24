import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Phone } from 'lucide-react';

const BlogArticle = () => {
  return (
    <>
      <Helmet>
        <title>Tirumala Darshan Guide 2026: Book Tickets, Timings & Tips | Kottidi Travels</title>
        <meta name="description" content="Complete guide to Tirumala Tirupati darshan 2026. Learn how to book darshan tickets online, VIP darshan, special entry, timings, and travel tips from Kottidi Travels." />
        <meta name="keywords" content="Tirumala darshan guide 2026, Tirupati darshan ticket booking, Tirumala VIP darshan, TTD online booking, Tirumala timings, how to reach Tirumala" />
        <link rel="canonical" href="https://kottiditravelstirupati.in/blog/tirumala-darshan-guide-2026" />
        <meta property="og:title" content="Tirumala Darshan Guide 2026: Book Tickets, Timings & Tips" />
        <meta property="og:description" content="Complete guide to Tirumala Tirupati darshan 2026. Book tickets online with ease." />
      </Helmet>

      <div className="bg-white pt-20 pb-20">
        <article className="page-container max-w-4xl mx-auto">
          {/* Back Link */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-orange text-sm mb-8 transition">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
              <span className="bg-brand-orange/10 text-brand-orange font-bold px-3 py-1 rounded-full">Travel Guide</span>
              <span className="flex items-center gap-1"><Calendar size={12} /> July 20, 2026</span>
              <span className="flex items-center gap-1"><Clock size={12} /> 8 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              Tirumala Darshan Guide 2026: Book Tickets, Timings & Travel Tips
            </h1>
          </div>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden mb-12 h-[400px]">
            <img src="/images/tirumala.webp" alt="Tirumala Temple - Complete Darshan Guide 2026" className="w-full h-full object-cover" loading="lazy" />
          </div>

          {/* Content */}
          <div className="prose prose-sm md:prose-base max-w-none">
            <h2>How to Book Tirumala Darshan Tickets Online</h2>
            <p>Planning a visit to Tirumala Venkateswara Temple in 2026? Here's your complete guide to booking darshan tickets, understanding the different darshan types, and making your pilgrimage smooth and memorable.</p>
            
            <h3>Types of Darshan at Tirumala</h3>
            <ul>
              <li><strong>Sarva Darshan (Free Darshan):</strong> Free but waiting time is 8-12 hours. Queue starts from Lakshmi Nivas or Vishnu Nivas.</li>
              <li><strong>Special Entry Darshan (₹300):</strong> Recommended. Waiting time is 2-4 hours. Book online at <strong>ttdsevaonline.com</strong>.</li>
              <li><strong>VIP Darshan:</strong> For government officials and special quota holders.</li>
              <li><strong>Divya Darshan:</strong> Special queue with reduced waiting time.</li>
              <li><strong>Supadam Seva:</strong> Wheelchair assistance for elderly and differently-abled.</li>
            </ul>

            <h3>TTD Online Ticket Booking Process</h3>
            <ol>
              <li>Visit the official TTD website: <strong>ttdsevaonline.com</strong></li>
              <li>Register with your mobile number and email</li>
              <li>Select "Tirumala Darshan" and choose your darshan type</li>
              <li>Select date and time slot</li>
              <li>Upload ID proof (Aadhar, Voter ID, Passport or Driving License)</li>
              <li>Make payment online</li>
              <li>Receive confirmation SMS and email with QR code</li>
            </ol>

            <h3>Best Time to Visit Tirumala</h3>
            <p>The best time for Tirumala darshan is September to March. Avoid weekends, Indian holidays, and Brahmotsavam season (September-October) for shorter queues. Weekdays (Tuesday to Thursday) have the least crowd.</p>

            <h3>Tirumala Temple Timings</h3>
            <ul>
              <li><strong>Darshan Timings:</strong> 6:00 AM to 9:00 PM (all days)</li>
              <li><strong>Suprabhatam:</strong> 6:00 AM</li>
              <li><strong>Thomala Seva:</strong> 6:30 AM</li>
              <li><strong>Archana:</strong> 8:00 AM to 5:00 PM</li>
              <li><strong>Kalyanotsavam:</strong> Weekdays 6:00 PM, Weekends 3:00 PM</li>
              <li><strong>Sahastra Deepalankarana:</strong> 7:00 PM</li>
              <li><strong>Ekantha Seva:</strong> 9:00 PM</li>
            </ul>

            <h3>How to Reach Tirumala from Tirupati</h3>
            <p>Tirumala is 22 km from Tirupati. The most comfortable way is by taxi or cab. Kottidi Travels offers <strong>24/7 pickup and drop from Tirupati Railway Station, Airport (Renigunta), and Bus Stand</strong> to Tirumala. The journey takes approximately 45 minutes via the ghat road.</p>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 my-8 border border-orange-100">
              <h4 className="font-bold text-gray-900 mb-2">🚗 Need a Ride to Tirumala?</h4>
              <p className="text-sm text-gray-600 mb-4">Kottidi Travels offers comfortable AC vehicles for Tirumala darshan. Innova, Dzire, Tempo Traveller available.</p>
              <a href="tel:8143015558" className="inline-flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-orange-600 transition">
                <Phone size={16} /> Call +91 8143015558
              </a>
            </div>

            <h3>Essential Tips for Tirumala Visit</h3>
            <ul>
              <li>Book accommodation in advance through TTD website — guest houses fill up fast</li>
              <li>Carry valid ID proof for darshan entry</li>
              <li>Mobile phones are not allowed inside the temple — use free cloak rooms</li>
              <li>Luggage is not allowed — deposit at designated counters</li>
              <li>Wear traditional attire for a smooth darshan experience</li>
              <li>Reach Tirumala at least 2 hours before your darshan slot</li>
            </ul>
          </div>

          {/* Share & CTA */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500">
                Published by <strong className="text-gray-900">Kottidi Travels Tirupati</strong>
              </p>
              <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent('Check out this Tirumala Darshan Guide! https://kottiditravelstirupati.in/blog/tirumala-darshan-guide-2026')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-green-600 font-bold text-sm hover:text-green-700">
                <Share2 size={16} /> Share on WhatsApp
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogArticle;