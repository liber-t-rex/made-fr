import React from 'react';
import {
  ShoppingBag,
  Brain,
  Globe,
  Users,
  Search,
  Layers,
  FileText,
  MessageSquare
} from 'lucide-react';
import FeatureCard from './FeatureCard';

const Pillars: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative" id="pillars">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Les 8 Piliers de l'Écosystème Made.fr</h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            Amazon, Tiktok, Instagram, Meta ads, Service-après-vente, SEO/GEO, Influencers, UGC, fournisseurs et prestataires locaux sont tous regroupés sur une seule plateforme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<ShoppingBag size={24} />}
            title="Marketplace B2B/B2C"
            description="La double orientation B2B et B2C de la plateforme représente un avantage majeur pour les fabricants et fournisseurs locaux"
            bgColor="bg-blue-100"
            iconColor="text-blue-700"
          />

          <FeatureCard
            icon={<Globe size={24} />}
            title="Hub Multicanal"
            description="Synchronisation automatisée des stocks et ventes entre Made.fr, TikTok Shop, Instagram Shop et Amazon ou votre propre boutique e-commerce. Une seule interface."
            bgColor="bg-purple-100"
            iconColor="text-purple-700"
          />

          <FeatureCard
            icon={<Brain size={24} />}
            title="IA Intégrée"
            description="Génération automatique de posts, vidéos et storytelling. Compréhension sémantique de votre métier pour valoriser votre savoir-faire."
            bgColor="bg-indigo-100"
            iconColor="text-indigo-700"
          />

          <FeatureCard
            icon={<Search size={24} />}
            title="Optimisation GEO"
            description="Structure vos données pour apparaître en priorité dans les réponses de l'IA (ChatGPT, Gemini). Gain de visibilité estimé +40%."
            bgColor="bg-rose-100"
            iconColor="text-rose-700"
          />

          <FeatureCard
            icon={<Users size={24} />}
            title="Réseau d'Influence"
            description="Marketplace d'influenceurs intégrée. Négociation, contrats et calcul du ROI automatisés pour vos campagnes."
            bgColor="bg-orange-100"
            iconColor="text-orange-700"
          />

          <FeatureCard
            icon={<MessageSquare size={24} />}
            title="SAV & CRM"
            description="Ticketing intelligent et collecte de preuves automatisée. Programme de fidélité avancé pour maximiser la LTV."
            bgColor="bg-cyan-100"
            iconColor="text-cyan-700"
          />

          <FeatureCard
            icon={<FileText size={24} />}
            title="Gestion & RSE"
            description="Facturation automatique, gestion des impôts et mesure de l'empreinte carbone (Scope 3). Pilotez par la donnée."
            bgColor="bg-emerald-100"
            iconColor="text-emerald-700"
          />

          <FeatureCard
            icon={<Layers size={24} />}
            title="Supply Chain"
            description="Index Fournisseurs certifiés et Passeport Digital (DPP) pour une traçabilité complète de la matière première."
            bgColor="bg-slate-200"
            iconColor="text-slate-800"
          />
        </div>
      </div>
    </section>
  );
};

export default Pillars;