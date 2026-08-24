import React from 'react';
import { Phone } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Accommodations } from './components/Accommodations';
import { ExperienceVideo } from './components/ExperienceVideo';
import { Story } from './components/Story';
import { Breakfast } from './components/Breakfast';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { CTAFinal } from './components/CTAFinal';
import { Footer } from './components/Footer';
import { siteData } from './data/siteData';

export function App() {
  const { pousada } = siteData;

  return (
    <div className="relative min-h-screen bg-[#FBF9F5] text-[#1A1918] font-sans selection:bg-[#2C3B2D] selection:text-[#FBF9F5]">
      {/* 1. Header (Floating on top of Hero) */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. A Experiência Section */}
        <Experience />

        {/* 4. Acomodações Section */}
        <Accommodations />

        {/* 5. Experiência Imersiva — Um lugar para desacelerar */}
        <ExperienceVideo />

        {/* 6. Nossa História */}
        <Story />

        {/* 7. Café da Manhã */}
        <Breakfast />

        {/* 8. Prova Social */}
        <Reviews />

        {/* 9. Galeria Editorial */}
        <Gallery />

        {/* 10. Localização */}
        <Location />

        {/* 11. CTA Final */}
        <CTAFinal />
      </main>

      {/* Floating Contact Action for High Conversion */}
      <aside aria-label="Contato por telefone">
        <a
          href={pousada.phoneHref}
          className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
          title="Fale conosco por telefone"
        >
          <Phone size={24} strokeWidth={1.8} />
        </a>
      </aside>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}

export default App;
