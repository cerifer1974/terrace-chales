import React from 'react';
import { Phone } from 'lucide-react';
import { siteData } from '../data/siteData';

export const CTAFinal = () => {
  const { ctaFinal } = siteData;

  return (
    /*
     * CTA Final — seção de maior intenção de conversão.
      * Fotografia atmosférica (vista do chalé) + texto emocional + CTAs.
     * Elegante, calmo, premium — sem aparência de anúncio.
     */
    <section id="cta-final" className="relative overflow-hidden">
      {/* Background image with subtle overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaFinal.backgroundImage.src}
          alt={ctaFinal.backgroundImage.alt}
          className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-1000 ease-out"
        />
        {/* Dark cinematic overlay — matching Hero aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/35" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-28 sm:py-36 lg:py-48">
        <div data-reveal className="reveal max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-3 mb-4 sm:mb-6">
            <span className="h-[1px] w-6 bg-white/50 inline-block" />
            <p className="font-sans text-[11px] sm:text-xs tracking-[0.24em] uppercase text-white/80 font-normal">
              {ctaFinal.eyebrow}
            </p>
          </div>

          {/* Headline */}
          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl xl:text-[64px] font-light text-white/95 leading-[1.08] tracking-tight mb-6 sm:mb-8">
            {ctaFinal.headlineLine1}
            <br />
            <span className="italic font-normal">{ctaFinal.headlineLine2}</span>
          </h2>

          {/* Description */}
          <p className="font-sans text-[15px] sm:text-base md:text-lg text-white/85 font-light leading-relaxed max-w-xl mb-10 sm:mb-12">
            {ctaFinal.description}
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            {/* Primary CTA — VER DISPONIBILIDADE */}
            <a
              href={ctaFinal.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1A1918] hover:bg-[#F3EFEA] text-xs sm:text-[13px] tracking-[0.18em] uppercase font-semibold transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98] w-full sm:w-auto"
            >
              {ctaFinal.primaryCta.label}
            </a>

            {/* Secondary CTA — FALAR PELO WHATSAPP */}
            <a
              href={ctaFinal.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-4 border border-white/50 text-white/90 hover:text-white hover:border-white text-xs sm:text-[13px] tracking-[0.18em] uppercase font-medium transition-all duration-300 w-full sm:w-auto"
            >
              <Phone size={16} strokeWidth={1.6} className="mr-2.5" aria-hidden="true" />
              {ctaFinal.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
