import React from 'react';
import { siteData } from '../data/siteData';

export const Reviews = () => {
  const { reviews } = siteData;

  return (
    /*
     * Prova Social — o número 9,9 é o protagonista absoluto.
     * Estética editorial de revista de viagens de luxo. Sem ícones, barras, dashboards.
     * Fundo warm-white puro para dar respiro e contraste ao grande número.
     */
    <section id="avaliacoes" className="relative bg-[#FBF9F5] py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Eyebrow */}
        <div className="inline-flex items-center space-x-3 mb-14 sm:mb-16 lg:mb-20">
          <span className="h-[1px] w-5 bg-[#8C867F]/40 inline-block flex-shrink-0" />
          <span className="font-sans text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#7A756F] font-medium">
            {reviews.eyebrow}
          </span>
        </div>

        {/* Central Score Block */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 sm:gap-12 lg:gap-0 mb-20 sm:mb-24 lg:mb-28">

          {/* Big Number + Label */}
          <div className="flex-shrink-0">
            {/* The big 9,9 — editorial, dominant */}
            <div className="font-editorial font-light leading-none tracking-tighter text-[#1A1918] text-[120px] sm:text-[180px] lg:text-[220px] xl:text-[260px] select-none">
              {reviews.score}
            </div>
            <div className="mt-2 sm:mt-4 space-y-1">
              <p className="font-editorial text-xl sm:text-2xl lg:text-3xl font-light italic text-[#2C2A28]">
                {reviews.scoreLabel}
              </p>
              <p className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#8C867F] font-medium">
                {reviews.source}
              </p>
            </div>
          </div>

          {/* Right side: complementary text + secondary indicators */}
          <div className="lg:max-w-md xl:max-w-lg space-y-10 sm:space-y-12 lg:pb-4">
            <p className="font-sans text-base sm:text-lg text-[#4E4A45] font-light leading-relaxed">
              {reviews.complementaryText}
            </p>

            {/* Secondary indicators — horizontal on desktop, grid on mobile */}
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 pt-2 border-t border-[#1A1918]/10">
              {reviews.indicators.map((item) => (
                <div key={item.label} className="flex flex-col items-start gap-1">
                  <span className="font-editorial text-2xl sm:text-3xl font-light text-[#1A1918] leading-none">
                    {item.score}
                  </span>
                  <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-[#8C867F] font-medium leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Depoimentos — estrutura preparada para receber avaliações reais */}
        {/* 
          DEPOIMENTOS REAIS: Adicione os textos em siteData.reviews.testimonials
          Quando houver avaliações, substitua o bloco de placeholder abaixo pelo mapeamento real.
        */}
        {reviews.testimonials && reviews.testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 border-t border-[#1A1918]/10 pt-16 sm:pt-20">
            {reviews.testimonials.map((t, i) => (
              <div key={i} className="space-y-4">
                <p className="font-editorial text-lg sm:text-xl font-light italic text-[#2C2A28] leading-snug">
                  "{t.text}"
                </p>
                <div className="space-y-0.5">
                  <p className="font-sans text-xs font-medium text-[#1A1918] tracking-wide">{t.author}</p>
                  {t.date && (
                    <p className="font-sans text-[11px] text-[#8C867F] tracking-wide">{t.date}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Separator line only — sem texto fictício */
          <div className="border-t border-[#1A1918]/10" />
        )}

      </div>
    </section>
  );
};
