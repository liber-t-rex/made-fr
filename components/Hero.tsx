import React, { useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  useEffect(() => {
    // Load Tally embeds if script is already present
    if ((window as any).Tally) {
      (window as any).Tally.loadEmbeds();
    }
  }, []);

  return (
    <section className="relative overflow-hidden pt-24 pb-32 lg:pt-32 lg:pb-40">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-50 animate-blob"></div>
        <div className="absolute top-[0%] right-[10%] w-[500px] h-[500px] bg-red-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-indigo-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-10 shadow-sm">
          <Sparkles size={14} className="animate-spin-slow" />
          L'excellence française réinventée
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-950 mb-10 leading-[1.1] max-w-5xl mx-auto">
          Une place de marché intégrée <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-red-600">
            pour le Fabriquer en France
          </span>
        </h1>

        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed font-light italic border-l-4 border-blue-600 pl-8 py-2 bg-slate-50/50 rounded-r-xl text-left md:text-center">
            "Il s'agit du marketplace le moins cher au monde, juste pour vous les Français.
            On ne pourra plus dire qu'on ne sait pas où se trouve le made in France."
          </p>
        </div>

        <div className="mt-8 mb-8 w-full max-w-xl mx-auto">
          <iframe
            data-tally-src="https://tally.so/embed/ob6ByN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="200"
            frameBorder="0"
            title="Inscrivez-vous"
            className="w-full"
          ></iframe>
        </div>

        <a
          href="https://www.ulule.com/made-fr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 border-2 border-blue-600 rounded-xl text-blue-600 hover:bg-blue-600 hover:text-white font-semibold transition-all mt-12"
        >
          Soutenir le Made.fr
        </a>

        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-4"></div>
      </div>
    </section>
  );
};

export default Hero;