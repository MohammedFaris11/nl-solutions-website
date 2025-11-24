import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CLIENT_REFERENCES } from '../constants';

export const ReferencesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-slate-950 pt-20 pb-12"
        >
            <div className="max-w-7xl mx-auto px-6">
                 <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Nos Références</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Ils nous font confiance pour leurs projets stratégiques et techniques.
                    </p>
                    <div className="w-24 h-1 bg-nl-yellow mx-auto mt-8 rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {CLIENT_REFERENCES.map((client, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-slate-900 border border-white/5 p-8 rounded-2xl flex items-center justify-center hover:border-nl-blue/30 hover:bg-slate-800 transition-all group"
                        >
                            <img 
                                src={client.logo} 
                                alt={client.name} 
                                className="max-w-full h-auto max-h-16 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}