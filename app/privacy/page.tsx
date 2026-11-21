"use client";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import LegalLayout from "../components/LegalLayout";
import { useLanguage } from "../LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 90, damping: 15 }
  },
};

const headerVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { 
    scale: 1, 
    opacity: 1,
    transition: { type: "spring" as const, bounce: 0.4, duration: 0.8 }
  }
};

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <LegalLayout title={t.navPrivacy}>
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          animate="show"
          className="p-5 bg-orange-500/10 rounded-full mb-6"
        >
          <ShieldCheck size={48} className="text-orange-500" strokeWidth={2} />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl font-extrabold text-[#1C1C1E] tracking-tight"
        >
          {t.privacyPolicyTitle}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 font-medium mt-3"
        >
          {t.effectiveDate}
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        {t.privacyPolicy.map((section, index) => (
          <motion.div 
            key={`privacy-${index}`} 
            variants={cardVariants}
            className="bg-white p-6 md:p-8 rounded-2xl border border-orange-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-orange-500/60 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-orange-600 mb-4 tracking-wide">
              {section.title}
            </h3>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed font-medium">
              {section.content}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </LegalLayout>
  );
}