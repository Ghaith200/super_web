"use client";
import React from "react";
import { motion } from "framer-motion";

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <main id="page-content" className="legal-page section-space" aria-label={title}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="legal-layout__card page-width"
      >
        <div className="legal-layout__content">
          {children}
        </div>
      </motion.div>
    </main>
  );
}