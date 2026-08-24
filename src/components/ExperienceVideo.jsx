import React from 'react';
import { siteData } from '../data/siteData';

export const ExperienceVideo = () => {
  const { experienceVideo } = siteData;

  return (
    /*
     * Experiência Imersiva — Um lugar para desacelerar
     * Composição editorial em 2 colunas com vídeo vertical em destaque (9:16).
     */
    <section id="experiencia-video" className="relative bg-[#FBF9F5] py-24 sm:py-32 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column (Desktop): Text Content with Generous Respite */}
          <div className="organic-shape shape-chale lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 space-y-6 sm:space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-3">
              <span className="h-[1px] w-5 bg-[#8C867F]/40 inline-block flex-shrink-0" />
              <span className="font-sans text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#7A756F] font-medium">
                {experienceVideo.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-[54px] font-light text-[#1A1918] leading-[1.08] tracking-tight">
              {experienceVideo.headlineLine1}
              <br />
              <span className="italic font-normal">{experienceVideo.headlineLine2}</span>
            </h2>

            {/* Short Description */}
            <p className="font-sans text-sm sm:text-base text-[#4E4A45] font-light leading-relaxed max-w-md">
              {experienceVideo.description}
            </p>

            {/* Subtle Editorial Accent */}
            <div className="pt-2">
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#8C867F] font-medium border-t border-[#8C867F]/20 pt-4 inline-block">
                {experienceVideo.microtext}
              </span>
            </div>
          </div>

          {/* Right Column (Desktop): Vertical Video Frame */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-[9/16] overflow-hidden shadow-2xl bg-[#1A1918]">
              {/* Video Element */}
              <video
                src={experienceVideo.video.src}
                poster={experienceVideo.video.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                aria-label={experienceVideo.video.alt}
              >
                Seu navegador não suporta a exibição de vídeos HTML5.
              </video>

              {/* Discreet atmospheric subtle gradient frame */}
              <div className="absolute inset-0 pointer-events-none ring-1 ring-black/10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
