import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CLIENTS_PRINCIPAUX, ENTREPRISES_MAROCAINES, POLE_AGROALIMENTAIRE, COLLABORATEURS } from '../constants';
import Scene from './Scene';

export const ReferencesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative min-h-screen bg-slate-950 pt-20 pb-12 overflow-hidden"
        >
            {/* 3D Background */}
            <Scene />
            
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                 <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Nos Références</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Ils nous font confiance pour leurs projets stratégiques et techniques.
                    </p>
                    <div className="w-24 h-1 bg-nl-yellow mx-auto mt-8 rounded-full"></div>
                </div>

                {/* Clients Principaux - Mise en avant */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-3xl font-bold text-white mb-2">
                            Clients Principaux <span className="text-nl-blue">— Multinationales et Grandes Structures</span>
                        </h2>
                        <div className="w-32 h-1 bg-nl-blue rounded-full"></div>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {CLIENTS_PRINCIPAUX.map((client, idx) => {
                            const content = (
                                <img 
                                    src={client.logo} 
                                    alt={client.name} 
                                    className="max-w-full h-auto max-h-16 object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        if (!target.src.includes('placehold.co')) {
                                            target.src = `https://placehold.co/300x120/1e293b/94a3b8?text=${encodeURIComponent(client.name)}&font=oswald`;
                                        }
                                    }}
                                />
                            );

                            return (
                                <motion.div
                                    key={`principal-${idx}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className={`bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-nl-blue/30 p-8 rounded-2xl flex items-center justify-center hover:border-nl-blue hover:bg-slate-800 transition-all group min-h-[120px] shadow-lg ${client.url ? 'cursor-pointer' : ''}`}
                                >
                                    {client.url ? (
                                        <a
                                            href={client.url}
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
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Entreprises Marocaines */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl font-bold text-white mb-2">Entreprises Marocaines</h2>
                        <div className="w-24 h-1 bg-nl-yellow rounded-full"></div>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {ENTREPRISES_MAROCAINES.map((client, idx) => {
                            const content = (
                                <img 
                                    src={client.logo} 
                                    alt={client.name} 
                                    className="max-w-full h-auto max-h-16 object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        if (!target.src.includes('placehold.co')) {
                                            target.src = `https://placehold.co/300x120/1e293b/94a3b8?text=${encodeURIComponent(client.name)}&font=oswald`;
                                        }
                                    }}
                                />
                            );

                            return (
                                <motion.div
                                    key={`maroc-${idx}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className={`bg-slate-900 border border-white/5 p-8 rounded-2xl flex items-center justify-center hover:border-nl-yellow/30 hover:bg-slate-800 transition-all group min-h-[120px] ${client.url ? 'cursor-pointer' : ''}`}
                                >
                                    {client.url ? (
                                        <a
                                            href={client.url}
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
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Pôle Agroalimentaire */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl font-bold text-white mb-2">Pôle Agroalimentaire</h2>
                        <div className="w-24 h-1 bg-green-500 rounded-full"></div>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {POLE_AGROALIMENTAIRE.map((client, idx) => {
                            const content = (
                                <img 
                                    src={client.logo} 
                                    alt={client.name} 
                                    className="max-w-full h-auto max-h-16 object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        if (!target.src.includes('placehold.co')) {
                                            target.src = `https://placehold.co/300x120/1e293b/94a3b8?text=${encodeURIComponent(client.name)}&font=oswald`;
                                        }
                                    }}
                                />
                            );

                            return (
                                <motion.div
                                    key={`agro-${idx}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className={`bg-slate-900 border border-white/5 p-8 rounded-2xl flex items-center justify-center hover:border-green-500/30 hover:bg-slate-800 transition-all group min-h-[120px] ${client.url ? 'cursor-pointer' : ''}`}
                                >
                                    {client.url ? (
                                        <a
                                            href={client.url}
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
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Collaborateurs */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-2xl font-bold text-white mb-2">Collaborateurs</h2>
                        <div className="w-24 h-1 bg-slate-400 rounded-full"></div>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {COLLABORATEURS.map((client, idx) => {
                            const content = (
                                <img 
                                    src={client.logo} 
                                    alt={client.name} 
                                    className="max-w-full h-auto max-h-16 object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        if (!target.src.includes('placehold.co')) {
                                            target.src = `https://placehold.co/300x120/1e293b/94a3b8?text=${encodeURIComponent(client.name)}&font=oswald`;
                                        }
                                    }}
                                />
                            );

                            return (
                                <motion.div
                                    key={`collab-${idx}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className={`bg-slate-900 border border-white/5 p-8 rounded-2xl flex items-center justify-center hover:border-slate-400/30 hover:bg-slate-800 transition-all group min-h-[120px] ${client.url ? 'cursor-pointer' : ''}`}
                                >
                                    {client.url ? (
                                        <a
                                            href={client.url}
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
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}