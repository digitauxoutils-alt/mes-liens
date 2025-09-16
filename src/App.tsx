import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QRSection from './components/QRSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-['Inter',_'system-ui',_sans-serif]">
      <Header />
      <main>
        <Hero />
        <QRSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;