"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Globe2, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../LanguageContext";

const navigation = [
  { href: "/#about", key: "navAbout" as const, route: "/" },
  { href: "/partners", key: "navPartners" as const, route: "/partners" },
  { href: "/privacy", key: "navPrivacy" as const, route: "/privacy" },
  { href: "/terms", key: "navTerms" as const, route: "/terms" },
  { href: "/contact-us", key: "navContact" as const, route: "/contact-us" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, language, toggleLanguage } = useLanguage();

  function switchLanguage() {
    toggleLanguage();
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="page-width">
        <div className="site-header__bar">
          <Link
            href="/"
            className="site-header__brand"
            aria-label={t.homeLink}
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/launcher.png"
              alt=""
              width={52}
              height={52}
              loading="eager"
              className="site-header__mark"
            />
            <span className="site-header__wordmark">
              S-UPER
              <small>SECURE DRIVE</small>
            </span>
          </Link>

          <nav className="site-header__desktop" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                prefetch={item.key !== "navPrivacy" && item.key !== "navTerms"}
                aria-current={pathname === item.route ? "page" : undefined}
                className="site-header__link"
              >
                {t[item.key]}
              </Link>
            ))}
            <button
              type="button"
              className="site-header__language"
              onClick={switchLanguage}
              aria-label={language === "en" ? t.switchToArabic : t.switchToEnglish}
            >
              <Globe2 size={17} aria-hidden="true" />
              <span>{t.langSwitch}</span>
            </button>
          </nav>

          <div className="site-header__mobile-actions">
            <button
              type="button"
              className="site-header__language site-header__language--mobile"
              onClick={switchLanguage}
              aria-label={language === "en" ? t.switchToArabic : t.switchToEnglish}
            >
              <Globe2 size={17} aria-hidden="true" />
              <span>{t.langSwitch}</span>
            </button>
            <button
              type="button"
              className="site-header__menu-button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? t.closeMenu : t.openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-navigation"
              aria-label="Main navigation"
              className="site-header__mobile"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  prefetch={item.key !== "navPrivacy" && item.key !== "navTerms"}
                  aria-current={pathname === item.route ? "page" : undefined}
                  className="site-header__mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {t[item.key]}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
