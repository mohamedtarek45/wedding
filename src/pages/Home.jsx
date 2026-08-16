import React from "react";
import ModernHeroSection from "../components/ModernHeroSection";
import HeroSection from "../components/HeroSection";
import InvitationHeader from "../components/InvitationHeader";
import CountdownSection from "../components/CountdownSection";
import WeddingEventDetails from "../components/WeddingEventDetails";
import AfterWeddingSection from "../components/AfterWeddingSection";
import InvitationLetterSection from "../components/InvitationLetterSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#f8f7f3] flex flex-col items-center justify-start overflow-x-hidden">
      {/* 1. Fullscreen Cinematic Luxury Hero Section */}
      <ModernHeroSection />

      {/* 2. Live Luxury Wedding Countdown */}
      <CountdownSection />

      {/* 3. Wedding Event Details */}
      <WeddingEventDetails />

      {/* 4. After Wedding Event Details */}
      <AfterWeddingSection />

      {/* 5. Final Personal Invitation Letter Section */}
      <InvitationLetterSection />
    </div>
  );
}
