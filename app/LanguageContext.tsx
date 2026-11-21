"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";

const translations = {
  en: {
    // --- NAV & COMMON ---
    navAbout: "About Us",
    navPrivacy: "Privacy Policy",
    navTerms: "Terms of Service",
    navContact: "Contact Us",
    navPartners: "Partners",
    homeLink: "S-UPER home",
    langSwitch: "العربية",
    switchToArabic: "Switch to Arabic",
    switchToEnglish: "Switch to English",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to content",
    // --- HOME PAGE ---
    section_about: "About Us",
    mainTitle: "Elevating Your Journey",
    aboutIntro: "Welcome to S-UPER, where we redefine transportation and logistics with cutting-edge technology and a commitment to excellence.",
    experienceDesc: "Experience seamless rides and reliable logistics solutions tailored to your daily needs.",
    aboutOurVision: "Our Vision",
    aboutVisionText: "To be the leading platform driving the future of mobility and smart logistics worldwide.",
    aboutOurMission: "Our Mission",
    aboutMissionText: "Empowering users and providers through a safe, transparent, and highly efficient ecosystem.",
    secureRide: "Secure Rides",
    smartRouting: "Smart Routing Technology",
    aboutWhyChooseUs: "Why Choose S-UPER?",
    whyChooseDesc: "We bring together industry-leading safety standards, transparent pricing, and exceptional support to give you peace of mind on every journey.",
    aboutSafetyTitle: "Uncompromised Safety",
    aboutSafetyDesc: "Rigorous background checks and real-time tracking.",
    aboutDriversTitle: "Verified Providers",
    aboutDriversDesc: "Professional and highly rated independent partners.",
    aboutPricingTitle: "Transparent Pricing",
    aboutPricingDesc: "No hidden fees. Know your estimate before you ride.",
    aboutSupportTitle: "Dedicated Support",
    aboutSupportDesc: "Our customer service team is available 24/7.",
    dataTransparencyTitle: "Your Data is Secure",
    dataTransparencyDesc: "We prioritize your privacy. Learn how we protect and manage your information in compliance with global standards.",
    aboutFooter: "© 2026 S-UPER LTD. All rights reserved.",
    heroExplore: "Explore the app",
    heroContact: "Talk to our team",
    appScreensLabel: "Inside the S-UPER app",
    appShowcaseTitle: "Your journey, in one clear view",
    appShowcaseDesc: "A closer look at the S-UPER app experience.",
    mapScreenTitle: "Ride map",
    mapScreenDesc: "See the ride experience directly from the S-UPER app.",
    walletScreenTitle: "In-app wallet",
    walletScreenDesc: "A real view of the wallet screen in the S-UPER app.",
    featuresTitle: "Thoughtful from pickup to arrival",
    featuresDesc: "The essentials for a more confident journey.",
    contactTitle: "Contact us",
    contactIntro: "Have a question? Send our team a message and we’ll be in touch.",
    contactName: "Name",
    contactEmail: "Email",
    contactPhone: "Phone number",
    contactMessage: "Message",
    contactSubmit: "Send message",
    contactSending: "Sending...",
    contactSuccess: "Your message has been sent. Thank you for reaching out.",
    contactError: "We couldn’t send your message. Please try again.",
    contactEmailPlaceholder: "you@example.com",
    partnersEyebrow: "Our Partners",
    partnersTitle: "Building the Future Together",
    partnersDescription: "At S-UPER, we believe great things happen through collaboration. We are proud to work alongside innovative technology companies.",
    partnersSuperName: "S-UPER",
    partnersAxivoName: "Axivo",
    partnersCaption: "Working together on technology for better journeys.",
    partnersFeaturedLabel: "Featured Partner",
    partnersFeaturedTitle: "AXIVO",
    partnersCompanyType: "Technology Company",
    partnersPartnershipTitle: "S-UPER × AXIVO",
    partnersCollaborationDescription: "S-UPER is collaborating with AXIVO, a technology company, to bring smarter, more reliable digital experiences to our users and providers.",
    partnersValuesLabel: "What we build together",
    partnersTechnologyTitle: "Technology",
    partnersTechnologyDescription: "Combining our expertise to deliver modern, dependable digital solutions.",
    partnersInnovationTitle: "Innovation",
    partnersInnovationDescription: "Constantly exploring new ideas to improve every journey.",
    partnersSharedVisionTitle: "Shared Vision",
    partnersSharedVisionDescription: "Working towards a safer and more efficient ecosystem for everyone.",

  },
  ar: {
    // --- NAV & COMMON (ARABIC) ---
    navAbout: "معلومات عنا",
    navPrivacy: "سياسة الخصوصية",
    navTerms: "شروط الخدمة",
    navContact: "تواصل معانا",
    navPartners: "الشركاء",
    homeLink: "S-UPER الصفحة الرئيسية",

    langSwitch: "English",
    switchToArabic: "التبديل إلى العربية",
    switchToEnglish: "التبديل إلى الإنجليزية",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    skipToContent: "انتقل إلى المحتوى",
    // --- HOME PAGE (ARABIC) ---
    section_about: "معلومات عنا",
    mainTitle: "نرتقي برحلتك",
    aboutIntro: "مرحباً بك في سوبر، حيث نعيد تعريف وسائل النقل والخدمات اللوجستية باستخدام أحدث التقنيات والالتزام بالتميز.",
    experienceDesc: "استمتع برحلات سلسة وحلول لوجستية موثوقة مصممة لتلبية احتياجاتك اليومية.",
    aboutOurVision: "رؤيتنا",
    aboutVisionText: "أن نكون المنصة الرائدة التي تقود مستقبل التنقل والخدمات اللوجستية الذكية في جميع أنحاء العالم.",
    aboutOurMission: "مهمتنا",
    aboutMissionText: "تمكين المستخدمين ومقدمي الخدمات من خلال نظام بيئي آمن وشفاف وعالي الكفاءة.",
    secureRide: "رحلات آمنة",
    smartRouting: "تقنية التوجيه الذكي",
    aboutWhyChooseUs: "لماذا تختار سوبر؟",
    whyChooseDesc: "نحن نجمع بين معايير السلامة الرائدة في الصناعة والأسعار الشفافة والدعم الاستثنائي لمنحك راحة البال في كل رحلة.",
    aboutSafetyTitle: "سلامة لا هوادة فيها",
    aboutSafetyDesc: "فحوصات خلفية صارمة وتتبع في الوقت الفعلي.",
    aboutDriversTitle: "مقدمو خدمات معتمدون",
    aboutDriversDesc: "شركاء مستقلون محترفون وذوو تقييم عالٍ.",
    aboutPricingTitle: "أسعار شفافة",
    aboutPricingDesc: "لا توجد رسوم خفية. تعرف على تقديرك قبل الركوب.",
    aboutSupportTitle: "دعم مخصص",
    aboutSupportDesc: "فريق خدمة العملاء لدينا متاح على مدار الساعة.",
    dataTransparencyTitle: "بياناتك آمنة",
    dataTransparencyDesc: "نحن نعطي الأولوية لخصوصيتك. تعرف على كيفية حماية وإدارة معلوماتك وفقًا للمعايير العالمية.",
    aboutFooter: "© 2026 شركة S-UPER LTD. جميع الحقوق محفوظة.",
    heroExplore: "اكتشف التطبيق",
    heroContact: "تواصل مع فريقنا",
    appScreensLabel: "داخل تطبيق S-UPER",
    appShowcaseTitle: "رحلتك، في شاشة واحدة واضحة",
    appShowcaseDesc: "اكتشف تجربة تطبيق S-UPER عن قرب.",
    mapScreenTitle: "خريطة الرحلة",
    mapScreenDesc: "تعرّف على تجربة الرحلة من داخل تطبيق S-UPER.",
    walletScreenTitle: "المحفظة داخل التطبيق",
    walletScreenDesc: "هذه لقطة حقيقية لشاشة المحفظة في تطبيق S-UPER.",
    featuresTitle: "عناية من لحظة الانطلاق حتى الوصول",
    featuresDesc: "كل ما تحتاجه لرحلة أكثر راحة واطمئناناً.",
    contactTitle: "تواصل معنا",
    contactIntro: "هل لديك سؤال؟ أرسل رسالة إلى فريقنا وسنتواصل معك.",
    contactName: "الاسم",
    contactEmail: "البريد الإلكتروني",
    contactPhone: "رقم الهاتف",
    contactMessage: "الرسالة",
    contactSubmit: "إرسال الرسالة",
    contactSending: "جارٍ الإرسال...",
    contactSuccess: "تم إرسال رسالتك. شكراً لتواصلك معنا.",
    contactError: "تعذّر إرسال رسالتك. يرجى المحاولة مرة أخرى.",
    contactEmailPlaceholder: "you@example.com",
    partnersEyebrow: "شركاؤنا",
    partnersTitle: "نبني المستقبل معًا",
    partnersDescription: "في S-UPER، نؤمن بأن التعاون يصنع إنجازات عظيمة. نفخر بالعمل جنبًا إلى جنب مع شركات تقنية مبتكرة.",
    partnersSuperName: "S-UPER",
    partnersAxivoName: "Axivo",
    partnersCaption: "نعمل معاً على تطوير التقنية لرحلات أفضل.",
    partnersFeaturedLabel: "الشريك المميز",
    partnersFeaturedTitle: "AXIVO",
    partnersCompanyType: "شركة تقنية",
    partnersPartnershipTitle: "S-UPER × AXIVO",
    partnersCollaborationDescription: "تتعاون S-UPER مع AXIVO، وهي شركة تقنية، لتقديم تجارب رقمية أذكى وأكثر موثوقية لمستخدمينا ومزودي الخدمات.",
    partnersValuesLabel: "ما نبنيه معًا",
    partnersTechnologyTitle: "التقنية",
    partnersTechnologyDescription: "نجمع خبراتنا لتقديم حلول رقمية حديثة وموثوقة.",
    partnersInnovationTitle: "الابتكار",
    partnersInnovationDescription: "نبحث باستمرار عن أفكار جديدة لتحسين كل رحلة.",
    partnersSharedVisionTitle: "رؤية مشتركة",
    partnersSharedVisionDescription: "نعمل معًا نحو منظومة أكثر أمانًا وكفاءة للجميع.",

  }
};

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations.en;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const transitionControls = useAnimationControls();
  const previousLanguage = useRef(language);
  const prefersReducedMotion = useReducedMotion();

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const isRtl = language === "ar";
  const t = translations[language];

  useLayoutEffect(() => {
    if (previousLanguage.current === language) return;

    previousLanguage.current = language;

    if (prefersReducedMotion) {
      transitionControls.set({ opacity: 1, y: 0 });
      return;
    }

    transitionControls.set({ opacity: 0, y: 8 });
    void transitionControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
    });
  }, [language, prefersReducedMotion, transitionControls]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
  }, [isRtl, language]);

  const contextValue = useMemo(
    () => ({ language, toggleLanguage, t, isRtl }),
    [language, toggleLanguage, t, isRtl],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      <motion.div
        dir={isRtl ? "rtl" : "ltr"}
        className={isRtl ? "font-arabic" : ""}
        initial={false}
        animate={transitionControls}
      >
        {children}
      </motion.div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};  