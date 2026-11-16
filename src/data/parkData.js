// Data for the fictional "Bank Contoh" KPR (Mortgage) Landing Page

// 3 main KPR benefits cards
export const kprBenefits = [
  {
    id: 'online-process',
    popular: true,
    badge: 'Paling Praktis',
    icon: 'fa-solid fa-laptop-file',
    iconBg: 'bg-blue-100 text-ancol-blue',
    title: 'Proses 100% Online',
    description:
      'Ajukan KPR dari mana saja tanpa harus datang ke kantor cabang. Unggah dokumen persyaratan dan pantau status pengajuan secara real-time.',
    highlightLabel: 'Estimasi Verifikasi Awal',
    highlightValue: '1 - 3 Hari',
    highlightColor: 'text-ancol-blue',
    tagText: 'Tanpa Dokumen Fisik',
    tagStyle: 'text-emerald-600 bg-emerald-50',
    note: 'Tersedia layanan bantuan konsultan KPR virtual gratis',
    buttonText: 'Mulai Pengajuan Online',
    buttonStyle: 'bg-ancol-blue hover:bg-ancol-dark text-white shadow-md',
    cardBorder: 'border-2 border-ancol-blue',
  },
  {
    id: 'long-tenor',
    popular: false,
    icon: 'fa-solid fa-calendar-check',
    iconBg: 'bg-amber-100 text-ancol-accent',
    title: 'Tenor hingga 20 Tahun',
    description:
      'Atur arus kas keluarga lebih leluasa dengan pilihan jangka waktu kredit yang panjang dan fleksibel sesuai rencana keuangan Anda.',
    highlightLabel: 'Pilihan Jangka Waktu',
    highlightValue: 's.d. 20 Tahun',
    highlightColor: 'text-slate-900',
    tagText: 'Cicilan Ringan',
    tagStyle: 'text-emerald-600 bg-emerald-50',
    note: 'Opsi bunga tetap (fixed) di awal masa kredit',
    buttonText: 'Lihat Tabel Angsuran',
    buttonStyle: 'bg-slate-900 hover:bg-slate-800 text-white',
    cardBorder: 'border border-slate-200',
  },
  {
    id: 'free-simulation',
    popular: false,
    icon: 'fa-solid fa-calculator',
    iconBg: 'bg-purple-100 text-purple-600',
    title: 'Simulasi Cicilan Gratis',
    description:
      'Hitung estimasi angsuran bulanan, uang muka, dan suku bunga secara transparan sejak awal tanpa biaya komitmen apa pun.',
    highlightLabel: 'Biaya Simulasi & Konsultasi',
    highlightValue: 'Rp 0 (Gratis)',
    highlightColor: 'text-slate-900',
    tagText: '100% Transparan',
    tagStyle: 'text-purple-700 bg-purple-50',
    note: 'Rincian estimasi langsung tampil di layar Anda',
    buttonText: 'Coba Kalkulator KPR',
    buttonStyle: 'bg-slate-900 hover:bg-slate-800 text-white',
    cardBorder: 'border border-slate-200',
  },
];

// Neutral SVG data URI placeholders for property illustrations (without bottom text so badge labels never overlap)
const createHouseSvg = (bgStart, bgEnd, accent) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="600" height="360">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${bgStart}" />
          <stop offset="100%" stop-color="${bgEnd}" />
        </linearGradient>
      </defs>
      <rect width="600" height="360" fill="url(#bg)" />
      <circle cx="490" cy="80" r="42" fill="${accent}" opacity="0.25" />
      <rect x="80" y="285" width="440" height="12" rx="6" fill="#ffffff" opacity="0.2" />
      <!-- House body -->
      <polygon points="300,75 160,175 440,175" fill="${accent}" />
      <rect x="190" y="175" width="220" height="110" rx="6" fill="#ffffff" opacity="0.95" />
      <rect x="275" y="215" width="50" height="70" rx="4" fill="${bgEnd}" />
      <rect x="215" y="198" width="42" height="38" rx="4" fill="#bae6fd" />
      <rect x="343" y="198" width="42" height="38" rx="4" fill="#bae6fd" />
    </svg>
  `)}`;

export const propertyCategories = [
  { id: 'all', label: 'Semua Program KPR (6)' },
  { id: 'rumah-baru', label: 'Rumah Tapak Baru' },
  { id: 'apartemen', label: 'Apartemen & Hunian Vertikal' },
  { id: 'take-over', label: 'Take Over & Top Up' },
  { id: 'renovasi', label: 'KPR Renovasi' },
];

