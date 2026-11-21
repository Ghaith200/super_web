"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Code2, Sparkles, UsersRound } from "lucide-react";
import axivoLogo from "../axivo_logo.jpg";
import superLogo from "../launcher.png";
import { useLanguage } from "../LanguageContext";

const staggeredEntrance: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const entranceItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PartnersPage() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion() ?? false;

  const collaborationValues = [
    { icon: Code2, title: t.partnersTechnologyTitle, description: t.partnersTechnologyDescription },
    { icon: Sparkles, title: t.partnersInnovationTitle, description: t.partnersInnovationDescription },
    { icon: UsersRound, title: t.partnersSharedVisionTitle, description: t.partnersSharedVisionDescription },
  ];

  return (
    <main id="page-content" className="partners-page section-space">
      <div className="page-width">
        <motion.header
          className="partners-page__heading"
          variants={staggeredEntrance}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="eyebrow" variants={entranceItem}>
            {t.partnersEyebrow}
          </motion.span>
          <motion.h1 variants={entranceItem}>{t.partnersTitle}</motion.h1>
          <motion.p variants={entranceItem}>{t.partnersDescription}</motion.p>
        </motion.header>

        <motion.section
          className="partners-showcase"
          aria-label={t.partnersEyebrow}
          initial={{ opacity: 0, y: 22, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="partners-showcase__glow" aria-hidden="true" key="glow" />
          <div className="partners-showcase__logos" key="logos">
            <motion.figure
              className="partner-logo"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
            >
              <div className="partner-logo__frame">
                <Image
                  src={superLogo}
                  alt={t.partnersSuperName}
                  className="partner-logo__image partner-logo__image--super"
                  loading="eager"
                />
              </div>
              <figcaption>{t.partnersSuperName}</figcaption>
            </motion.figure>

            <motion.span
              className="partners-showcase__cross"
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.7, rotate: -25 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.4, delay: 0.45, ease: "easeOut" }}
            >
              ×
            </motion.span>

            <motion.figure
              className="partner-logo"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.4 }}
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
            >
              <div className="partner-logo__frame">
                <Image
                  src={axivoLogo}
                  alt={t.partnersAxivoName}
                  className="partner-logo__image partner-logo__image--axivo"
                  loading="lazy"
                />
              </div>
              <figcaption>{t.partnersAxivoName}</figcaption>
            </motion.figure>
          </div>

          <div className="partners-showcase__feature" key="feature">
            <span className="partners-showcase__badge">{t.partnersFeaturedLabel}</span>
            <h2>{t.partnersFeaturedTitle}</h2>
            <p className="partners-showcase__type">{t.partnersCompanyType}</p>
            <h3>{t.partnersPartnershipTitle}</h3>
            <p className="partners-showcase__description">{t.partnersCollaborationDescription}</p>
          </div>

          <p className="partners-showcase__caption" key="caption">{t.partnersCaption}</p>
        </motion.section>

        <motion.section
          className="partners-values"
          aria-label={t.partnersValuesLabel}
          variants={staggeredEntrance}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {collaborationValues.map(({ icon: Icon, title, description }) => (
            <motion.article
              className="partners-value"
              key={title}
              variants={entranceItem}
              whileHover={prefersReducedMotion ? undefined : { y: -5 }}
              transition={{ duration: 0.22 }}
            >
              <span className="partners-value__icon">
                <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
              </span>
              <h2>{title}</h2>
              <p>{description}</p>
            </motion.article>
          ))}
        </motion.section>
      </div>
    </main>
  );
}
