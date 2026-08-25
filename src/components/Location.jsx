import React from 'react';
import { MapPin } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Location = () => {
  const { location } = siteData;

  return (
    /*
     * Localização — seção editorial limpa, redução de ritmo após a Galeria.
     * Shape orgânico da família, placa externa como detalhe de autenticidade.
     */
    <section id="localizacao" className="relative bg-[#F3EFE8] py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Bloco principal de título + endereço + shape */}
          <div className="organic-shape shape-location lg:col-span-7 relative space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-3">
              <span className="h-[1px] w-5 bg-[#8C867F]/40 inline-block flex-shrink-0" />
              <span className="font-sans text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#7A756F] font-medium">
                {location.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-light text-[#1A1918] leading-[1.08] tracking-tight">
              {location.headlineLine1}
              <br />
              <span className="italic font-normal">{location.headlineLine2}</span>
            </h2>

            {/* Texto descritivo */}
            <p className="font-sans text-sm sm:text-base text-[#4E4A45] font-light leading-relaxed max-w-xl">
              {location.description}
            </p>

            {/* Endereço */}
            <address className="not-italic space-y-2 pt-2 border-t border-[#1A1918]/10">
              <p className="font-editorial text-lg sm:text-xl font-light text-[#1A1918] leading-snug">
                {location.address.street}
              </p>
              <p className="font-sans text-sm text-[#5A5550] font-light">
                {location.address.city}
              </p>
            </address>

            {/* Informações complementares */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 border-t border-[#1A1918]/10">
              {location.details.map((detail, index) => (
                <span key={index} className="font-sans text-[11px] sm:text-[12px] tracking-[0.16em] uppercase text-[#6E6862] font-medium">
                  {detail.label}
                </span>
              ))}
            </div>

            {/* CTA Ver no Mapa */}
            <a
              href={location.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#1E2B22] hover:bg-[#2A3B30] border border-[#1E2B22] text-[#FBF9F5] text-xs sm:text-[12px] tracking-[0.2em] uppercase font-medium transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.97]"
            >
              <MapPin className="h-4 w-4 text-[#FBF9F5]" />
              <span>{location.ctaLabel}</span>
            </a>
          </div>

          {/* Imagem da placa externa — detalhe editorial à direita */}
          <figure className="hidden lg:block lg:col-span-5 lg:col-start-8 group overflow-hidden">
            <div className="aspect-[3/4] w-[72%] ml-auto lg:w-[80%] overflow-hidden">
              <img
                src={location.detailImage.src}
                alt={location.detailImage.alt}
                className="w-full h-full object-cover object-center transform group-hover:scale-[1.015] transition-transform duration-1000 ease-out"
                loading="lazy"
                width="500"
                height="670"
              />
            </div>
          </figure>

          {/* Mobile: placa externa abaixo do texto */}
          <figure className="lg:hidden mt-10 group overflow-hidden">
            <div className="w-[65%] mx-auto aspect-square max-w-xs overflow-hidden">
              <img
                src={location.detailImage.src}
                alt={location.detailImage.alt}
                className="w-full h-full object-cover object-center transform group-hover:scale-[1.015] transition-transform duration-1000 ease-out"
                loading="lazy"
                width="350"
                height="350"
              />
            </div>
          </figure>

        </div>
      </div>
    </section>
  );
};