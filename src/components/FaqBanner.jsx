// Banner encouraging visitors to try the free KPR simulation or read document requirements
export default function FaqBanner() {
  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20"
      data-purpose="faq-mini-banner"
      id="bantuan"
    >
      <div className="bg-gradient-to-r from-ancol-blue to-sky-700 rounded-3xl p-6 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="relative z-10 max-w-xl">
          <h3 className="text-2xl sm:text-3xl font-black mb-3">
            Ingin Tahu Estimasi Cicilan KPR Anda?
          </h3>
          <p className="text-blue-100 text-sm sm:text-base mb-6">
            Cek informasi mengenai suku bunga promo, simulasi uang muka (DP), tenor hingga 20 tahun,
            serta daftar dokumen pengajuan KPR Bank Contoh.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* Secondary navigation link to calculator (does not increment A/B CTA click counter) */}
            <a
              className="bg-white text-ancol-blue font-bold px-6 py-3 rounded-full text-sm hover:bg-slate-100 transition-colors shadow"
              href="#simulasi"
            >
              Mulai Simulasi KPR Gratis
            </a>
            <a
              className="border border-white/30 hover:bg-white/10 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors flex items-center gap-2"
              href="#dokumen"
            >
              <i className="fa-solid fa-file-circle-check text-emerald-300 text-base"></i> Lihat
              Syarat Dokumen
            </a>
          </div>
        </div>

        {/* Factual KPR Program Highlights */}
        <div className="relative z-10 flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center min-w-[240px] w-full md:w-auto">
          <span className="text-2xl sm:text-3xl font-black text-ancol-yellow mb-1">
            Bunga promo 3,5%*
          </span>
          <span className="text-base sm:text-lg font-extrabold text-white mb-2">
            Tenor s.d. 20 tahun
          </span>
          <span className="text-xs text-blue-100 font-medium">
            *Berlaku fixed 3 tahun pertama sesuai ketentuan simulasi
          </span>
        </div>
      </div>
    </section>
  );
}
