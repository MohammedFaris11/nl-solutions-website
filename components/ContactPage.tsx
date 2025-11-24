import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export const ContactPage = () => {
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
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Contactez-nous</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Discutons de vos ambitions industrielles.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-slate-900 p-6 rounded-2xl border border-white/5">
                             <div className="p-3 bg-nl-blue/10 rounded-lg text-nl-blue w-fit mb-4">
                                <Phone />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Téléphone</h3>
                            <p className="text-slate-400">{CONTACT_INFO.phone}</p>
                        </div>

                        <div className="bg-slate-900 p-6 rounded-2xl border border-white/5">
                             <div className="p-3 bg-nl-yellow/10 rounded-lg text-nl-yellow w-fit mb-4">
                                <Mail />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Email</h3>
                            {CONTACT_INFO.emails.map(e => (
                                <p key={e} className="text-slate-400">{e}</p>
                            ))}
                        </div>

                        <div className="bg-slate-900 p-6 rounded-2xl border border-white/5">
                             <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 w-fit mb-4">
                                <MapPin />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Adresses</h3>
                             {CONTACT_INFO.addresses.map((addr, i) => (
                                <div key={i} className="mb-3 last:mb-0">
                                <span className="text-white text-sm block font-medium">{addr.city}</span>
                                <span className="text-slate-400 text-sm">{addr.line}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-slate-900 p-8 rounded-3xl border border-white/5 shadow-2xl">
                            <h2 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h2>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Nom complet</label>
                                    <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-nl-blue focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                                    </div>
                                    <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Société</label>
                                    <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-nl-blue focus:border-transparent outline-none transition-all" placeholder="Entreprise SA" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                    <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-nl-blue focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Sujet</label>
                                    <select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-nl-blue focus:border-transparent outline-none transition-all">
                                        <option>Demande de devis</option>
                                        <option>Renseignements BEI</option>
                                        <option>Renseignements BET</option>
                                        <option>Partenariat</option>
                                        <option>Autre</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                    <textarea rows={6} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-nl-blue focus:border-transparent outline-none transition-all" placeholder="Décrivez votre projet..."></textarea>
                                </div>
                                <button className="w-full bg-gradient-to-r from-nl-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]">
                                    Envoyer le message <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
             </div>
        </motion.div>
    );
}