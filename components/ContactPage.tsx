import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Scene from './Scene';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { useThemeClasses } from '../hooks/useThemeClasses';
import { useTheme } from '../contexts/ThemeContext';

interface FormData {
    fullName: string;
    company: string;
    email: string;
    subject: string;
    message: string;
}

export const ContactPage = () => {
    const { t } = useTranslation();
    const tc = useThemeClasses();
    const { theme } = useTheme();
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        company: '',
        email: '',
        subject: t('contact.quoteRequest'),
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        // EmailJS n'a plus besoin d'être initialisé avec les versions récentes
        // La clé publique est passée directement à la méthode send()
    }, []);

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

    const validateForm = (): boolean => {
        if (!formData.fullName.trim()) {
            setErrorMessage(`${t('contact.name')} ${t('contact.requiredField')}`);
            return false;
        }
        if (!formData.email.trim()) {
            setErrorMessage(`${t('contact.email')} ${t('contact.requiredField')}`);
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setErrorMessage(t('contact.errorValidEmail'));
            return false;
        }
        if (!formData.message.trim()) {
            setErrorMessage(`${t('contact.message')} ${t('contact.requiredField')}`);
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            setSubmitStatus('error');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            // Template d'email HTML moderne
            const emailTemplate = {
                to_email: CONTACT_INFO.emails[0], // Email de destination
                from_name: formData.fullName,
                from_email: formData.email,
                company: formData.company || 'Non spécifié',
                subject: formData.subject,
                message: formData.message,
                reply_to: formData.email,
            };

            // Envoi via EmailJS
            // Remplacez ces valeurs par vos propres clés EmailJS
            const env = (import.meta as any).env || {};
            const serviceId = env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
            const templateId = env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
            const publicKey = env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

            // Vérifier que EmailJS est disponible et configuré
            if (typeof emailjs === 'undefined' || !emailjs.send) {
                throw new Error('EmailJS n\'est pas correctement configuré. Veuillez vérifier vos variables d\'environnement.');
            }

            // Vérifier que les clés sont configurées
            if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
                throw new Error('Les clés EmailJS ne sont pas configurées. Veuillez configurer les variables d\'environnement.');
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
                subject: t('contact.quoteRequest'),
                message: ''
            });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);
            setSubmitStatus('error');
            setErrorMessage('Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou nous contacter directement.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`relative min-h-screen ${tc.bgPrimary} pt-20 pb-12 overflow-hidden transition-colors duration-300`}
        >
            {/* 3D Background */}
            <Scene />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className={`text-4xl md:text-6xl font-bold ${tc.textWhite} mb-4`}>{t('contact.getInTouch')}</h1>
                    <p className={`text-xl ${tc.textSecondary} max-w-2xl mx-auto`}>
                        {t('contact.description')}
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className={`${tc.bgSecondary} p-6 rounded-2xl border ${tc.border}`}>
                            <div className="p-3 bg-nl-blue/10 rounded-lg text-nl-blue w-fit mb-4">
                                <Phone />
                            </div>
                            <h3 className={`${tc.textWhite} font-bold text-lg mb-2`}>{t('contact.phone')}</h3>
                            <a
                                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                                className={`${tc.textSecondary} hover:text-nl-blue transition-colors block`}
                            >
                                {CONTACT_INFO.phone}
                            </a>
                        </div>

                        <div className={`${tc.bgSecondary} p-6 rounded-2xl border ${tc.border}`}>
                            <div className="p-3 bg-nl-yellow/10 rounded-lg text-nl-yellow w-fit mb-4">
                                <Mail />
                            </div>
                            <h3 className={`${tc.textWhite} font-bold text-lg mb-2`}>{t('contact.email')}</h3>
                            {CONTACT_INFO.emails.map(e => (
                                <a
                                    key={e}
                                    href={`mailto:${e}`}
                                    className={`${tc.textSecondary} hover:text-nl-yellow transition-colors block mb-2 last:mb-0 break-all`}
                                >
                                    {e}
                                </a>
                            ))}
                        </div>

                        <div className={`${tc.bgSecondary} p-6 rounded-2xl border ${tc.border}`}>
                            <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 w-fit mb-4">
                                <MapPin />
                            </div>
                            <h3 className={`${tc.textWhite} font-bold text-lg mb-2`}>{t('contact.offices')}</h3>
                            {CONTACT_INFO.addresses.map((addr, i) => {
                                const fullAddress = `${addr.line}, ${addr.city}`;
                                const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
                                return (
                                    <a
                                        key={i}
                                        href={googleMapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block mb-3 last:mb-0 hover:opacity-80 transition-opacity"
                                    >
                                        <span className={`${tc.textWhite} text-sm block font-medium`}>{addr.city}</span>
                                        <span className={`${tc.textSecondary} text-sm hover:text-purple-400 transition-colors`}>{addr.line}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <div className={`${tc.bgSecondary} p-8 rounded-3xl border ${tc.border} shadow-2xl`}>
                            <h2 className={`text-2xl font-bold ${tc.textWhite} mb-6`}>{t('contact.send')}</h2>

                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <p className="text-green-400 font-medium">
                                        {t('contact.success')} {t('contact.successFull')}
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
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className={`block text-sm font-medium ${tc.textSecondary} mb-2`}>{t('contact.name')} *</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            className={`w-full ${tc.bgPrimary} border ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'} rounded-lg px-4 py-3 ${tc.textPrimary} focus:ring-2 focus:ring-nl-blue focus:border-transparent outline-none transition-all`}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className={`block text-sm font-medium ${tc.textSecondary} mb-2`}>{t('contact.company')}</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className={`w-full ${tc.bgPrimary} border ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'} rounded-lg px-4 py-3 ${tc.textPrimary} focus:ring-2 focus:ring-nl-blue focus:border-transparent outline-none transition-all`}
                                            placeholder="Entreprise SA"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className={`block text-sm font-medium ${tc.textSecondary} mb-2`}>{t('contact.email')} *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={`w-full ${tc.bgPrimary} border ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'} rounded-lg px-4 py-3 ${tc.textPrimary} focus:ring-2 focus:ring-nl-blue focus:border-transparent outline-none transition-all`}
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label className={`block text-sm font-medium ${tc.textSecondary} mb-2`}>{t('contact.subject')} *</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className={`w-full ${tc.bgPrimary} border ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'} rounded-lg px-4 py-3 ${tc.textPrimary} focus:ring-2 focus:ring-nl-blue focus:border-transparent outline-none transition-all`}
                                    >
                                        <option>{t('contact.quoteRequest')}</option>
                                        <option>{t('contact.iebInfo')}</option>
                                        <option>{t('contact.tebInfo')}</option>
                                        <option>{t('contact.partnership')}</option>
                                        <option>{t('contact.other')}</option>
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
                                        className={`w-full ${tc.bgPrimary} border ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'} rounded-lg px-4 py-3 ${tc.textPrimary} focus:ring-2 focus:ring-nl-blue focus:border-transparent outline-none transition-all resize-none`}
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
                                            {t('contact.sending')}
                                        </>
                                    ) : (
                                        <>
                                            {t('contact.send')} <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}