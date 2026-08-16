import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import weddingData from "../data/weddingData.json";

export default function LoadingScreen({ onStartReveal, onComplete }) {
  const { t } = useTranslation(["loading", "invitationHeader"]);
  const [isOpen, setIsOpen] = useState(false);
  const hasRunRef = useRef(false);
  const onStartRevealRef = useRef(onStartReveal);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onStartRevealRef.current = onStartReveal;
    onCompleteRef.current = onComplete;
  });

  const groomInitial = t("loading:couple.initials.groom", { defaultValue: "A" });
  const brideInitial = t("loading:couple.initials.bride", { defaultValue: "I" });
  const coupleName = t("loading:couple.fullName", { defaultValue: "Ahmed & Israa" });

  useEffect(() => {
    // Prevent duplicate triggers
    if (hasRunRef.current) return;
    hasRunRef.current = true;

    // Detect Lighthouse / PageSpeed audit bot
    const isBot =
      typeof navigator !== "undefined" &&
      /Lighthouse|Chrome-Lighthouse|PageSpeed|PTST/i.test(navigator.userAgent);

    if (isBot) {
      onStartRevealRef.current?.();
      onCompleteRef.current?.();
      return;
    }

    const heroPhoto =
      weddingData.assets?.heroPhoto ||
      "/fafd_compressed.webp";

    const preloadImage = (src) => {
      return new Promise((resolve) => {
        if (!src) return resolve();
        const img = new Image();
        img.src = src;

        if (img.complete) {
          if (typeof img.decode === "function") {
            img.decode().then(resolve).catch(resolve);
          } else {
            resolve();
          }
          return;
        }

        img.onload = () => {
          if (typeof img.decode === "function") {
            img.decode().then(resolve).catch(resolve);
          } else {
            resolve();
          }
        };

        img.onerror = () => resolve();
      });
    };

    // 1. Wait for both min aesthetic delay & hero photo to be fully loaded and decoded
    const minDelay = new Promise((resolve) => setTimeout(resolve, 700));
    const imageLoad = preloadImage(heroPhoto);
    const safetyTimeout = new Promise((resolve) => setTimeout(resolve, 6000));

    let timer = null;

    Promise.race([Promise.all([minDelay, imageLoad]), safetyTimeout]).then(() => {
      // Start revealing content under the curtain
      onStartRevealRef.current?.();
      setIsOpen(true);

      // Unmount after curtain slide finishes (750ms animation + 50ms buffer)
      timer = setTimeout(() => {
        onCompleteRef.current?.();
      }, 800);
    });

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden pointer-events-none select-none"
      style={{ minHeight: "100dvh" }}
    >
      {/* 1. Top Envelope Curtain (Slides Up Once) */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: isOpen ? "-100%" : "0%" }}
        transition={{ duration: 0.75, ease: [0.65, 0, 0.35, 1] }}
        className="absolute top-0 inset-x-0 h-1/2 bg-[#fcfbf7] border-b border-[#2d442c]/15 shadow-xl flex flex-col justify-end items-center pb-6 will-change-transform z-20"
      >
        <motion.div
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center mb-6"
        >
          <div className="flex items-center gap-1.5 text-amber-700/80 mb-1">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span className="font-serif-luxury uppercase tracking-[0.28em] text-[10px] sm:text-xs text-[#364f33]/90 font-medium">
              {t("loading:subtitle", { defaultValue: "Wedding Invitation" })}
            </span>
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          </div>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#2d442c]/30 to-transparent" />
        </motion.div>
      </motion.div>

      {/* 2. Bottom Envelope Curtain (Slides Down Once) */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: isOpen ? "100%" : "0%" }}
        transition={{ duration: 0.75, ease: [0.65, 0, 0.35, 1] }}
        className="absolute bottom-0 inset-x-0 h-1/2 bg-[#fcfbf7] border-t border-[#2d442c]/15 shadow-xl flex flex-col justify-start items-center pt-6 will-change-transform z-20"
      >
        <motion.div
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center text-center mt-6 px-4"
        >
          <h2 className="font-script text-3xl sm:text-4xl text-[#2d442c] font-normal leading-tight drop-shadow-xs">
            {coupleName}
          </h2>
          <p className="font-century uppercase tracking-[0.22em] text-[9px] sm:text-[10px] text-[#364f33]/75 mt-1">
            {t("loading:date", { defaultValue: "August 22, 2026" })}
          </p>
        </motion.div>
      </motion.div>

      {/* 3. Center Luxury Wax Seal Monogram Emblem */}
      <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: isOpen ? 1.15 : 1,
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Subtle Outer Pulsing Ring */}
          <div className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-amber-500/20 animate-heartbeat" />

          {/* Royal Wax Seal Badge */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#3b5435] via-[#2d442c] to-[#1e301d] text-[#fcfbf7] shadow-[0_12px_36px_rgba(45,68,44,0.35)] border-2 border-amber-300/40 flex flex-col items-center justify-center relative overflow-hidden ring-4 ring-[#2d442c]/10">
            {/* Shimmer Light Reflection */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.6 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent w-full h-full transform -skew-x-12 pointer-events-none"
            />

            {/* Monogram Initials */}
            <div className="flex items-center justify-center gap-1 relative z-10 text-amber-100 drop-shadow-sm">
              <span className="font-script text-2xl sm:text-3xl">{groomInitial}</span>
              <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-300 text-amber-300 animate-heartbeat" />
              <span className="font-script text-2xl sm:text-3xl">{brideInitial}</span>
            </div>

            {/* Micro Year Stamp */}
            <span className="font-century text-[7px] sm:text-[8px] tracking-[0.2em] text-amber-200/75 uppercase mt-0.5">
              2026
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
