import React from 'react';
import { siteData } from '../data/siteData';

export const Hero = () => {
  const { hero } = siteData;

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between overflow-hidden text-white">
      {/* Background Image with Dark Cinematic Overlay */}
      {/* FOTO REAL DO CLIENTE: Substitua o arquivo referenciado em siteData.hero.backgroundImage */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.backgroundImage}
          alt="Terrace Chalés em Monte Verde"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Cinematic gradient overlay matching the reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/40" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-36 sm:pt-44 md:pt-48 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-3 mb-4 sm:mb-6">
            <span className="h-[1px] w-6 bg-white/50 inline-block"></span>
            <p className="font-sans text-[11px] sm:text-xs tracking-[0.24em] uppercase text-white/80 font-normal">
              {hero.eyebrow}
            </p>
          </div>

          {/* Headline */}
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-light leading-[1.06] tracking-tight text-white/95 mb-6 sm:mb-8">
            {hero.headlineLine1} <br className="hidden sm:inline" />
            <span className="italic font-normal">{hero.headlineLine2}</span>
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-white/85 font-light leading-relaxed max-w-xl mb-8 sm:mb-10">
            {hero.subheadline}
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href={hero.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-[#1A1918] hover:bg-[#F3EFEA] text-xs sm:text-[13px] tracking-[0.18em] uppercase font-semibold transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              {hero.primaryCta.label}
            </a>

            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center py-3.5 text-xs sm:text-[13px] tracking-[0.18em] uppercase font-medium text-white/85 hover:text-white transition-colors duration-300 group"
            >
              <span>{hero.secondaryCta.label}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Subtle Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pb-8 sm:pb-12">
        <div className="inline-flex items-center space-x-3 text-white/60">
          <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse"></span>
          <span className="font-sans text-[10px] tracking-[0.24em] uppercase font-light">
            {hero.scrollIndicator}
          </span>
        </div>
      </div>
    </section>
  );
};
