import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import EmergencyButton from './components/EmergencyButton';

import Home from './pages/Home';
import Places from './pages/Places';
import Tickets from './pages/Tickets';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ContactUs from './pages/ContactUs';
import HelpCenter from './pages/HelpCenter';
import Feedback from './pages/Feedback';
// import Feedback from './pages/Feedback';
import FAQ from './pages/Faqs';
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <EmergencyButton />
    </div>
  );
}