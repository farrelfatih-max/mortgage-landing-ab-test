// Simple footer with the mandatory portfolio simulation disclaimer
export default function Footer() {
  return (
    <footer
      className="bg-slate-950 text-slate-300 pt-12 pb-10 border-t border-slate-800"
      data-purpose="main-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-black text-white tracking-tight">Bank Contoh</span>
              <span className="ml-2 pl-2 border-l border-slate-700 text-sm font-black text-ancol-yellow tracking-wider uppercase">
                KPR GRIYA
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Solusi pembiayaan kepemilikan rumah (KPR) dengan proses 100% online, tenor fleksibel
              hingga 20 tahun, dan fasilitas simulasi cicilan gratis.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-medium">
            <a href="#keunggulan" className="hover:text-white transition-colors">
              Keunggulan
            </a>
            <a href="#simulasi" className="hover:text-white transition-colors">
              Simulasi
            </a>
            <a href="#program" className="hover:text-white transition-colors">
              Program
            </a>
            <a href="#dokumen" className="hover:text-white transition-colors">
              Dokumen
            </a>
          </div>
        </div>

        {/* Mandatory Portfolio Disclaimer & High-Contrast Copyright Line */}
        <div className="mt-6 bg-slate-900/90 border border-slate-800 rounded-xl p-4 text-center">
          <p className="text-xs sm:text-sm font-semibold text-amber-300">
            Halaman ini adalah project simulasi untuk portofolio, bukan penawaran resmi.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 font-medium mt-2">
            © 2026 Bank Contoh (Entitas Fiktif untuk Simulasi A/B Testing Marketing Technology).
          </p>
        </div>
      </div>
    </footer>
  );
}
