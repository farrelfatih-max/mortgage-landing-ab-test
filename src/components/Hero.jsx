// Neutral architectural SVG background so no external copyrighted assets are used
const HERO_BG_SVG = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 800" width="1440" height="800">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0f172a" />
        <stop offset="50%" stop-color="#1e3a8a" />
        <stop offset="100%" stop-color="#0284c7" />
      </linearGradient>
    </defs>
    <rect width="1440" height="800" fill="url(#sky)" />
    <circle cx="1150" cy="180" r="110" fill="#ffb800" opacity="0.18" />
    <!-- Modern residential silhouette -->
    <polygon points="950,240 720,420 1180,420" fill="#38bdf8" opacity="0.22" />
    <rect x="770" y="420" width="360" height="260" rx="8" fill="#ffffff" opacity="0.12" />
    <rect x="820" y="460" width="90" height="85" rx="6" fill="#bae6fd" opacity="0.3" />
    <rect x="990" y="460" width="90" height="85" rx="6" fill="#bae6fd" opacity="0.3" />
    <rect x="915" y="555" width="75" height="125" rx="4" fill="#ffb800" opacity="0.25" />
    <rect x="1080" y="340" width="240" height="340" rx="8" fill="#ffffff" opacity="0.08" />
    <rect x="0" y="680" width="1440" height="120" fill="#0f172a" opacity="0.6" />
  </svg>
`)}`;

// Hero section driven by JSON content (headline, subtext, buttonLabel, buttonColor)
export default function Hero({ content, onCtaClick, loadError, clickFeedback }) {
  return (
    <section
      className="relative bg-slate-900 text-white overflow-hidden"
      data-purpose="hero-section"
    >
      {/* Background Illustration with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Ilustrasi Rumah Impian KPR Bank Contoh"
          className="w-full h-full object-cover object-center filter brightness-95"
          src={HERO_BG_SVG}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-ancol-blue/70 via-black/30 to-transparent"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32 lg:pt-28 lg:pb-40 flex flex-col justify-end min-h-[540px] lg:min-h-[640px]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-ancol-yellow text-slate-900 font-extrabold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4 shadow-lg shadow-black/20">
            <i className="fa-solid fa-house-circle-check text-ancol-accent"></i>
            Promo KPR Spesial Bank Contoh
          </div>

          {/* Dynamic Headline from content.json (or fallback on error) */}
          <h1
            id="hero-headline"
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 text-shadow"
          >
            {content.headline}
          </h1>

          {/* Dynamic Subtext from content.json */}
          <p
            id="hero-subtext"
            className="text-base sm:text-xl text-slate-100 font-medium leading-relaxed mb-8 text-shadow"
          >
            {content.subtext}
          </p>

          {/* Single Main CTA Button (tracked for A/B testing) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <button
              id="hero-cta-btn"
              type="button"
              onClick={onCtaClick}
              style={{ backgroundColor: content.buttonColor || '#FF7A00' }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-extrabold text-base sm:text-lg tracking-wide shadow-xl hover:brightness-110 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>{content.buttonLabel}</span>
              <i className="fa-solid fa-arrow-right text-sm"></i>
            </button>

            {clickFeedback && (
              <span className="text-xs sm:text-sm font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-3.5 py-2 rounded-lg animate-pulse">
                <i className="fa-solid fa-circle-check mr-1.5"></i>
                {clickFeedback}
              </span>
            )}
          </div>

          {loadError && (
            <p className="text-xs text-amber-300 mb-4">
              *Menampilkan konten cadangan karena content.json gagal dimuat.
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-white/90">
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10">
              <i className="fa-solid fa-bolt text-emerald-400"></i> Proses 100% Online
            </div>
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10">
              <i className="fa-solid fa-calendar-check text-ancol-yellow"></i> Tenor s.d. 20 Tahun
            </div>
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10">
              <i className="fa-solid fa-calculator text-sky-300"></i> Gratis Simulasi Cicilan
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
