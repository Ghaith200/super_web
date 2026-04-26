"use client";



import { useState } from "react";

import Image from "next/image";

import Link from "next/link";

import { motion, Variants, AnimatePresence } from "framer-motion";

import {

  Route,

  ShieldCheck,

  UserCheck,

  DollarSign,

  Headphones,

  Menu,

  X,

  Globe,

} from "lucide-react";

// UPDATE THIS PATH if your LanguageContext is in a different folder

import { useLanguage } from "./LanguageContext";



// --- TYPESCRIPT INTERFACE FOR GALLERY ITEM ---

interface GalleryItem {

  id: number;

  title: string;

  desc: string;

}



// --- ANIMATION CONFIGURATION ---

const containerVariants: Variants = {

  hidden: { opacity: 0 },

  show: { opacity: 1, transition: { staggerChildren: 0.15 } },

};



const itemVariants: Variants = {

  hidden: { opacity: 0, y: 20 },

  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },

};



export default function HomePage() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t, toggleLanguage, language } = useLanguage();



  return (

    <div className="relative min-h-screen w-full bg-gray-50 text-gray-900 font-sans selection:bg-orange-100">



      {/* 1. HERO PARALLAX SECTION */}

      <section className="relative w-full h-[100dvh] bg-[url('/1.jpeg')] md:bg-[url('/header.jpeg')] bg-cover bg-center bg-no-repeat md:bg-fixed">



        {/* Sticky Nav Wrapper */}

        <div className="fixed top-0 left-0 w-full p-4 md:p-8 z-[100]">

          <motion.header

            initial={{ opacity: 0, y: -20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8, ease: "easeOut" }}

            className="relative flex justify-between items-center rounded-3xl bg-white/85 backdrop-blur-md border border-orange-100 px-6 py-4 shadow-lg shadow-[#FF8C00]/40 max-w-[1600px] mx-auto"

          >

            <div className="flex items-center gap-4">

              <div className="relative h-10 w-28 md:h-12 md:w-32 overflow-hidden rounded-lg bg-white shadow-sm shadow-[#FF8C00]/30 border border-orange-50">

                <Image src="/logo.png" alt="Brand Logo" fill className="object-contain p-1" />

              </div>

            </div>



            <nav className="hidden md:flex items-center gap-8 font-bold text-gray-700">

              <Link href="#about" className="hover:text-[#FF8C00] transition-colors duration-200">{t.navAbout}</Link>

              <Link href="/privacy" className="hover:text-[#FF8C00] transition-colors duration-200">{t.navPrivacy}</Link>

              <Link href="/terms" className="hover:text-[#FF8C00] transition-colors duration-200">{t.navTerms}</Link>
              <Link href="/contact-us" className="hover:text-[#FF8C00] transition-colors duration-200">{t.navContact}</Link>



              <button onClick={toggleLanguage} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-orange-50 text-gray-800 hover:text-[#FF8C00] transition-colors duration-200">

                <Globe size={18} />

                <span className={language === 'ar' ? 'font-arabic' : ''}>{t.langSwitch}</span>

              </button>

            </nav>



            <div className="flex items-center gap-4">

              <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-xl shadow-md shadow-[#FF8C00]/40 border border-[#FF8C00]/20 bg-white">

                <Image src="/launcher.png" alt="S-UPER App" fill className="object-cover" />

              </div>



              <button

                className="md:hidden flex items-center justify-center p-2 text-gray-700 hover:text-[#FF8C00] transition-colors"

                onClick={() => setIsMenuOpen(!isMenuOpen)}

                aria-label="Toggle Menu"

              >

                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}

              </button>

            </div>

          </motion.header>



          <AnimatePresence>

            {isMenuOpen && (

              <motion.div

                initial={{ opacity: 0, y: -20, scale: 0.95 }}

                animate={{ opacity: 1, y: 0, scale: 1 }}

                exit={{ opacity: 0, y: -20, scale: 0.95 }}

                transition={{ duration: 0.2, ease: "easeOut" }}

                className="absolute top-[88px] left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-[#FF8C00]/40 border border-[#FF8C00]/30 p-6 flex flex-col gap-6 md:hidden z-40"

              >

                <Link href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-gray-800 hover:text-[#FF8C00] transition-colors">{t.navAbout}</Link>

                <Link href="/privacy" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-gray-800 hover:text-[#FF8C00] transition-colors">{t.navPrivacy}</Link>

                <Link href="/terms" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-gray-800 hover:text-[#FF8C00] transition-colors">{t.navTerms}</Link>



                <hr className="border-gray-200" />

                <button onClick={() => { toggleLanguage(); setIsMenuOpen(false); }} className="flex items-center gap-2 text-lg font-bold text-[#FF8C00]">

                  <Globe size={20} />

                  <span>{t.langSwitch}</span>

                </button>

              </motion.div>

            )}

          </AnimatePresence>

        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>

      </section>



      {/* 2. MAIN SCROLLING CONTENT */}

      <section className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8 pb-20 -mt-24 md:-mt-32" id="about">

        <motion.div

          className="bg-white rounded-[40px] shadow-[0_25px_50px_-12px_rgba(255,140,0,0.4)] border-t border-[#FF8C00]/20 p-6 md:p-10 lg:p-14 flex flex-col gap-12"

          variants={containerVariants}

          initial="hidden"

          animate="show"

        >

          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] items-center">



            <motion.div variants={itemVariants} className="flex flex-col gap-6">

              <div className="flex flex-wrap items-center gap-3">

                <div className="inline-flex items-center rounded-full bg-[#FF8C00] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-md shadow-[#FF8C00]/40">

                  {t.section_about}

                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-100 px-4 py-1.5 text-sm font-semibold text-[#FF8C00] shadow-sm shadow-[#FF8C00]/30">

                  <div className="h-2 w-2 rounded-full bg-[#FF8C00]" />

                  {t.experienceDesc.split(' ')[0]}

                </div>

              </div>



              <div className="flex items-center gap-4">

                <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-white border border-[#FF8C00]/20 shadow-md shadow-[#FF8C00]/30 p-1">

                  <Image src="/launcher.png" alt="App Logo" fill className="object-cover rounded-xl" />

                </div>

                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-[#FF8C00] font-bold">{t.premiumBrand}</p>

                  <h1 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">

                    {t.mainTitle}

                  </h1>

                </div>

              </div>



              <p className="text-lg leading-relaxed text-gray-700 font-medium max-w-2xl">

                {t.aboutIntro}

              </p>



              <div className="grid sm:grid-cols-2 gap-4 mt-2">

                <div className="rounded-3xl bg-gray-50 border border-[#FF8C00]/10 p-6 shadow-inner">

                  <h2 className="text-lg font-bold text-gray-900">{t.aboutOurVision}</h2>

                  <p className="mt-2 text-sm text-gray-600 leading-relaxed font-medium">{t.aboutVisionText}</p>

                </div>

                <div className="rounded-3xl bg-gray-50 border border-[#FF8C00]/10 p-6 shadow-inner">

                  <h2 className="text-lg font-bold text-gray-900">{t.aboutOurMission}</h2>

                  <p className="mt-2 text-sm text-gray-600 leading-relaxed font-medium">{t.aboutMissionText}</p>

                </div>

              </div>

            </motion.div>



            <motion.div variants={itemVariants} className="flex flex-col gap-6">

              <div className="flex items-center gap-4 rounded-3xl bg-gray-50 border border-[#FF8C00]/10 p-4 shadow-sm shadow-[#FF8C00]/10">

                <div className="flex h-12 w-12 items-center justify-center shrink-0 rounded-2xl bg-[#FF8C00] text-white shadow-lg shadow-[#FF8C00]/50">

                  <Route className="h-6 w-6" strokeWidth={2.5} />

                </div>

                <div>

                  <p className="text-sm font-bold text-gray-900">{t.secureRide}</p>

                  <p className="text-sm text-gray-600 font-medium">{t.smartRouting}</p>

                </div>

              </div>



              <div className="group relative rounded-3xl p-8 text-white shadow-xl shadow-[#FF8C00]/50 overflow-hidden min-h-[220px] flex flex-col justify-end border border-[#FF8C00]/30">

                <Image src="/2.jpeg" alt="Experience" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#FF8C00]/95 via-[#FF8C00]/60 to-transparent transition-opacity group-hover:opacity-90"></div>

                <div className="relative z-10">

                  <p className="text-xs uppercase tracking-widest text-orange-100 font-bold drop-shadow-md">S-UPER</p>

                  <p className="text-2xl font-black drop-shadow-md mb-2 text-white">{t.mainTitle}</p>

                  <p className="text-sm leading-relaxed text-white/90 font-medium">

                    {t.experienceDesc}

                  </p>

                </div>

              </div>

            </motion.div>

          </div>



          <hr className="border-[#FF8C00]/20 my-4" />



          {/* GALLERY SECTION */}

          <motion.div variants={itemVariants} className="flex flex-col gap-8 my-4">

            <div className="text-center max-w-2xl mx-auto">

              <h2 className="text-3xl font-black text-gray-900 mb-3">{t.galleryTitle}</h2>

              <p className="text-gray-600 font-medium">{t.galleryDesc}</p>

            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

              {t.galleryItems.map((item: GalleryItem) => (

                <div key={item.id} className="group relative h-[280px] rounded-3xl overflow-hidden shadow-md shadow-[#FF8C00]/20 border border-[#FF8C00]/20 hover:shadow-xl hover:shadow-[#FF8C00]/50 transition-all duration-300">

                  <Image src={`/${item.id}.jpeg`} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent transition-all duration-300 group-hover:from-[#FF8C00]/90 group-hover:via-[#FF8C00]/40"></div>

                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 transition-transform duration-300 group-hover:-translate-y-1">

                    <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg">{item.title}</h3>

                    <p className="text-sm text-gray-200 font-medium drop-shadow-lg">{item.desc}</p>

                  </div>

                </div>

              ))}

            </div>

          </motion.div>



          <hr className="border-[#FF8C00]/20 my-4" />



          {/* Bottom Features Grid */}

          <div className="grid lg:grid-cols-[1fr_1fr] gap-10">

            <motion.div variants={itemVariants} className="flex flex-col gap-6">

              <div>

                <h2 className="text-3xl font-black text-gray-900 mb-2">{t.aboutWhyChooseUs}</h2>

                <p className="text-gray-700 font-medium leading-relaxed">

                  {t.whyChooseDesc}

                </p>

              </div>

              <div className="relative w-full flex-grow min-h-[250px] rounded-3xl overflow-hidden shadow-lg shadow-[#FF8C00]/40 border border-[#FF8C00]/30 group">

                <Image src="/3.jpeg" alt="Why Choose Us" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />

              </div>

            </motion.div>



            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4 place-content-center">

              {[

                { icon: ShieldCheck, title: t.aboutSafetyTitle, desc: t.aboutSafetyDesc },

                { icon: UserCheck, title: t.aboutDriversTitle, desc: t.aboutDriversDesc },

                { icon: DollarSign, title: t.aboutPricingTitle, desc: t.aboutPricingDesc },

                { icon: Headphones, title: t.aboutSupportTitle, desc: t.aboutSupportDesc }

              ].map((feature, idx) => (

                <div key={idx} className="flex flex-col gap-3 rounded-3xl bg-gray-50 border border-[#FF8C00]/20 p-6 shadow-md shadow-[#FF8C00]/20 hover:border-[#FF8C00]/50 hover:shadow-lg hover:shadow-[#FF8C00]/40 hover:-translate-y-1 transition-all duration-300 hover:bg-orange-50/50">

                  <div className="flex h-12 w-12 items-center justify-center shrink-0 rounded-2xl bg-orange-50 text-[#FF8C00] shadow-inner shadow-orange-200">

                    <feature.icon className="h-6 w-6" strokeWidth={2.5} />

                  </div>

                  <div>

                    <h3 className="text-md font-bold text-gray-900 leading-tight">{feature.title}</h3>

                    <p className="text-sm text-gray-600 mt-1.5 leading-snug font-medium">{feature.desc}</p>

                  </div>

                </div>

              ))}

            </motion.div>

          </div>



          <hr className="border-[#FF8C00]/20 my-4" />



          {/* DATA TRANSPARENCY BANNER (For Google App Verification) */}

          <motion.div variants={itemVariants} className="bg-orange-50/50 border border-orange-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm">

            <div className="flex h-14 w-14 items-center justify-center shrink-0 rounded-full bg-white text-[#FF8C00] shadow-md shadow-[#FF8C00]/20">

              <ShieldCheck className="h-7 w-7" strokeWidth={2.5} />

            </div>

            <div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.dataTransparencyTitle}</h3>

              <p className="text-gray-700 font-medium leading-relaxed">

                {t.dataTransparencyDesc}

              </p>

            </div>

            <div className="md:ml-auto shrink-0 mt-4 md:mt-0">

              <Link href="/privacy" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#FF8C00] text-white font-bold shadow-lg shadow-[#FF8C00]/40 hover:bg-[#e67e00] transition-colors">

                {t.navPrivacy}

              </Link>

            </div>

          </motion.div>



          <div className="mt-4 flex flex-col items-center gap-6 pt-4 border-t border-gray-100">

            <p className="text-sm font-bold text-gray-400 tracking-wide" dir="ltr">{t.aboutFooter}</p>

          </div>



        </motion.div>

      </section>

    </div>

  );

}