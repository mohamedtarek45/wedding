
import { motion } from "framer-motion";
import { useOutletContext } from "react-router";
import { useTranslation } from "react-i18next";
import weddingData from "../data/weddingData.json";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

export default function InvitationHeader() {
  const { t } = useTranslation("invitationHeader");
  const context = useOutletContext();
  const isReady = context?.isReady ?? true;

  const { assets } = weddingData;
  const heartsSvg = assets?.heartsSvg || "/vecteezy_hand-drawn-continuous-line-drawing-of-hearts-wedding-love_5713428.svg";

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView={isReady ? "show" : undefined}
      viewport={{ once: true, amount: 0.4 }}
      className="w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 relative z-10 max-w-4xl mx-auto"
    >
      {/* 1. Top Tagline */}
      <motion.p
        variants={fadeUp}
        className="font-serif-luxury uppercase tracking-[0.22em] sm:tracking-[0.3em] text-[11px] sm:text-xs md:text-sm text-[#364f33] font-normal"
      >
        {t("tagline", { defaultValue: "Together with their families," })}
      </motion.p>

      {/* 2. Couple's Names in Script */}
      <motion.h1
        variants={fadeUp}
        className="font-script text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-[5.8rem] text-[#2d442c] font-normal my-2 sm:my-3 leading-tight tracking-wide px-2 drop-shadow-xs"
      >
        {t("coupleName", { defaultValue: "Ahmed & Israa" })}
      </motion.h1>

      {/* 3. Invite Text */}
      <motion.p
        variants={fadeUp}
        className="font-serif-luxury text-xs xs:text-sm sm:text-base md:text-lg text-[#364f33] tracking-wide font-normal max-w-md sm:max-w-lg leading-relaxed px-2"
      >
        {t("message", { defaultValue: "Joyfully invite you to celebrate their wedding weekend" })}
      </motion.p>

      {/* 4. Date & Location - Elegant Glass Pill */}
      <motion.div
        variants={fadeUp}
        className="font-century uppercase tracking-[0.16em] sm:tracking-[0.24em] text-xs sm:text-sm md:text-base text-[#2d442c] font-semibold mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 px-4 py-2 rounded-full bg-[#30401C]/5 border border-[#30401C]/10 backdrop-blur-xs shadow-2xs"
      >
        <span>{t("date", { defaultValue: "February 22, 2026" })}</span>
        <span className="hidden sm:inline text-[#364f33]/60">•</span>
        <span>{t("city", { defaultValue: "Al Maadi, Cairo" })}</span>
      </motion.div>

      {/* 5. Hand Drawn Continuous Line Hearts SVG */}
      <motion.div
        variants={fadeUp}
        className="w-full flex justify-center items-center mt-5 sm:mt-8 px-4"
      >
        <img
          src={heartsSvg}
          alt={t("heartsAlt", { defaultValue: "Continuous Line Hearts" })}
          decoding="async"
          className="w-40 xs:w-48 sm:w-56 md:w-64 lg:w-72 max-w-[80vw] h-auto object-contain opacity-90 animate-gentle-float"
          loading="lazy"
        />
      </motion.div>
    </motion.section>
  );
}
