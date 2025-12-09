// Instructions pour compléter l'implémentation i18n des projets
// ============================================================

// ÉTAPE 1: Modifier components/Projects.tsx
// ------------------------------------------
// Ligne 4 (après les imports existants), ajouter :
import { useTranslatedProjects } from '../hooks/useTranslatedProjects';

// Ligne 84-86, remplacer :
export const Projects = ({ onProjectClick }: ProjectsProps) => {
    const { t } = useTranslation();
    const beiProjects = PROJECTS.filter(p => p.category.startsWith('BEI'));
    const betProjects = PROJECTS.filter(p => p.category.startsWith('BET'));

    // PAR :
    export const Projects = ({ onProjectClick }: ProjectsProps) => {
        const { t } = useTranslation();
        const translatedProjects = useTranslatedProjects();
        const beiProjects = translatedProjects.filter(p => p.category.includes('BEI') || p.category.includes('IEB'));
        const betProjects = translatedProjects.filter(p => p.category.includes('BET') || p.category.includes('TEB'));


// ÉTAPE 2: Tester
// ---------------
// 1. Sauvegardez le fichier Projects.tsx
// 2. Allez sur http://localhost:3000
// 3. Changez la langue EN/FR
// 4. Les titres et catégories des projets devraient maintenant changer !

// Note: Le hook useTranslatedProjects a déjà été créé dans hooks/useTranslatedProjects.ts
// Il prend les projets de constants.tsx et applique les traductions depuis translation.json
