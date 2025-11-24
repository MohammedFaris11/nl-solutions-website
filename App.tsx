import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { References } from './components/References';
import { Contact } from './components/Contact';
import { ProjectDetail } from './components/ProjectDetail';
import { ServiceDetail } from './components/ServiceDetail';
import { ReferencesPage } from './components/ReferencesPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { PROJECTS } from './constants';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const navigateTo = (view: string) => {
    setCurrentView(view);
    // Reset specific selections when main nav changes
    if (view !== 'projects') setSelectedProject(null);
    if (view !== 'expertise') setSelectedServiceId(null);
    // Force scroll to top and trigger visibility
    window.scrollTo(0, 0);
    // Trigger a small delay to ensure content is visible after animation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  // Project Navigation
  const handleProjectClick = (project: typeof PROJECTS[0]) => {
    setSelectedProject(project);
    setCurrentView('projects');
  };

  // Service Navigation
  const handleServiceClick = (id: string) => {
    setSelectedServiceId(id);
    setCurrentView('expertise');
  };

  const renderContent = () => {
    // 1. Detailed Project View
    if (currentView === 'projects' && selectedProject) {
      return <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />;
    }

    // 2. Projects List Page (Reusing component but showing it standalone)
    if (currentView === 'projects') {
       return (
         <div className="pt-20 min-h-screen bg-slate-950">
            <Projects onProjectClick={handleProjectClick} />
         </div>
       );
    }

    // 3. Detailed Service View
    if (currentView === 'expertise' && selectedServiceId) {
      return <ServiceDetail serviceId={selectedServiceId} onBack={() => setSelectedServiceId(null)} />;
    }

    // 4. Expertise List Page (Reusing component)
    if (currentView === 'expertise') {
      return (
        <div className="pt-20 min-h-screen bg-slate-950">
           <div className="bg-slate-900 py-12 text-center px-6">
               <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Nos Domaines d'Expertise</h1>
               <p className="text-slate-400">Une approche intégrée pour votre performance.</p>
           </div>
           <Expertise onServiceClick={handleServiceClick} />
        </div>
      );
    }

    // 5. References Page
    if (currentView === 'references') {
        return <ReferencesPage />;
    }

    // 6. Contact Page
    if (currentView === 'contact') {
        return <ContactPage />;
    }

    // 7. Default: Home Landing Page
    return (
      <>
        <Hero />
        <Stats />
        <Expertise onServiceClick={handleServiceClick} />
        <Projects onProjectClick={handleProjectClick} />
        <References />
        <Contact />
        <Footer onNavigate={navigateTo} />
      </>
    );
  };

  // Ensure scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <main className="bg-slate-900 min-h-screen text-slate-200 selection:bg-nl-yellow selection:text-slate-900">
      <Navbar onNavigate={navigateTo} currentView={currentView} />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentView}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
      
      {/* Footer - Show on all pages */}
      {currentView !== 'home' && <Footer onNavigate={navigateTo} />}
    </main>
  );
}

export default App;