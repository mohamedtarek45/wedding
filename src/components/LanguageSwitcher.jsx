import React from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "ar";
  const isAr = currentLang === "ar";

  const toggleLanguage = () => {
    const next = isAr ? "en" : "ar";
    i18n.changeLanguage(next);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 start-4 sm:top-6 sm:start-8 z-40 select-none"
    >
      <button
        type="button"
        onClick={toggleLanguage}
        className="group relative flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#fcfbf7]/90 hover:bg-white backdrop-blur-xl border border-[#2d442c]/20 hover:border-[#2d442c]/40 shadow-[0_4px_24px_rgba(45,68,44,0.08)] hover:shadow-[0_8px_30px_rgba(45,68,44,0.15)] transition-all duration-500 cursor-pointer active:scale-95"
        title={isAr ? "Switch to English" : "التحويل إلى العربية"}
        aria-label="Change language"
      >
        {/* Luxury Mini Globe Icon with smooth hover spin */}
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#2d442c]/8 flex items-center justify-center text-[#2d442c] group-hover:bg-[#2d442c] group-hover:text-[#f8f7f3] transition-colors duration-400">
          <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[1.8] transition-transform duration-700 group-hover:rotate-180" />
        </div>

        {/* Elegant Dual-Language Typography */}
        <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-serif-luxury tracking-wide text-[#2d442c] leading-none">
          <span
            className={`transition-all duration-300 ${
              isAr
                ? "font-bold text-[#2d442c] scale-105"
                : "text-[#2d442c]/55 hover:text-[#2d442c]"
            }`}
          >
            عربي
          </span>

          <span className="text-[#2d442c]/30 text-[10px] sm:text-xs">•</span>

          <span
            className={`transition-all duration-300 ${
              !isAr
                ? "font-bold text-[#2d442c] scale-105"
                : "text-[#2d442c]/55 hover:text-[#2d442c]"
            }`}
          >
            EN
          </span>
        </div>

        {/* Small subtle accent diamond */}
        <span className="text-[#364f33]/40 group-hover:text-[#2d442c] text-[9px] transition-colors duration-300 ms-0.5">
          ✦
        </span>
      </button>
    </motion.div>
  );
}
