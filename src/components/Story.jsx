import React from 'react';
import { siteData } from '../data/siteData';

export const Story = () => {
  const { story } = siteData;

  return (
    /*
     * Nossa História — composição editorial unificada: FOTO + BLOB + TEXTO.
     * Desktop: fotografia à esquerda (bordas limpas, ~42%), grande blob orgânico
     * inicia sob a foto e avança ~80px para dentro dela; texto sobre o blob.
     * Sem fades, sem degradês. Camadas: bg → blob → foto → texto.
     * Mobile: foto primeiro; blob sobrepõe base da foto (~32px); texto no blob.
     */
    <section id="historia" className="relative bg-[#FBF9F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* ============================================================
           DESKTOP — composição em camadas assimétrica
           ============================================================ */}
        <div className="hidden lg:block relative min-h-[640px]">

          {/* 1. BLOB ORGÂNICO — apoio gráfico atrás do texto, toque discreto na foto */}
          <div
            className="organic-shape shape-story"
            style={{
              position: 'absolute',
              left: '41%',
              right: '1%',
              top: '13%',
              bottom: '13%',
              zIndex: 10,
            }}
          />

          {/* 2. FOTOGRAFIA — bordas limpas, sem fade, ~42% largura, z-index acima do blob */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[42%] h-[88%] max-w-[560px] z-20 overflow-hidden">
            <img
              src={story.image.src}
              alt={story.image.alt}
              className="w-full h-full object-cover object-center"
              loading="lazy"
              width="900"
              height="720"
            />
          </div>

          {/* 3. TEXTO — sobre o blob, z-index superior, padding generoso */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[56%] max-w-[620px] px-10 py-12 z-30">
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-3 mb-5 sm:mb-7">
              <span className="h-[1px] w-5 bg-[#8C867F]/40 inline-block flex-shrink-0" />
              <span className="font-sans text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#7A756F] font-medium">
                {story.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-light text-[#1A1918] leading-[1.1] tracking-tight mb-7 sm:mb-8">
              {story.headlineLine1}
              <br />
              <span className="italic font-normal">{story.headlineLine2}</span>
            </h2>

            {/* Body Text */}
            <p className="font-sans text-sm sm:text-base text-[#4E4A45] font-light leading-relaxed mb-5 max-w-xl">
              {story.paragraph1}
            </p>
            <p className="font-sans text-sm sm:text-base text-[#4E4A45] font-light leading-relaxed mb-10 sm:mb-12 max-w-xl">
              {story.paragraph2}
            </p>

            {/* Editorial Pullquote */}
            <blockquote className="border-l-2 border-[#8C867F]/30 pl-5 mb-8 sm:mb-10 max-w-xl">
              <p className="font-editorial text-lg sm:text-xl lg:text-2xl font-light italic text-[#2C2A28] leading-snug">
                "{story.pullquote}"
              </p>
            </blockquote>

            {/* Signature */}
            <div className="flex items-center space-x-4">
              <span className="h-[1px] w-8 bg-[#8C867F]/40 inline-block" />
              <p className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#8C867F] font-medium">
                {story.signature}
              </p>
            </div>
          </div>

        </div>

        {/* ============================================================
           MOBILE — empilhado com sobreposição vertical sutil
           ============================================================ */}
        <div className="lg:hidden relative">

          {/* Fotografia — topo, bordas limpas */}
          <div className="relative aspect-[4/5] w-full max-w-xl mx-auto">
            <img
              src={story.image.src}
              alt={story.image.alt}
              className="w-full h-full object-cover object-center"
              loading="eager"
              width="600"
              height="750"
            />
          </div>

          {/* Blob orgânico — inicia ~32px antes do fim da foto (sobreposição vertical) */}
          <div className="organic-shape shape-story relative -mt-8 pb-10 px-6">
            {/* Bloco textual dentro do blob */}
            <div className="max-w-xl mx-auto">
              {/* Eyebrow */}
              <div className="inline-flex items-center space-x-3 mb-5">
                <span className="h-[1px] w-5 bg-[#8C867F]/40 inline-block flex-shrink-0" />
                <span className="font-sans text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#7A756F] font-medium">
                  {story.eyebrow}
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-editorial text-3xl sm:text-4xl font-light text-[#1A1918] leading-[1.1] tracking-tight mb-6">
                {story.headlineLine1}
                <br />
                <span className="italic font-normal">{story.headlineLine2}</span>
              </h2>

              {/* Body Text */}
              <p className="font-sans text-sm sm:text-base text-[#4E4A45] font-light leading-relaxed mb-4">
                {story.paragraph1}
              </p>
              <p className="font-sans text-sm sm:text-base text-[#4E4A45] font-light leading-relaxed mb-8">
                {story.paragraph2}
              </p>

              {/* Editorial Pullquote */}
              <blockquote className="border-l-2 border-[#8C867F]/30 pl-4 mb-8">
                <p className="font-editorial text-lg sm:text-xl font-light italic text-[#2C2A28] leading-snug">
                  "{story.pullquote}"
                </p>
              </blockquote>

              {/* Signature */}
              <div className="flex items-center space-x-4">
                <span className="h-[1px] w-8 bg-[#8C867F]/40 inline-block" />
                <p className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#8C867F] font-medium">
                  {story.signature}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};