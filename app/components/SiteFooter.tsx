"use client";

import Link from "next/link";
import { useLanguage } from "../LanguageContext";

export default function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="page-width site-footer__inner">
        <Link href="/" className="site-footer__name">
          S-UPER
        </Link>
        <nav className="site-footer__links" aria-label="Footer navigation">
          <Link href="/partners">{t.navPartners}</Link>
          <Link href="/privacy" prefetch={false}>{t.navPrivacy}</Link>
          <Link href="/terms" prefetch={false}>{t.navTerms}</Link>
          <Link href="/contact-us">{t.navContact}</Link>
        </nav>
        <p>{t.aboutFooter}</p>
      </div>
    </footer>
  );
}
