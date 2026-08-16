import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

/**
 * PageLoader / PageLoading Component
 * Next.js-style Route & Page Transition Loader
 * Designed with a luxury wedding aesthetic (Emerald & Champagne Gold)
 */
export default function PageLoader({ fullScreen = true, message }) {
  const { t } = useTranslation(["loading", "common"]);

  const groomInitial = t("loading:couple.initials.groom", { defaultValue: "M" });
  const brideInitial = t("loading:couple.initials.bride", { defaultValue: "D" });
  const loadingText = message || t("loading:loading", { defaultValue: "Loading..." });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`w-full flex flex-col items-center justify-center bg-[#f8f7f3] select-none ${
        fullScreen
          ? "fixed inset-0 z-40 min-h-[100dvh]"
          : "min-h-[60vh] py-16"
      }`}
    >
      {/* Background Soft Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-amber-200/20 via-emerald-100/20 to-transparent blur-3xl pointer-events-none" />

      {/* Main Luxury Spinner Container */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Outer Rotating Elegant Dashed Gold Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-dashed border-amber-600/30 absolute"
        />

        {/* Middle Counter-Rotating Emerald Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-t-2 border-r-2 border-b-0 border-l-0 border-[#2d442c]/60 absolute"
        />

        {/* Inner Glowing Monogram Circle */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#3b5435] via-[#2d442c] to-[#1e301d] shadow-[0_8px_24px_rgba(45,68,44,0.25)] border border-amber-300/40 flex items-center justify-center relative overflow-hidden ring-2 ring-[#2d442c]/10">
          {/* Subtle Shimmer Ray */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full transform -skew-x-12 pointer-events-none"
          />

          {/* Monogram Initials + Micro Heart */}
          <div className="flex items-center justify-center gap-0.5 text-amber-100">
            <span className="font-script text-lg sm:text-xl">{groomInitial}</span>
            <Heart className="w-2.5 h-2.5 fill-amber-300 text-amber-300 animate-pulse" />
            <span className="font-script text-lg sm:text-xl">{brideInitial}</span>
          </div>
        </div>
      </div>

      {/* Loading Text & Status Dots */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="mt-6 flex flex-col items-center"
      >
        <div className="flex items-center gap-2 text-[#2d442c]">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
          <span className="font-serif-luxury text-sm sm:text-base tracking-[0.18em] uppercase font-medium text-[#2d442c]/90">
            {loadingText}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
        </div>

        {/* Minimal Animated Loading Dots Bar */}
        <div className="flex items-center gap-1.5 mt-3">
          <motion.span
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
            className="w-1.5 h-1.5 rounded-full bg-[#2d442c]"
          />
          <motion.span
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
            className="w-1.5 h-1.5 rounded-full bg-amber-600"
          />
          <motion.span
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
            className="w-1.5 h-1.5 rounded-full bg-[#2d442c]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
