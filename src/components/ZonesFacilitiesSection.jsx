import { financingTypes, requiredDocuments } from '../data/parkData';

// Section displaying KPR financing types and required application documents
export default function ZonesFacilitiesSection() {
  return (
    <section
      className="bg-slate-900 text-white py-14 sm:py-20"
      data-purpose="zones-facilities-section"
      id="dokumen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Financing Types Overview */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-ancol-yellow font-extrabold text-xs uppercase tracking-wider bg-white/10 px-3.5 py-1.5 rounded-full">
              Fleksibilitas Pembiayaan
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              Satu Fasilitas KPR untuk Beragam Kebutuhan Properti
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Bank Contoh menyediakan skema pembiayaan properti yang komprehensif dengan tenor
              hingga 20 tahun dan suku bunga kompetitif:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {financingTypes.map((type) => (
                <div key={type.name} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-ancol-yellow font-bold text-base mb-1">{type.name}</div>
                  <p className="text-xs text-slate-400">{type.description}</p>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <a
                className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-bold px-6 py-3 rounded-full text-sm transition-colors"
                href="#simulasi"
              >
                <i className="fa-solid fa-calculator text-ancol-blue"></i> Hitung Estimasi Cicilan
                Sekarang
              </a>
            </div>
          </div>

          {/* Required Documents Highlights */}
          <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <h3 className="text-lg sm:text-xl font-bold mb-6 flex items-center gap-2">
              <i className="fa-solid fa-folder-open text-ancol-yellow"></i>
              Dokumen Persyaratan Pengajuan Online
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
              {requiredDocuments.map((doc) => (
                <div key={doc.title} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl text-ancol-yellow mb-2">
                    <i className={doc.icon}></i>
                  </div>
                  <span className="text-xs font-bold">{doc.title}</span>
                  <span className="text-[11px] text-slate-400">{doc.subtitle}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-ancol-blue/40 border border-ancol-blue/50 rounded-2xl p-4 flex items-center gap-4">
              <i className="fa-solid fa-shield-halved text-2xl text-ancol-yellow"></i>
              <p className="text-xs text-slate-300">
                <strong className="text-white">Keamanan Data Terjamin:</strong> Seluruh unggahan
                dokumen digital dienkripsi secara aman untuk keperluan verifikasi simulasi KPR.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
