import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Scene from './Scene';
import { useThemeClasses } from '../hooks/useThemeClasses';

export const Stats = () => {
  const { t } = useTranslation();
  const tc = useThemeClasses();

  const STATS = [
    { value: t('stats.years'), label: t('stats.yearsLabel'), sub: t('stats.yearsSub') },
    { value: t('stats.clients'), label: t('stats.clientsLabel'), sub: t('stats.clientsSub') },
    { value: t('stats.projects'), label: t('stats.projectsLabel'), sub: t('stats.projectsSub') },
    { value: t('stats.funding'), label: t('stats.fundingLabel'), sub: t('stats.fundingSub') },
  ];

  return (
    <section className="py-12 bg-transparent overflow-hidden relative">
      <Scene opacity={0.3} particleCount={500} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`text-center ${tc.textPrimary} cursor-default ${tc.bgCard} backdrop-blur-md border ${tc.border} rounded-xl p-4 md:p-6 shadow-lg hover:border-nl-blue/30 ${tc.bgCardHover} transition-all`}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.15 + 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                className="text-4xl md:text-5xl font-black mb-2 tracking-tight"
              >
                {stat.value}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.5 }}
                className={`text-sm md:text-base font-bold uppercase tracking-wider ${tc.isDark ? 'text-blue-100' : 'text-blue-900'}`}
              >
                {stat.label}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.7 }}
                className={`text-xs ${tc.isDark ? 'text-blue-200' : 'text-blue-700'} mt-1`}
              >
                {stat.sub}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};