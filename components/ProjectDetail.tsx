import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, CheckCircle2, Calendar, Ruler, Coins, X } from 'lucide-react';
import { PROJECTS } from '../constants';
import Scene from './Scene';
import { useThemeClasses } from '../hooks/useThemeClasses';
import { useTheme } from '../contexts/ThemeContext';

interface ProjectDetailProps {
  project: typeof PROJECTS[0];
  onBack: () => void;
  onNavigate?: (view: string) => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, onNavigate }) => {
  const { t } = useTranslation();
  const tc = useThemeClasses();
  const { theme } = useTheme();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const handleBack = () => {
    try {
      window.scrollTo(0, 0);
      onBack();
    } catch (error) {
      console.error('Error navigating back:', error);
      // Fallback: try to navigate to projects page
      if (onNavigate) {
        onNavigate('projects');
      } else {
        onBack();
      }
    }
  };

  const isBei = project.category.includes('BEI') || project.category.includes('IEB');
  const accentColor = isBei ? 'text-nl-yellow' : 'text-nl-blue';
  const bgAccent = isBei ? 'bg-nl-yellow' : 'bg-nl-blue';

  // Get translated project data
  const translatedCategory = t(`projectData.${project.id}.category`);
  const translatedTitle = t(`projectData.${project.id}.title`);
  const translatedDesc = t(`projectData.${project.id}.desc`);
  const translatedFullDesc = t(`projectData.${project.id}.fullDescription`);
  const translatedDetails = (t(`projectData.${project.id}.details`, { returnObjects: true }) as string[]) || project.details;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className={`relative min-h-screen ${tc.bgPrimary} pt-20 overflow-hidden transition-colors duration-300`}
    >
      {/* 3D Background */}
      <Scene />

      {/* Header / Hero of Detail Page */}
      <div className="relative h-[65vh] w-full overflow-hidden z-10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200';
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-slate-950 via-slate-900/60' : 'from-slate-50 via-slate-900/30'} to-slate-900/30`} />

        <div className="absolute top-8 left-6 md:left-12 z-20">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all border border-white/10 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            {t('projects.backToProjects')}
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10">
          <div className="max-w-7xl mx-auto">
            <span className={`inline-block px-3 py-1 rounded-full ${isBei ? 'bg-yellow-500/20 text-yellow-300' : 'bg-sky-500/20 text-sky-300'} text-sm font-bold uppercase tracking-wider mb-4 backdrop-blur-sm border border-white/10`}>
              {translatedCategory}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{translatedTitle}</h1>
            <p className="text-xl text-slate-200 max-w-2xl">{translatedDesc}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-10">
          <div className={`${tc.bgSecondary} p-8 rounded-2xl border ${tc.border}`}>
            <h3 className={`text-2xl font-bold ${tc.textWhite} mb-6 flex items-center gap-3`}>
              <span className={`w-2 h-8 rounded-full ${bgAccent}`}></span>
              {t('projects.keyDetails')}
            </h3>
            <p className={`${tc.textSecondary} leading-relaxed text-lg`}>
              {translatedFullDesc || translatedDesc}
            </p>
          </div>

          {/* Gallery */}
          <div>
            <h3 className={`text-2xl font-bold ${tc.textWhite} mb-6`}>{t('projects.gallery')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery && project.gallery.map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden h-64 group relative cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    alt={`Detail ${i}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Stats */}
        <div className="space-y-6">
          <div className={`${tc.bgTertiary} p-6 rounded-2xl border ${tc.border} sticky top-24`}>
            <h3 className={`text-xl font-bold ${tc.textWhite} mb-6 border-b ${tc.border} pb-4`}>{t('projects.keyDetails')}</h3>

            <div className="space-y-6">
              {translatedDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className={`p-2 rounded-lg ${tc.bgCard} ${accentColor} group-hover:scale-110 transition-transform`}>
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className={`${tc.textSecondary} font-medium`}>{detail}</p>
                  </div>
                </div>
              ))}

              <div className={`pt-6 mt-6 border-t ${tc.border}`}>
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate('contact');
                    } else {
                      // Fallback: scroll to contact section if on home page
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`w-full py-4 rounded-xl font-bold text-slate-900 transition-all shadow-lg hover:shadow-${isBei ? 'yellow' : 'sky'}-500/20 ${isBei ? 'bg-nl-yellow hover:bg-yellow-400' : 'bg-nl-blue hover:bg-sky-400'}`}
                >
                  Discuter d'un projet similaire
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Next Project Teaser (Simple navigation) */}
      <div className={`relative z-10 border-t ${tc.border} ${tc.bgSecondary} backdrop-blur-md py-12`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className={`${tc.textPrimary} text-lg font-medium mb-1`}>Intéressé par notre expertise ?</p>
              <p className={`${tc.textMuted} text-sm`}>Découvrez nos autres réalisations et projets</p>
            </div>
            <button
              onClick={handleBack}
              className={`px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${isBei ? 'bg-nl-yellow text-slate-900 hover:bg-yellow-400' : 'bg-nl-blue text-white hover:bg-sky-500'} shadow-lg ${isBei ? 'shadow-yellow-500/20' : 'shadow-blue-500/20'}`}
            >
              Voir tous les projets
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white transition-colors"
              aria-label="Fermer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-[90vw] max-h-[90vh] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Image agrandie"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800';
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};