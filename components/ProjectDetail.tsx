import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Calendar, Ruler, Coins } from 'lucide-react';
import { PROJECTS } from '../constants';

interface ProjectDetailProps {
  project: typeof PROJECTS[0];
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isBei = project.category.startsWith('BEI');
  const accentColor = isBei ? 'text-nl-yellow' : 'text-nl-blue';
  const bgAccent = isBei ? 'bg-nl-yellow' : 'bg-nl-blue';

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="min-h-screen bg-slate-950 pt-20"
    >
      {/* Header / Hero of Detail Page */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/30" />
        
        <div className="absolute top-8 left-6 md:left-12 z-20">
            <button 
                onClick={onBack}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all border border-white/10 group"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Retour aux projets
            </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10">
            <div className="max-w-7xl mx-auto">
                <span className={`inline-block px-3 py-1 rounded-full ${isBei ? 'bg-yellow-500/20 text-yellow-300' : 'bg-sky-500/20 text-sky-300'} text-sm font-bold uppercase tracking-wider mb-4 backdrop-blur-sm border border-white/10`}>
                    {project.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{project.title}</h1>
                <p className="text-xl text-slate-300 max-w-2xl">{project.desc}</p>
            </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-10">
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className={`w-2 h-8 rounded-full ${bgAccent}`}></span>
                    Détails du Projet
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                    {project.fullDescription || project.desc}
                </p>
            </div>

            {/* Gallery */}
            <div>
                <h3 className="text-2xl font-bold text-white mb-6">Galerie</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.gallery && project.gallery.map((img, i) => (
                        <div key={i} className="rounded-xl overflow-hidden h-64 group relative">
                            <img src={img} alt={`Detail ${i}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Sidebar Stats */}
        <div className="space-y-6">
            <div className="bg-slate-900 p-6 rounded-2xl border border-white/5 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Chiffres Clés</h3>
                
                <div className="space-y-6">
                    {project.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-4 group">
                            <div className={`p-2 rounded-lg bg-slate-800 ${accentColor} group-hover:scale-110 transition-transform`}>
                                <CheckCircle2 size={20} />
                            </div>
                            <div>
                                <p className="text-slate-300 font-medium">{detail}</p>
                            </div>
                        </div>
                    ))}

                    <div className="pt-6 mt-6 border-t border-white/10">
                         <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className={`w-full py-4 rounded-xl font-bold text-slate-900 transition-all shadow-lg hover:shadow-${isBei ? 'yellow' : 'sky'}-500/20 ${isBei ? 'bg-nl-yellow hover:bg-yellow-400' : 'bg-nl-blue hover:bg-sky-400'}`}>
                             Discuter d'un projet similaire
                         </button>
                    </div>
                </div>
            </div>
        </div>

      </div>

      {/* Next Project Teaser (Simple navigation) */}
      <div className="border-t border-white/5 bg-slate-900 py-12">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
               <p className="text-slate-500">Intéressé par notre expertise ?</p>
               <button onClick={onBack} className="text-white font-semibold hover:text-nl-yellow transition-colors">
                   Voir tous les projets
               </button>
          </div>
      </div>
    </motion.div>
  );
};