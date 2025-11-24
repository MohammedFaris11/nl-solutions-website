import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO, COMPANY_LOGO } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Scene from './Scene';

export const Contact = () => {
  return (
    <footer id="contact" className="bg-slate-900 border-t border-white/5 pt-24 pb-12 relative">
      <Scene opacity={0.25} particleCount={1800} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-white mb-6"
            >
              Parlons de votre projet
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 mb-10 text-lg"
            >
              Prêt à atteindre l'excellence opérationnelle ? Nos ingénieurs sont à votre écoute pour analyser vos besoins.
            </motion.p>

            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <motion.div 
                  className="p-3 bg-slate-800 rounded-lg text-nl-yellow"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Phone />
                </motion.div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Téléphone</h4>
                  <p className="text-slate-400 hover:text-white transition-colors">{CONTACT_INFO.phone}</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <motion.div 
                  className="p-3 bg-slate-800 rounded-lg text-nl-blue"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail />
                </motion.div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  {CONTACT_INFO.emails.map((email, idx) => (
                    <motion.p 
                      key={email}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "200px" }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {email}
                    </motion.p>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <motion.div 
                  className="p-3 bg-slate-800 rounded-lg text-purple-400"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <MapPin />
                </motion.div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Nos Bureaux</h4>
                  {CONTACT_INFO.addresses.map((addr, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "200px" }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="mb-2"
                    >
                      <span className="text-white text-sm block font-medium">{addr.city}</span>
                      <span className="text-slate-400 text-sm">{addr.line}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6 }}
            className="bg-slate-950 p-8 rounded-3xl border border-white/5 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ delay: 0.2 }}
                className="grid md:grid-cols-2 gap-6"
              >
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-medium text-slate-400 mb-2">Nom complet</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-nl-blue focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </motion.div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-medium text-slate-400 mb-2">Société</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-nl-blue focus:border-transparent outline-none transition-all" placeholder="Entreprise SA" />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ delay: 0.3 }}
                whileFocus={{ scale: 1.02 }}
              >
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input type="email" className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-nl-blue focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ delay: 0.4 }}
                whileFocus={{ scale: 1.02 }}
              >
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-nl-blue focus:border-transparent outline-none transition-all" placeholder="Décrivez votre projet..."></textarea>
              </motion.div>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-nl-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-nl-blue/30"
              >
                Envoyer le message 
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                >
                  <Send size={18} />
                </motion.div>
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "200px" }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <motion.img 
            src={COMPANY_LOGO} 
            alt="NL Solutions" 
            className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.1 }}
          />
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} NL Solutions. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  );
};