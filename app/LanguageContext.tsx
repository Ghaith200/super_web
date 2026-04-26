"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

const translations = {
  en: {
    // --- NAV & COMMON ---
    navAbout: "About Us",
    navPrivacy: "Privacy Policy",
    navTerms: "Terms of Service",
    navContact: "Contact Us",
    langSwitch: "العربية",
    effectiveDate: "Last updated on 23rd April, 2026",

    // --- HOME PAGE ---
    section_about: "About Us",
    premiumBrand: "Premium Brand",
    mainTitle: "Elevating Your Journey",
    aboutIntro: "Welcome to S-UPER, where we redefine transportation and logistics with cutting-edge technology and a commitment to excellence.",
    experienceDesc: "Experience seamless rides and reliable logistics solutions tailored to your daily needs.",
    aboutOurVision: "Our Vision",
    aboutVisionText: "To be the leading platform driving the future of mobility and smart logistics worldwide.",
    aboutOurMission: "Our Mission",
    aboutMissionText: "Empowering users and providers through a safe, transparent, and highly efficient ecosystem.",
    secureRide: "Secure Rides",
    smartRouting: "Smart Routing Technology",
    galleryTitle: "Experience the Difference",
    galleryDesc: "A glimpse into our premium services and intuitive platform.",
    galleryItems: [
      { id: 1, title: "Modern Fleet", desc: "Comfortable and safe vehicles." },
      { id: 2, title: "Smart Interface", desc: "Easy booking at your fingertips." },
      { id: 3, title: "Fast Delivery", desc: "Reliable logistics solutions." },
      { id: 4, title: "24/7 Support", desc: "Always here for you." }
    ],
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

    // --- APP PRIVACY POLICY ---
    privacyPolicyTitle: "Privacy Policy",
    privacyPolicy: [
      {
        title: "Introduction",
        content: "Welcome to S-UPER Platform. This policy describes our approach to dealing with personal data of S-UPER Platform users.\n\nUsers who are independent providers of transportation, logistics, or courier services via S-UPER Platform are referred to as “Providers”, and their clients, including the passengers and parcel senders, are referred to as “End users” (collectively “users”, “you”).\n\nS-UPER LTD is the entity that provides the Platform and controls processing of data. This policy applies when you use S-UPER's mobile applications, websites, products, content, facilities, and systems."
      },
      {
        title: "1. Information You Provide",
        content: "• Registration and End user information: Includes first name, phone number, email, country, and city. Where permitted, we may request a selfie image for liveness checks or emergency contact numbers.\n\n• Provider information: May include full name, profile picture, license data, vehicle information, proof of identity, background checks, and payment/banking information.\n\n• User generated content: Information you upload on the Platform, such as reviews or audio recordings.\n\n• Orders information: Origin and destination points, payment method, delivery details, and special instructions.\n\n• Communications: Information provided in chat messages, emails, and phone calls to us."
      },
      {
        title: "2. Information We Collect Automatically",
        content: "• Location information: We collect users’ precise location data (GPS and WiFi) to enable orders, provide user support, and ensure safety. Providers' locations are collected while Online or fulfilling orders.\n\n• Transaction information: Information related to services provided, including saved payment methods, amount debited, and receipts.\n\n• Usage & Device information: Access dates, features viewed, device name, IP address, OS version, and network type.\n\n• Communications: We receive data about the time, date, and content of in-app communications to resolve disputes and ensure safety."
      },
      {
        title: "3. Information From Other Sources",
        content: "We may receive information about users from:\n• Third-party services and vendors (e.g., payment processors, background check providers).\n• State authorities and law enforcement agencies.\n• Other users or third parties (e.g., referral programs, reviews, or support complaints)."
      },
      {
        title: "4. How We Use Your Information",
        content: "We use personal information for:\n1. Enabling the use of the Platform (account maintenance, verifying Providers, preventing fraud, providing user support).\n2. Improving and developing features (research, data analysis, machine learning).\n3. Promotion (marketing communications, personalized content, Incentive Events).\n4. Protecting rights and complying with legal requirements."
      },
      {
        title: "5. Automated Decision-Making",
        content: "We use personal information to make automated decisions, such as:\n• Connecting Providers and End users based on availability and proximity.\n• Determining user ratings and deactivating low-rating users.\n• Flagging accounts for fraud or unsafe activities.\n• Recommending average fares based on distance, location, and time.\n\nActions based on such processing occur after human review where required by law."
      },
      {
        title: "6. How We Share Your Information",
        content: "• With other users: End users see Provider details (name, vehicle, location, rating). Providers see End user details (name, order info, destination). Contacts may be shared to facilitate the service.\n\n• With vendors and partners: We share data with payment processors, cloud storage, anti-fraud services, and insurers.\n\n• For legal reasons: We may disclose information to protect rights or respond to law enforcement.\n\n• Share your ride: Passengers can share real-time trip details with their contacts for safety."
      },
      {
        title: "7. Cross Border Data Transfers",
        content: "To support our global operations, we may share your information with members of the S-UPER corporate group and other entities outside of your country of residence, utilizing appropriate safeguards under applicable law, including Standard Contractual Clauses."
      },
      {
        title: "8. Your Rights and Choices",
        content: "• Access & Update: You may review and update your information in your account settings.\n• Deletion: You can delete your account and data through app settings, provided there are no unresolved issues or unsettled debts.\n• Location & Notifications: You can manage location sharing and opt-out of push/marketing notifications via your device settings.\n• Complaints: You have the right to file a complaint with your local supervisory authority."
      },
      {
        title: "9. How We Store & Protect Your Information",
        content: "We keep your personal information for as long as you have an account. We may retain certain data after termination for tax obligations (up to 10 years) or legal disputes (3-7 years).\n\nWe take reasonable technical and organizational security measures in accordance with the ISO/IEC 27001:2022 standard to protect your data from unauthorized access or destruction."
      },
      {
        title: "10. General Disclosures",
        content: "• Protecting children: The Platform is not directed to children. We will delete a child's data if discovered.\n• Telephone monitoring: Support calls may be recorded for quality assurance.\n• Third-party links: We are not responsible for the privacy practices of third-party platforms linked within our app."
      },
      {
        title: "11. Changes to this Policy",
        content: "We may update this policy from time to time. When we do, we will update the “Last Updated” date at the top of this page. By continuing to use the Platform, you agree to the most recent version of this policy."
      }
    ],

    // --- APP TERMS OF SERVICE ---
    termsTitle: "Terms of Service",
    termsOfService: [
      {
        title: "1. Contractual Relationship",
        content: "These Terms of Service constitute a legally binding agreement between you and S-UPER LTD regarding your use of the S-UPER platform. By accessing or using our services, you confirm your agreement to be bound by these Terms."
      },
      {
        title: "2. The Services",
        content: "The S-UPER platform provides a technology platform that enables users to arrange and schedule transportation and logistics services with independent third-party providers. S-UPER itself does not provide transportation or logistics services."
      },
      {
        title: "3. User Accounts",
        content: "To use most aspects of the services, you must register for and maintain an active user account. Account registration requires you to submit certain personal information. You are responsible for all activity that occurs under your account."
      },
      {
        title: "4. Payment Terms",
        content: "You understand that use of the services may result in charges to you for the services or goods you receive. S-UPER will facilitate your payment of the applicable charges on behalf of the third-party provider as such provider's limited payment collection agent."
      }
    ]
  },
  ar: {
    // --- NAV & COMMON (ARABIC) ---
    navAbout: "معلومات عنا",
    navPrivacy: "سياسة الخصوصية",
    navTerms: "شروط الخدمة",
    navContact: "تواصل معانا",

    langSwitch: "English",
    effectiveDate: "آخر تحديث في 23 أبريل 2026",

    // --- HOME PAGE (ARABIC) ---
    section_about: "معلومات عنا",
    premiumBrand: "علامة تجارية متميزة",
    mainTitle: "نرتقي برحلتك",
    aboutIntro: "مرحباً بك في سوبر، حيث نعيد تعريف وسائل النقل والخدمات اللوجستية باستخدام أحدث التقنيات والالتزام بالتميز.",
    experienceDesc: "استمتع برحلات سلسة وحلول لوجستية موثوقة مصممة لتلبية احتياجاتك اليومية.",
    aboutOurVision: "رؤيتنا",
    aboutVisionText: "أن نكون المنصة الرائدة التي تقود مستقبل التنقل والخدمات اللوجستية الذكية في جميع أنحاء العالم.",
    aboutOurMission: "مهمتنا",
    aboutMissionText: "تمكين المستخدمين ومقدمي الخدمات من خلال نظام بيئي آمن وشفاف وعالي الكفاءة.",
    secureRide: "رحلات آمنة",
    smartRouting: "تقنية التوجيه الذكي",
    galleryTitle: "اكتشف الفرق",
    galleryDesc: "لمحة عن خدماتنا المتميزة ومنصتنا البديهية.",
    galleryItems: [
      { id: 1, title: "أسطول حديث", desc: "مركبات مريحة وآمنة." },
      { id: 2, title: "واجهة ذكية", desc: "حجز سهل في متناول يدك." },
      { id: 3, title: "توصيل سريع", desc: "حلول لوجستية موثوقة." },
      { id: 4, title: "دعم على مدار الساعة", desc: "نحن هنا دائماً من أجلك." }
    ],
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

    // --- APP PRIVACY POLICY (ARABIC) ---
    privacyPolicyTitle: "سياسة الخصوصية",
    privacyPolicy: [
      {
        title: "مقدمة",
        content: "مرحبًا بك في منصة سوبر. تصف هذه السياسة نهجنا في التعامل مع البيانات الشخصية لمستخدمي منصة سوبر.\n\nيُشار إلى المستخدمين الذين يقدمون خدمات النقل أو الخدمات اللوجستية بشكل مستقل عبر منصة سوبر باسم \"مقدمي الخدمات\"، ويُشار إلى عملائهم، بما في ذلك الركاب ومرسلي الطرود، باسم \"المستخدمين النهائيين\" (يُشار إليهم مجتمعين باسم \"المستخدمين\"، أو \"أنت\").\n\nشركة S-UPER LTD هي الكيان الذي يوفر المنصة ويتحكم في معالجة البيانات. تنطبق هذه السياسة عند استخدامك لتطبيقات الهاتف المحمول ومواقع الويب والمنتجات والمحتوى والمرافق والأنظمة الخاصة بـ سوبر."
      },
      {
        title: "1. المعلومات التي تقدمها",
        content: "• معلومات التسجيل والمستخدم النهائي: تشمل الاسم الأول، ورقم الهاتف، والبريد الإلكتروني، والبلد، والمدينة. حيثما يُسمح بذلك، قد نطلب صورة شخصية للتحقق من الهوية أو أرقام الاتصال في حالات الطوارئ.\n\n• معلومات مقدم الخدمة: قد تشمل الاسم الكامل، وصورة الملف الشخصي، وبيانات الترخيص، ومعلومات المركبة، وإثبات الهوية، وفحوصات الخلفية، والمعلومات المصرفية/الدفع.\n\n• المحتوى الذي ينشئه المستخدم: المعلومات التي تقوم بتحميلها على المنصة، مثل المراجعات أو التسجيلات الصوتية.\n\n• معلومات الطلبات: نقاط الانطلاق والوصول، وطريقة الدفع، وتفاصيل التسليم، والتعليمات الخاصة.\n\n• الاتصالات: المعلومات المقدمة في رسائل الدردشة ورسائل البريد الإلكتروني والمكالمات الهاتفية الموجهة إلينا."
      },
      {
        title: "2. المعلومات التي نجمعها تلقائياً",
        content: "• معلومات الموقع: نقوم بجمع بيانات الموقع الدقيقة للمستخدمين (GPS و WiFi) لتمكين الطلبات، وتقديم دعم المستخدم، وضمان السلامة. يتم جمع مواقع مقدمي الخدمات أثناء اتصالهم بالإنترنت أو تنفيذ الطلبات.\n\n• معلومات المعاملات: المعلومات المتعلقة بالخدمات المقدمة، بما في ذلك طرق الدفع المحفوظة، والمبلغ المخصوم، والإيصالات.\n\n• معلومات الاستخدام والجهاز: تواريخ الوصول، والميزات المعروضة، واسم الجهاز، وعنوان IP، وإصدار نظام التشغيل، ونوع الشبكة.\n\n• الاتصالات: نتلقى بيانات حول وقت وتاريخ ومحتوى الاتصالات داخل التطبيق لحل النزاعات وضمان السلامة."
      },
      {
        title: "3. معلومات من مصادر أخرى",
        content: "قد نتلقى معلومات حول المستخدمين من:\n• خدمات خارجية وموردين (مثل معالجي الدفع، ومزودي خدمات فحص الخلفية).\n• السلطات الحكومية ووكالات إنفاذ القانون.\n• مستخدمين آخرين أو أطراف ثالثة (مثل برامج الإحالة، أو المراجعات، أو شكاوى الدعم)."
      },
      {
        title: "4. كيف نستخدم معلوماتك",
        content: "نحن نستخدم المعلومات الشخصية من أجل:\n1. تمكين استخدام المنصة (صيانة الحساب، والتحقق من مقدمي الخدمات، ومنع الاحتيال، وتقديم دعم للمستخدم).\n2. تحسين وتطوير الميزات (البحث، وتحليل البيانات، والتعلم الآلي).\n3. الترويج (الاتصالات التسويقية، والمحتوى المخصص، والفعاليات التحفيزية).\n4. حماية الحقوق والامتثال للمتطلبات القانونية."
      },
      {
        title: "5. اتخاذ القرارات الآلية",
        content: "نحن نستخدم المعلومات الشخصية لاتخاذ قرارات آلية، مثل:\n• ربط مقدمي الخدمات والمستخدمين النهائيين بناءً على التوافر والقرب.\n• تحديد تقييمات المستخدمين وإلغاء تنشيط المستخدمين ذوي التقييم المنخفض.\n• تمييز الحسابات التي يشتبه في قيامها بالاحتيال أو الأنشطة غير الآمنة.\n• التوصية بمتوسط الأسعار بناءً على المسافة والموقع والوقت.\n\nتحدث الإجراءات بناءً على هذه المعالجة بعد مراجعة بشرية حيثما يقتضي القانون ذلك."
      },
      {
        title: "6. كيف نشارك معلوماتك",
        content: "• مع مستخدمين آخرين: يرى المستخدمون النهائيون تفاصيل مقدم الخدمة (الاسم، المركبة، الموقع، التقييم). يرى مقدمو الخدمات تفاصيل المستخدم النهائي (الاسم، معلومات الطلب، الوجهة). قد تتم مشاركة جهات الاتصال لتسهيل الخدمة.\n\n• مع الموردين والشركاء: نشارك البيانات مع معالجي الدفع، والتخزين السحابي، وخدمات مكافحة الاحتيال، وشركات التأمين.\n\n• لأسباب قانونية: قد نفصح عن المعلومات لحماية الحقوق أو الاستجابة لجهات إنفاذ القانون.\n\n• مشاركة رحلتك: يمكن للركاب مشاركة تفاصيل الرحلة في الوقت الفعلي مع جهات اتصالهم من أجل السلامة."
      },
      {
        title: "7. عمليات نقل البيانات عبر الحدود",
        content: "لدعم عملياتنا العالمية، قد نشارك معلوماتك مع أعضاء مجموعة شركات سوبر وكيانات أخرى خارج بلد إقامتك، باستخدام الضمانات المناسبة بموجب القانون المعمول به، بما في ذلك البنود التعاقدية القياسية."
      },
      {
        title: "8. حقوقك وخياراتك",
        content: "• الوصول والتحديث: يمكنك مراجعة وتحديث معلوماتك في إعدادات حسابك.\n• الحذف: يمكنك حذف حسابك وبياناتك من خلال إعدادات التطبيق، بشرط عدم وجود مشكلات لم يتم حلها أو ديون غير مسددة.\n• الموقع والإشعارات: يمكنك إدارة مشاركة الموقع وإلغاء الاشتراك في الإشعارات التسويقية عبر إعدادات جهازك.\n• الشكاوى: يحق لك تقديم شكوى إلى السلطة الإشرافية المحلية لديك."
      },
      {
        title: "9. كيف نقوم بتخزين وحماية معلوماتك",
        content: "نحتفظ بمعلوماتك الشخصية طالما كان لديك حساب. قد نحتفظ ببعض البيانات بعد إنهاء الحساب للالتزامات الضريبية (حتى 10 سنوات) أو النزاعات القانونية (3-7 سنوات).\n\nنتخذ تدابير أمنية فنية وتنظيمية معقولة وفقًا لمعيار ISO/IEC 27001:2022 لحماية بياناتك من الوصول غير المصرح به أو الإتلاف."
      },
      {
        title: "10. إفصاحات عامة",
        content: "• حماية الأطفال: المنصة ليست موجهة للأطفال. سنقوم بحذف بيانات أي طفل إذا تم اكتشافها.\n• مراقبة الهاتف: قد يتم تسجيل مكالمات الدعم لضمان الجودة.\n• روابط الجهات الخارجية: نحن لسنا مسؤولين عن ممارسات الخصوصية لمنصات الجهات الخارجية المرتبطة داخل تطبيقنا."
      },
      {
        title: "11. التغييرات على هذه السياسة",
        content: "قد نقوم بتحديث هذه السياسة من وقت لآخر. عندما نفعل ذلك، سنقوم بتحديث تاريخ \"آخر تحديث\" في أعلى هذه الصفحة. من خلال الاستمرار في استخدام المنصة، فإنك توافق على أحدث إصدار من هذه السياسة."
      }
    ],

    // --- APP TERMS OF SERVICE (ARABIC) ---
    termsTitle: "شروط الخدمة",
    termsOfService: [
      {
        title: "1. العلاقة التعاقدية",
        content: "تشكل شروط الخدمة هذه اتفاقية ملزمة قانونًا بينك وبين شركة S-UPER LTD فيما يتعلق باستخدامك لمنصة سوبر. من خلال الوصول إلى خدماتنا أو استخدامها، فإنك تؤكد موافقتك على الالتزام بهذه الشروط."
      },
      {
        title: "2. الخدمات",
        content: "توفر منصة سوبر منصة تقنية تمكن المستخدمين من ترتيب وجدولة خدمات النقل والخدمات اللوجستية مع مزودي خدمات مستقلين من جهات خارجية. سوبر نفسها لا تقدم خدمات النقل أو الخدمات اللوجستية."
      },
      {
        title: "3. حسابات المستخدمين",
        content: "لاستخدام معظم جوانب الخدمات، يجب عليك التسجيل للحصول على حساب مستخدم نشط والاحتفاظ به. يتطلب تسجيل الحساب منك تقديم معلومات شخصية معينة. أنت مسؤول عن جميع الأنشطة التي تحدث ضمن حسابك."
      },
      {
        title: "4. شروط الدفع",
        content: "أنت تدرك أن استخدام الخدمات قد يؤدي إلى فرض رسوم عليك مقابل الخدمات أو السلع التي تتلقاها. ستقوم سوبر بتسهيل دفعك للرسوم المطبقة نيابة عن مزود الخدمة الخارجي بصفتها وكيل تحصيل مدفوعات محدود."
      }
    ]
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

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const isRtl = language === "ar";
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRtl }}>
      {/* Automatically adjust the document direction based on language */}
      <div dir={isRtl ? "rtl" : "ltr"} className={isRtl ? "font-arabic" : "font-sans"}>
        {children}
      </div>
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