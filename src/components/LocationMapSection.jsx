import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Navigation, Copy, Check, ExternalLink, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import weddingData from "../data/weddingData.json";
import RoyalCornerOrnament from "./RoyalCornerOrnament";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
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

export default function LocationMapSection() {
  const { t, i18n } = useTranslation("locationMap");
  const isAr = (i18n.language || "ar") === "ar";
  const [copied, setCopied] = useState(false);
  const [shouldRenderMap, setShouldRenderMap] = useState(false);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (shouldRenderMap) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRenderMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "350px 0px" }
    );

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }

    return () => observer.disconnect();
  }, [shouldRenderMap]);

  const event = weddingData.event || {};
  const venue = event.venue?.[isAr ? "ar" : "en"] || (isAr ? "رويال مكسيم" : "Royal Maxim");
  const hall = event.hall?.[isAr ? "ar" : "en"] || "";
  const venueLocation =
    event.venueLocation?.[isAr ? "ar" : "en"] || (isAr ? "القاهرة الجديدة، مصر" : "New Cairo, Egypt");
  const fullAddress =
    event.address?.[isAr ? "ar" : "en"] ||
    `${venue}${hall ? ` (${hall})` : ""}, ${venueLocation}`;
  const mapUrl = event.mapUrl || "https://maps.google.com/?q=Royal+Maxim+Palace+Kempinski+Cairo";
  const mapEmbedUrl =
    event.mapEmbedUrl ||
    "https://maps.google.com/maps?q=Royal%20Maxim%20Palace%20Kempinski%20Cairo&t=&z=15&ie=UTF8&iwloc=&output=embed";

  const ornamentSvg = "/image.svg";

  const handleCopyAddress = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(fullAddress);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = fullAddress;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy address", err);
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants}
      className="w-full relative py-6 sm:py-8 px-3 xs:px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center overflow-hidden z-10 max-w-4xl mx-auto"
    >
      {/* 1. Top Vintage Ornament */}
      <motion.div variants={fadeUp} className="w-20 xs:w-24 sm:w-28 h-auto mb-2 opacity-90 mx-auto">
        <img
          src={ornamentSvg}
          alt={t("ornamentAlt", { defaultValue: "Vintage Ornament" })}
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
        {t("tagline", { defaultValue: "Location & Directions" })}
      </motion.p>

      {/* 3. Cursive Title */}
      <motion.h2
        variants={fadeUp}
        className="font-script text-4xl xs:text-5xl sm:text-6xl md:text-7xl text-[#2d442c] font-normal leading-tight my-2 drop-shadow-xs px-2 pb-2"
      >
        {t("title", { defaultValue: "Venue Location" })}
      </motion.h2>

      {/* 4. Subtitle Message */}
      <motion.p
        variants={fadeUp}
        className="font-century text-xs xs:text-sm sm:text-base text-[#364f33]/85 tracking-wide max-w-md sm:max-w-lg leading-relaxed px-2 mb-6 sm:mb-8 mx-auto"
      >
        {t("subtitle", {
          defaultValue: "We look forward to celebrating with you at this special venue",
        })}
      </motion.p>

      {/* 5. Google Map Container Card */}
      <motion.div
        variants={fadeUp}
        className="royal-card w-full max-w-3xl mx-auto relative rounded-2xl xs:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(45,68,44,0.09)]"
      >
        <RoyalCornerOrnament position="top-left" className="absolute top-1 left-1 z-20" />
        <RoyalCornerOrnament position="top-right" className="absolute top-1 right-1 z-20" />

        {/* Top Venue Header Bar */}
        <div className="p-4 sm:p-5 border-b border-[#c5a059]/25 bg-[#fbfaf6]/95 flex flex-col sm:flex-row items-center justify-between gap-3 text-start relative z-10">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#c5a059]/25 to-[#30401C]/15 border border-[#c5a059]/45 flex items-center justify-center text-[#2d442c] shrink-0 shadow-xs">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75] text-[#785a1e]" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-century text-sm sm:text-base font-bold text-[#2d442c] leading-tight">
                  {venue}
                </h3>
                {hall && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#283a27] text-[#f8f7f3] text-[10px] xs:text-[11px] sm:text-xs font-semibold shadow-2xs border border-[#c5a059]/30">
                    {hall}
                  </span>
                )}
              </div>
              <p className="font-century text-[11px] sm:text-xs text-[#364f33]/80 mt-1">
                {fullAddress}
              </p>
            </div>
          </div>

          {/* Quick Copy Address Button in Header */}
          <button
            type="button"
            onClick={handleCopyAddress}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#c5a059]/10 border border-[#c5a059]/35 text-[#2d442c] text-xs font-century font-medium transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-xs active:scale-95 shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">{t("addressCopied", { defaultValue: "Copied!" })}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#785a1e]" />
                <span>{t("copyAddress", { defaultValue: "Copy Address" })}</span>
              </>
            )}
          </button>
        </div>

        {/* Map View Frame with Interactive Pin */}
        <div
          ref={mapContainerRef}
          className="relative w-full h-[250px] xs:h-[290px] sm:h-[340px] md:h-[370px] bg-[#eae7dc] overflow-hidden group flex items-center justify-center"
        >
          {shouldRenderMap ? (
            <iframe
              title="Google Maps Location"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-2.5 text-[#785a1e] p-6">
              <div className="w-12 h-12 rounded-full bg-[#c5a059]/20 flex items-center justify-center animate-pulse">
                <MapPin className="w-6 h-6 text-[#785a1e]" />
              </div>
              <span className="font-century text-xs sm:text-sm text-[#364f33]/80 font-medium">
                {isAr ? "جارٍ تحميل الخريطة التفاعلية..." : "Loading interactive map..."}
              </span>
            </div>
          )}
        </div>

        {/* Bottom Actions Footer */}
        <div className="p-4 sm:p-5 bg-white/95 border-t border-[#c5a059]/25 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-century text-xs text-[#364f33]/80 text-center sm:text-start">
            {isAr
              ? "يمكنك فتح الموقع مباشرة في تطبيق خرائط جوجل للحصول على أفضل مسار للوصول."
              : "Open location directly in Google Maps for turn-by-turn navigation."}
          </p>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#283a27] hover:bg-[#1d2c1c] text-[#f8f7f3] text-xs sm:text-sm font-century font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer border border-[#c5a059]/40"
            >
              <Navigation className="w-4 h-4 text-[#e5cf9b]" />
              <span>{t("openGoogleMaps", { defaultValue: "Open in Google Maps" })}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-75" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
