/* 
 * MODIFICATIONS À FAIRE DANS Projects.tsx
 * ========================================
 * 
 * Copier ces modifications exactes dans votre fichier Projects.tsx
 */

// ============================================================
// 1. AJOUTER CET IMPORT à la ligne 4 (après les autres imports)
// ============================================================
import { useTranslatedProjects } from '../hooks/useTranslatedProjects';


// ============================================================
// 2. REMPLACER les lignes 83-86 PAR ce code :
// ============================================================

// ANCIEN CODE (lignes 83-86) :
/*
export const Projects = ({ onProjectClick }: ProjectsProps) => {
  const { t } = useTranslation();
  const beiProjects = PROJECTS.filter(p => p.category.startsWith('BEI'));
  const betProjects = PROJECTS.filter(p => p.category.startsWith('BET'));
*/

// NOUVEAU CODE (à mettre à la place) :
export const Projects = ({ onProjectClick }: ProjectsProps) => {
    const { t } = useTranslation();
    const translatedProjects = useTranslatedProjects();
    const beiProjects = translatedProjects.filter(p =>
        p.category.includes('BEI') || p.category.includes('IEB')
    );
    const betProjects = translatedProjects.filter(p =>
        p.category.includes('BET') || p.category.includes('TEB')
    );


// ============================================================
// RÉSULTAT ATTENDU
// ============================================================
// Après ces modifications, quand vous changez la langue :
// - FR → BEI/BET avec textes en français
// - EN → IEB/TEB avec textes en anglais
//
// Tous les champs seront traduits :
// ✅ category
// ✅ title
// ✅ desc
// ✅ fullDescription
// ✅ details (array)
