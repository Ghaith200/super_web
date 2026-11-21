// components/ContactForm.tsx
"use client";

import { useState } from "react";
import { sendContactEmail } from "../actions/send-mail";

type ContactFormLabels = {
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    emailPlaceholder: string;
};

export default function ContactForm({
    labels,
    headingId,
}: {
    labels: ContactFormLabels;
    headingId: string;
}) {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");

        const form = e.currentTarget;
        const formData = new FormData(form);
        try {
            const result = await sendContactEmail(formData);

            if (result.success) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    return (
        <section className="w-full" aria-labelledby={headingId}>
            <form onSubmit={handleSubmit} className="contact-form">
                <div>
                    <label htmlFor="contact-name">{labels.name}</label>
                    <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                    />
                </div>

                <div>
                    <label htmlFor="contact-email">{labels.email}</label>
                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder={labels.emailPlaceholder}
                        dir="ltr"
                    />
                </div>

                <div>
                    <label htmlFor="contact-phone">{labels.phone}</label>
                    <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        dir="ltr"
                    />
                </div>

                <div>
                    <label htmlFor="contact-message">{labels.message}</label>
                    <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="button-primary contact-form__submit"
                >
                    {status === "sending" ? labels.sending : labels.submit}
                </button>

                {status === "success" && (
                    <div className="contact-form__status contact-form__status--success" role="status" aria-live="polite">
                        {labels.success}
                    </div>
                )}
                {status === "error" && (
                    <div className="contact-form__status contact-form__status--error" role="alert">
                        {labels.error}
                    </div>
                )}
            </form>
        </section>
    );
}