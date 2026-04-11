"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// --- TRANSLATIONS DICTIONARY ---
const translations = {
  en: {
    // Navigation
    navAbout: "About",
    navPrivacy: "Privacy Policy",
    navTerms: "Terms of Service",
    langSwitch: "العربية",
    
    // Home Page
    section_about: "ABOUT",
    aboutUsTitle: "About Us",
    aboutIntro: "At S-UPER, we are committed to providing high-quality ride-sharing services to ensure that our users receive the best transportation in the security and comfort of their journeys.",
    premiumBrand: "Premium Brand",
    mainTitle: "S-UPER Secure Drive",
    aboutOurVision: "Vision",
    aboutVisionText: "To transform the ride-sharing industry by offering comprehensive, user-centered services.",
    aboutOurMission: "Mission",
    aboutMissionText: "To provide professional, efficient, and secure ride-sharing services across various needs.",
    secureRide: "Secure Ride",
    smartRouting: "Smart routing & easy booking",
    experienceDesc: "Experience the new standard for premium transportation with strong safety.",
    
    galleryTitle: "The S-UPER Experience",
    galleryDesc: "Discover how we make every journey effortless, from the moment you book until you reach your destination.",
    galleryItems: [
      { id: 4, title: "Effortless Booking", desc: "One tap to ride" },
      { id: 5, title: "Live Tracking", desc: "Know exactly when we arrive" },
      { id: 6, title: "Premium Comfort", desc: "Relax in top-tier vehicles" },
      { id: 7, title: "Cashless Payment", desc: "Quick and secure" },
    ],

    aboutWhyChooseUs: "Why Choose Us",
    whyChooseDesc: "Our premium service pairs advanced technology with real people so every journey feels reliable, refined, and personal.",
    aboutSafetyTitle: "Advanced Safety",
    aboutSafetyDesc: "Real-time tracking and emergency assistance.",
    aboutDriversTitle: "Verified Drivers",
    aboutDriversDesc: "Thorough background checks and training.",
    aboutPricingTitle: "Affordable Pricing",
    aboutPricingDesc: "Transparent fare estimates and flexible payments.",
    aboutSupportTitle: "24/7 Support",
    aboutSupportDesc: "Dedicated service to assist with any queries.",
    aboutFooter: "© 2026 S-UPER. All rights reserved.",

    // Legal Pages
    effectiveDate: "Effective Date: April 2026",
    termsTitle1: "1. Acceptance of Terms",
    termsDesc1: "By creating an account and logging in via Phone Authentication, you agree to abide by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.",
    termsTitle2: "2. User Conduct",
    termsDesc2: "You agree to use the platform respectfully and safely. Any fraudulent requests, harassment of drivers or passengers, or misuse of the rating system will result in immediate account termination.",
    termsTitle3: "3. Liability",
    termsDesc3: "Super App serves purely as a technological platform to connect independent users and drivers. While we enforce strict community guidelines, Super App is not legally liable for individual conduct, lost items, or incidents occurring during transit.",
    
    privacyTitle1: "1. Data Collection",
    privacyDesc1: "We collect your phone number strictly for authentication purposes via Firebase. Your profile information, such as your name and avatar, is used exclusively to facilitate a premium experience within the platform.",
    privacyTitle2: "2. Location Data",
    privacyDesc2: "For drivers and users, location data is used only while the app is active to facilitate rides and calculate distances accurately. We do not track your location in the background when the app is completely closed.",
    privacyTitle3: "3. Data Protection",
    privacyDesc3: "Your data is encrypted and securely stored. We value your privacy and absolutely do not sell your personal data, location history, or usage habits to third-party data brokers.",
  },
  ar: {
    // Navigation
    navAbout: "من نحن",
    navPrivacy: "سياسة الخصوصية",
    navTerms: "شروط الخدمة",
    langSwitch: "English",
    
    // Home Page
    section_about: "حول",
    aboutUsTitle: "من نحن",
    aboutIntro: "في سوبر، نحن ملتزمون بتقديم خدمات نقل تشاركي عالية الجودة لضمان حصول مستخدمينا على أفضل وسيلة نقل بأمان وراحة في رحلاتهم.",
    premiumBrand: "علامة تجارية مميزة",
    mainTitle: "سوبر للقيادة الآمنة",
    aboutOurVision: "الرؤية",
    aboutVisionText: "إحداث تحول في صناعة النقل التشاركي من خلال تقديم خدمات شاملة تركز على المستخدم.",
    aboutOurMission: "المهمة",
    aboutMissionText: "تقديم خدمات نقل احترافية وفعالة وآمنة تلبي مختلف الاحتياجات.",
    secureRide: "رحلة آمنة",
    smartRouting: "توجيه ذكي وحجز سهل",
    experienceDesc: "جرب المعيار الجديد للنقل المميز مع أعلى مستويات الأمان.",
    
    galleryTitle: "تجربة سوبر",
    galleryDesc: "اكتشف كيف نجعل كل رحلة سلسة، من لحظة الحجز حتى وصولك إلى وجهتك.",
    galleryItems: [
      { id: 4, title: "حجز سلس", desc: "نقرة واحدة للانطلاق" },
      { id: 5, title: "تتبع مباشر", desc: "اعرف موعد وصولنا بدقة" },
      { id: 6, title: "راحة استثنائية", desc: "استرخِ في سيارات فاخرة" },
      { id: 7, title: "دفع إلكتروني", desc: "سريع وآمن" },
    ],

    aboutWhyChooseUs: "لماذا تختارنا",
    whyChooseDesc: "تجمع خدمتنا المميزة بين التكنولوجيا المتقدمة والأشخاص الحقيقيين لنجعل كل رحلة موثوقة ومريحة وشخصية.",
    aboutSafetyTitle: "أمان متقدم",
    aboutSafetyDesc: "تتبع في الوقت الفعلي ومساعدة في حالات الطوارئ.",
    aboutDriversTitle: "سائقون معتمدون",
    aboutDriversDesc: "فحوصات شاملة للخلفية وتدريب مكثف.",
    aboutPricingTitle: "أسعار مناسبة",
    aboutPricingDesc: "تقديرات شفافة للأسعار ومدفوعات مرنة.",
    aboutSupportTitle: "دعم على مدار الساعة",
    aboutSupportDesc: "خدمة مخصصة للمساعدة في أي استفسارات.",
    aboutFooter: "© 2026 سوبر. جميع الحقوق محفوظة.",

    // Legal Pages
    effectiveDate: "تاريخ السريان: أبريل 2026",
    termsTitle1: "1. قبول الشروط",
    termsDesc1: "بإنشاء حساب وتسجيل الدخول عبر مصادقة الهاتف، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق على أي جزء من هذه الشروط، فلا يجوز لك استخدام خدماتنا.",
    termsTitle2: "2. سلوك المستخدم",
    termsDesc2: "أنت توافق على استخدام المنصة باحترام وأمان. أي طلبات احتيالية، أو مضايقة للسائقين أو الركاب، أو إساءة استخدام نظام التقييم سيؤدي إلى إنهاء الحساب فوراً.",
    termsTitle3: "3. المسؤولية",
    termsDesc3: "يعمل تطبيق سوبر كمنصة تكنولوجية لربط المستخدمين والسائقين المستقلين. رغم تطبيقنا إرشادات صارمة، فإن سوبر غير مسؤولة قانونياً عن السلوك الفردي، أو العناصر المفقودة، أو الحوادث أثناء الرحلة.",
    
    privacyTitle1: "1. جمع البيانات",
    privacyDesc1: "نحن نجمع رقم هاتفك بدقة لأغراض المصادقة. تُستخدم معلومات ملفك الشخصي حصرياً لتسهيل تجربة مميزة داخل المنصة.",
    privacyTitle2: "2. بيانات الموقع",
    privacyDesc2: "بالنسبة للسائقين والمستخدمين، تُستخدم بيانات الموقع فقط أثناء تنشيط التطبيق لتسهيل الرحلات. نحن لا نتتبع موقعك في الخلفية عندما يكون التطبيق مغلقاً تماماً.",
    privacyTitle3: "3. حماية البيانات",
    privacyDesc3: "بياناتك مشفرة ومخزنة بأمان. نحن نقدر خصوصيتك ولا نبيع بياناتك الشخصية أو سجل موقعك لوسطاء بيانات تابعين لجهات خارجية.",
  }
};

type Language = "en" | "ar";
type LanguageContextType = {
  locale: Language;
  t: typeof translations.en;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Language>("en");

  const toggleLanguage = () => {
    setLocale((prev) => (prev === "en" ? "ar" : "en"));
  };

  useEffect(() => {
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [locale]);

  const value = {
    locale,
    t: translations[locale],
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}