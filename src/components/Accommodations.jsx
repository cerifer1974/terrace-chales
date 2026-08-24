import React from 'react';
import { siteData } from '../data/siteData';

export const Accommodations = () => {
  const { accommodations } = siteData;

  return (
    <section id="acomodacoes" className="relative overflow-hidden bg-[#ECE7DE] py-24 sm:py-32 lg:py-40 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="organic-shape shape-accommodations mb-14 sm:mb-20 max-w-2xl">
          <div className="inline-flex items-center space-x-3 mb-4">
            <span className="h-[1px] w-5 bg-[#8C867F]/40 inline-block"></span>
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#7A756F] font-medium">
              {accommodations.eyebrow}
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-light text-[#1A1918] tracking-tight mb-4">
            {accommodations.headline}
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#5A5550] font-light max-w-xl">
            {accommodations.subheadline}
          </p>
        </div>

        {/* 2 Large Chalet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {accommodations.chalets.map((chalet) => (
            <div key={chalet.id} className="group flex flex-col">
              
              {/* Card Image Container */}
              {/* FOTO REAL DO CLIENTE: Substitua a foto correspondente em siteData.accommodations.chalets */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden bg-[#D8D2C6] mb-5 sm:mb-6 shadow-md">
                <img
                  src={chalet.image}
                  alt={chalet.imageAlt || chalet.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                  width="600"
                  height="750"
                />
              </div>

              {/* Title & Badge */}
              <div className="flex items-baseline justify-between border-b border-[#1A1918]/15 pb-3 mb-3.5">
                <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#1A1918] tracking-normal">
                  {chalet.title}
                </h3>
                <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#8C867F] font-normal">
                  {chalet.badge}
                </span>
              </div>

              {/* Amenities */}
              <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-[10px] sm:text-[11px] font-sans tracking-[0.16em] uppercase text-[#6E6862] font-medium">
                {chalet.amenities.map((amenity, index) => (
                  <span key={index} className="inline-flex items-center">
                    {amenity}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-16 sm:mt-24 flex justify-start">
          <a
            href={accommodations.ctaButton.href}
            className="inline-flex items-center justify-center px-8 py-4 border border-[#242320]/40 hover:border-[#242320] text-[#1A1918] text-xs sm:text-[13px] tracking-[0.2em] uppercase font-medium hover:bg-[#1A1918] hover:text-white transition-all duration-300 active:scale-[0.98]"
          >
            {accommodations.ctaButton.label}
          </a>
        </div>

      </div>
    </section>
  );
};
