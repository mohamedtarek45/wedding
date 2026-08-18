import React from "react";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router";
import { useTranslation } from "react-i18next";
import { Calendar, MapPin, ChevronDown, Sparkles } from "lucide-react";
import weddingData from "../data/weddingData.json";
import RoyalCornerOrnament from "./RoyalCornerOrnament";

export default function ModernHeroSection() {
  const { t, i18n } = useTranslation(["invitationHeader", "common", "eventDetails"]);
  const isRtl = i18n.language === "ar";
  const context = useOutletContext();
  const isReady = context?.isReady ?? true;

  const photoSrc =
    weddingData.assets?.heroPhoto ||
    "/fafd_compressed.webp";

  const event = weddingData.event || {};
  const formattedDate = event.formattedDate?.[isRtl ? "ar" : "en"] || event.formattedDate || (isRtl ? "22 أغسطس 2026" : "22 Aug 2026");

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full h-[100dvh] min-h-[100dvh] flex flex-col justify-between items-center text-center px-4 sm:px-8 pt-12 sm:pt-16 pb-6 sm:pb-8 overflow-hidden select-none">
      {/* 1. Fullscreen Image Container */}
      <div className="absolute inset-0 w-full h-full min-w-full min-h-full overflow-hidden z-0 pointer-events-none">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={isReady ? { scale: 1 } : { scale: 1.08 }}
          transition={{ duration: 2.2, ease: [0.25, 0.1, 0.25, 1] }}
          src={photoSrc}
          alt="Ahmed & Israa Wedding"
          decoding="async"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="absolute inset-0 w-full h-full !w-full !h-full min-w-full min-h-full object-cover object-[48%_center] sm:object-center will-change-transform"
          loading="eager"
          fetchPriority="high"
        />

        {/* Ambient Vignette Shadows for Readability */}
        <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-72 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* 2. Royal Luxury Inset Frame for Mobile & Desktop */}
      <div className="absolute inset-3 xs:inset-4 sm:inset-6 border border-[#c5a059]/45 ring-1 ring-white/20 rounded-2xl sm:rounded-3xl pointer-events-none z-10">
        <div className="absolute inset-1.5 sm:inset-2 border border-dashed border-[#c5a059]/30 rounded-xl sm:rounded-2xl" />
        <RoyalCornerOrnament position="top-left" className="absolute top-1 left-1 text-[#e5cf9b] opacity-85" />
        <RoyalCornerOrnament position="top-right" className="absolute top-1 right-1 text-[#e5cf9b] opacity-85" />
        <RoyalCornerOrnament position="bottom-left" className="absolute bottom-1 left-1 text-[#e5cf9b] opacity-85" />
        <RoyalCornerOrnament position="bottom-right" className="absolute bottom-1 right-1 text-[#e5cf9b] opacity-85" />
      </div>

      {/* 3. Top Tagline Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
        transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
        className="relative z-10 flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-[#c5a059]/50 shadow-md mt-2 sm:mt-0"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#e5cf9b] animate-pulse" />
        <span className="font-serif-luxury uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[10px] xs:text-[11px] sm:text-xs text-white/95 font-medium">
          {t("tagline", { defaultValue: "Together with their families" })}
        </span>
      </motion.div>

      {/* 4. Center Names & Subtitle */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto px-2 w-full max-w-5xl">
        {/* Grand Script Names */}
        <motion.h1
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={isReady ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.95, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-script text-[2.7rem] xs:text-[3.2rem] sm:text-7xl md:text-8xl lg:text-[7.8rem] font-normal leading-none text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] px-1 whitespace-nowrap"
        >
          {t("coupleName", { defaultValue: "Ahmed & Israa" })}
        </motion.h1>

        {/* Poetic Invitation Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.85, delay: 0.45, ease: "easeOut" }}
          className="font-serif-luxury italic text-xs xs:text-[13px] sm:text-base md:text-lg text-white/95 tracking-wide max-w-xs sm:max-w-md md:max-w-lg mt-2 sm:mt-3 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] px-2"
        >
          {t("message", { defaultValue: "Joyfully invite you to celebrate their wedding weekend" })}
        </motion.p>

        {/* Date Highlight Badge on Hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.75, delay: 0.55, ease: "easeOut" }}
          className="mt-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-[#c5a059]/40 text-[#f8f7f3] text-[11px] xs:text-xs font-century shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5 text-[#e5cf9b]" />
          <span>{formattedDate}</span>
        </motion.div>
      </div>

      {/* 5. Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.85, delay: 0.65, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-2 w-full"
      >
        <button
          type="button"
          onClick={scrollToContent}
          className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/25 hover:bg-white/40 backdrop-blur-md border border-[#c5a059]/50 text-white transition-all duration-300 hover:scale-110 cursor-pointer animate-bounce shadow-md"
          aria-label="Scroll down to invitation"
        >
          <ChevronDown className="w-4 h-4 stroke-[2.2] text-[#e5cf9b]" />
        </button>
      </motion.div>
    </section>
  );
}
