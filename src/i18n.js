import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import weddingData from "./data/weddingData.json";

// Helper to recursively extract data for a specific language ('en' or 'ar')
function extractLanguageData(obj, lang) {
  if (obj === null || obj === undefined) return obj;

  if (Array.isArray(obj)) {
    return obj.map((item) => extractLanguageData(item, lang));
  }

  if (typeof obj === "object") {
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

const enDynamic = extractLanguageData(weddingData, "en");
const arDynamic = extractLanguageData(weddingData, "ar");

const resources = {
  en: {
    common: {
      language: "English",
      switchLanguage: "عربي",
      pageTitle: `${enDynamic.couple?.fullName || "Ahmed & Israa"} | Wedding Celebration`,
    },
    loading: {
      subtitle: "Wedding Invitation",
      couple: enDynamic.couple,
      date: enDynamic.event?.date || "August 22, 2026",
      year: enDynamic.event?.year || "2026",
      loading: "Loading",
      steps: [
        "Preparing the celebration...",
        "Gathering sweet memories...",
        "Arranging love & blessings...",
        "Welcome to our special day ✨",
      ],
    },
    hero: {
      frameAlt: "Wedding Frame",
      coupleAlt: "Watercolor Wedding Couple",
    },
    invitationHeader: {
      tagline: "Together with their families,",
      coupleName: enDynamic.couple?.fullName || "Ahmed & Israa",
      message: "Joyfully invite you to celebrate their wedding weekend",
      date: enDynamic.event?.date || "August 22, 2026",
      city: enDynamic.event?.venueLocation || "New Cairo, Egypt",
      heartsAlt: "Continuous Line Hearts",
    },
    eventDetails: {
      title: "Wedding Day",
      date: enDynamic.event?.formattedDate || "22 Aug 2026",
      dayOfWeek: enDynamic.event?.dayOfWeek || "Saturday",
      venue: enDynamic.event?.venue || "Royal Maxim",
      hall: enDynamic.event?.hall || "",
      hallLabel: "Ballroom",
      venueLocation: enDynamic.event?.venueLocation || "New Cairo, Egypt",
      time: enDynamic.event?.time || "At 6:30 PM",
      timeLabel: "Ceremony",
      mapButtonText: "View on Map",
      umbrellaAlt: "Watercolor Umbrella",
      chairAlt: "Floral Wedding Chair",
      ornamentAlt: "Vintage Ornament",
    },
    countdown: {
      title: "Counting Down to Forever",
      tagline: "The Special Day Awaits",
      quote: "Every second brings us closer to our new beginning together.",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      celebrationStarted: "The Celebration Has Begun! ✨",
      celebrationMessage: "Our joy is complete with your presence today.",
    },
    celebration: {
      title: "The Celebration",
      quote: "An evening of love, laughter & beautiful memories.",
      description:
        "We cannot wait to celebrate this unforgettable milestone surrounded by the warmth and joy of our dearest family and friends.",
      tableAlt: "Watercolor Celebration Table",
      ornamentAlt: "Decorative Wedding Ornament",
    },
    letter: {
      salutation: "Dearest Family & Friends,",
      title: "You are Cordially Invited",
      paragraphs: [
        "Because you have shared in our lives with your warmth, friendship, and love, we would be deeply honored to have you celebrate with us as we exchange our vows and begin our new journey together.",
        '"Your presence and blessings will make our special night truly unforgettable."',
      ],
      signOff: "With all our love,",
      coupleName: enDynamic.couple?.fullName || "Ahmed & Israa",
      cornerLeftAlt: "Decorative Corner Left",
      cornerRightAlt: "Decorative Corner Right",
      ornamentAlt: "Vintage Ornament",
    },
    locationMap: {
      tagline: "Location & Directions",
      title: "Venue Location",
      subtitle: "We look forward to celebrating with you at this special venue",
      venueLabel: "Wedding Venue",
      hallLabel: "Ballroom",
      hall: enDynamic.event?.hall || "",
      addressLabel: "Address",
      openGoogleMaps: "Open in Google Maps",
      copyAddress: "Copy Address",
      addressCopied: "Address Copied!",
      getDirections: "Get Directions",
      ornamentAlt: "Vintage Ornament",
      pinLabel: "Royal Maxim Palace",
    },
    notFound: {
      code: "404",
      badge: "Page Not Found",
      title: "Lost in the Celebration",
      description:
        "It looks like this page has wandered away from our wedding venue. Let's get you back to the celebration!",
      homeBtn: "Back to Wedding Invitation",
      storyBtn: "Our Story & Wishes",
    },
  },
  ar: {
    common: {
      language: "العربية",
      switchLanguage: "English",
      pageTitle: `${arDynamic.couple?.fullName || "أحمد & إسراء"} | حفل الزفاف`,
    },
    loading: {
      subtitle: "دعوة زفاف",
      couple: arDynamic.couple,
      date: arDynamic.event?.date || "22 أغسطس 2026",
      year: arDynamic.event?.year || "2026",
      loading: "جاري التحميل",
      steps: [
        "نجهز تفاصيل الاحتفال...",
        "نجمع أرق الذكريات...",
        "ننسق مشاعر المحبة والبركة...",
        "أهلاً بكم في يومنا المميز ✨",
      ],
    },
    hero: {
      frameAlt: "إطار الزفاف",
      coupleAlt: "رسمة العروسين بالألوان المائية",
    },
    invitationHeader: {
      tagline: "بمباركة العائلتين الكريمتين،",
      coupleName: arDynamic.couple?.fullName || "أحمد & إسراء",
      message: "يتشرفان بدعوتكم لمشاركتهما فرحة عقد القران وحفل الزفاف",
      date: arDynamic.event?.date || "22 أغسطس 2026",
      city: arDynamic.event?.venueLocation || "القاهرة الجديدة، مصر",
      heartsAlt: "رسمة قلوب متصلة",
    },
    eventDetails: {
      title: "يوم الزفاف",
      date: arDynamic.event?.formattedDate || "22 أغسطس 2026",
      dayOfWeek: arDynamic.event?.dayOfWeek || "السبت",
      venue: arDynamic.event?.venue || "رويال مكسيم",
      hall: arDynamic.event?.hall || "",
      hallLabel: "القاعة",
      venueLocation: arDynamic.event?.venueLocation || "القاهرة الجديدة، مصر",
      time: arDynamic.event?.time || "الساعة 6:30 مساءً",
      timeLabel: "مراسم الحفل",
      mapButtonText: "الموقع على الخريطة",
      umbrellaAlt: "مظلة مرسومة بالألوان المائية",
      chairAlt: "كرسي الزفاف المزخرف بالزهور",
      ornamentAlt: "زخرفة كلاسيكية",
    },
    countdown: {
      title: "العد التنازلي للحظة المنتظرة",
      tagline: "نقترب من اليوم المميز",
      quote: "كل ثانية ودقيقة تقربنا من بداية أجمل فصول حياتنا معاً.",
      days: "أيام",
      hours: "ساعات",
      minutes: "دقائق",
      seconds: "ثواني",
      celebrationStarted: "حانت اللحظة المنتظرة! ✨",
      celebrationMessage: "فرحتنا تكتمل بوجودكم معنا اليوم لنحتفل معاً بأجمل اللحظات.",
    },
    celebration: {
      title: "حفل الزفاف",
      quote: "أمسية تفيض بالحب والبهجة وأجمل الذكريات.",
      description:
        "نتطلع بشوق للاحتفال بهذه المناسبة المميزة وسط دفء وسعادة أغلى الأهل والأصدقاء.",
      tableAlt: "طاولة الاحتفال بالألوان المائية",
      ornamentAlt: "زخرفة حفل الزفاف",
    },
    letter: {
      salutation: "أحباءنا من الأهل والأصدقاء،",
      title: "دعوة من القلب",
      paragraphs: [
        "لأنكم شاركتمونا أجمل لحظات حياتنا بمحبتكم ودفء حضوركم، يسرنا ويشرفنا حضوركم لتكتمل فرحتنا ونحن نبدأ معاً فصلاً جديداً من حياتنا.",
        "«حضوركم ومباركتكم يمنحان ليلتنا بهاءً وفرحة لا تُنسى»",
      ],
      signOff: "بكل حب وتقدير،",
      coupleName: arDynamic.couple?.fullName || "أحمد & إسراء",
      cornerLeftAlt: "زخرفة جانبية يسرى",
      cornerRightAlt: "زخرفة جانبية يمنى",
      ornamentAlt: "زخرفة كلاسيكية",
    },
    locationMap: {
      tagline: "الموقع والوصول",
      title: "موقع الحفل",
      subtitle: "نتشرف بحضوركم ومشاركتكم فرحتنا في موقع الحفل",
      venueLabel: "مقر الحفل",
      hallLabel: "القاعة",
      hall: arDynamic.event?.hall || "",
      addressLabel: "العنوان",
      openGoogleMaps: "فتح في خرائط جوجل",
      copyAddress: "نسخ العنوان",
      addressCopied: "تم نسخ العنوان بنجاح!",
      getDirections: "الاتجاهات",
      ornamentAlt: "زخرفة كلاسيكية",
      pinLabel: "فندق رويال مكسيم",
    },
    notFound: {
      code: "404",
      badge: "الصفحة غير موجودة",
      title: "عفواً.. ضللت طريق الحفل",
      description:
        "يبدو أنك ابتعدت عن مسار الاحتفال.. لا تقلق، فرحتنا تكتمل بوجودك في صفحة الدعوة الرئيسية.",
      homeBtn: "العودة لبطاقة الدعوة الرئيسية",
      storyBtn: "قصتنا وأجمل التهاني",
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
    "locationMap",
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
