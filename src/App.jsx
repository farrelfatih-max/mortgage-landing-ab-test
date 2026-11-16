import { useEffect, useState } from 'react';
import TopNav from './components/TopNav';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickBooking from './components/QuickBooking';
import PromoSection from './components/PromoSection';
import RidesSection from './components/RidesSection';
import ShowsSection from './components/ShowsSection';
import ZonesFacilitiesSection from './components/ZonesFacilitiesSection';
import FaqBanner from './components/FaqBanner';
import Footer from './components/Footer';
import DebugPanel from './components/DebugPanel';
import {
  FALLBACK_CONTENT,
  getOrAssignVariant,
  getStats,
  isDebugMode,
  resetStats,
  trackClick,
  trackView,
} from './utils/abTest';

// Guard to prevent React StrictMode in dev from counting 2 views on a single page load
let hasTrackedPageView = false;

export default function App() {
  const [variant, setVariant] = useState(() => getOrAssignVariant());
  const [contentData, setContentData] = useState(FALLBACK_CONTENT);
  const [loadError, setLoadError] = useState(false);
  const [stats, setStats] = useState(() => getStats());
  const [debugVisible] = useState(() => isDebugMode());
  const [clickFeedback, setClickFeedback] = useState('');

  // Track page view once on initial load and fetch variant copy from content.json
  useEffect(() => {
    const activeVariant = getOrAssignVariant();
    setVariant(activeVariant);

    if (!hasTrackedPageView) {
      hasTrackedPageView = true;
      const updatedStats = trackView(activeVariant);
      setStats(updatedStats);
    }

    // Load variant copy from content.json via fetch
    fetch('./content.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        if (json && json.variants && json.variants.A && json.variants.B) {
          setContentData(json);
          setLoadError(false);
        } else {
          throw new Error('Invalid content.json schema');
        }
      })
      .catch((err) => {
        console.warn('Failed to load content.json, using fallback copy:', err);
        setContentData(FALLBACK_CONTENT);
        setLoadError(true);
      });
  }, []);

  // Only the main Hero CTA button counts as a "click" event for the A/B test.
  // Secondary buttons (calculator, benefits, or footer links) do not increment the click counter
  // so conversion attribution directly measures the Hero headline/subtext/CTA experiment.
  const handleHeroCtaClick = () => {
    const updatedStats = trackClick(variant);
    setStats(updatedStats);
    setClickFeedback(`Klik CTA Varian ${variant} tercatat!`);

    const simSection = document.getElementById('simulasi');
    if (simSection) {
      simSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Secondary interaction handlers (do NOT increment the A/B click counter)
  const handleSimulateInfo = (summary) => {
    setClickFeedback(
      `Simulasi dipilih: Cicilan ${summary.monthlyInstallment}/bln (${summary.tenorYears} thn)`
    );
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBenefitAction = (benefitTitle) => {
    const simSection = document.getElementById('simulasi');
    if (simSection) {
      simSection.scrollIntoView({ behavior: 'smooth' });
    }
    setClickFeedback(`Info dipilih: ${benefitTitle}`);
  };

  // Reset stored A/B stats in localStorage from the debug panel
  const handleResetStats = () => {
    const cleared = resetStats();
    setStats(cleared);
    setClickFeedback('');
  };

  const activeContent =
    contentData?.variants?.[variant] ||
    FALLBACK_CONTENT.variants[variant] ||
    FALLBACK_CONTENT.variants.A;

  return (
    <div className={`antialiased min-h-screen flex flex-col ${debugVisible ? 'pb-24' : ''}`}>
      <TopNav />
      <Header variant={variant} debugVisible={debugVisible} />
      <main className="flex-grow">
        <Hero
          content={activeContent}
          onCtaClick={handleHeroCtaClick}
          loadError={loadError}
          clickFeedback={clickFeedback}
        />
        <QuickBooking onSimulateClick={handleSimulateInfo} />
        <PromoSection onBenefitAction={handleBenefitAction} />
        <RidesSection />
        <ShowsSection />
        <ZonesFacilitiesSection />
        <FaqBanner />
      </main>
      <Footer />
      {debugVisible && (
        <DebugPanel activeVariant={variant} stats={stats} onReset={handleResetStats} />
      )}
    </div>
  );
}
