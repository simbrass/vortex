import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EnglishNavigation } from '@/components/EnglishNavigation';
import { EnglishFooter } from '@/components/EnglishFooter';
import { EnglishHero } from '@/sections/EnglishHero';
import { EnglishServices } from '@/sections/EnglishServices';
import { EnglishProcess } from '@/sections/EnglishProcess';
import { EnglishProjects } from '@/sections/EnglishProjects';
import { EnglishCoverage } from '@/sections/EnglishCoverage';
import { EnglishTestimonials } from '@/sections/EnglishTestimonials';
import { EnglishEmergency } from '@/sections/EnglishEmergency';
import { EnglishFAQ } from '@/sections/EnglishFAQ';
import { EnglishContact } from '@/sections/EnglishContact';

gsap.registerPlugin(ScrollTrigger);

interface PinnedRange {
  start: number;
  end: number;
  center: number;
}

export function EnglishHomePage() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      const pinned = ScrollTrigger.getAll()
        .filter((st) => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges: PinnedRange[] = pinned.map((st) => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(
              (r) => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            
            if (!inPinned) return value;

            const target = pinnedRanges.reduce(
              (closest: number, r: PinnedRange) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0
            );

            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        },
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-off-white">
      <EnglishNavigation />
      <main className="relative">
        <EnglishHero />
        <EnglishServices />
        <EnglishProcess />
        <EnglishProjects />
        <EnglishCoverage />
        <EnglishTestimonials />
        <EnglishEmergency />
        <EnglishFAQ />
        <EnglishContact />
      </main>
      <EnglishFooter />
    </div>
  );
}
