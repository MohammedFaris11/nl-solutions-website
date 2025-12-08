import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, X } from 'lucide-react';
import { SERVICES } from '../constants';

interface ServiceDetailProps {
  serviceId: string;
  onBack: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId, onBack }) => {
  const service = SERVICES.find(s => s.id === serviceId);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
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

  if (!service) return null;

  const isBei = service.id === 'bei';
  const accentColor = isBei ? 'text-nl-yellow' : 'text-nl-blue';
  const bgAccent = isBei ? 'bg-nl-yellow' : 'bg-nl-blue';
  const gradient = isBei ? 'from-yellow-500/20 to-yellow-900/20' : 'from-sky-500/20 to-sky-900/20';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="min-h-screen bg-slate-950 pt-20 pb-12"
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 group transition-colors"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Retour aux expertises
        </button>

        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-8">
            <div className={`p-4 rounded-2xl bg-slate-900 border border-white/10 ${accentColor}`}>
                {service.icon}
            </div>
            <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{service.title}</h1>
                <p className="text-xl text-slate-300">{service.shortDescription}</p>
            </div>
        </div>

        <div className="relative h-[40vh] rounded-3xl overflow-hidden mb-12 border border-white/10">
            <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
         {/* Main Description & Methodology */}
         <div className="lg:col-span-2 space-y-12">
            <section>
                <h2 className="text-2xl font-bold text-white mb-6">Notre Approche</h2>
                <p className="text-slate-300 leading-relaxed text-lg mb-8">
                    {service.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                    {service.methodology.map((step, idx) => (
                        <div key={idx} className={`p-6 rounded-xl border border-white/5 bg-gradient-to-br ${gradient} backdrop-blur-sm`}>
                            <div className={`mb-4 ${accentColor}`}>{step.icon}</div>
                            <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                            <p className="text-sm text-slate-300">{step.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Gallery Section */}
            {service.gallery && service.gallery.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Galerie</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.gallery.map((image, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative group rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img 
                        src={image} 
                        alt={`${service.title} - Image ${idx + 1}`}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
         </div>

         {/* Features Sidebar */}
         <div className="space-y-8">
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6">domaines d'intervention</h3>
                <div className="space-y-6">
                    {service.features.map((feat, i) => (
                         <div key={i} className="flex gap-4">
                            <CheckCircle2 className={`shrink-0 w-6 h-6 ${accentColor}`} />
                            <div>
                                <h5 className="text-white font-semibold mb-1">{feat.title}</h5>
                                <p className="text-sm text-slate-400 leading-relaxed">{feat.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pt-6 mt-6 border-t border-white/10">
                    <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({behavior: 'smooth'})} className={`w-full py-4 rounded-xl font-bold text-slate-900 transition-all ${bgAccent} hover:brightness-110`}>
                        Demander une étude
                    </button>
                </div>
            </div>
         </div>
      </div>

      {/* Contact Teaser */}
      <div id="contact-form" className="max-w-4xl mx-auto px-6 mt-24 text-center">
          <h3 className="text-2xl text-white font-bold mb-4">Besoin d'expertise en {service.id === 'bei' ? 'Industrie' : 'Bâtiment'} ?</h3>
          <p className="text-slate-400 mb-8">Nos ingénieurs sont prêts à analyser votre projet.</p>
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