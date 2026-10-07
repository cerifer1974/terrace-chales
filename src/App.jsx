import React, { useEffect } from 'react';
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

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px' },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!window.location.hash) return undefined;

    const frame = window.requestAnimationFrame(() => {
      document.querySelector(window.location.hash)?.scrollIntoView();
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

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
          className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 h-12 sm:h-14 px-4 sm:px-5 rounded-full bg-[#1E2B22] hover:bg-[#29392E] text-white shadow-[0_10px_35px_rgba(17,26,20,0.28)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2.5 border border-white/15"
          aria-label={`Ligar para o Terrace Chalés: ${pousada.phone}`}
        >
          <Phone size={18} strokeWidth={1.7} aria-hidden="true" />
          <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-semibold">
            Ligar agora
          </span>
        </a>
      </aside>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}

export default App;
