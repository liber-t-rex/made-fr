import React from 'react';

const CTA: React.FC = () => {
  const TALLY_URL = "https://tally.so/r/lbD7Vk";

  return (
    <section className="py-24 bg-blue-900 text-white overflow-hidden relative">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-800 skew-x-12 translate-x-1/2 opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl font-black mb-6">Prêt à rejoindre la révolution du Made in France ?</h2>
            <p className="text-blue-100 text-xl font-light mb-0">
              L'ouverture des inscriptions aux artisans et créateurs commence bientôt. Ne manquez pas le virage technologique de 2026.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-50 transition-all shadow-2xl hover:scale-105 active:scale-95 text-center"
            >
              Réserver mon accès prioritaire
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;