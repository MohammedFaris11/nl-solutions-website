import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CONTACT_INFO, COMPANY_LOGO } from '../constants';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Scene from './Scene';
import emailjs from '@emailjs/browser';
import { useThemeClasses } from '../hooks/useThemeClasses';
import { useTheme } from '../contexts/ThemeContext';

interface FormData {
  fullName: string;
  company: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact = () => {
  const { t } = useTranslation();
  const tc = useThemeClasses();
  const { theme } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    company: '',
    email: '',
    subject: t('contact.service'),
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Reset status when user starts typing
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const validateForm = () => {
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(formData.email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus('error');
      setErrorMessage('Veuillez remplir tous les champs obligatoires avec des informations valides.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const emailTemplate = {
        to_email: CONTACT_INFO.emails[0],
        from_name: formData.fullName,
        from_email: formData.email,
        company: formData.company || 'Non spécifié',
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      };

      const env = (import.meta as any).env || {};
      const serviceId = env.VITE_EMAILJS_SERVICE_ID;
      const templateId = env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey || publicKey === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS n\'est pas correctement configuré. Veuillez vérifier vos variables d\'environnement.');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: emailTemplate.to_email,
          from_name: emailTemplate.from_name,
          from_email: emailTemplate.from_email,
          company: emailTemplate.company,
          subject: emailTemplate.subject,
          message: emailTemplate.message,
          reply_to: emailTemplate.reply_to,
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        company: '',
        email: '',
        subject: 'Demande de devis',
        message: ''
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
      setErrorMessage('Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className={`${tc.bgSecondary} border-t ${tc.borderLight} pt-24 pb-12 relative transition-colors duration-300`}>
      <Scene opacity={0.25} particleCount={400} />
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
              className={`text-3xl font-bold ${tc.textWhite} mb-6`}
            >
              {t('contact.getInTouch')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`${tc.textSecondary} mb-10 text-lg`}
            >
              {t('contact.description')}
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
                  className={`p-3 ${tc.bgTertiary} rounded-lg text-nl-yellow`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Phone />
                </motion.div>
                <div>
                  <h4 className={`${tc.textWhite} font-semibold mb-1`}>{t('contact.phone2')}</h4>
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                    className={`${tc.textSecondary} hover:text-nl-yellow transition-colors`}
                  >
                    {CONTACT_INFO.phone}
                  </a>
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
                  className={`p-3 ${tc.bgTertiary} rounded-lg text-nl-blue`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail />
                </motion.div>
                <div>
                  <h4 className={`${tc.textWhite} font-semibold mb-1`}>{t('contact.email2')}</h4>
                  {CONTACT_INFO.emails.map((email, idx) => (
                    <motion.a
                      key={email}
                      href={`mailto:${email}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "200px" }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className={`${tc.textSecondary} hover:text-nl-yellow transition-colors block`}
                    >
                      {email}
                    </motion.a>
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
                  className={`p-3 ${tc.bgTertiary} rounded-lg text-purple-400`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <MapPin />
                </motion.div>
                <div>
                  <h4 className={`${tc.textWhite} font-semibold mb-1`}>{t('contact.offices')}</h4>
                  {CONTACT_INFO.addresses.map((addr, i) => {
                    // Créer un lien Google Maps pour chaque adresse
                    const fullAddress = `${addr.line}, ${addr.city}, Maroc`;
                    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

                    return (
                      <motion.a
                        key={i}
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "200px" }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="mb-2 block hover:text-nl-yellow transition-colors cursor-pointer"
                      >
                        <span className={`${tc.textWhite} text-sm block font-medium`}>{addr.city}</span>
                        <span className={`${tc.textSecondary} text-sm hover:text-nl-yellow transition-colors`}>{addr.line}</span>
                      </motion.a>
                    );
                  })}
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
            className={`${tc.bgPrimary} p-8 rounded-3xl border ${tc.borderLight} shadow-2xl`}
          >
            <h2 className={`text-2xl font-bold ${tc.textWhite} mb-6`}>{t('contact.getInTouch')}</h2>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <p className="text-green-400 font-medium">
                  {t('contact.success')}
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-400" />
                <p className="text-red-400 font-medium">
                  {errorMessage || t('contact.error')}
                </p>
              </motion.div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
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
                  <label className={`block text-sm font-medium ${tc.textSecondary} mb-2`}>{t('contact.name')} *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className={`w-full ${tc.bgSecondary} border ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'} rounded-lg px-4 py-3 ${tc.textPrimary} focus:ring-2 focus:ring-nl-blue focus:border-transparent outline-none transition-all`}
                    placeholder={t('contact.namePlaceholder')}
                  />
                </motion.div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className={`block text-sm font-medium ${tc.textSecondary} mb-2`}>{t('contact.company')}</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full ${tc.bgSecondary} border ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'} rounded-lg px-4 py-3 ${tc.textPrimary} focus:ring-2 focus:ring-nl-blue focus:border-transparent outline-none transition-all`}
                    placeholder={t('contact.companyPlaceholder')}
                  />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ delay: 0.3 }}
                whileFocus={{ scale: 1.02 }}
              >
                <label className={`block text-sm font-medium ${tc.textSecondary} mb-2`}>{t('contact.email')} *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full ${tc.bgSecondary} border ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'} rounded-lg px-4 py-3 ${tc.textPrimary} focus:ring-2 focus:ring-nl-blue focus:border-transparent outline-none transition-all`}
                  placeholder={t('contact.emailPlaceholder')}
                />
              </motion.div>
              <div>
                <label className={`block text-sm font-medium ${tc.textSecondary} mb-2`}>Sujet *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full ${tc.bgSecondary} border ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'} rounded-lg px-4 py-3 ${tc.textPrimary} focus:ring-2 focus:ring-nl-blue focus:border-transparent outline-none transition-all`}
                >
                  <option>Demande de devis</option>
                  <option>Renseignements BEI</option>
                  <option>Renseignements BET</option>
                  <option>Partenariat</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-medium ${tc.textSecondary} mb-2`}>{t('contact.message')} *</label>
                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full ${tc.bgSecondary} border ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'} rounded-lg px-4 py-3 ${tc.textPrimary} focus:ring-2 focus:ring-nl-blue focus:border-transparent outline-none transition-all resize-none`}
                  placeholder={t('contact.messagePlaceholder')}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-nl-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </footer>
  );
};