import React from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import weddingData from "../data/weddingData.json";
import RoyalCornerOrnament from "./RoyalCornerOrnament";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const iconCardVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function WeddingEventDetails() {
  const { t, i18n } = useTranslation("eventDetails");
  const isRtl = i18n.language === "ar";
  const { event, assets } = weddingData;
  const chairImg =
    assets?.chairImg || "/png-elegant-floral-wedding-chair-illustration 1.webp";
  const umbrellaImg =
    assets?.umbrellaImg ||
    "/green-striped-beach-umbrella-watercolor-hand-drawn-cute-illustration-isolated-white-background 1.webp";
  const ornamentSvg = assets?.ornamentSvg || "/image.svg";

  const fadeSide = {
    hidden: { opacity: 0, x: isRtl ? 25 : -25 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="w-full relative py-6 sm:py-8 md:py-12 mb-4 md:mb-0">
      {/* 1. Green Striped Umbrella */}
      <div className="absolute left-0 -top-6 sm:-top-14 md:-top-20 w-24 xs:w-32 sm:w-44 md:w-56 lg:w-64 pointer-events-none z-0 opacity-55 sm:opacity-80 select-none animate-sway-left">
        <img
          src={umbrellaImg}
          alt={t("umbrellaAlt", { defaultValue: "Watercolor Umbrella" })}
          decoding="async"
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>

      {/* 2. Main Centered Content Container */}
      <div className="max-w-6xl mx-auto relative z-10 px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-16">
          {/* Left Side: Floral Wedding Chair */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeSide}
            className="w-full max-w-[220px] xs:max-w-[260px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] flex justify-center items-center shrink-0"
          >
            <img
              src={chairImg}
              alt={t("chairAlt", { defaultValue: "Floral Wedding Chair" })}
              decoding="async"
              className="w-full h-auto object-contain drop-shadow-md hover:scale-[1.02] transition-transform duration-700 cursor-pointer"
              loading="lazy"
            />
          </motion.div>

          {/* Right Side: Structured Wedding Day Details inside Royal Card */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={containerVariants}
            className="royal-card w-full max-w-lg rounded-2xl xs:rounded-3xl p-5 xs:p-7 sm:p-9 flex flex-col items-center justify-center text-center relative overflow-hidden"
          >
            <div className="royal-inner-border" />
            <RoyalCornerOrnament
              position="top-left"
              className="absolute top-1.5 left-1.5 xs:top-2 xs:left-2"
            />
            <RoyalCornerOrnament
              position="top-right"
              className="absolute top-1.5 right-1.5 xs:top-2 xs:right-2"
            />
            <RoyalCornerOrnament
              position="bottom-left"
              className="absolute bottom-1.5 left-1.5 xs:bottom-2 xs:left-2"
            />
            <RoyalCornerOrnament
              position="bottom-right"
              className="absolute bottom-1.5 right-1.5 xs:bottom-2 xs:right-2"
            />

            {/* Top Vintage Ornament */}
            <motion.div
              variants={fadeUp}
              className="w-20 xs:w-24 sm:w-28 h-auto mb-2 sm:mb-3 opacity-90 mx-auto"
            >
              <img
                src={ornamentSvg}
                alt={t("ornamentAlt", { defaultValue: "Vintage Ornament" })}
                decoding="async"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </motion.div>

            {/* Cursive Title */}
            <motion.h2
              variants={fadeUp}
              className="font-script text-5xl xs:text-6xl sm:text-7xl lg:text-8xl text-[#2d442c] font-normal leading-none mb-6 sm:mb-8 drop-shadow-xs"
            >
              {t("title", { defaultValue: "Wedding Day" })}
            </motion.h2>

            {/* 3-Column Icons Grid (Date, Location, Time) */}
            <motion.div
              variants={containerVariants}
              className="w-full grid grid-cols-3 gap-2 xs:gap-2.5 sm:gap-4 mb-6 sm:mb-8"
            >
              {/* Item 1: Date */}
              <motion.div
                variants={iconCardVariants}
                className="flex flex-col items-center justify-start text-center p-2.5 xs:p-3 rounded-xl xs:rounded-2xl bg-white/70 border border-[#c5a059]/25 shadow-2xs hover:border-[#c5a059]/50 "
              >
                <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#c5a059]/20 to-[#30401C]/10 border border-[#c5a059]/40 flex items-center justify-center mb-2 text-[#2d442c] shadow-xs">
                  <Calendar className="w-4 h-4 xs:w-5 xs:h-5 stroke-[1.75] text-[#785a1e]" />
                </div>
                <p className="font-century uppercase tracking-[0.08em] sm:tracking-[0.14em] text-[10px] xs:text-[11px] sm:text-xs md:text-sm text-[#2d442c] font-bold leading-tight">
                  {t("date", {
                    defaultValue: event?.formattedDate || "22 Feb 2026",
                  })}
                </p>
                <p className="font-century text-[9px] xs:text-[10px] sm:text-[11px] text-[#785a1e] font-semibold mt-0.5 sm:mt-1">
                  {t("dayOfWeek", {
                    defaultValue: event?.dayOfWeek || "Sunday",
                  })}
                </p>
              </motion.div>

              {/* Item 2: Location */}
              <motion.div
                variants={iconCardVariants}
                className="flex flex-col items-center justify-start text-center p-2.5 xs:p-3 rounded-xl xs:rounded-2xl bg-white/70 border border-[#c5a059]/25 shadow-2xs hover:border-[#c5a059]/50 "
              >
                <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#c5a059]/20 to-[#30401C]/10 border border-[#c5a059]/40 flex items-center justify-center mb-2 text-[#2d442c] shadow-xs">
                  <MapPin className="w-4 h-4 xs:w-5 xs:h-5 stroke-[1.75] text-[#785a1e]" />
                </div>
                <p className="font-century uppercase tracking-[0.08em] sm:tracking-[0.14em] text-[10px] xs:text-[11px] sm:text-xs md:text-sm text-[#2d442c] font-bold leading-tight">
                  {t("venue", { defaultValue: event?.venue || "Royal Maxim" })}
                </p>
                {Boolean(
                  event?.hall?.[isRtl ? "ar" : "en"] ||
                  (typeof event?.hall === "string" && event?.hall),
                ) && (
                  <span className="inline-block mt-0.5 px-1.5 py-0.2 rounded-full bg-[#c5a059]/15 text-[#785a1e] font-century text-[9px] xs:text-[10px] font-bold">
                    {event?.hall?.[isRtl ? "ar" : "en"] || event?.hall}
                  </span>
                )}
                <p className="font-century text-[9px] xs:text-[10px] sm:text-[11px] text-[#364f33]/80 mt-0.5">
                  {t("venueLocation", {
                    defaultValue: event?.venueLocation || "Cairo, Egypt",
                  })}
                </p>
              </motion.div>

              {/* Item 3: Time */}
              <motion.div
                variants={iconCardVariants}
                className="flex flex-col items-center justify-start text-center p-2.5 xs:p-3 rounded-xl xs:rounded-2xl bg-white/70 border border-[#c5a059]/25 shadow-2xs hover:border-[#c5a059]/50 "
              >
                <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#c5a059]/20 to-[#30401C]/10 border border-[#c5a059]/40 flex items-center justify-center mb-2 text-[#2d442c] shadow-xs">
                  <Clock className="w-4 h-4 xs:w-5 xs:h-5 stroke-[1.75] text-[#785a1e]" />
                </div>
                <p className="font-century uppercase tracking-[0.08em] sm:tracking-[0.14em] text-[10px] xs:text-[11px] sm:text-xs md:text-sm text-[#2d442c] font-bold leading-tight">
                  {t("time", { defaultValue: event?.time || "At 6:30 PM" })}
                </p>
                <p className="font-century text-[9px] xs:text-[10px] sm:text-[11px] text-[#785a1e] font-semibold mt-0.5 sm:mt-1">
                  {t("timeLabel", {
                    defaultValue: event?.timeLabel || "Ceremony",
                  })}
                </p>
              </motion.div>
            </motion.div>

            {/* Location on Map Button */}
            <motion.div variants={fadeUp} className="mt-1">
              <a
                href={event?.mapUrl || "https://maps.google.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#283a27] hover:bg-[#1d2c1c] text-[#f8f7f3] text-xs sm:text-sm font-century px-6 sm:px-10 py-2.5 sm:py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer border border-[#c5a059]/40"
              >
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#e5cf9b]" />
                <span>
                  {t("mapButtonText", { defaultValue: "الموقع على الخريطة" })}
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
