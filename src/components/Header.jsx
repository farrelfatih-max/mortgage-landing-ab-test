import { useState } from 'react';

// Sticky main header with fictional "Bank Contoh" branding and responsive mobile menu
export default function Header({ variant, debugVisible }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm"
      data-purpose="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo Area (Fictional Bank Contoh) */}
          <div className="flex items-center space-x-3 shrink-0">
            <a className="flex items-center gap-2 group" href="#">
              <div className="w-9 h-9 rounded-xl bg-ancol-blue text-white flex items-center justify-center font-black text-lg shadow-sm">
                <i className="fa-solid fa-house-chimney"></i>
              </div>
              <div className="flex items-center">
                <span className="text-xl sm:text-2xl font-black text-ancol-blue tracking-tight whitespace-nowrap">
                  Bank Contoh
                </span>
                <span className="ml-2 pl-2 border-l-2 border-slate-200 text-xs sm:text-sm font-black text-ancol-accent tracking-wider uppercase whitespace-nowrap">
                  KPR GRIYA
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links (Shortened labels so each stays on one line) */}
          <nav
            className="hidden lg:flex items-center space-x-6 font-semibold text-slate-700 text-sm whitespace-nowrap"
            data-purpose="nav-links"
          >
            <a className="hover:text-ancol-blue transition-colors" href="#keunggulan">
              Keunggulan
            </a>
            <a className="hover:text-ancol-blue transition-colors" href="#simulasi">
              Simulasi
            </a>
            <a className="hover:text-ancol-blue transition-colors" href="#program">
              Program
            </a>
            <a className="hover:text-ancol-blue transition-colors" href="#tahapan">
              Pengajuan
            </a>
            <a className="hover:text-ancol-blue transition-colors" href="#dokumen">
              Dokumen
            </a>
          </nav>

          {/* Right Utility Buttons */}
          <div className="flex items-center space-x-3 sm:space-x-4 shrink-0">
            {/* Variant Badge visible ONLY when ?debug=1 is present in URL */}
            {debugVisible && (
              <span
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 whitespace-nowrap"
                title="Varian A/B Test Aktif (Debug Mode)"
              >
                <i className="fa-solid fa-flask text-ancol-blue"></i>
                <span>Varian {variant}</span>
              </span>
            )}

            {/* CTA Quick Link */}
            <a
              className="inline-flex items-center gap-2 border-2 border-ancol-blue text-ancol-blue hover:bg-ancol-blue hover:text-white px-4 sm:px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition duration-200 whitespace-nowrap"
              href="#simulasi"
            >
              <i className="fa-solid fa-calculator text-xs"></i>
              <span>Kalkulator</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              aria-label="Buka Menu Navigasi"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-2xl text-slate-700 p-2 focus:outline-none"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <div className="px-3 py-1.5 text-xs font-bold text-slate-500 flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
            <span>Menu Navigasi Bank Contoh</span>
            {debugVisible && (
              <span className="bg-slate-100 text-ancol-blue px-2 py-0.5 rounded-full">
                Varian {variant}
              </span>
            )}
          </div>
          <a
            href="#keunggulan"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-slate-700 hover:bg-slate-50 hover:text-ancol-blue"
          >
            Keunggulan
          </a>
          <a
            href="#simulasi"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-slate-700 hover:bg-slate-50 hover:text-ancol-blue"
          >
            Simulasi
          </a>
          <a
            href="#program"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-slate-700 hover:bg-slate-50 hover:text-ancol-blue"
          >
            Program
          </a>
          <a
            href="#tahapan"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-slate-700 hover:bg-slate-50 hover:text-ancol-blue"
          >
            Pengajuan
          </a>
          <a
            href="#dokumen"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg font-semibold text-slate-700 hover:bg-slate-50 hover:text-ancol-blue"
          >
            Dokumen
          </a>
        </div>
      )}
    </header>
  );
}
