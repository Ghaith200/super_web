import type { Metadata } from "next";
import "./globals.css"; // Keep your existing CSS import
import { LanguageProvider } from "./LanguageContext"; // <-- Import the provider

export const metadata: Metadata = {
  title: "S-UPER", // Must be exactly this. No extra words!
  description: "S-UPER is a premium ride-sharing mobile and web application. Its exact purpose is to enable users to request rides, track verified drivers in real-time, and process secure payments.",
};

export default function RootLayout  ({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Note: The 'lang' and 'dir' attributes will be automatically managed 
    // by the LanguageContext on the client side.
    <html lang="en">
      <body>
        {/* Wrap the children with the LanguageProvider */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}