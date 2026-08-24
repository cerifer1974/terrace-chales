import React from 'react';
import { siteData } from '../data/siteData';

export const Experience = () => {
  const { experience } = siteData;

  return (
    <section id="experiencia" className="relative bg-[#FBF9F5] py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Text */}
          <div className="organic-shape shape-experience lg:col-span-5 relative flex flex-col justify-center space-y-6 sm:space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-3">
              <span className="h-[1px] w-5 bg-[#8C867F]/40 inline-block"></span>
              <span className="font-sans text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#7A756F] font-medium">
                {experience.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-[52px] font-light text-[#1A1918] leading-[1.12] tracking-tight">
              {experience.headlinePart1} <br />
              <span className="italic font-normal">{experience.headlinePart2}</span> <br />
              {experience.headlinePart3} <br />
              {experience.headlinePart4}
            </h2>

            {/* Body Text */}
            <p className="font-sans text-sm sm:text-base text-[#4E4A45] font-light leading-relaxed max-w-md pt-2">
              {experience.description}
            </p>

            {/* Bottom Stamp / Badge */}
            <div className="pt-4 sm:pt-6">
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[#8C867F] font-medium border-t border-[#8C867F]/20 pt-4 inline-block">
                {experience.badge}
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Photo Composition with Partial Overlap */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Main Vertical Image */}
              {/* FOTO REAL DO CLIENTE: Substitua a foto principal da experiência em siteData.experience.images.main */}
              <div className="relative ml-auto w-full sm:w-4/5 md:w-3/4 aspect-[4/5] overflow-hidden shadow-2xl bg-[#EBE5DB]">
                <img
                  src={experience.images.main.src}
                  alt={experience.images.main.alt}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  width="600"
                  height="750"
                />
              </div>

              {/* Overlapping Secondary Detail Image */}
              {/* FOTO REAL DO CLIENTE: Substitua a foto secundária da experiência em siteData.experience.images.detail */}
              <div className="absolute -bottom-8 sm:-bottom-12 left-0 sm:left-4 md:left-8 w-1/2 sm:w-5/12 aspect-square overflow-hidden shadow-2xl border-4 sm:border-8 border-[#FBF9F5] bg-[#EBE5DB]">
                <img
                  src={experience.images.detail.src}
                  alt={experience.images.detail.alt}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  width="350"
                  height="350"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
