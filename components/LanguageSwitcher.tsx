import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useThemeClasses } from '../hooks/useThemeClasses';

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const tc = useThemeClasses();
    const currentLang = i18n.language;

    const toggleLanguage = () => {
        const newLang = currentLang === 'fr' ? 'en' : 'fr';
        i18n.changeLanguage(newLang);
    };

    return (
        <motion.button
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full ${tc.bgCard} ${tc.bgCardHover} border ${tc.borderLight} transition-all`}
            title={currentLang === 'fr' ? 'Switch to English' : 'Passer au français'}
        >
            <Globe className="w-4 h-4 text-nl-yellow" />
            <span className={`text-sm font-semibold ${tc.textSecondary} uppercase tracking-wider`}>
                {currentLang === 'fr' ? 'FR' : 'EN'}
            </span>
            <span className={`text-xs ${tc.textMuted}`}>|</span>
            <span className={`text-xs ${tc.textMuted}`}>
                {currentLang === 'fr' ? 'EN' : 'FR'}
            </span>
        </motion.button>
    );
};
