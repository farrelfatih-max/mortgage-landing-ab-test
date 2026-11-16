import { useState } from 'react';
import { propertyCategories, propertyPrograms } from '../data/parkData';

// Section showcasing KPR financing programs with category filtering and neutral SVG house placeholders
export default function RidesSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPrograms =
    activeCategory === 'all'
      ? propertyPrograms
      : propertyPrograms.filter((item) => item.category === activeCategory);

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14"
      data-purpose="kpr-programs-section"
      id="program"
    >
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-ancol-blue font-extrabold text-xs sm:text-sm uppercase tracking-wider bg-ancol-light px-3.5 py-1.5 rounded-full">
          Pilihan Produk KPR Bank Contoh
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-3 mb-4 tracking-tight">
          Solusi Tepat untuk Setiap Kebutuhan Hunian
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Mulai dari pembelian rumah pertama, apartemen di pusat kota, hingga pindah KPR (take over)
          dan renovasi rumah keluarga Anda.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-4 overflow-x-auto pb-4 custom-scrollbar mb-10 text-xs sm:text-sm font-bold">
        {propertyCategories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={
                isActive
                  ? 'px-5 py-2.5 rounded-full bg-ancol-blue text-white shadow-md shadow-ancol-blue/20 whitespace-nowrap transition-colors'
                  : 'px-5 py-2.5 rounded-full bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 whitespace-nowrap transition-colors'
              }
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {/* KPR Programs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPrograms.map((program) => (
          <article
            key={program.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                alt={program.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                src={program.image}
              />
              <div
                className={`absolute top-3 left-3 ${program.badgeColor} text-white font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow`}
              >
                <i className={`${program.badgeIcon} mr-1`}></i> {program.badgeText}
              </div>
              <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md">
                {program.zone}
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-ancol-blue transition-colors">
                    {program.name}
                  </h3>
                  <span className="text-ancol-blue bg-ancol-light px-2.5 py-0.5 rounded-full text-xs font-bold whitespace-nowrap">
                    {program.fact}
                  </span>
                </div>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{program.description}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                  <i className={`${program.requirementIcon} text-ancol-blue`}></i>{' '}
                  {program.requirement}
                </span>
                <a
                  href="#simulasi"
                  className="text-xs font-bold text-ancol-blue hover:text-ancol-dark flex items-center gap-1"
                >
                  Simulasi Program <i className="fa-solid fa-chevron-right text-[10px]"></i>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
