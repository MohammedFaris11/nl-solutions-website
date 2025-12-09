import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CLIENTS_PRINCIPAUX } from '../constants';
import Scene from './Scene';
import { useThemeClasses } from '../hooks/useThemeClasses';
import { useTheme } from '../contexts/ThemeContext';

const MarqueeItem = ({ item, onHover, index }: { item: typeof CLIENTS_PRINCIPAUX[0], onHover: (hovering: boolean, index: number) => void, index: number }) => {
  const tc = useThemeClasses();
  const { theme } = useTheme();
  const content = (
    <img
      src={item.logo}
      alt={item.name}
      className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-500"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        if (!target.src.includes('placehold.co')) {
          target.src = `https://placehold.co/300x120/1e293b/94a3b8?text=${encodeURIComponent(item.name)}&font=oswald`;
        }
      }}
    />
  );

  return (
    <div
      className={`shrink-0 w-48 h-24 ${tc.bgCard} border ${tc.borderLight} rounded-xl flex items-center justify-center p-4 shadow-lg ${theme === 'dark' ? 'hover:bg-slate-800' : 'hover:bg-white'} hover:border-nl-yellow/30 transition-all group overflow-hidden backdrop-blur-sm ${item.url ? 'cursor-pointer' : ''}`}
      onMouseEnter={() => onHover(true, index)}
      onMouseLeave={() => onHover(false, index)}
    >
      {item.url ? (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
};

export const References = () => {
  const { t } = useTranslation();
  const tc = useThemeClasses();
  const { theme } = useTheme();
  const [hoveredItems, setHoveredItems] = useState<Set<number>>(new Set());

  // Uniquement clients principaux pour le marquee
  const marqueeReferences = CLIENTS_PRINCIPAUX;

  // Division des références en deux groupes
  const half = Math.ceil(marqueeReferences.length / 2);
  const row1 = marqueeReferences.slice(0, half);
  const row2 = marqueeReferences.slice(half);

  // Duplication des listes pour l'effet de boucle infinie
  const list1 = [...row1, ...row1, ...row1, ...row1];
  const list2 = [...row2, ...row2, ...row2, ...row2];

  // Vitesse de défilement : ralentie au survol
  const isHovering = hoveredItems.size > 0;
  const scrollDuration = isHovering ? 120 : 60;

  const handleItemHover = (hovering: boolean, index: number) => {
    setHoveredItems(prev => {
      const newSet = new Set(prev);
      if (hovering) {
        newSet.add(index);
      } else {
        newSet.delete(index);
      }
      return newSet;
    });
  };

  return (
    <section
      id="clients"
      className={`py-24 ${tc.bgPrimary} overflow-hidden relative transition-colors duration-300`}
    >
      {/* 3D Background Scene */}
      <Scene opacity={0.3} particleCount={500} speedMultiplier={isHovering ? 0.3 : 1} />

      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-nl-blue/5 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        {/* En-tête style "Barre Jaune" */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-6"
        >
          <div className="w-2 md:w-3 h-16 md:h-20 bg-nl-yellow shrink-0 shadow-[0_0_20px_rgba(251,191,36,0.3)]"></div>
          <h2 className={`text-3xl md:text-5xl font-bold ${tc.textWhite} leading-tight`}>
            {t('references.title')} <br />
            <span className={tc.textMuted}>{t('references.subtitle')}</span>
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col gap-8 relative z-10">

        {/* Ligne 1: Défilement Gauche vers Droite */}
        <div className="relative w-full flex">
          {/* Masques dégradés pour les bords */}
          <div className={`absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r ${theme === 'dark' ? 'from-slate-950' : 'from-slate-50'} to-transparent z-10 pointer-events-none`} />
          <div className={`absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l ${theme === 'dark' ? 'from-slate-950' : 'from-slate-50'} to-transparent z-10 pointer-events-none`} />

          <motion.div
            className="flex gap-6 pl-6"
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: scrollDuration,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {list1.map((client, index) => (
              <MarqueeItem key={`r1-${index}`} item={client} onHover={handleItemHover} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Ligne 2: Défilement Droite vers Gauche (Inverse) */}
        <div className="relative w-full flex">
          <div className={`absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r ${theme === 'dark' ? 'from-slate-950' : 'from-slate-50'} to-transparent z-10 pointer-events-none`} />
          <div className={`absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l ${theme === 'dark' ? 'from-slate-950' : 'from-slate-50'} to-transparent z-10 pointer-events-none`} />

          <motion.div
            className="flex gap-6 pl-6"
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              duration: scrollDuration,
              ease: "linear",
              repeat: Infinity
            }}
          >
            {list2.map((client, index) => (
              <MarqueeItem key={`r2-${index}`} item={client} onHover={handleItemHover} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};