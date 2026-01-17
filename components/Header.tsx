import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-1"></div>
          <a href="/" className="transition-opacity hover:opacity-80">
            <img
              src="/logo.png"
              alt="Made.fr - Artisans de France"
              className="h-16 w-auto object-contain"
            />
          </a>
          <div className="flex-1 flex justify-end">
            <div className="hidden sm:flex items-center gap-6">
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Inspiration locale</span>
              <div className="px-5 py-2 text-sm font-bold text-blue-900 bg-blue-50 rounded-full border border-blue-100 animate-pulse">
                Lancement 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;