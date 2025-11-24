import React from 'react';
import { motion } from 'framer-motion';
import { CLIENT_REFERENCES } from '../constants';
import Scene from './Scene';

const MarqueeItem = ({ item }: { item: typeof CLIENT_REFERENCES[0] }) => (
  <div className="shrink-0 w-48 h-24 bg-slate-800/50 border border-white/5 rounded-xl flex items-center justify-center p-4 shadow-lg hover:bg-slate-800 hover:border-nl-yellow/30 transition-all group cursor-pointer overflow-hidden backdrop-blur-sm">
    <img 
      src={item.logo} 
      alt={item.name} 
      className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-500"
    />
  </div>
);

export const References = () => {
  // Division des références en deux groupes de 12
  const half = Math.ceil(CLIENT_REFERENCES.length / 2);
  const row1 = CLIENT_REFERENCES.slice(0, half);
  const row2 = CLIENT_REFERENCES.slice(half);

  // Duplication des listes pour l'effet de boucle infinie
  const list1 = [...row1, ...row1, ...row1, ...row1];
  const list2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section id="clients" className="py-24 bg-slate-950 overflow-hidden relative">
      {/* 3D Background Scene */}
      <Scene opacity={0.3} particleCount={2000} />
      
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
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Autres Références & <br/>
                <span className="text-slate-500">Benchmark Multisectoriel</span>
            </h2>
        </motion.div>
      </div>

      <div className="flex flex-col gap-8 relative z-10">
        
        {/* Ligne 1: Défilement Gauche vers Droite */}
        <div className="relative w-full flex">
            {/* Masques dégradés pour les bords */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
            
            <motion.div
                className="flex gap-6 pl-6"
                initial={{ x: "-50%" }}
                animate={{ x: "0%" }}
                transition={{ 
                    duration: 60, 
                    ease: "linear", 
                    repeat: Infinity 
                }}
            >
                {list1.map((client, index) => (
                    <MarqueeItem key={`r1-${index}`} item={client} />
                ))}
            </motion.div>
        </div>

        {/* Ligne 2: Défilement Droite vers Gauche (Inverse) */}
        <div className="relative w-full flex">
            <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

             <motion.div
                className="flex gap-6 pl-6"
                initial={{ x: "0%" }}
                animate={{ x: "-50%" }}
                transition={{ 
                    duration: 60, 
                    ease: "linear", 
                    repeat: Infinity 
                }}
            >
                {list2.map((client, index) => (
                    <MarqueeItem key={`r2-${index}`} item={client} />
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
};