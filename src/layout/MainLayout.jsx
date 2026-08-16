import { useState, useEffect, Suspense } from "react";
import { useNavigation, Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import LoadingScreen from "../components/LoadingScreen";
import LanguageSwitcher from "../components/LanguageSwitcher";
import PageLoader from "../components/PageLoader";

export default function MainLayout() {
  const [showLoader, setShowLoader] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const { t, i18n } = useTranslation(["common", "invitationHeader"]);

  const navigation = useNavigation();
  // State can be "idle", "submitting", or "loading"
  const isLoading = navigation.state === "loading";

  // Update page title dynamically based on language & couple name
  useEffect(() => {
    const title = t("common:pageTitle", {
      defaultValue: "Ahmed & Israa | Wedding Celebration",
    });
    document.title = title;
  }, [i18n.language, t]);

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
            onStartReveal={() => setIsReady(true)}
            onComplete={() => setShowLoader(false)}
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
