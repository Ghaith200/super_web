"use client";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import LegalLayout from "../components/LegalLayout";
import { useLanguage } from "../LanguageContext";
import { termsOfServiceByLanguage, termsPageText } from "./translations";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }
  },
};

const headerVariants = {
  hidden: { scale: 0.96, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }
  }
};

export default function TermsPage() {
  const { language, t } = useLanguage();
  const pageText = termsPageText[language];

  return (
    <LegalLayout title={t.navTerms}>
      <div className="legal-heading">
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          animate="show"
          className="legal-heading__icon"
        >
          <FileText size={48} className="text-orange-500" strokeWidth={2} />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="legal-heading__title"
        >
          {pageText.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="legal-heading__date"
        >
          {pageText.effectiveDate}
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="legal-sections"
      >
        {termsOfServiceByLanguage[language].map((section, index) => (
          <motion.section
            key={`terms-${index}`} 
            variants={cardVariants}
            className="legal-section"
          >
            <h2 className="legal-section__title">
              {section.title}
            </h2>
            <p className="legal-section__body">
              {section.content}
            </p>
          </motion.section>
        ))}
      </motion.div>
    </LegalLayout>
  );
}