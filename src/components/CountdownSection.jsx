import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Clock, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import weddingData from "../data/weddingData.json";
import RoyalCornerOrnament from "./RoyalCornerOrnament";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function CountdownSection() {
  const { t } = useTranslation("countdown");
  const ornamentSvg = weddingData.assets?.ornamentSvg || "/image.svg";

  // Target date dynamically from weddingData.json (Egypt Time GMT+3)
  const calculateTimeLeft = () => {
    const rawDate = weddingData.event?.isoDate || "2026-08-22T18:30:00+03:00";
    // Ensure Cairo Time offset (+03:00) if not already specified
    const dateWithTimezone =
      rawDate.includes("+") ||
      rawDate.includes("Z") ||
      rawDate.includes("-", 10)
        ? rawDate
        : `${rawDate}+03:00`;
    const targetDate = new Date(dateWithTimezone).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isCompleted: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, "0");

  const timeUnits = [
    {
      label: t("days", { defaultValue: "Days" }),
      value: formatNumber(timeLeft.days),
    },
    {
      label: t("hours", { defaultValue: "Hours" }),
      value: formatNumber(timeLeft.hours),
    },
    {
      label: t("minutes", { defaultValue: "Minutes" }),
      value: formatNumber(timeLeft.minutes),
    },
    {
      label: t("seconds", { defaultValue: "Seconds" }),
      value: formatNumber(timeLeft.seconds),
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants}
      className="w-full relative py-8 sm:py-12 md:py-14 px-3 xs:px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center overflow-hidden z-10 max-w-4xl mx-auto"
    >
      {/* Royal Framed Stationery Card */}
      <div className="royal-card w-full rounded-2xl xs:rounded-3xl p-5 xs:p-7 sm:p-10 md:p-12 relative overflow-hidden">
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

        {/* 1. Top Vintage Ornament */}
        <motion.div
          variants={fadeUp}
          className="w-20 xs:w-24 sm:w-28 h-auto mb-2 mx-auto opacity-90"
        >
          <img
            src={ornamentSvg}
            alt="Decorative Ornament"
            decoding="async"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </motion.div>

        {/* 2. Top Tagline */}
        <motion.p
          variants={fadeUp}
          className="font-serif-luxury uppercase tracking-[0.22em] sm:tracking-[0.3em] text-[11px] sm:text-xs md:text-sm text-[#785a1e] font-semibold"
        >
          {t("tagline", { defaultValue: "The Special Day Awaits" })}
        </motion.p>

        {/* 3. Cursive Title */}
        <motion.h2
          variants={fadeUp}
          className="font-script text-4xl xs:text-5xl sm:text-6xl md:text-7xl text-[#2d442c] font-normal leading-tight my-2 drop-shadow-xs px-2"
        >
          {t("title", { defaultValue: "Counting Down to Forever" })}
        </motion.h2>

        {/* 4. Poetic Quote */}
        <motion.p
          variants={fadeUp}
          className="font-serif-luxury italic text-xs xs:text-sm sm:text-base md:text-lg text-[#364f33]/90 font-medium tracking-wide max-w-md sm:max-w-lg leading-relaxed px-2 mb-6 sm:mb-8 mx-auto"
        >
          &quot;
          {t("quote", {
            defaultValue:
              "Every second brings us closer to our new beginning together.",
          })}
          &quot;
        </motion.p>

        {/* 5. Luxury 4-Pill Countdown Cards Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 xs:gap-3.5 sm:gap-5 w-full max-w-2xl mx-auto px-1"
        >
          {timeUnits.map((unit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group relative flex flex-col items-center justify-center p-3.5 xs:p-4 sm:p-5 rounded-xl xs:rounded-2xl bg-white/90 backdrop-blur-sm border border-[#c5a059]/35 hover:border-[#c5a059]/60 shadow-[0_4px_16px_rgba(45,68,44,0.06)] hover:shadow-md  overflow-hidden"
            >
              {/* Subtle Top Gold Highlight */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#c5a059]/60 to-transparent group-hover:via-[#c5a059] " />

              {/* Large Number */}
              <span className="font-century text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d442c] tracking-tight tabular-nums drop-shadow-xs">
                {unit.value}
              </span>

              {/* Unit Label */}
              <span className="font-serif-luxury uppercase tracking-[0.16em] sm:tracking-[0.22em] text-[10px] xs:text-[11px] sm:text-xs text-[#785a1e] font-semibold mt-1 sm:mt-1.5">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* 6. Decorative Heart Divider */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-3 mt-6 sm:mt-8 w-full max-w-xs mx-auto opacity-80"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c5a059]/50 to-[#30401C]/80" />
          <div className="animate-heartbeat">
            <Heart className="w-4 h-4 fill-[#785a1e] text-[#785a1e]" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c5a059]/50 to-[#30401C]/80" />
        </motion.div>
      </div>
    </motion.section>
  );
}
