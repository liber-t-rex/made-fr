import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import CTA from './components/CTA';
import Partners from './components/Partners';
import ContactEmbed from './components/ContactEmbed';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <CTA />
        <Partners />
        <ContactEmbed />
      </main>
      <Footer />
    </div>
  );
};

export default App;