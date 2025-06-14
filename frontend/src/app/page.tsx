import CallToActionSection from "@/components/CallToActionSection";
import LnadingHeroSection from "@/components/LandingHero";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <LnadingHeroSection />
      <WhatWeDoSection />
      <CallToActionSection />
      <UpcomingEventsSection />
    </div>
  );
}
