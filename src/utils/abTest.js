// Storage keys used in localStorage for the simulated A/B test
const VARIANT_STORAGE_KEY = 'bank_contoh_ab_variant';
const STATS_STORAGE_KEY = 'bank_contoh_ab_stats';

// Fallback content if content.json fails to load via fetch
export const FALLBACK_CONTENT = {
  variants: {
    A: {
      headline: 'Wujudkan Rumah Impian dengan Bunga KPR 3,5%',
      subtext:
        'Nikmati suku bunga promo tetap 3,5% eff. p.a. selama 3 tahun pertama bersama Bank Contoh. Pengajuan praktis 100% online.',
      buttonLabel: 'Ajukan KPR Sekarang',
      buttonColor: '#FF7A00',
    },
    B: {
      headline: 'Cicilan Rumah Mulai Rp3 Jutaan per Bulan',
      subtext:
        'Miliki hunian idaman tanpa memberatkan pengeluaran bulanan Anda. Tenor hingga 20 tahun dan simulasi cicilan gratis.',
      buttonLabel: 'Hitung Cicilanmu',
      buttonColor: '#0055B8',
    },
  },
};

// Default initial stats structure
function getDefaultStats() {
  return {
    A: { views: 0, clicks: 0 },
    B: { views: 0, clicks: 0 },
  };
}

// Determine which variant ("A" or "B") the visitor should see
export function getOrAssignVariant() {
  const params = new URLSearchParams(window.location.search);
  const urlVariant = params.get('variant')?.toUpperCase();

  // 1. Allow URL parameter ?variant=A or ?variant=B to force a specific variant
  if (urlVariant === 'A' || urlVariant === 'B') {
    try {
      localStorage.setItem(VARIANT_STORAGE_KEY, urlVariant);
    } catch (err) {
      console.warn('Could not save forced variant to localStorage:', err);
    }
    return urlVariant;
  }

  // 2. Check if visitor already has an assigned variant in localStorage
  try {
    const savedVariant = localStorage.getItem(VARIANT_STORAGE_KEY);
    if (savedVariant === 'A' || savedVariant === 'B') {
      return savedVariant;
    }
  } catch (err) {
    console.warn('Could not read variant from localStorage:', err);
  }

  // 3. First visit: randomly assign A or B (50/50 split) and save to localStorage
  const randomVariant = Math.random() < 0.5 ? 'A' : 'B';
  try {
    localStorage.setItem(VARIANT_STORAGE_KEY, randomVariant);
  } catch (err) {
    console.warn('Could not save assigned variant to localStorage:', err);
  }

  return randomVariant;
}

// Read current view and click counts from localStorage
export function getStats() {
  try {
    const raw = localStorage.getItem(STATS_STORAGE_KEY);
    if (!raw) return getDefaultStats();
    const parsed = JSON.parse(raw);
    return {
      A: {
        views: Number(parsed?.A?.views) || 0,
        clicks: Number(parsed?.A?.clicks) || 0,
      },
      B: {
        views: Number(parsed?.B?.views) || 0,
        clicks: Number(parsed?.B?.clicks) || 0,
      },
    };
  } catch (err) {
    console.warn('Could not read stats from localStorage:', err);
    return getDefaultStats();
  }
}

// Save updated stats object to localStorage
function saveStats(stats) {
  try {
    localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(stats));
  } catch (err) {
    console.warn('Could not save stats to localStorage:', err);
  }
}

// Record a page view event for the active variant
export function trackView(variant) {
  const stats = getStats();
  if (variant === 'A' || variant === 'B') {
    stats[variant].views += 1;
    saveStats(stats);
  }
  return stats;
}

// Record a CTA button click event for the active variant
export function trackClick(variant) {
  const stats = getStats();
  if (variant === 'A' || variant === 'B') {
    stats[variant].clicks += 1;
    saveStats(stats);
  }
  return stats;
}

// Reset all stored A/B test metrics in localStorage
export function resetStats() {
  const emptyStats = getDefaultStats();
  saveStats(emptyStats);
  return emptyStats;
}

// Calculate Click-Through Rate (CTR) as a formatted percentage string
export function calculateCtr(views, clicks) {
  if (!views || views <= 0) return '0.00%';
  const ctr = (clicks / views) * 100;
  return `${ctr.toFixed(2)}%`;
}

// Check if URL has ?debug=1 to display the hidden stats panel
export function isDebugMode() {
  const params = new URLSearchParams(window.location.search);
  return params.get('debug') === '1';
}

// Export current A/B test metrics as a CSV file (variant, visitors, clicks, ctr)
export function exportStatsToCsv(stats) {
  const rows = [
    ['variant', 'visitors', 'clicks', 'ctr'],
    ['A', stats.A.views, stats.A.clicks, calculateCtr(stats.A.views, stats.A.clicks)],
    ['B', stats.B.views, stats.B.clicks, calculateCtr(stats.B.views, stats.B.clicks)],
  ];

  const csvContent = rows.map((row) => row.join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'bank_contoh_kpr_ab_test.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
