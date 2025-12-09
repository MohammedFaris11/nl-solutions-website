// ═══════════════════════════════════════════════════════════════════════
// SYSTÈME DE THÈME - MODE CLAIR/SOMBRE
// ═══════════════════════════════════════════════════════════════════════

/**
 * VUE D'ENSEMBLE
 *
 * Ce projet dispose d'un système de thème complet qui permet de basculer
 * entre un mode sombre (dark) et un mode clair (light).
 *
 * FONCTIONNALITÉS :
 * ✅ Mode Sombre (par défaut)
 * ✅ Mode Clair
 * ✅ Persistance dans localStorage
 * ✅ Bouton de basculement dans la navbar
 * ✅ Transitions fluides
 * ✅ Hook utilitaire useThemeClasses()
 */

// ═══════════════════════════════════════════════════════════════════════
// COMMENT UTILISER
// ═══════════════════════════════════════════════════════════════════════

// 1. BASCULER LE THÈME
// L'utilisateur clique sur l'icône soleil/lune dans la navbar

// 2. ACCÉDER AU THÈME DANS LE CODE
/*
import { useTheme } from '../contexts/ThemeContext';

function MonComposant() {
    const { theme, toggleTheme } = useTheme();

    // theme vaut 'dark' ou 'light'
    // toggleTheme() permet de basculer
}
*/

// 3. OPTION A - CLASSES CONDITIONNELLES
/*
import { useTheme } from '../contexts/ThemeContext';

function MonComposant() {
    const { theme } = useTheme();

    return (
        <div className={theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>
            Contenu
        </div>
    );
}
*/

// 4. OPTION B - HOOK UTILITAIRE (RECOMMANDÉ)
/*
import { useThemeClasses } from '../hooks/useThemeClasses';

function MonComposant() {
    const tc = useThemeClasses();

    return (
        <div className={`${tc.bgSecondary} ${tc.textPrimary} ${tc.border} border`}>
            Contenu
        </div>
    );
}
*/

// ═══════════════════════════════════════════════════════════════════════
// CLASSES DISPONIBLES DANS useThemeClasses
// ═══════════════════════════════════════════════════════════════════════

/**
 * BACKGROUNDS
 * - bgPrimary      → slate-950 / slate-50
 * - bgSecondary    → slate-900 / white
 * - bgTertiary     → slate-800 / slate-100
 * - bgCard         → slate-900/50 / white/90
 * - bgCardHover    → slate-800/70 / slate-50/95
 *
 * TEXTES
 * - textPrimary    → slate-200 / slate-900
 * - textSecondary  → slate-400 / slate-700
 * - textMuted      → slate-500 / slate-500
 * - textWhite      → white / slate-900
 *
 * BORDURES
 * - border         → white/10 / slate-200
 * - borderLight    → white/5 / slate-100
 * - borderHover    → white/20 / slate-300
 *
 * UTILITAIRES
 * - isDark         → Boolean (true si mode sombre)
 * - isLight        → Boolean (true si mode clair)
 */

// ═══════════════════════════════════════════════════════════════════════
// VARIABLES CSS PERSONNALISÉES (index.css)
// ═══════════════════════════════════════════════════════════════════════

/*
// Mode sombre (par défaut)
:root {
  --bg-primary: rgb(2, 6, 23);
  --text-primary: rgb(226, 232, 240);
}

// Mode clair
:root.light-mode {
  --bg-primary: rgb(248, 250, 252);
  --text-primary: rgb(15, 23, 42);
}

// Utilisation en styles inline :
<div style={{ backgroundColor: 'var(--bg-primary)' }}>...</div>
*/

// ═══════════════════════════════════════════════════════════════════════
// ARCHITECTURE
// ═══════════════════════════════════════════════════════════════════════

/*
contexts/
  └── ThemeContext.tsx      # Context React pour le thème

hooks/
  └── useThemeClasses.ts    # Hook utilitaire pour les classes CSS

index.css                   # Variables CSS du thème
*/

// ═══════════════════════════════════════════════════════════════════════
// EXEMPLE COMPLET
// ═══════════════════════════════════════════════════════════════════════

/*
import React from 'react';
import { useThemeClasses } from '../hooks/useThemeClasses';
import { useTheme } from '../contexts/ThemeContext';

export const ExampleComponent = () => {
    const tc = useThemeClasses();
    const { toggleTheme } = useTheme();

    return (
        <div className={`${tc.bgSecondary} ${tc.textPrimary} p-8 rounded-lg ${tc.border} border`}>
            <h2 className={`text-2xl font-bold mb-4 ${tc.textWhite}`}>
                Titre de l'exemple
            </h2>
            <p className={tc.textSecondary}>
                Ceci est un exemple de composant qui s'adapte au thème.
            </p>
            <button
                onClick={toggleTheme}
                className="mt-4 px-4 py-2 bg-nl-blue text-white rounded"
            >
                Changer de thème
            </button>
        </div>
    );
};
*/

// ═══════════════════════════════════════════════════════════════════════
// MIGRATION DES COMPOSANTS EXISTANTS
// ═══════════════════════════════════════════════════════════════════════

/**
 * AVANT :
 * <div className="bg-slate-900 text-white border-white/10">
 *
 * APRÈS :
 * const tc = useThemeClasses();
 * <div className={`${tc.bgSecondary} ${tc.textPrimary} ${tc.border} border`}>
 */

// ═══════════════════════════════════════════════════════════════════════
// NOTES IMPORTANTES
// ═══════════════════════════════════════════════════════════════════════

/**
 * 1. Le thème est GLOBAL - affecte toute l'application
 * 2. Persistance AUTOMATIQUE dans localStorage
 * 3. Transitions CSS animées automatiquement
 * 4. Compatible avec tous les navigateurs modernes
 */

// ═══════════════════════════════════════════════════════════════════════
// STATUS OF IMPLEMENTATION
// ═══════════════════════════════════════════════════════════════════════

/*
## 7. Status of Implementation

- [x] ThemeContext & Provider created
- [x] useThemeClasses hook created
- [x] Global CSS variables defined
- [x] Navbar updated with toggle
- [x] App.tsx updated
- [x] Scene.tsx updated
- [x] Footer.tsx updated
- [x] Hero.tsx updated
- [x] Stats.tsx updated
- [x] Expertise.tsx updated
- [x] Projects.tsx updated
- [x] References.tsx updated
- [x] Contact.tsx updated
- [x] LanguageSwitcher.tsx updated
- [x] ProjectDetail.tsx updated
- [x] ServiceDetail.tsx updated
- [x] ReferencesPage.tsx updated
- [x] ContactPage.tsx updated

## 8. Troubleshooting

If styles are not applying correctly:
1. Check if 'light-mode' class is present on <html> tag
2. Verify that the component uses `useThemeClasses` hook
3. Ensure no hardcoded 'bg-slate-xxx' or 'text-slate-xxx' classes remain (unless intentional)
4. Check console for any Context errors

*/
