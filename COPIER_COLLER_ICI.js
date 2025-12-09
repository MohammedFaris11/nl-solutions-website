/* 
 * CODE À COPIER-COLLER DANS Projects.tsx
 * =======================================
 * 
 * ÉTAPE 1: Remplacer les lignes 1-6 (les imports) par :
 */

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTranslatedProjects } from '../hooks/useTranslatedProjects';
import { PROJECTS } from '../constants';
import { Plus } from 'lucide-react';
import Scene from './Scene';

/* 
 * ÉTAPE 2: Remplacer les lignes 83-86 par :
 */

export const Projects = ({ onProjectClick }: ProjectsProps) => {
    const { t } = useTranslation();
    const translatedProjects = useTranslatedProjects();
    const beiProjects = translatedProjects.filter(p =>
        p.category.includes('BEI') || p.category.includes('IEB')
    );
    const betProjects = translatedProjects.filter(p =>
        p.category.includes('BET') || p.category.includes('TEB')
    );

    // Image de fond pour les sections
    const backgroundImage = "/Capture d'écran 2025-12-02 014637.png";

/* 
 * ⚠️ IMPORTANT : Ne copiez que ces 2 sections !
 * Le reste du fichier reste tel quel.
 * 
 * Après ces modifications, sauvegardez et rechargez la page.
 * Les projets seront traduits en français/anglais au changement de langue !
 */
