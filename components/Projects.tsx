import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Plus } from 'lucide-react';
import Scene from './Scene';

interface ProjectCardProps {
    project: typeof PROJECTS[0];
    index: number;
    onClick: (project: typeof PROJECTS[0]) => void;
    shouldAnimateImmediately?: boolean;
}

const ProjectCard = ({ project, index, onClick, shouldAnimateImmediately = false }: ProjectCardProps) => {
  const isBei = project.category.startsWith('BEI');
  const accentColor = isBei ? 'text-nl-yellow' : 'text-nl-blue';
  const bgColor = isBei ? 'bg-nl-yellow' : 'bg-nl-blue';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={shouldAnimateImmediately ? { opacity: 1, scale: 1, y: 0 } : undefined}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ 
        delay: shouldAnimateImmediately ? Math.min(index * 0.1, 0.8) : 0,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={() => onClick(project)}
      className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Image Background */}
      <img 
        src={project.image} 
        alt={project.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className={`text-xs font-bold uppercase tracking-wider mb-2 block ${accentColor}`}>
            {project.category}
          </span>
          <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
          <p className="text-slate-300 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
            {project.desc}
          </p>
          
          <div className="space-y-1 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 delay-100">
            {project.details.map((detail, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                <div className={`w-1 h-1 rounded-full ${bgColor}`} />
                {detail}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-200">
            <span className={`w-8 h-8 rounded-full flex items-center justify-center ${bgColor} ${isBei ? 'text-slate-900' : 'text-white'}`}>
              <Plus size={16} />
            </span>
            Voir Détails
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface ProjectsProps {
    onProjectClick: (project: typeof PROJECTS[0]) => void;
}

export const Projects = ({ onProjectClick }: ProjectsProps) => {
  const beiProjects = PROJECTS.filter(p => p.category.startsWith('BEI'));
  const betProjects = PROJECTS.filter(p => p.category.startsWith('BET'));
  
  // Image de fond pour les sections
  const backgroundImage = "/Capture d'écran 2025-12-02 014637.png";

  return (
    <section id="projects" className="py-24 bg-slate-950 relative">
      <Scene opacity={0.35} particleCount={2200} />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-nl-blue font-bold tracking-widest uppercase mb-3"
            >
              Nos Réalisations
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              Projets Types & Case Studies
            </motion.h3>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 max-w-md text-sm md:text-right"
          >
            Découvrez comment nous accompagnons nos clients dans leurs projets les plus ambitieux, de l'étude à la réalisation.
          </motion.p>
        </motion.div>

        {/* BET Section */}
        <div className="mb-24 relative py-12 px-6 rounded-3xl overflow-hidden">
          {/* Background Image */}
          <img 
            src={backgroundImage}
            alt="Construction background"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
            style={{ 
              opacity: 0.5,
              zIndex: 0
            }}
            onError={(e) => {
              console.error('Image failed to load:', backgroundImage);
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div 
            className="absolute inset-0 rounded-3xl"
            style={{
              background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.3))',
              zIndex: 1
            }}
          />
          
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="flex items-center gap-6 mb-10 relative z-10"
           >
              <h4 className="text-3xl font-bold text-white">Pôle <span className="text-nl-blue">BET</span> <span className="text-lg text-slate-500 font-normal ml-2 hidden sm:inline-block">(Bureau d'Etudes Technique)</span></h4>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="h-px bg-nl-blue/20 flex-1"
              />
           </motion.div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {betProjects.map((project, idx) => (
              <ProjectCard 
                key={`bet-${idx}`} 
                project={project} 
                index={idx} 
                onClick={onProjectClick}
                shouldAnimateImmediately={true}
              />
            ))}
          </div>
        </div>

        {/* BEI Section */}
        <div className="relative py-12 px-6 rounded-3xl overflow-hidden">
          {/* Background Image */}
          <img 
            src={backgroundImage}
            alt="Construction background"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
            style={{ 
              opacity: 0.5,
              zIndex: 0
            }}
            onError={(e) => {
              console.error('Image failed to load:', backgroundImage);
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div 
            className="absolute inset-0 rounded-3xl"
            style={{
              background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.3))',
              zIndex: 1
            }}
          />
          
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "0px" }}
             transition={{ duration: 0.6 }}
             className="flex items-center gap-6 mb-10 relative z-10"
           >
              <h4 className="text-3xl font-bold text-white">Pôle <span className="text-nl-yellow">BEI</span> <span className="text-lg text-slate-500 font-normal ml-2 hidden sm:inline-block">(Bureau d'Etudes Industriel)</span></h4>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px bg-nl-yellow/20 flex-1"
              />
           </motion.div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {beiProjects.map((project, idx) => (
              <ProjectCard 
                key={`bei-${idx}`} 
                project={project} 
                index={betProjects.length + idx} 
                onClick={onProjectClick}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};