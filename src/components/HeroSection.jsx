import { motion } from "framer-motion";
import { useOutletContext } from "react-router";
import { useTranslation } from "react-i18next";
import weddingData from "../data/weddingData.json";

export default function HeroSection() {
  const { t } = useTranslation("hero");
  const context = useOutletContext();
  const isReady = context?.isReady ?? true;

  const bgImg = weddingData.assets?.heroBg || "/Group 1.webp";
  const coupleImg = weddingData.assets?.coupleIllustration || "/rrr.webp";

  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden pt-30 pb-2 sm:py-6 md:min-h-screen md:py-0">
      {/* 1. Background Frame / Arch with smooth full size on desktop */}
      <div className="w-full flex justify-center items-center relative z-0">
        <motion.img
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
          src={bgImg}
          alt={t("frameAlt", { defaultValue: "Wedding Frame" })}
          decoding="async"
          className="w-[95%] h-auto max-h-screen object-fill md:object-fill will-change-transform"
          loading="eager"
        />

        {/* 2. Couple Watercolor Illustration with Entry Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          animate={isReady ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 25, scale: 0.95 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute bottom-[17%] xs:bottom-[17.5%] sm:bottom-[18%] md:bottom-20 flex items-center justify-center pointer-events-none z-10 will-change-transform"
        >
          <div className="w-[88px] xs:w-[110px] sm:w-[145px] md:w-[200px] flex justify-center items-center">
            <img
              src={coupleImg}
              alt={t("coupleAlt", { defaultValue: "Watercolor Wedding Couple" })}
              decoding="async"
              className="w-full h-auto object-contain drop-shadow-sm"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
