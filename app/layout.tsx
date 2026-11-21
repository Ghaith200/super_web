import type { Metadata } from "next";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { LanguageProvider } from "./LanguageContext";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import SkipLink from "./components/SkipLink";

export const metadata: Metadata = {
  title: "S-UPER", // Must be exactly this. No extra words!
  description: "S-UPER is a premium ride-sharing mobile and web application. Its exact purpose is to enable users to request rides, track verified drivers in real-time, and process secure payments.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <MotionConfig reducedMotion="user">
            <SkipLink />
            <SiteHeader />
            {children}
            <SiteFooter />
          </MotionConfig>
        </LanguageProvider>
      </body>
    </html>
  );
}