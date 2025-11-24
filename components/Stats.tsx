import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';
import Scene from './Scene';

export const Stats = () => {
  return (
    <section className="py-12 bg-transparent overflow-hidden relative">
      <Scene opacity={0.3} particleCount={2000} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
              className="text-center text-white cursor-default bg-slate-800/50 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg hover:border-nl-blue/30 hover:bg-slate-800/70 transition-all"
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
                className="text-sm md:text-base font-bold uppercase tracking-wider text-blue-100"
              >
                {stat.label}
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.7 }}
                className="text-xs text-blue-200 mt-1"
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