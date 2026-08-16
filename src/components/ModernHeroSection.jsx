import React from "react";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router";
import { useTranslation } from "react-i18next";
import { Calendar, MapPin, ChevronDown, Sparkles } from "lucide-react";
import weddingData from "../data/weddingData.json";

export default function ModernHeroSection() {
  const { t } = useTranslation(["invitationHeader", "common"]);
  const context = useOutletContext();
  const isReady = context?.isReady ?? true;

  const photoSrc =
    weddingData.assets?.heroPhoto ||
    "/fafd_compressed.webp";

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full h-[100dvh] min-h-[100dvh] flex flex-col justify-between items-center text-center px-4 sm:px-8 pt-16 sm:pt-20 pb-6 sm:pb-8 overflow-hidden select-none">
      {/* 1. Guaranteed Fullscreen Image Container */}
      <div className="absolute inset-0 w-full h-full min-w-full min-h-full overflow-hidden z-0 pointer-events-none">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={isReady ? { scale: 1 } : { scale: 1.08 }}
          transition={{ duration: 2.2, ease: [0.25, 0.1, 0.25, 1] }}
          src={photoSrc}
          alt="Ahmed & Israa Wedding"
          decoding="async"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="absolute inset-0 w-full h-full !w-full !h-full min-w-full min-h-full object-cover object-[58%_center] sm:object-center will-change-transform"
          loading="eager"
          fetchPriority="high"
        />

        {/* Ambient Vignette Shadows for Readability */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/55 via-black/15 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      </div>

      {/* 2. Top Tagline Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
        transition={{ duration: 0.85, delay: 0.15, ease: "easeOut" }}
        className="relative z-10 flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1 sm:py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/25 shadow-sm mt-2 sm:mt-0"
      >
        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-200 animate-pulse" />
        <span className="font-serif-luxury uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[9px] xs:text-[10px] sm:text-xs text-white/95 font-light">
          {t("tagline", { defaultValue: "Together with their families" })}
        </span>
      </motion.div>

      {/* 3. Center Names & Subtitle */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto px-2 w-full max-w-5xl">
        {/* Grand Script Names - Single Line */}
        <motion.h1
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={isReady ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.95, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-script text-[2.5rem] xs:text-[2.9rem] sm:text-7xl md:text-8xl lg:text-[7.8rem] font-normal leading-none text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] px-1 whitespace-nowrap"
        >
          {t("coupleName", { defaultValue: "Ahmed & Israa" })}
        </motion.h1>

        {/* Poetic Invitation Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.85, delay: 0.45, ease: "easeOut" }}
          className="font-serif-luxury italic text-xs xs:text-[13px] sm:text-base md:text-lg text-white/95 tracking-wide max-w-xs sm:max-w-md md:max-w-lg mt-2 sm:mt-3 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] px-2"
        >
          {t("message", { defaultValue: "Joyfully invite you to celebrate their wedding weekend" })}
        </motion.p>
      </div>

      {/* 4. Bottom Date, Location & Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.85, delay: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-2.5 sm:gap-3 w-full"
      >

        {/* Scroll Down Prompt Button */}
        <button
          type="button"
          onClick={scrollToContent}
          className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md border border-white/30 text-white transition-all duration-300 hover:scale-110 cursor-pointer animate-bounce mt-0.5"
          aria-label="Scroll down to invitation"
        >
          <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
        </button>
      </motion.div>
    </section>
  );
}
