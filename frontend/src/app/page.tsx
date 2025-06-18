import CallToActionSection from "@/components/CallToActionSection";
import LnadingHeroSection from "@/components/LandingHero";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import { sagMetaData } from "@/metaData";
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
  openGraph: {
    title: "Sheffield Anime Group – Join Sheffield's Vibrant Anime Community",
    description:
      "Join Sheffield Anime Group to watch, discuss, and celebrate anime with fellow fans. Enjoy watch parties, cosplay events, quizzes, and more in the Steel City!",
    type: "website",
    locale: "en_GB",
    url: sagMetaData.siteUrl,
    siteName: "Sheffield Anime Group",
    images: [
      {
        url: "/og_img.png",
        width: 1200,
        height: 630,
        alt: "Sheffield Anime Group - Join Sheffield's anime community for watch parties, cosplay events, and more",
      },
    ],
  },
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
