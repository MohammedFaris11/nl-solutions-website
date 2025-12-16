import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import Scene from './Scene';

import { useThemeClasses } from '../hooks/useThemeClasses';
import { useTheme } from '../contexts/ThemeContext';

export const Hero = () => {
  const { t } = useTranslation();
  const tc = useThemeClasses();
  const { theme } = useTheme();

  const heroBackgroundImage = "/Capture d'écran 2025-12-02 014637.png";

  const heroGradient = theme === 'dark'
    ? 'bg-gradient-to-b from-slate-950 to-slate-900'
    : 'bg-gradient-to-b from-slate-50 to-white';

  return (
    <section id="home" className={`relative h-screen w-full flex items-center justify-center overflow-hidden ${heroGradient}`}>

      {/* Background Image - full width band at the bottom */}
      <motion.img
        src={heroBackgroundImage}
        alt="Construction background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="pointer-events-none select-none absolute bottom-0 left-0 w-full h-1/3 md:h-1/2 object-cover object-bottom z-[5]"
        style={{
          opacity: theme === 'dark' ? 0.35 : 0.25,
          filter: theme === 'dark' 
            ? 'brightness(1.35) contrast(1.25)' 
            : 'invert(1) brightness(0.9) contrast(1.3)'
        }}
        onError={(e) => {
          console.error('Hero background image failed to load:', heroBackgroundImage);
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />

      {/* Subtle gradient behind lower content for better text readability */}
      <div
        className={`pointer-events-none absolute bottom-0 left-0 w-full h-2/3 z-[6] ${
          theme === 'dark'
            ? 'bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/40'
            : 'bg-gradient-to-t from-white/90 via-white/70 to-white/30'
        }`}
      />

      {/* 3D Background (Stars / Particles) */}
      <Scene />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left w-full grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full border border-nl-yellow/30 bg-nl-yellow/10 w-fit backdrop-blur-sm"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-nl-yellow text-sm font-bold tracking-widest uppercase"
            >
              {t('hero.tagline')}
            </motion.span>
          </motion.div>

          <h1 className={`text-5xl md:text-7xl font-extrabold ${tc.textWhite} leading-tight`}>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block"
            >
              {t('hero.title1')}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block"
            >
              {t('hero.title2')}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="block"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nl-blue to-cyan-400">{t('hero.title3')}</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className={`text-lg md:text-xl max-w-lg ${
              theme === 'dark'
                ? 'text-white'
                : 'text-slate-900 bg-white/90 px-4 py-3 rounded-xl shadow-lg shadow-slate-900/10 backdrop-blur-sm'
            }`}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <motion.a
              href="#expertise"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-2 bg-nl-yellow text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-all shadow-lg shadow-nl-yellow/20"
            >
              {t('hero.discoverServices')}
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center gap-2 border ${tc.border} ${theme === 'dark' ? 'bg-white/5' : 'bg-slate-900/5'} backdrop-blur-sm ${tc.textWhite} px-8 py-4 rounded-lg font-semibold ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-slate-900/10'} transition-all`}
            >
              {t('hero.contactUs')}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Abstract Visual or Hero Image replacement for PDF 3D look */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:flex justify-center items-center"
        >
          <div className="relative w-96 h-96">
            <motion.div
              className="absolute inset-0 bg-nl-blue/20 blur-[100px] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              animate={{ opacity: 1, y: 0, rotate: 3 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ rotate: 0, scale: 1.05, y: -5 }}
              className={`relative z-10 border ${tc.border} ${tc.bgCard} backdrop-blur-md p-8 rounded-2xl shadow-2xl border-l-4 border-l-nl-yellow transition-all duration-500`}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className={`text-2xl font-bold ${tc.textWhite} mb-2`}
              >
                {t('hero.funding')}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className={`${tc.textSecondary} text-sm mb-4`}
              >
                {t('hero.fundingDesc')}
              </motion.p>
              <div className={`h-2 w-full ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'} rounded-full overflow-hidden`}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                  className="h-full bg-nl-yellow"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -3 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ rotate: 0, scale: 1.05, y: -5 }}
              className={`absolute -bottom-10 -left-10 z-20 border ${tc.border} ${tc.bgCardHover} backdrop-blur-md p-6 rounded-xl shadow-2xl border-l-4 border-l-nl-blue transition-all duration-500`}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="bg-nl-blue p-3 rounded-full text-white"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </motion.div>
                <div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className={`text-xl font-bold ${tc.textWhite}`}
                  >
                    {t('hero.clients')}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className={`${tc.textSecondary} text-xs`}
                  >
                    {t('hero.clientsDesc')}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center p-1">
          <div className="w-1 h-1 bg-nl-yellow rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};