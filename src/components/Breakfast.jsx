import React from 'react';
import { siteData } from '../data/siteData';

export const Breakfast = () => {
  const { breakfast } = siteData;

  return (
    /*
     * Café da Manhã — layout diferenciado das seções anteriores.
     * Fotografia horizontal ampla na metade superior, texto compacto na metade inferior.
     * Fundo levemente arenoso para ritmar a narrativa visual com a seção anterior.
     */
    <section id="cafe-da-manha" className="relative bg-[#F3EFE8] py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header textual estreito — acima da imagem */}
        <div data-reveal className="reveal organic-shape shape-breakfast mb-10 sm:mb-14 max-w-xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-3 mb-4">
            <span className="h-[1px] w-5 bg-[#8C867F]/40 inline-block flex-shrink-0" />
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#7A756F] font-medium">
              {breakfast.eyebrow}
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-light text-[#1A1918] leading-[1.08] tracking-tight">
            {breakfast.headlineLine1}
            <br />
            <span className="italic font-normal">{breakfast.headlineLine2}</span>
          </h2>
        </div>

        {/* Main wide image — horizontal protagonist */}
        {/* FOTO REAL DO CLIENTE: Substitua em siteData.breakfast.mainImage */}
        <div data-reveal className="reveal reveal-delay-1 relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden mb-12 sm:mb-16">
          <img
            src={breakfast.mainImage.src}
            alt={breakfast.mainImage.alt}
            className="w-full h-full object-cover object-center hover:scale-[1.03] transition-transform duration-1000 ease-out"
            loading="lazy"
            width="1400"
            height="600"
          />
        </div>

        {/* Bottom: text + small detail image, side by side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">

          {/* Text block — takes wider column */}
          <div data-reveal className="reveal md:col-span-7 lg:col-span-6 space-y-5">
            <p className="font-sans text-[15px] sm:text-base text-[#4E4A45] font-light leading-relaxed">
              {breakfast.description}
            </p>
            <p className="font-editorial text-xl sm:text-2xl lg:text-3xl font-light italic text-[#2C2A28] leading-snug pt-2">
              {breakfast.complementaryLine}
            </p>
          </div>

          {/* Small editorial detail image */}
          {/* FOTO REAL DO CLIENTE: Substitua em siteData.breakfast.detailImage */}
          <div data-reveal className="reveal reveal-delay-2 md:col-span-5 lg:col-start-8 lg:col-span-5">
            <div className="aspect-square overflow-hidden">
              <img
                src={breakfast.detailImage.src}
                alt={breakfast.detailImage.alt}
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                width="500"
                height="500"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
