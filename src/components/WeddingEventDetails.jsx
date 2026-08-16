import React from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation  } from "react-i18next";
import weddingData from "../data/weddingData.json";

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
  hidden: { opacity: 0, y: 15, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function WeddingEventDetails() {
  const { t , i18n } = useTranslation("eventDetails");
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
    <section className="w-full relative py-4 sm:py-6 md:py-8 mb-8 md:mb-0">
      {/* 1. Green Striped Umbrella - ultra-subtle sway */}
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
      <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {/* Left Side: Floral Wedding Chair (Animates when scrolled to) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeSide}
            className="w-full max-w-[240px] xs:max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] flex justify-center items-center shrink-0"
          >
            <img
              src={chairImg}
              alt={t("chairAlt", { defaultValue: "Floral Wedding Chair" })}
              decoding="async"
              className="w-full h-auto object-contain drop-shadow-md hover:scale-[1.02] transition-transform duration-700 cursor-pointer"
              loading="lazy"
            />
          </motion.div>

          {/* Right Side: Structured Wedding Day Details (Animates when scrolled to) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
            className="flex flex-col items-center justify-center text-center max-w-lg w-full py-2 sm:py-4"
          >
            {/* Top Vintage Ornament */}
            <motion.div
              variants={fadeUp}
              className="w-20 xs:w-24 sm:w-28 md:w-32 h-auto mb-2 sm:mb-3 opacity-90"
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
              className="font-script text-5xl xs:text-6xl sm:text-7xl lg:text-8xl text-[#2d442c] font-normal leading-none mb-6 sm:mb-8 md:mb-10 drop-shadow-xs"
            >
              {t("title", { defaultValue: "Wedding Day" })}
            </motion.h2>

            {/* 3-Column Icons Grid (Date, Location, Time) */}
            <motion.div
              variants={containerVariants}
              className="w-full grid grid-cols-3 gap-2 xs:gap-3 sm:gap-6 lg:gap-8 mb-8 sm:mb-10"
            >
              {/* Item 1: Date */}
              <motion.div
                variants={iconCardVariants}
                className="flex flex-col items-center justify-start text-center p-2 rounded-2xl hover:bg-[#30401C]/5 hover:-translate-y-1 cursor-default"
              >
                <div className="w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full bg-[#30401C]/8 flex items-center justify-center mb-2 sm:mb-3 text-[#2d442c] shadow-xs">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                </div>
                <p className="font-century uppercase tracking-[0.08em] sm:tracking-[0.16em] text-[11px] xs:text-xs sm:text-sm md:text-base text-[#2d442c] font-semibold leading-tight">
                  {t("date", {
                    defaultValue: event?.formattedDate || "22 Feb 2026",
                  })}
                </p>
                <p className="font-century text-[10px] xs:text-[11px] sm:text-xs text-[#2d442c]/75 mt-0.5 sm:mt-1">
                  {t("dayOfWeek", {
                    defaultValue: event?.dayOfWeek || "Sunday",
                  })}
                </p>
              </motion.div>

              {/* Item 2: Location */}
              <motion.div
                variants={iconCardVariants}
                className="flex flex-col items-center justify-start text-center p-2 rounded-2xl hover:bg-[#30401C]/5 hover:-translate-y-1 cursor-default"
              >
                <div className="w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full bg-[#30401C]/8 flex items-center justify-center mb-2 sm:mb-3 text-[#2d442c] shadow-xs">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                </div>
                <p className="font-century uppercase tracking-[0.08em] sm:tracking-[0.14em] text-[11px] xs:text-xs sm:text-sm md:text-base text-[#2d442c] font-medium leading-tight">
                  {t("venue", { defaultValue: event?.venue || "Royal Maxim" })}
                </p>
                <p className="font-century text-[10px] xs:text-[11px] sm:text-xs text-[#2d442c]/75 mt-0.5 sm:mt-1">
                  {t("venueLocation", {
                    defaultValue: event?.venueLocation || "Cairo, Egypt",
                  })}
                </p>
              </motion.div>

              {/* Item 3: Time */}
              <motion.div
                variants={iconCardVariants}
                className="flex flex-col items-center justify-start text-center p-2 rounded-2xl hover:bg-[#30401C]/5 hover:-translate-y-1 cursor-default"
              >
                <div className="w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full bg-[#30401C]/8 flex items-center justify-center mb-2 sm:mb-3 text-[#2d442c] shadow-xs">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                </div>
                <p className="font-century uppercase tracking-[0.08em] sm:tracking-[0.16em] text-[11px] xs:text-xs sm:text-sm md:text-base text-[#2d442c] font-medium leading-tight">
                  {t("time", { defaultValue: event?.time || "At 6:30 PM" })}
                </p>
                <p className="font-century text-[10px] xs:text-[11px] sm:text-xs text-[#2d442c]/75 mt-0.5 sm:mt-1">
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
                className="inline-flex items-center justify-center gap-2.5 bg-[#283a27] hover:bg-[#1d2c1c] text-[#f8f7f3] text-xs sm:text-sm font-century px-7 sm:px-11 py-3 sm:py-3.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer tracking-wider"
              >
                <MapPin className="w-4 h-4" />
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
