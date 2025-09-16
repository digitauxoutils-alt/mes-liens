import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QRSection from './components/QRSection';
import Footer from './components/Footer';
import ColorBar from './components/ColorBar';

function App() {
  return (
    <div className="min-h-screen bg-[#0A3764] font-['Inter',_'system-ui',_sans-serif] border-8 border-double border-[#0A3764]">
      <Header />
      <ColorBar />
      <main>
        <Hero />
        <QRSection />
      </main>
      <ColorBar />
      <Footer />
    </div>
  );
}

export default App;