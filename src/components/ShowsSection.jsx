import { applicationSteps } from '../data/parkData';

// 3 simple steps to apply for Bank Contoh KPR online
export default function ShowsSection() {
  return (
    <section
      className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      data-purpose="application-steps"
      id="tahapan"
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-ancol-blue font-extrabold text-xs uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full">
          Alur Pengajuan Praktis
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-2">
          3 Langkah Mudah Pengajuan KPR
        </h2>
        <p className="text-slate-600 mt-2 text-sm sm:text-base">
          Proses pengajuan KPR di Bank Contoh dirancang ringkas, transparan, dan dapat dipantau
          langsung dari ponsel maupun komputer Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {applicationSteps.map((step) => (
          <div
            key={step.id}
            className={`${step.cardClass} rounded-2xl p-6 flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-ancol-accent mb-3">
                <span className="flex items-center gap-1.5">
                  <i className="fa-solid fa-circle-check"></i> {step.time}
                </span>
                <span className={`${step.badgeClass} px-2.5 py-0.5 rounded-full`}>
                  {step.badgeText}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{step.description}</p>
            </div>
            <div className={`text-xs ${step.locationClass} font-medium`}>{step.location}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
