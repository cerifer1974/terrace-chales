import React from 'react';
import { siteData } from '../data/siteData';

export const Gallery = () => {
  const { gallery } = siteData;
  const { panoramic, balcony, coffeeInBed, chaletView } = gallery.images;

  return (
    /*
     * Galeria — Ensaio fotográfico em três momentos visuais.
     * Desktop: três blocos grandes e simples.
     * Mobile: sequência vertical cinematográfica.
     */
    <section id="galeria" className="relative bg-[#F3EFE8] py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header textual — shape orgânico da família Terrace */}
        <div className="organic-shape shape-gallery mb-16 sm:mb-20 lg:mb-24 max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-3 mb-4">
            <span className="h-[1px] w-5 bg-[#8C867F]/40 inline-block flex-shrink-0" />
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#7A756F] font-medium">
              {gallery.eyebrow}
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-light text-[#1A1918] leading-[1.08] tracking-tight mb-5">
            {gallery.headlineLine1}
            <br />
            <span className="italic font-normal">{gallery.headlineLine2}</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#4E4A45] font-light leading-relaxed max-w-md">
            {gallery.description}
          </p>
        </div>

        {/* ============================================================
           BLOCO 1 — PAISAGEM
           panoramica-terrace — grande, horizontal, dominante
           ============================================================ */}
        <figure className="mb-20 lg:mb-28 group overflow-hidden">
          <div className="w-[90%] lg:w-[95%] mx-auto lg:ml-0 lg:mr-auto aspect-[16/9] overflow-hidden">
            <img
              src={panoramic.src}
              alt={panoramic.alt}
              className="w-full h-full object-cover object-center transform group-hover:scale-[1.01] transition-transform duration-1000 ease-out"
              loading="eager"
              width="1600"
              height="900"
            />
          </div>
          {/* Legenda discreta */}
          <figcaption className="mt-6 text-center lg:text-left lg:pl-2">
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.22em] uppercase text-[#8C867F] font-medium">
              MONTE VERDE • MINAS GERAIS
            </span>
          </figcaption>
        </figure>

        {/* ============================================================
           BLOCO 2 — EXPERIÊNCIA
           Duas fotografias grandes lado a lado: vista da sacada + café na cama
           ============================================================ */}
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-6 mb-20 lg:mb-28">

          {/* Vista da sacada — ~58% */}
          <figure className="w-full lg:w-[58%] flex-shrink-0 group overflow-hidden -mt-8 lg:mt-0">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={balcony.src}
                alt={balcony.alt}
                className="w-full h-full object-cover object-center transform group-hover:scale-[1.01] transition-transform duration-1000 ease-out"
                loading="lazy"
                width="900"
                height="1200"
              />
            </div>
          </figure>

          {/* Café na cama — ~42% */}
          <figure className="w-full lg:w-[42%] flex-shrink-0 group overflow-hidden mt-8 lg:-mt-8">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={coffeeInBed.src}
                alt={coffeeInBed.alt}
                className="w-full h-full object-cover object-[50%_55%] transform group-hover:scale-[1.01] transition-transform duration-1000 ease-out"
                loading="lazy"
                width="800"
                height="1000"
              />
            </div>
          </figure>

        </div>

        {/* ============================================================
           BLOCO 3 — ENCERRAMENTO
           vista-chale-terrace — grande, horizontal, fechamento visual
           ============================================================ */}
        <figure className="group overflow-hidden">
          <div className="w-[92%] lg:w-[95%] mx-auto lg:ml-auto lg:mr-0 aspect-[16/10] overflow-hidden">
            <img
              src={chaletView.src}
              alt={chaletView.alt}
              className="w-full h-full object-cover object-[50%_45%] transform group-hover:scale-[1.01] transition-transform duration-1000 ease-out"
              loading="lazy"
              width="1400"
              height="875"
            />
          </div>
        </figure>

      </div>
    </section>
  );
};