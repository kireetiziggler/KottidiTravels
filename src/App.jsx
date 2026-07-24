import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import TirumalaDarshanGuide from './pages/blog/TirumalaDarshanGuide';
import TirupatiToChennaiFare from './pages/blog/TirupatiToChennaiTaxiFare';
import TirupatiTravels from './pages/TirupatiTravels';
import ScrollToTop from './components/common/ScrollToTop';
import BackToTop from './components/common/BackToTop';
import { MessageCircle, Phone } from 'lucide-react';

function App() {
  const phoneNumber = "8143015558";

  // Google Ads Call Tracking Function - Integrated with conversion script
  const trackCall = () => {
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion();
    }
  };

  // Track WhatsApp click as conversion
  const trackWhatsApp = () => {
    if (typeof window.gtag === 'function') {
      gtag('event', 'conversion', {
        'send_to': 'AW-16644412620/8mQYCLGHgqocEMyp1oA-',
        'event_category': 'engagement',
        'event_label': 'whatsapp_click'
      });
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-bg flex flex-col font-sans text-gray-900 overflow-x-hidden">
        <Navbar />
        
        <main className="flex-grow pt-20"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/tirumala-darshan-guide-2026" element={<TirumalaDarshanGuide />} />
            <Route path="/blog/tirupati-to-chennai-taxi-fare" element={<TirupatiToChennaiFare />} />
            <Route path="/tirupati-travels" element={<TirupatiTravels />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        
        {/* Back to Top Button */}
        <BackToTop />

        {/* Floating Contact Actions */}
        <div className="fixed bottom-20 right-6 flex flex-col gap-5 z-[9999]">
          <a 
            href={`tel:${phoneNumber}`}
            onClick={trackCall}
            className="bg-[#f97316] text-white p-4 rounded-full shadow-2xl animate-bounce transition-transform hover:scale-110 flex items-center justify-center"
            aria-label="Call Kottidi Travels"
          >
            <Phone size={28} strokeWidth={2.5} />
          </a>

          <a 
            href={`https://wa.me/${phoneNumber}`}
            target="_blank" 
            rel="noreferrer"
            onClick={trackWhatsApp}
            className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl animate-bounce transition-transform hover:scale-110 flex items-center justify-center"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={28} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;