import React from 'react';
import { siteData } from '../data/siteData';

export const Footer = () => {
  const { footer } = siteData;

  return (
    /*
     * Footer — simples, elegante, compacto.
     * Fundo escuro (verde floresta/carvão do Hero), tipografia editorial.
     * Uma única coluna fluida, sem estrutura corporativa pesada.
     */
    <footer className="relative bg-[#141d17] text-white overflow-hidden">
      {/* Subtle top accent line */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-t border-white/10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">

          {/* Brand + Contact */}
          <div className="space-y-6 lg:col-span-1">
            <div className="space-y-1">
              <span className="font-editorial text-2xl sm:text-3xl tracking-[0.18em] text-white/95 uppercase font-light leading-none">
                {footer.logo.primary}
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.26em] text-white/60 uppercase block font-normal leading-tight">
                {footer.logo.secondary}
              </span>
            </div>

            <p className="font-sans text-[11px] sm:text-xs tracking-[0.22em] uppercase text-white/50 font-medium">
              {footer.location}
            </p>

            {/* Contato — bloco agrupado com título no estilo dos eyebrows do Footer */}
            <div className="space-y-3 pt-2 border-t border-white/10">
              <p className="font-sans text-[11px] sm:text-xs tracking-[0.22em] uppercase text-white/50 font-medium">
                Contato
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="tel:+5535987000736"
                    className="inline-block py-1 font-sans text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {footer.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${footer.contact.email}`}
                    className="inline-block py-1 font-sans text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {footer.contact.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Instagram */}
            <a
              href={footer.social.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 pt-2 text-white/70 hover:text-white transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="font-sans text-sm tracking-[0.16em] uppercase">{footer.social.instagram.label}</span>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4 lg:col-start-2 lg:col-span-1" aria-label="Navegação do site">
            <p className="font-sans text-[11px] sm:text-xs tracking-[0.22em] uppercase text-white/50 font-medium">Navegação</p>
            <ul className="space-y-3">
              {footer.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="font-editorial text-lg sm:text-xl text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Reservas CTA */}
          <div className="lg:col-start-3 lg:col-span-1 space-y-4 text-right">
            <p className="font-sans text-[11px] sm:text-xs tracking-[0.22em] uppercase text-white/50 font-medium">Reservas</p>
            <a
              href={footer.reserveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-end px-6 py-3 border border-white/40 hover:border-white text-white/90 hover:text-white text-xs sm:text-[13px] tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
            >
              VER DISPONIBILIDADE
            </a>
            <p className="font-sans text-[11px] sm:text-xs tracking-[0.16em] uppercase text-white/40 font-normal">
              Powered by Cloudbeds
            </p>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10">
          <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-white/40 text-center font-normal">
            {footer.logo.primary} Chalés — {footer.location}
          </p>
        </div>
      </div>
    </footer>
  );
};