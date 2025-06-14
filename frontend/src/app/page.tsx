import CallToActionSection from "@/components/CallToActionSection";
import LnadingHeroSection from "@/components/LandingHero";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sheffield Anime Group – Join Sheffield’s Vibrant Anime Community",
  description:
    "Join Sheffield Anime Group to watch, discuss, and celebrate anime with fellow fans. Enjoy watch parties, cosplay events, quizzes, and more in the Steel City!",
  keywords: [
    "Sheffield Anime Group",
    "Anime community Sheffield",
    "Anime events Sheffield",
    "Cosplay Sheffield",
    "Anime watch parties",
    "Sheffield Discord anime",
  ],
};

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
