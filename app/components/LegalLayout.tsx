"use client";
import React from "react";
import { motion } from "framer-motion";

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-[#F9FAFB] py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100"
      >
        <div className="p-8 md:p-12">
          {children}
        </div>
      </motion.div>
    </main>
  );
}