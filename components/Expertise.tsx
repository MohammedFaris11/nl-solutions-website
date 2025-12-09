import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Scene from './Scene';
import { useThemeClasses } from '../hooks/useThemeClasses';
import { useTheme } from '../contexts/ThemeContext';

interface ExpertiseProps {
  onServiceClick?: (id: string) => void;
}

export const Expertise = ({ onServiceClick }: ExpertiseProps) => {
  const { t } = useTranslation();
  const tc = useThemeClasses();
  const { theme } = useTheme();

  return (
    <section id="expertise" className={`py-24 ${tc.bgSecondary} relative transition-colors duration-300`}>
      <Scene opacity={0.4} particleCount={800} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-nl-yellow font-bold tracking-widest uppercase mb-3"
          >
            Ce que nous offrons
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-3xl md:text-4xl font-bold ${tc.textWhite}`}
          >
            Expertise Double Compétence
          </motion.h3>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-nl-blue mx-auto mt-6 rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {SERVICES.map((service, idx) => {
            const isBei = service.id === 'bei';
            // Explicitly define classes to ensure Tailwind detects them
            const bgGlowClass = isBei ? 'bg-nl-yellow/10' : 'bg-nl-blue/10';
            const hoverBgGlowClass = isBei ? 'group-hover:bg-nl-yellow/20' : 'group-hover:bg-nl-blue/20';
            const iconColorClass = isBei ? 'text-nl-yellow' : 'text-nl-blue';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{
                  delay: Math.min(idx * 0.15, 0.5),
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`p-6 md:p-8 rounded-3xl border ${tc.borderLight} ${theme === 'dark' ? 'bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-800 hover:to-slate-800' : 'bg-gradient-to-br from-white to-slate-50 hover:from-white hover:to-white shadow-lg'} transition-all group relative overflow-hidden flex flex-col h-full cursor-pointer`}
              >
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-all ${bgGlowClass} ${hoverBgGlowClass}`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: idx * 0.3
                  }}
                />

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{ delay: idx * 0.15 + 0.2 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <motion.div
                    className={`p-4 rounded-2xl ${tc.bgPrimary} border ${tc.border}`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h4 className={`text-2xl font-bold ${tc.textWhite}`}>
                    {t(`expertise.${service.id}.title`)}
                  </h4>
                </motion.div>

                <p className={`${tc.textSecondary} mb-8 text-lg font-light italic flex-grow`}>
                  "{t(`expertise.${service.id}.shortDesc`)}"
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{ delay: idx * 0.15 + 0.4 }}
                  className="space-y-4 md:space-y-6 mb-8"
                >
                  {service.features.map((feat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "0px" }}
                      transition={{ delay: idx * 0.15 + 0.4 + i * 0.1 }}
                      className="flex gap-4"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle2 className={`shrink-0 w-6 h-6 ${iconColorClass}`} />
                      </motion.div>
                      <div>
                        <h5 className={`${tc.textWhite} font-semibold mb-1`}>
                          {t(`expertise.${service.id}.feature${i + 1}Title`)}
                        </h5>
                        <p className={`text-sm ${tc.textSecondary} leading-relaxed`}>
                          {t(`expertise.${service.id}.feature${i + 1}Desc`)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {onServiceClick && (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ delay: idx * 0.15 + 0.6 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onServiceClick(service.id)}
                    className={`mt-auto w-full py-3 md:py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all border ${tc.border} ${theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-slate-900/5'} ${iconColorClass}`}
                  >
                    {t('expertise.learnMore')}
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  </motion.button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};