export const propertyPrograms = [
  {
    id: 'griya-utama',
    name: 'KPR Griya Utama',
    category: 'rumah-baru',
    badgeText: 'Bunga Spesial',
    badgeIcon: 'fa-solid fa-percent',
    badgeColor: 'bg-ancol-blue',
    zone: 'Rumah Baru & Second',
    fact: 'Bunga mulai 3,5%',
    description:
      'Pembiayaan rumah tapak baru maupun second dari developer mitra maupun non-mitra dengan bunga tetap di awal masa pinjaman.',
    requirement: 'Fixed 3 Tahun',
    requirementIcon: 'fa-solid fa-shield-halved',
    image: createHouseSvg('#003A80', '#0055B8', '#FFB800'),
    imageAlt: 'Ilustrasi Program KPR Griya Utama Bank Contoh',
  },
  {
    id: 'griya-muda',
    name: 'KPR Generasi Muda',
    category: 'rumah-baru',
    badgeText: 'Khusus Milenial',
    badgeIcon: 'fa-solid fa-user-check',
    badgeColor: 'bg-emerald-600',
    zone: 'Usia 21 - 35 Tahun',
    fact: 'DP mulai 5%',
    description:
      'Dirancang untuk profesional muda yang ingin memiliki rumah pertama dengan skema angsuran berjenjang sesuai perkembangan karier.',
    requirement: 'Tenor s.d. 20 Thn',
    requirementIcon: 'fa-solid fa-calendar-days',
    image: createHouseSvg('#065f46', '#047857', '#34d399'),
    imageAlt: 'Ilustrasi Program KPR Generasi Muda Bank Contoh',
  },
  {
    id: 'griya-apartemen',
    name: 'KPA Hunian Modern',
    category: 'apartemen',
    badgeText: 'Proses Cepat',
    badgeIcon: 'fa-solid fa-building',
    badgeColor: 'bg-sky-600',
    zone: 'Apartemen & Studio',
    fact: 'Tenor s.d. 15 Thn',
    description:
      'Solusi kepemilikan unit apartemen strategis di pusat kota untuk mendukung mobilitas kerja dengan proses persetujuan praktis.',
    requirement: 'DP mulai 10%',
    requirementIcon: 'fa-solid fa-wallet',
    image: createHouseSvg('#075985', '#0284c7', '#38bdf8'),
    imageAlt: 'Ilustrasi Program KPA Apartemen Bank Contoh',
  },
  {
    id: 'griya-takeover',
    name: 'KPR Pindah Bank (Take Over)',
    category: 'take-over',
    badgeText: 'Hemat Bunga',
    badgeIcon: 'fa-solid fa-right-left',
    badgeColor: 'bg-amber-600',
    zone: 'Refinancing KPR',
    fact: 'Bunga mulai 3,5%',
    description:
      'Pindahkan KPR berjalan Anda ke Bank Contoh untuk menikmati suku bunga promo yang lebih ringan dan opsi dana tambahan (Top Up).',
    requirement: 'Opsi Top Up Dana',
    requirementIcon: 'fa-solid fa-arrow-trend-down',
    image: createHouseSvg('#9a3412', '#ea580c', '#fbbf24'),
    imageAlt: 'Ilustrasi Program KPR Take Over Bank Contoh',
  },
  {
    id: 'griya-renovasi',
    name: 'KPR Renovasi & Bangun',
    category: 'renovasi',
    badgeText: 'Fleksibel',
    badgeIcon: 'fa-solid fa-hammer',
    badgeColor: 'bg-purple-600',
    zone: 'Pengembangan Hunian',
    fact: 'Plafon s.d. 80%',
    description:
      'Wujudkan desain ruang keluarga baru atau perluasan rumah impian dengan fasilitas pembiayaan renovasi beragunan properti.',
    requirement: 'Tenor s.d. 15 Thn',
    requirementIcon: 'fa-solid fa-house-chimney',
    image: createHouseSvg('#4c1d95', '#6d28d9', '#c084fc'),
    imageAlt: 'Ilustrasi Program KPR Renovasi Bank Contoh',
  },
  {
    id: 'griya-hijau',
    name: 'KPR Rumah Ramah Lingkungan',
    category: 'rumah-baru',
    badgeText: 'Diskon Provisi',
    badgeIcon: 'fa-solid fa-leaf',
    badgeColor: 'bg-teal-600',
    zone: 'Eco-Living Cluster',
    fact: 'Tenor s.d. 20 Thn',
    description:
      'Insentif biaya provisi khusus untuk pembelian hunian berkonsep ramah lingkungan dan hemat energi di kawasan terpadu.',
    requirement: 'Bebas Biaya Admin',
    requirementIcon: 'fa-solid fa-seedling',
    image: createHouseSvg('#115e59', '#0d9488', '#5eead4'),
    imageAlt: 'Ilustrasi Program KPR Ramah Lingkungan Bank Contoh',
  },
];

