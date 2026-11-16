import { kprBenefits } from '../data/parkData';

// Benefits section with 3 cards (100% online process, tenor up to 20 years, free installment simulation)
export default function PromoSection({ onBenefitAction }) {
  return (
    <section
      className="bg-gradient-to-b from-slate-50 to-blue-50/50 py-14 sm:py-20 border-y border-slate-200"
      data-purpose="benefits-section"
      id="keunggulan"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-ancol-accent font-extrabold text-xs uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
              Keunggulan KPR Bank Contoh
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-2">
              Mengapa Memilih KPR di Bank Contoh?
            </h2>
            <p className="text-slate-600 mt-1 text-sm sm:text-base">
              Kemudahan pembiayaan rumah impian dengan proses modern, tenor panjang, dan transparan.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-xs text-slate-500 font-medium">
              *Simulasi ketentuan program KPR Bank Contoh
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kprBenefits.map((benefit) => (
            <div
              key={benefit.id}
              id={benefit.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all ${benefit.cardBorder} relative flex flex-col justify-between`}
            >
              {benefit.popular && (
                <div className="absolute -top-3.5 right-6 bg-ancol-blue text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                  {benefit.badge}
                </div>
              )}
              <div>
                <div
                  className={`w-12 h-12 ${benefit.iconBg} rounded-2xl flex items-center justify-center text-xl mb-4 font-bold`}
                >
                  <i className={benefit.icon}></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{benefit.description}</p>
                <div className="mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-xs text-slate-500 font-medium mb-1">
                    {benefit.highlightLabel}
                  </div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className={`text-2xl sm:text-3xl font-black ${benefit.highlightColor}`}>
                      {benefit.highlightValue}
                    </span>
                    <span className={`text-xs font-bold ${benefit.tagStyle} px-2 py-0.5 rounded`}>
                      {benefit.tagText}
                    </span>
                  </div>
                  <span className="block text-[11px] text-slate-500 mt-1">{benefit.note}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onBenefitAction && onBenefitAction(benefit.title)}
                className={`w-full py-3.5 rounded-xl ${benefit.buttonStyle} font-bold text-sm transition-colors cursor-pointer`}
              >
                {benefit.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
