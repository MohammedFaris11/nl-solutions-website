import { useTheme } from '../contexts/ThemeContext';

/**
 * Hook utilitaire pour obtenir facilement les classes CSS adaptées au thème actuel
 */
export const useThemeClasses = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return {
        // Backgrounds
        bgPrimary: isDark ? 'bg-slate-950' : 'bg-slate-50',
        bgSecondary: isDark ? 'bg-slate-900' : 'bg-white',
        bgTertiary: isDark ? 'bg-slate-800' : 'bg-slate-100',
        bgCard: isDark ? 'bg-slate-900/50' : 'bg-white/90',
        bgCardHover: isDark ? 'bg-slate-800/70' : 'bg-slate-50/95',

        // Text colors
        textPrimary: isDark ? 'text-slate-200' : 'text-slate-900',
        textSecondary: isDark ? 'text-slate-400' : 'text-slate-700',
        textMuted: isDark ? 'text-slate-500' : 'text-slate-500',
        textWhite: isDark ? 'text-white' : 'text-slate-900',

        // Borders
        border: isDark ? 'border-white/10' : 'border-slate-200',
        borderLight: isDark ? 'border-white/5' : 'border-slate-100',
        borderHover: isDark ? 'hover:border-white/20' : 'hover:border-slate-300',

        // Shadows & overlays
        shadow: isDark ? 'shadow-black/50' : 'shadow-slate-200',
        overlay: isDark ? 'bg-slate-900/90' : 'bg-slate-50/95',

        // Theme utilities
        isDark,
        isLight: !isDark,
    };
};
