import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/common/ScrollToTop';
import { MessageCircle, Phone } from 'lucide-react';

function App() {
  const phoneNumber = "9032264229";

  // Google Ads Call Tracking Function - Integrated with conversion script
  const trackCall = () => {
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion();
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
          </Routes>
        </main>

        <Footer />
        
        {/* Floating Contact Actions */}
        <div className="fixed bottom-20 right-6 flex flex-col gap-5 z-[9999]">
          <a 
            href={`tel:${phoneNumber}`}
            onClick={trackCall} // Tracking Hook
            className="bg-[#f97316] text-white p-4 rounded-full shadow-2xl animate-bounce transition-transform hover:scale-110 flex items-center justify-center"
          >
            <Phone size={28} strokeWidth={2.5} />
          </a>

          <a 
            href={`https://wa.me/${phoneNumber}`}
            target="_blank" 
            rel="noreferrer"
            className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl animate-bounce transition-transform hover:scale-110 flex items-center justify-center"
          >
            <MessageCircle size={28} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;