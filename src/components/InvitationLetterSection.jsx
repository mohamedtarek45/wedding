import React from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import weddingData from "../data/weddingData.json";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const cornersVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function InvitationLetterSection() {
  const { t } = useTranslation("letter");
  const { assets } = weddingData;
  const cornerLeftImg = assets?.cornerLeftImg || "/Rectangle.webp";
  const cornerRightImg = assets?.cornerRightImg || "/Rectangle2.webp";
  const ornamentSvg = assets?.ornamentSvg || "/image.svg";

  const paragraphs = t("paragraphs", { returnObjects: true }) || [
    "Because you have shared in our lives with your warmth, friendship, and love, we would be deeply honored to have you celebrate with us as we exchange our vows and begin our new journey together.",
    "\"Your presence and blessings will make our special night truly unforgettable.\""
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.75 }}
      className="w-full mt-20 relative min-h-[380px] sm:min-h-[440px] md:min-h-[500px] flex flex-col items-center justify-center px-3 xs:px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-14 text-[#30401C] overflow-hidden"
    >
      {/* 1. Bottom Left Corner Illustration */}
      <motion.div
        variants={cornersVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="absolute left-0 bottom-0 w-24 xs:w-32 sm:w-48 md:w-64 lg:w-80 pointer-events-none z-0 opacity-40 sm:opacity-70 select-none animate-sway-left"
      >
        <img
          src={cornerLeftImg}
          alt={t("cornerLeftAlt", { defaultValue: "Decorative Corner Left" })}
          decoding="async"
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </motion.div>

      {/* 2. Bottom Right Corner Illustration */}
      <motion.div
        variants={cornersVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="absolute right-0 bottom-0 w-24 xs:w-32 sm:w-48 md:w-64 lg:w-80 pointer-events-none z-0 opacity-40 sm:opacity-70 select-none animate-sway-right"
      >
        <img
          src={cornerRightImg}
          alt={t("cornerRightAlt", { defaultValue: "Decorative Corner Right" })}
          decoding="async"
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </motion.div>

      {/* 3. Center Invitation Letter Card */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-2xl w-full mx-auto relative z-10 text-center flex flex-col items-center justify-center px-4 xs:px-6 sm:px-10 md:px-12 py-8 sm:py-12 md:py-14 rounded-l sm:rounded-3xl bg-white/60 backdrop-blur-md border border-[#30401C]/15 shadow-sm hover:shadow-md transition-shadow duration-500 mb-15"
      >
        {/* Top Ornament */}
        <motion.div variants={fadeUp} className="w-20 xs:w-24 sm:w-28 h-auto mb-2 opacity-90">
          <img
            src={ornamentSvg}
            alt={t("ornamentAlt", { defaultValue: "Vintage Ornament" })}
            decoding="async"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </motion.div>

        {/* Salutation */}
        <motion.p
          variants={fadeUp}
          className="font-century uppercase tracking-[0.16em] sm:tracking-[0.24em] text-[11px] xs:text-xs sm:text-sm text-[#364f33] font-semibold mt-1"
        >
          {t("salutation", { defaultValue: "Dearest Family & Friends," })}
        </motion.p>

        {/* Cursive Title */}
        <motion.h2
          variants={fadeUp}
          className="font-script text-4xl xs:text-5xl sm:text-6xl md:text-7xl text-[#2d442c] font-normal leading-tight my-1.5 sm:my-2 drop-shadow-xs px-2"
        >
          {t("title", { defaultValue: "You are Cordially Invited" })}
        </motion.h2>

        {/* Letter Body Text */}
        <motion.div
          variants={fadeUp}
          className="space-y-3 font-century text-xs xs:text-sm sm:text-base md:text-lg text-[#2d442c] leading-relaxed tracking-wide max-w-lg mt-2 sm:mt-3 font-normal px-2"
        >
          {paragraphs.map((p, idx) => (
            <p
              key={idx}
              className={
                idx === paragraphs.length - 1
                  ? "font-serif-luxury italic text-sm xs:text-base sm:text-lg text-[#364f33]"
                  : ""
              }
            >
              {p}
            </p>
          ))}
        </motion.div>

        {/* Decorative Divider */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-3 my-5 sm:my-6 w-full max-w-xs opacity-80"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#30401C]/40 to-[#30401C]/80" />
          <div className="animate-heartbeat">
            <Heart className="w-4 h-4 fill-[#30401C] text-[#30401C]" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#30401C]/40 to-[#30401C]/80" />
        </motion.div>

        {/* Sign-off & Couple Signatures */}
        <motion.div variants={fadeUp} className="flex flex-col items-center justify-center">
          <p className="font-century uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[11px] xs:text-xs sm:text-sm text-[#364f33]">
            {t("signOff", { defaultValue: "With all our love," })}
          </p>
          <span className="font-script text-4xl xs:text-5xl sm:text-6xl text-[#2d442c] font-normal leading-none mt-2 cursor-pointer hover:scale-[1.03] transition-transform duration-500">
            {t("coupleName", { defaultValue: "Ahmed & Israa" })}
          </span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
