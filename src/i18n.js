import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import weddingData from "./data/weddingData.json";

// Helper to recursively extract data for a specific language ('en' or 'ar')
function extractLanguageData(obj, lang) {
  if (obj === null || obj === undefined) return obj;

  // If array, map each item
  if (Array.isArray(obj)) {
    return obj.map((item) => extractLanguageData(item, lang));
  }

  // If object
  if (typeof obj === "object") {
    // If it's a bilingual object with 'en' and 'ar' keys
    if ("en" in obj && "ar" in obj && Object.keys(obj).length === 2) {
      return obj[lang];
    }

    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = extractLanguageData(value, lang);
    }
    return result;
  }

  return obj;
}

const enData = extractLanguageData(weddingData, "en");
const arData = extractLanguageData(weddingData, "ar");

const resources = {
  en: {
    common: {
      language: "English",
      switchLanguage: "عربي",
      pageTitle:
        enData.pageTitle ||
        `${enData.couple?.fullName || "Ahmed & Israa"} | Wedding Celebration`,
    },
    loading: {
      subtitle: enData.invitation?.loadingSubtitle || "Wedding Invitation",
      couple: enData.couple,
      date: enData.event?.date,
      year: enData.event?.year,
      loading: "Loading",
      steps: enData.loadingSteps || [],
    },
    hero: {
      frameAlt: "Wedding Frame",
      coupleAlt: "Watercolor Wedding Couple",
    },
    invitationHeader: {
      tagline: enData.invitation?.tagline,
      coupleName: enData.couple?.fullName,
      message: enData.invitation?.message,
      date: enData.event?.date,
      city: enData.event?.city,
      heartsAlt: "Continuous Line Hearts",
    },
    eventDetails: {
      title: "Wedding Day",
      date: enData.event?.formattedDate,
      dayOfWeek: enData.event?.dayOfWeek,
      venue: enData.event?.venue,
      venueLocation: enData.event?.venueLocation,
      time: enData.event?.time,
      timeLabel: enData.event?.timeLabel,
      mapButtonText: enData.event?.mapButtonText,
      umbrellaAlt: "Watercolor Umbrella",
      chairAlt: "Floral Wedding Chair",
      ornamentAlt: "Vintage Ornament",
    },
    countdown: {
      title: enData.countdown?.title || "Counting Down to Forever",
      tagline: enData.countdown?.tagline || "The Special Day Awaits",
      quote: enData.countdown?.quote,
      days: enData.countdown?.days || "Days",
      hours: enData.countdown?.hours || "Hours",
      minutes: enData.countdown?.minutes || "Minutes",
      seconds: enData.countdown?.seconds || "Seconds",
    },
    celebration: {
      title: enData.celebration?.title,
      quote: enData.celebration?.quote,
      description: enData.celebration?.description,
      tableAlt: "Watercolor Celebration Table",
      ornamentAlt: "Decorative Wedding Ornament",
    },
    letter: {
      salutation: enData.letter?.salutation,
      title: enData.letter?.title,
      paragraphs: enData.letter?.paragraphs,
      signOff: enData.letter?.signOff,
      coupleName: enData.couple?.fullName,
      cornerLeftAlt: "Decorative Corner Left",
      cornerRightAlt: "Decorative Corner Right",
      ornamentAlt: "Vintage Ornament",
    },
    notFound: {
      code: enData.notFound?.code || "404",
      badge: enData.notFound?.badge || "Page Not Found",
      title: enData.notFound?.title || "Lost in the Celebration",
      description:
        enData.notFound?.description ||
        "It looks like this page has wandered away from our wedding venue. Let's get you back to the celebration!",
      homeBtn: enData.notFound?.homeBtn || "Back to Wedding Invitation",
      storyBtn: enData.notFound?.storyBtn || "Our Story & Wishes",
    },
  },
  ar: {
    common: {
      language: "العربية",
      switchLanguage: "English",
      pageTitle:
        arData.pageTitle ||
        `${arData.couple?.fullName || "أحمد وإسراء"} | حفل الزفاف`,
    },
    loading: {
      subtitle: arData.invitation?.loadingSubtitle || "دعوة زفاف",
      couple: arData.couple,
      date: arData.event?.date,
      year: arData.event?.year,
      loading: "جاري التحميل",
      steps: arData.loadingSteps || [],
    },
    hero: {
      frameAlt: "إطار الزفاف",
      coupleAlt: "رسمة العروسين بالألوان المائية",
    },
    invitationHeader: {
      tagline: arData.invitation?.tagline,
      coupleName: arData.couple?.fullName,
      message: arData.invitation?.message,
      date: arData.event?.date,
      city: arData.event?.city,
      heartsAlt: "رسمة قلوب متصلة",
    },
    eventDetails: {
      title: "يوم الزفاف",
      date: arData.event?.formattedDate,
      dayOfWeek: arData.event?.dayOfWeek,
      venue: arData.event?.venue,
      venueLocation: arData.event?.venueLocation,
      time: arData.event?.time,
      timeLabel: arData.event?.timeLabel,
      mapButtonText: arData.event?.mapButtonText,
      umbrellaAlt: "مظلة مرسومة بالألوان المائية",
      chairAlt: "كرسي الزفاف المزخرف بالزهور",
      ornamentAlt: "زخرفة كلاسيكية",
    },
    countdown: {
      title: arData.countdown?.title || "العد التنازلي للحظة المنتظرة",
      tagline: arData.countdown?.tagline || "نقترب من اليوم المميز",
      quote: arData.countdown?.quote,
      days: arData.countdown?.days || "أيام",
      hours: arData.countdown?.hours || "ساعات",
      minutes: arData.countdown?.minutes || "دقائق",
      seconds: arData.countdown?.seconds || "ثواني",
    },
    celebration: {
      title: arData.celebration?.title,
      quote: arData.celebration?.quote,
      description: arData.celebration?.description,
      tableAlt: "طاولة الاحتفال بالألوان المائية",
      ornamentAlt: "زخرفة حفل الزفاف",
    },
    letter: {
      salutation: arData.letter?.salutation,
      title: arData.letter?.title,
      paragraphs: arData.letter?.paragraphs,
      signOff: arData.letter?.signOff,
      coupleName: arData.couple?.fullName,
      cornerLeftAlt: "زخرفة جانبية يسرى",
      cornerRightAlt: "زخرفة جانبية يمنى",
      ornamentAlt: "زخرفة كلاسيكية",
    },
    notFound: {
      code: arData.notFound?.code || "404",
      badge: arData.notFound?.badge || "الصفحة غير موجودة",
      title: arData.notFound?.title || "عفواً.. ضللت طريق الحفل",
      description:
        arData.notFound?.description ||
        "يبدو أنك ابتعدت عن مسار الاحتفال.. لا تقلق، فرحتنا تكتمل بوجودك في صفحة الدعوة الرئيسية.",
      homeBtn: arData.notFound?.homeBtn || "العودة لبطاقة الدعوة الرئيسية",
      storyBtn: arData.notFound?.storyBtn || "قصتنا وأجمل التهاني",
    },
  },
};

const savedLanguage =
  typeof window !== "undefined" ? localStorage.getItem("wedding_lang") : null;
const initialLanguage = savedLanguage || "ar";

// Helper to apply document direction and lang
export const updateDocumentDirection = (lang) => {
  if (typeof document !== "undefined") {
    const isRtl = lang === "ar";
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    if (isRtl) {
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
    } else {
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: "ar",
  ns: [
    "common",
    "loading",
    "hero",
    "invitationHeader",
    "eventDetails",
    "celebration",
    "letter",
    "countdown",
    "notFound",
  ],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

// Apply initial direction
updateDocumentDirection(initialLanguage);

// Update direction on language change & persist
i18n.on("languageChanged", (lng) => {
  updateDocumentDirection(lng);
  try {
    localStorage.setItem("wedding_lang", lng);
  } catch (e) {
    // ignore localStorage errors
  }
});

export default i18n;
