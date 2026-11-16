// Top secondary navigation bar for Bank Contoh KPR landing page
export default function TopNav() {
  return (
    <div
      className="bg-slate-100 border-b border-slate-200 text-xs py-1.5 px-4 sm:px-8 text-slate-600 hidden md:block"
      data-purpose="secondary-nav"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <a className="hover:text-ancol-blue transition-colors font-medium" href="#keunggulan">
            KPR Individu
          </a>
          <a className="hover:text-ancol-blue transition-colors font-medium" href="#program">
            Program KPR
          </a>
          <a className="hover:text-ancol-blue transition-colors font-medium" href="#simulasi">
            Simulasi KPR Gratis
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1.5">
            <i className="fa-solid fa-clock text-ancol-blue"></i> Layanan Konsultasi Online: 08:00 -
            20:00 WIB
          </span>
          <span className="text-slate-300">|</span>
          <a
            className="hover:text-ancol-blue flex items-center gap-1.5 font-medium"
            href="#bantuan"
          >
            <i className="fa-solid fa-headset text-emerald-600 font-bold"></i> Pusat Bantuan KPR
          </a>
        </div>
      </div>
    </div>
  );
}
