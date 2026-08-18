import { useState, useEffect, useCallback, Suspense } from "react";
import { useNavigation, Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import LoadingScreen from "../components/LoadingScreen";
import LanguageSwitcher from "../components/LanguageSwitcher";
import PageLoader from "../components/PageLoader";

import weddingData from "../data/weddingData.json";

export default function MainLayout() {
  const [showLoader, setShowLoader] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const { t, i18n } = useTranslation(["common", "invitationHeader"]);

  const navigation = useNavigation();
  // State can be "idle", "submitting", or "loading"
  const isLoading = navigation.state === "loading";

  const handleStartReveal = useCallback(() => {
    setIsReady(true);
  }, []);

  const handleComplete = useCallback(() => {
    setShowLoader(false);
  }, []);

  // Update page title & meta dynamically based on language & weddingData.json
  useEffect(() => {
    const isAr = i18n.language === "ar";
    const lang = isAr ? "ar" : "en";
    const groom = weddingData?.couple?.groom?.[lang] || (isAr ? "أحمد" : "Ahmed");
    const bride = weddingData?.couple?.bride?.[lang] || (isAr ? "إسراء" : "Israa");
    const couple = weddingData?.couple?.fullName?.[lang] || `${groom} & ${bride}`;
    const venue = weddingData?.event?.venue?.[lang] || "";
    const date = weddingData?.event?.date?.[lang] || "";

    const title = isAr
      ? `${couple} | دعوة حفل الزفاف 💍✨`
      : `${couple} | Wedding Celebration 💍✨`;
    document.title = title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute(
        "content",
        isAr
          ? `يتشرف ${groom} و${bride} بدعوتكم لمشاركتهما فرحة عقد القران وحفل الزفاف يوم ${date} في ${venue}.`
          : `${groom} & ${bride} cordially invite you to celebrate their wedding on ${date} at ${venue}.`
      );
    }
  }, [i18n.language]);

  return (
    <div
      className={`w-full min-h-screen bg-[#f8f7f3] text-[#2d442c] flex flex-col font-sans-clean selection:bg-[#364f33]/20 selection:text-[#1d2b1c] overflow-x-hidden relative ${
        showLoader ? "max-h-screen overflow-hidden" : ""
      }`}
    >
      {/* 2. Route Navigation Loading Spinner / Overlay */}
      <AnimatePresence>
        {isLoading && <PageLoader fullScreen={true} />}
      </AnimatePresence>

      {/* 3. Initial Opening Luxury Loading Screen (Untouched) */}
      <AnimatePresence>
        {showLoader && (
          <LoadingScreen
            onStartReveal={handleStartReveal}
            onComplete={handleComplete}
          />
        )}
      </AnimatePresence>

      {/* 4. Floating Language Switcher */}
      <LanguageSwitcher />

      {/* 5. Main Page Content */}
      <main className="w-full flex-1 flex flex-col">
        <Suspense fallback={<PageLoader fullScreen={false} />}>
          <Outlet context={{ isReady }} />
        </Suspense>
      </main>
    </div>
  );
}
