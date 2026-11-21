"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  CircleDollarSign,
  Headphones,
  Route,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";
import mapScreenshot from "./app-screenshots/9.webp";
import walletScreenshot from "./app-screenshots/8.webp";

export default function HomePage() {
  const { t } = useLanguage();

  const features = [
    { icon: ShieldCheck, title: t.aboutSafetyTitle, description: t.aboutSafetyDesc },
    { icon: UserRoundCheck, title: t.aboutDriversTitle, description: t.aboutDriversDesc },
    { icon: CircleDollarSign, title: t.aboutPricingTitle, description: t.aboutPricingDesc },
    { icon: Headphones, title: t.aboutSupportTitle, description: t.aboutSupportDesc },
  ];

  return (
    <main id="page-content" className="home-page">
      <section className="hero page-width" aria-labelledby="hero-title">
        <div className="hero__copy">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <h1 id="hero-title">{t.mainTitle}</h1>
            <p className="hero__description">{t.aboutIntro}</p>
            <div className="hero__actions">
              <Link href="#app" className="button-primary">
                {t.heroExplore}
                <ArrowDown size={17} aria-hidden="true" />
              </Link>
              <Link href="/contact-us" className="button-secondary">
                {t.heroContact}
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <div className="hero__trust">
              <span className="hero__trust-icon">
                <BadgeCheck size={17} aria-hidden="true" />
              </span>
              <span>{t.secureRide}</span>
              <span className="hero__trust-divider" aria-hidden="true" />
              <span>{t.smartRouting}</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          role="group"
          aria-labelledby="hero-visual-title"
        >
          <div className="hero__visual-glow" aria-hidden="true" />
          <div className="hero__visual-heading">
            <span className="hero__visual-dot" aria-hidden="true" />
            <span id="hero-visual-title">{t.appScreensLabel}</span>
          </div>
          <div className="hero__devices">
            <figure className="hero__device hero__device--map">
              <div className="hero__device-frame">
                <Image
                  src={mapScreenshot}
                  alt={t.mapScreenTitle}
                  loading="eager"
                  sizes="(max-width: 640px) 42vw, 220px"
                />
              </div>
              <figcaption>{t.mapScreenTitle}</figcaption>
            </figure>
            <figure className="hero__device hero__device--wallet">
              <div className="hero__device-frame">
                <Image
                  src={walletScreenshot}
                  alt={t.walletScreenTitle}
                  sizes="(max-width: 640px) 36vw, 190px"
                />
              </div>
              <figcaption>{t.walletScreenTitle}</figcaption>
            </figure>
          </div>
          <div className="hero__visual-footer">
            <span>{t.mapScreenDesc}</span>
            <span className="hero__visual-footer-mark" aria-hidden="true">S</span>
          </div>
        </motion.div>
      </section>

      <section id="app" className="app-intro section-space" aria-labelledby="app-title">
        <div className="page-width app-intro__grid">
          <motion.div
            className="app-intro__heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
          >
            <span className="eyebrow">{t.section_about}</span>
            <h2 id="app-title">{t.appShowcaseTitle}</h2>
            <p>{t.appShowcaseDesc}</p>
          </motion.div>
          <div className="app-intro__screens">
            <article className="app-screen-card">
              <div className="app-screen-card__icon"><Route size={19} aria-hidden="true" /></div>
              <div>
                <h3>{t.mapScreenTitle}</h3>
                <p>{t.mapScreenDesc}</p>
              </div>
            </article>
            <article className="app-screen-card">
              <div className="app-screen-card__icon"><ShieldCheck size={19} aria-hidden="true" /></div>
              <div>
                <h3>{t.walletScreenTitle}</h3>
                <p>{t.walletScreenDesc}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="about-section section-space" aria-labelledby="about-title">
        <div className="page-width about-section__grid">
          <motion.div
            className="about-section__copy"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <span className="eyebrow">{t.section_about}</span>
            <h2 id="about-title">{t.aboutWhyChooseUs}</h2>
            <p className="about-section__intro">{t.whyChooseDesc}</p>
            <div className="about-section__values">
              <article className="value-card">
                <span className="value-card__index">01</span>
                <h3>{t.aboutOurVision}</h3>
                <p>{t.aboutVisionText}</p>
              </article>
              <article className="value-card">
                <span className="value-card__index">02</span>
                <h3>{t.aboutOurMission}</h3>
                <p>{t.aboutMissionText}</p>
              </article>
            </div>
          </motion.div>
          <motion.aside
            className="about-section__aside"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="about-section__icon"><Route size={24} aria-hidden="true" /></div>
            <span className="about-section__aside-label">{t.secureRide}</span>
            <h3>{t.smartRouting}</h3>
            <p>{t.experienceDesc}</p>
            <div className="about-section__aside-line" aria-hidden="true" />
          </motion.aside>
        </div>
      </section>

      <section id="features" className="features-section section-space" aria-labelledby="features-title">
        <div className="page-width">
          <div className="section-heading">
            <h2 id="features-title">{t.featuresTitle}</h2>
            <p>{t.featuresDesc}</p>
          </div>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <span className="feature-card__icon">
                  <feature.icon size={22} strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="feature-card__number">0{index + 1}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="privacy-callout page-width" aria-labelledby="privacy-title">
        <div className="privacy-callout__icon"><ShieldCheck size={24} aria-hidden="true" /></div>
        <div className="privacy-callout__copy">
          <h2 id="privacy-title">{t.dataTransparencyTitle}</h2>
          <p>{t.dataTransparencyDesc}</p>
        </div>
        <Link href="/privacy" prefetch={false} className="button-secondary">
          {t.navPrivacy}
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
