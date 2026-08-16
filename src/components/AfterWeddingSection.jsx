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

export default function AfterWeddingSection() {
  const { t, i18n } = useTranslation("celebration");
  const isRtl = i18n.language === "ar";
  const { assets } = weddingData;
  const tableImg = assets?.tableImg || "/watercolor-dining-table-set-white-background (1) 1.webp";
  const ornamentSvg = assets?.ornamentSvg || "/image.svg";

  // Language-based direction: Right in Arabic (+x), Left in English (-x)
  const fadeSide = {
    hidden: { opacity: 0, x: isRtl ? -25 : 25 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="w-full relative px-4 sm:px-6 lg:px-8 p1-4 sm:py-6 md:py-10 mt-1 md:mt-0 text-[#30401C] overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-20">

          {/* Left Side: The Celebration Details (Animates when scrolled to) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.75 }}
            variants={containerVariants}
            className="flex flex-col items-center justify-center text-center max-w-lg w-full"
          >
            {/* Top Vintage Ornament */}
            <motion.div variants={fadeUp} className="w-20 xs:w-24 sm:w-28 h-auto mb-2 opacity-90">
              <img
                src={ornamentSvg}
                alt={t("ornamentAlt", { defaultValue: "Decorative Wedding Ornament" })}
                decoding="async"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </motion.div>

            {/* Cursive Title */}
            <motion.h2
              variants={fadeUp}
              className="font-script text-5xl xs:text-6xl sm:text-7xl lg:text-[5.8rem] text-[#2d442c] font-normal leading-tight mb-2 drop-shadow-xs"
            >
              {t("title", { defaultValue: "The Celebration" })}
            </motion.h2>

            {/* Poetic Subtitle */}
            <motion.p
              variants={fadeUp}
              className="font-serif-luxury italic text-base xs:text-lg sm:text-xl md:text-2xl text-[#364f33] font-medium tracking-wide max-w-md leading-relaxed mt-1 px-2"
            >
              &quot;{t("quote", { defaultValue: "An evening of love, laughter & beautiful memories." })}&quot;
            </motion.p>

            {/* Heartfelt Message */}
            <motion.p
              variants={fadeUp}
              className="font-century text-xs xs:text-sm sm:text-base md:text-lg text-[#2d442c] font-normal max-w-md mt-3 sm:mt-4 leading-relaxed tracking-wide px-2"
            >
              {t("description", {
                defaultValue:
                  "We cannot wait to celebrate this unforgettable milestone surrounded by the warmth and joy of our dearest family and friends.",
              })}
            </motion.p>

            {/* Decorative Divider with soft pulse */}
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
          </motion.div>

          {/* Watercolor Table Illustration (Animates based on language direction) */}
          <motion.div
            key={i18n.language}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.75 }}
            variants={fadeSide}
            className="w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[530px] flex justify-center items-center shrink-0"
          >
            <img
              src={tableImg}
              alt={t("tableAlt", { defaultValue: "Watercolor Celebration Table" })}
              decoding="async"
              className="w-full h-auto object-contain drop-shadow-md cursor-pointer hover:scale-[1.02] transition-transform duration-700"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
