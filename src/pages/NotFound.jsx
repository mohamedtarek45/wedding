import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Heart, Sparkles, Compass, ArrowRight, ArrowLeft, Home as HomeIcon, MapPin } from "lucide-react";
import weddingData from "../data/weddingData.json";

export default function NotFound() {
  const { t, i18n } = useTranslation(["notFound", "common"]);
  const isAr = (i18n.language || "ar") === "ar";
  const { assets } = weddingData;

  const cornerLeftImg = assets?.cornerLeftImg || "/Rectangle.webp";
  const cornerRightImg = assets?.cornerRightImg || "/Rectangle2.webp";
  const ornamentSvg = assets?.ornamentSvg || "/image.svg";

  return (
    <div className="relative min-h-[90vh] sm:min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 py-12 text-[#2d442c] overflow-hidden select-none">
      {/* 1. Ambient Background Decor Corners */}
      <div className="absolute left-0 bottom-0 w-28 xs:w-36 sm:w-56 md:w-72 pointer-events-none z-0 opacity-40 sm:opacity-60 animate-sway-left">
        <img
          src={cornerLeftImg}
          alt="Decorative Corner"
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>
      <div className="absolute right-0 bottom-0 w-28 xs:w-36 sm:w-56 md:w-72 pointer-events-none z-0 opacity-40 sm:opacity-60 animate-sway-right">
        <img
          src={cornerRightImg}
          alt="Decorative Corner"
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>

      {/* 2. Main 404 Luxury Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-xl w-full mx-auto text-center flex flex-col items-center justify-center p-6 xs:p-8 sm:p-12 rounded-3xl bg-white/75 backdrop-blur-xl border border-[#2d442c]/15 shadow-[0_12px_40px_rgba(45,68,44,0.08)] my-auto"
      >
        {/* Top Vintage Ornament */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-20 xs:w-24 sm:w-28 h-auto mb-2 opacity-85"
        >
          <img
            src={ornamentSvg}
            alt="Ornament"
            className="w-full h-auto object-contain mx-auto"
          />
        </motion.div>

        {/* Floating 404 Number Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative my-2 flex items-center justify-center"
        >
          <span className="font-serif-luxury text-7xl xs:text-8xl sm:text-9xl font-bold tracking-tighter text-[#2d442c]/15 select-none leading-none">
            404
          </span>

          {/* Centered Sparkling Heart Accent */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#2d442c]/10 backdrop-blur-md flex items-center justify-center border border-[#2d442c]/20 shadow-xs animate-heartbeat">
              <Compass className="w-7 h-7 sm:w-8 sm:h-8 text-[#364f33] stroke-[1.5]" />
            </div>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#2d442c]/8 border border-[#2d442c]/15 text-[#364f33] font-century uppercase tracking-[0.2em] text-[11px] sm:text-xs mb-2"
        >
          <Sparkles className="w-3 h-3 text-[#364f33]" />
          <span>{t("badge", { defaultValue: "الصفحة غير موجودة" })}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4 }}
          className="font-script text-4xl xs:text-5xl sm:text-6xl text-[#2d442c] font-normal leading-tight px-2"
        >
          {t("title", { defaultValue: "عفواً.. ضللت طريق الحفل" })}
        </motion.h1>

        {/* Poetic Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.5 }}
          className="font-century text-xs xs:text-sm sm:text-base text-[#2d442c]/85 leading-relaxed max-w-md mt-2 mb-8 px-2"
        >
          {t("description", {
            defaultValue:
              "يبدو أنك ابتعدت عن مسار الاحتفال.. لا تقلق، فرحتنا تكتمل بوجودك في صفحة الدعوة الرئيسية.",
          })}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md"
        >
          {/* Main Home Button */}
          <Link
            to="/"
            className="group w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2d442c] hover:bg-[#20321f] text-[#f8f7f3] text-xs sm:text-sm font-century font-semibold shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-95"
          >
            <HomeIcon className="w-4 h-4" />
            <span>{t("homeBtn", { defaultValue: "العودة لبطاقة الدعوة الرئيسية" })}</span>
            {isAr ? (
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            ) : (
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            )}
          </Link>
        </motion.div>

        {/* Couple Signature Footer */}
        <div className="mt-8 pt-6 border-t border-[#2d442c]/10 flex flex-col items-center">
          <p className="font-serif-luxury italic text-xs text-[#364f33]">
            {weddingData.couple?.fullName?.[isAr ? "ar" : "en"] ||
              (isAr ? "أحمد & إسراء" : "Ahmed & Israa")}
          </p>
          <span className="font-century text-[10px] text-[#2d442c]/50 mt-0.5">
            {weddingData.event?.date?.[isAr ? "ar" : "en"] || "August 22, 2026"}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
