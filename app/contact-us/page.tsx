"use client";

import { Mail } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { useLanguage } from "../LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main id="page-content" className="contact-page section-space">
      <div className="contact-card page-width">
        <div className="contact-card__heading">
          <div className="contact-card__icon">
            <Mail size={24} aria-hidden="true" />
          </div>
          <h1 id="contact-title">{t.contactTitle}</h1>
          <p>{t.contactIntro}</p>
        </div>
        <ContactForm
          headingId="contact-title"
          labels={{
            name: t.contactName,
            email: t.contactEmail,
            phone: t.contactPhone,
            message: t.contactMessage,
            submit: t.contactSubmit,
            sending: t.contactSending,
            success: t.contactSuccess,
            error: t.contactError,
            emailPlaceholder: t.contactEmailPlaceholder,
          }}
        />
      </div>
    </main>
  );
}