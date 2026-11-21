"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Route } from "lucide-react";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-6">
      <motion.div 
        className="max-w-2xl w-full flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants}>
          <div className="w-28 h-28 bg-[#007AFF] rounded-[28px] shadow-[0_8px_30px_rgb(0,122,255,0.3)] flex items-center justify-center mb-8">
            <Route className="w-14 h-14 text-white" strokeWidth={2.5} />
          </div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-6xl font-black text-[#1C1C1E] tracking-tight mb-4"
        >
          Super App
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-xl text-gray-500 font-medium mb-12 max-w-md"
        >
          The premium way to request and offer rides. Fast, secure, and built for you.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center"
        >
          <Link 
            href="/privacy" 
            className="text-gray-500 hover:text-[#007AFF] font-semibold transition-colors"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms" 
            className="text-gray-500 hover:text-[#007AFF] font-semibold transition-colors"
          >
            Terms of Service
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
