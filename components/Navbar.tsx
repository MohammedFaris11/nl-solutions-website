import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, COMPANY_LOGO } from '../constants';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (viewId: string) => void;
  currentView: string;
}

export const Navbar = ({ onNavigate, currentView }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
    window.scrollTo(0, 0);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || currentView !== 'home' ? 'bg-nl-darkBlue/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Area */}
        <motion.button 
          onClick={() => handleNavClick('home')} 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="block group"
        >
          <motion.img 
            src={COMPANY_LOGO} 
            alt="NL Solutions" 
            className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          />
        </motion.button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link, index) => (
            <motion.button 
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-semibold transition-colors uppercase tracking-widest relative ${currentView === link.id ? 'text-nl-yellow' : 'text-slate-300 hover:text-nl-yellow'}`}
            >
              {link.name}
              {currentView === link.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-nl-yellow"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
          <motion.button 
            onClick={() => handleNavClick('contact')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-nl-blue hover:bg-blue-600 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg shadow-nl-blue/30"
          >
            Devis Gratuit
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
          onClick={() => setIsOpen(!isOpen)} 
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={28} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={28} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-6">
              {NAV_LINKS.map((link, index) => (
                <motion.button 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-lg font-semibold transition-colors ${currentView === link.id ? 'text-nl-yellow' : 'text-slate-300 hover:text-nl-yellow'}`}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};