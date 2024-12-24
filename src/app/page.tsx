"use client";

import { CurrencyConverter } from "@/components/currency-converter";
import { SocialLinks } from "@/components/social-links";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="container mx-auto px-4 py-8 min-h-screen flex flex-col overflow-hidden">
      <LanguageSwitcher />
      <div className="flex-1">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("title")}
        </motion.h1>
        <motion.p
          className="text-gray-400 text-lg mb-12 mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t("description")}
        </motion.p>
        <CurrencyConverter />
      </div>
      <SocialLinks />
    </main>
  );
}
