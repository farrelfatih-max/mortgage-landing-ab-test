import { useState } from 'react';

// Floating KPR installment simulator bar preserving the existing 4-column card layout
export default function QuickBooking({ onSimulateClick }) {
  const [propertyPrice, setPropertyPrice] = useState(600000000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(10);
  const [tenorYears, setTenorYears] = useState(20);

  // Standard annuity (effective rate) formula: monthly = P * r / (1 - (1 + r)^(-n))
  const P = propertyPrice * (1 - downPaymentPercent / 100);
  const r = 0.035 / 12;
  const n = tenorYears * 12;
  const monthlyInstallment = (P * r) / (1 - Math.pow(1 + r, -n));
  const loanPrincipal = P;

  const formatRupiah = (num) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(num);

  return (
    <section
      className="-mt-16 sm:-mt-20 relative z-20 max-w-6xl mx-auto px-4 sm:px-6 mb-16"
      data-purpose="quick-booking-bar"
      id="simulasi"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 md:p-8">
        <div className="mb-4 pb-3 border-b border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <i className="fa-solid fa-calculator text-ancol-blue"></i>
              Simulasi Cepat Cicilan KPR Bank Contoh (Bunga Promo 3,5% p.a.)
            </h2>
            <span className="text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
              Estimasi Angsuran: {formatRupiah(monthlyInstallment)} / bulan
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Simulasi menggunakan bunga efektif 3,5% p.a. (anuitas) sebagai penyederhanaan. Bunga promo berlaku fixed 3 tahun pertama dan dapat berubah sesuai ketentuan.
          </p>
        </div>

        <form
          className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Harga Properti */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
              <i className="fa-solid fa-house text-ancol-blue mr-1"></i> Harga Properti
            </label>
            <select
              className="w-full rounded-xl border-slate-200 text-sm font-semibold text-slate-800 focus:border-ancol-blue focus:ring-ancol-blue py-3 px-3.5 bg-slate-50"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
            >
              <option value={450000000}>Rp 450.000.000</option>
              <option value={600000000}>Rp 600.000.000</option>
              <option value={850000000}>Rp 850.000.000</option>
              <option value={1200000000}>Rp 1.200.000.000</option>
              <option value={2000000000}>Rp 2.000.000.000</option>
            </select>
          </div>

          {/* Uang Muka (DP) */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
              <i className="fa-solid fa-coins text-ancol-blue mr-1"></i> Uang Muka (DP)
            </label>
            <select
              className="w-full rounded-xl border-slate-200 text-sm font-semibold text-slate-800 focus:border-ancol-blue focus:ring-ancol-blue py-3 px-3.5 bg-slate-50"
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            >
              <option value={10}>10% ({formatRupiah(propertyPrice * 0.1)})</option>
              <option value={15}>15% ({formatRupiah(propertyPrice * 0.15)})</option>
              <option value={20}>20% ({formatRupiah(propertyPrice * 0.2)})</option>
              <option value={30}>30% ({formatRupiah(propertyPrice * 0.3)})</option>
            </select>
          </div>

          {/* Tenor Pinjaman */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
              <i className="fa-regular fa-calendar-days text-ancol-blue mr-1"></i> Tenor Pinjaman
            </label>
            <select
              className="w-full rounded-xl border-slate-200 text-sm font-semibold text-slate-800 focus:border-ancol-blue focus:ring-ancol-blue py-3 px-3.5 bg-slate-50"
              value={tenorYears}
              onChange={(e) => setTenorYears(Number(e.target.value))}
            >
              <option value={5}>5 Tahun (60 Bulan)</option>
              <option value={10}>10 Tahun (120 Bulan)</option>
              <option value={15}>15 Tahun (180 Bulan)</option>
              <option value={20}>20 Tahun (240 Bulan)</option>
            </select>
          </div>

          {/* Tombol Simulasi */}
          <div className="md:self-end pt-2 md:pt-0">
            <button
              onClick={() =>
                onSimulateClick &&
                onSimulateClick({
                  propertyPrice: formatRupiah(propertyPrice),
                  loanPrincipal: formatRupiah(loanPrincipal),
                  tenorYears,
                  monthlyInstallment: formatRupiah(monthlyInstallment),
                })
              }
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-ancol-blue to-sky-600 hover:from-ancol-dark hover:to-ancol-blue text-white font-extrabold text-sm md:text-base tracking-wide shadow-lg shadow-ancol-blue/25 hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              type="button"
            >
              <i className="fa-solid fa-file-lines"></i>
              Ajukan Sesuai Simulasi
            </button>
          </div>
        </form>

        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>
              Plafon Pinjaman:{' '}
              <strong className="text-slate-700">{formatRupiah(loanPrincipal)}</strong> — Simulasi
              bersifat ilustrasi portofolio
            </span>
          </div>
          <a
            className="text-ancol-blue font-bold hover:underline flex items-center gap-1"
            href="#keunggulan"
          >
            Lihat 3 Keunggulan Utama KPR <i className="fa-solid fa-arrow-right text-[10px]"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
