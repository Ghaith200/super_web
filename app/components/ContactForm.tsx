// components/ContactForm.tsx
"use client";

import { useState } from "react";
import { sendContactEmail } from "../actions/send-mail";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");

        const formData = new FormData(e.currentTarget);
        const result = await sendContactEmail(formData);

        if (result.success) {
            setStatus("success");
            (e.target as HTMLFormElement).reset();
        } else {
            setStatus("error");
        }
    }

    return (
        <section className="w-full">
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-bold text-gray-900 ml-1">Name</label>
                    <input
                        name="name"
                        type="text"
                        required
                        className="w-full p-3.5 bg-gray-50 border border-[#FF8C00]/20 rounded-2xl mt-1.5 focus:outline-none focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 transition-all text-gray-900 shadow-inner"
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-900 ml-1">Email</label>
                    <input
                        name="email"
                        type="email"
                        required
                        className="w-full p-3.5 bg-gray-50 border border-[#FF8C00]/20 rounded-2xl mt-1.5 focus:outline-none focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 transition-all text-gray-900 shadow-inner"
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-900 ml-1">Phone Number</label>
                    <input
                        name="phone"
                        type="tel"
                        required
                        className="w-full p-3.5 bg-gray-50 border border-[#FF8C00]/20 rounded-2xl mt-1.5 focus:outline-none focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 transition-all text-gray-900 shadow-inner"
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-900 ml-1">Message</label>
                    <textarea
                        name="message"
                        rows={4}
                        required
                        className="w-full p-3.5 bg-gray-50 border border-[#FF8C00]/20 rounded-2xl mt-1.5 focus:outline-none focus:border-[#FF8C00] focus:ring-2 focus:ring-[#FF8C00]/20 transition-all text-gray-900 shadow-inner resize-none"
                    />
                </div>

                <button
                    disabled={status === "sending"}
                    className="w-full mt-4 bg-[#FF8C00] text-white px-6 py-3.5 rounded-full font-bold shadow-lg shadow-[#FF8C00]/40 hover:bg-[#e67e00] transition-all duration-300 disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none disabled:cursor-not-allowed"
                >
                    {status === "sending" ? "Sending..." : "Submit"}
                </button>

                {/* Status Messages styled to fit the rounded aesthetic */}
                {status === "success" && (
                    <div className="mt-4 p-4 rounded-2xl bg-green-50 border border-green-200 text-green-700 text-sm font-bold text-center">
                        Success! Your message has been sent.
                    </div>
                )}
                {status === "error" && (
                    <div className="mt-4 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm font-bold text-center">
                        Error! Something went wrong. Please try again.
                    </div>
                )}
            </form>
        </section>
    );
}