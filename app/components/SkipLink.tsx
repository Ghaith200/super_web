"use client";

import { useLanguage } from "../LanguageContext";

export default function SkipLink() {
  const { t } = useLanguage();

  return (
    <a className="skip-link" href="#page-content">
      {t.skipToContent}
    </a>
  );
}
