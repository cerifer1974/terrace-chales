import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteData } from '../data/siteData';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navigation } = siteData;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#141d17]/85 backdrop-blur-md py-4 shadow-lg border-b border-white/10'
          : 'bg-transparent py-6 lg:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex flex-col items-start select-none">
          <span className="font-editorial text-2xl sm:text-3xl tracking-[0.18em] text-white/95 uppercase font-light leading-none transition-colors group-hover:text-white">
            {navigation.logo.primary}
          </span>
          <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.26em] text-white/70 uppercase mt-1 font-normal leading-tight">
            {navigation.logo.secondary}
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[13px] tracking-[0.14em] uppercase font-light text-white/80">
          {navigation.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 text-white/75 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white/60 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Hamburger */}
        <div className="flex items-center space-x-4">
          <a
            href={navigation.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 border border-white/40 hover:border-white text-white/90 hover:text-white text-[11px] lg:text-[12px] tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:bg-white/10 active:scale-95"
          >
            {navigation.cta.label}
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white/90 hover:text-white p-2 focus:outline-none"
            aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed inset-x-0 bottom-0 ${isScrolled ? 'top-[76px]' : 'top-[92px]'} bg-[#121914]/98 backdrop-blur-xl transition-all duration-300 flex flex-col px-8 py-10 space-y-6 text-center border-t border-white/10 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col space-y-6 pt-4">
          {navigation.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-editorial text-2xl text-white/90 hover:text-white tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10">
          <a
            href={navigation.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-block w-full py-3.5 border border-white/50 text-white text-xs tracking-[0.22em] uppercase font-medium"
          >
            {navigation.cta.label}
          </a>
        </div>
      </div>
    </header>
  );
};