export const applicationSteps = [
  {
    id: 'step-1',
    time: 'Langkah 1',
    badgeText: '5 Menit',
    badgeClass: 'bg-amber-100 text-amber-800',
    title: 'Simulasi & Pilih Program KPR',
    description:
      'Gunakan kalkulator simulasi gratis untuk menghitung estimasi cicilan bulanan sesuai harga rumah, uang muka, dan tenor pilihan Anda.',
    location: 'Tahap Awal: Online via Website Bank Contoh',
    locationClass: 'text-slate-400',
    cardClass: 'border border-slate-200 bg-white hover:border-ancol-blue transition-colors',
  },
  {
    id: 'step-2',
    time: 'Langkah 2',
    badgeText: '100% Digital',
    badgeClass: 'bg-yellow-200 text-yellow-900',
    title: 'Isi Formulir & Unggah Dokumen',
    description:
      'Lengkapi data diri dan unggah foto dokumen persyaratan (KTP, NPWP, dan slip gaji/bukti penghasilan) langsung dari perangkat Anda.',
    location: 'Tahap Verifikasi: Tanpa Perlu ke Cabang',
    locationClass: 'text-slate-500',
    cardClass: 'border-2 border-ancol-yellow bg-amber-50/40 hover:shadow-md transition-shadow',
  },
  {
    id: 'step-3',
    time: 'Langkah 3',
    badgeText: 'Transparan',
    badgeClass: 'bg-emerald-100 text-emerald-800',
    title: 'Persetujuan & Akad Kredit',
    description:
      'Tim kami melakukan analisa kredit dan appraisal properti secara cepat hingga penandatanganan akad dan serah terima kunci.',
    location: 'Tahap Akhir: Pendampingan Notaris Resmi',
    locationClass: 'text-slate-400',
    cardClass: 'border border-slate-200 bg-white hover:border-ancol-blue transition-colors',
  },
];

export const financingTypes = [
  {
    name: 'Pembelian Rumah Baru',
    description: 'Bekerja sama dengan berbagai pengembang perumahan terpercaya.',
  },
  {
    name: 'Pembelian Rumah Second',
    description: 'Pembiayaan rumah siap huni di lokasi pilihan keluarga Anda.',
  },
  {
    name: 'Take Over KPR',
    description: 'Pindahkan KPR lama ke suku bunga promo Bank Contoh.',
  },
  {
    name: 'Top Up & Renovasi',
    description: 'Tambahan plafon untuk merenovasi dan mempercantik hunian.',
  },
];

export const requiredDocuments = [
  {
    icon: 'fa-solid fa-id-card',
    title: 'e-KTP Pemohon',
    subtitle: 'Beserta KTP Pasangan (bila menikah)',
  },
  {
    icon: 'fa-solid fa-file-invoice',
    title: 'NPWP Pribadi',
    subtitle: 'Dokumen Pajak Aktif',
  },
  {
    icon: 'fa-solid fa-file-invoice-dollar',
    title: 'Slip Gaji / Penghasilan',
    subtitle: '3 Bulan Terakhir',
  },
  {
    icon: 'fa-solid fa-building-columns',
    title: 'Rekening Koran',
    subtitle: 'Mutasi 3 Bulan Terakhir',
  },
  {
    icon: 'fa-solid fa-users-rectangle',
    title: 'Kartu Keluarga & Akta',
    subtitle: 'Buku Nikah / Akta Cerai',
  },
  {
    icon: 'fa-solid fa-file-contract',
    title: 'Dokumen Properti',
    subtitle: 'SHM/SHGB, IMB/PBG & PBB',
  },
];
