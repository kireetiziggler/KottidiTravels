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
  // Your business contact number
  const phoneNumber = "9493015558";

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-bg flex flex-col font-sans text-gray-900">
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow pt-20"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        
        {/* Floating Contact Actions */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
          
          {/* Call Button - Brand Orange */}
          <a 
            href={`tel:${phoneNumber}`}
            className="bg-[#f97316] text-white p-3 md:p-4 rounded-full shadow-2xl animate-bounce transition-transform hover:scale-110 flex items-center justify-center group relative"
            title="Call Us Now"
          >
            <Phone size={28} />
            {/* Desktop Label */}
            <span className="absolute right-16 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">
              Call Us
            </span>
          </a>

          {/* WhatsApp Button - WhatsApp Green */}
          <a 
            href={`https://wa.me/${phoneNumber}`}
            target="_blank" 
            rel="noreferrer"
            className="bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-2xl animate-bounce transition-transform hover:scale-110 flex items-center justify-center group relative"
            title="Chat on WhatsApp"
          >
            <MessageCircle size={28} />
            {/* Desktop Label */}
            <span className="absolute right-16 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">
              WhatsApp
            </span>
          </a>
          
        </div>
      </div>
    </Router>
  );
}

export default App;