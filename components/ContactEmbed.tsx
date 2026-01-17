import React, { useEffect } from 'react';

const ContactEmbed: React.FC = () => {
  useEffect(() => {
    // Ensure Tally script runs if it hasn't already (though it's in index.html, calling loadEmbeds ensures dynamic content works)
    if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <section className="bg-white py-12 px-4 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <iframe 
          data-tally-src="https://tally.so/embed/9qGdVQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
          loading="lazy" 
          width="100%" 
          height="200" 
          frameBorder="0" 
          title="Contact form"
          className="w-full"
        ></iframe>
      </div>
    </section>
  );
};

// Add declaration for window.Tally to avoid TS errors
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export default ContactEmbed;