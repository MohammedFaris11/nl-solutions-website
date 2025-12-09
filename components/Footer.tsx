import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CONTACT_INFO, COMPANY_LOGO } from '../constants';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import Scene from './Scene';
import { useThemeClasses } from '../hooks/useThemeClasses';

interface FooterProps {
  onNavigate?: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useTranslation();
  const tc = useThemeClasses();
  const currentYear = new Date().getFullYear();

  const NAV_LINKS = [
    { name: t('nav.home'), id: 'home' },
    { name: t('nav.expertise'), id: 'expertise' },
    { name: t('nav.projects'), id: 'projects' },
    { name: t('nav.references'), id: 'references' },
  ];

  const handleNavClick = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      // Fallback: scroll to section if on home page
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className={`${tc.bgPrimary} border-t ${tc.border} relative overflow-hidden transition-colors duration-300`}>
      {/* 3D Background */}
      <Scene />

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nl-blue/5 to-transparent z-[1]"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Logo & Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <img
              src={COMPANY_LOGO}
              alt="NL Solutions"
              className="h-12 mb-4 object-contain"
            />
            <p className={`${tc.textSecondary} text-sm leading-relaxed mb-4`}>
              {t('footer.tagline')}
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/nlsolutions.ma?igsh=dTg2NGh1aGE2NW41"
                target="_blank"
                rel="noopener noreferrer"
                className={`${tc.textSecondary} hover:text-pink-500 transition-colors`}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1CZsBzfDJD/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className={`${tc.textSecondary} hover:text-blue-500 transition-colors`}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/nl-solutions.ma/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${tc.textSecondary} hover:text-blue-400 transition-colors`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className={`${tc.textWhite} font-bold text-lg mb-4 uppercase tracking-wider`}>{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`${tc.textSecondary} hover:text-nl-yellow transition-colors text-sm`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className={`${tc.textWhite} font-bold text-lg mb-4 uppercase tracking-wider`}>{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-nl-blue mt-1 shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className={`${tc.textSecondary} hover:text-nl-yellow transition-colors text-sm`}
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              {CONTACT_INFO.emails.map((email, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-nl-blue mt-1 shrink-0" />
                  <a
                    href={`mailto:${email}`}
                    className={`${tc.textSecondary} hover:text-nl-yellow transition-colors text-sm break-all`}
                  >
                    {email}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Addresses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className={`${tc.textWhite} font-bold text-lg mb-4 uppercase tracking-wider`}>{t('contact.offices')}</h3>
            <div className="space-y-4">
              {CONTACT_INFO.addresses.map((address, index) => (
                <div key={index} className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-nl-blue mt-1 shrink-0" />
                  <div className={`${tc.textSecondary} text-sm`}>
                    <p className={`font-semibold ${tc.textWhite} mb-1`}>{address.city}</p>
                    <p>{address.line}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`border-t ${tc.border} pt-8 mt-8`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`${tc.textMuted} text-sm`}>
              {t('footer.copyright', { year: currentYear })}
            </p>
            <p className={`${tc.textMuted} text-sm`}>
              Excellence Industrielle
            </p>
            <p className={`${tc.textMuted} text-sm`}>
              Développé par{' '}
              <a
                href="https://www.kyboho.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-nl-yellow hover:text-nl-blue transition-colors"
              >
                Kyboho
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

