import { calculateCtr, exportStatsToCsv } from '../utils/abTest';

// Hidden debug panel shown at the bottom of the page ONLY when URL contains ?debug=1
export default function DebugPanel({ activeVariant, stats, onReset }) {
  const ctrA = calculateCtr(stats.A.views, stats.A.clicks);
  const ctrB = calculateCtr(stats.B.views, stats.B.clicks);

  return (
    <aside
      aria-label="A/B Test Debug Stats Panel"
      className="fixed bottom-0 inset-x-0 z-50 bg-slate-900/95 backdrop-blur-md text-white border-t-2 border-ancol-yellow shadow-2xl px-4 py-3 sm:px-6"
      data-purpose="ab-debug-panel"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
        {/* Header & Active Variant Info */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="bg-ancol-yellow text-slate-950 text-xs font-black px-2.5 py-1 rounded uppercase tracking-wider">
            <i className="fa-solid fa-bug mr-1"></i> Debug Mode (?debug=1)
          </span>
          <span className="text-xs sm:text-sm text-slate-300">
            Active Variant:{' '}
            <strong className="text-white bg-ancol-blue px-2 py-0.5 rounded">
              Variant {activeVariant}
            </strong>
          </span>
          <div className="text-[11px] text-slate-400 flex items-center gap-2 ml-1">
            <a href="?variant=A&debug=1" className="underline hover:text-white">
              Force A
            </a>
            <span>|</span>
            <a href="?variant=B&debug=1" className="underline hover:text-white">
              Force B
            </a>
          </div>
        </div>

        {/* Metrics Table for Variant A & Variant B */}
        <div className="grid grid-cols-2 gap-3 w-full lg:w-auto text-xs">
          <div
            className={`rounded-lg px-3 py-2 border ${
              activeVariant === 'A'
                ? 'bg-slate-800 border-ancol-yellow'
                : 'bg-slate-800/60 border-slate-700'
            }`}
          >
            <div className="font-bold text-ancol-yellow mb-0.5">Variant A (Bunga 3,5%)</div>
            <div className="text-slate-300 flex flex-wrap gap-x-3 gap-y-0.5">
              <span>
                Views: <strong className="text-white">{stats.A.views}</strong>
              </span>
              <span>
                Clicks: <strong className="text-white">{stats.A.clicks}</strong>
              </span>
              <span>
                CTR: <strong className="text-emerald-400">{ctrA}</strong>
              </span>
            </div>
          </div>

          <div
            className={`rounded-lg px-3 py-2 border ${
              activeVariant === 'B'
                ? 'bg-slate-800 border-ancol-yellow'
                : 'bg-slate-800/60 border-slate-700'
            }`}
          >
            <div className="font-bold text-sky-300 mb-0.5">Variant B (Cicilan Rp3 Jt)</div>
            <div className="text-slate-300 flex flex-wrap gap-x-3 gap-y-0.5">
              <span>
                Views: <strong className="text-white">{stats.B.views}</strong>
              </span>
              <span>
                Clicks: <strong className="text-white">{stats.B.clicks}</strong>
              </span>
              <span>
                CTR: <strong className="text-emerald-400">{ctrB}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Actions: Download CSV & Reset Data */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={() => exportStatsToCsv(stats)}
            className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3.5 py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <i className="fa-solid fa-download"></i>
            <span>Download CSV</span>
          </button>
          <button
            type="button"
            onClick={onReset}
            className="flex-1 sm:flex-initial bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs px-3.5 py-2 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <i className="fa-solid fa-rotate-left"></i>
            <span>Reset data</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
