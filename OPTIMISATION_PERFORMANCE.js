/*
 * OPTIMISATION DES PERFORMANCES - Réduction CPU/GPU
 * ===================================================
 * 
 * Le problème : Trop de particules 3D qui consomment beaucoup de ressources
 * Solution : Réduire significativement le nombre de particules
 */

// ============================================================
// OPTION 1: RÉDUCTION MODÉRÉE (Performance moyenne)
// ============================================================
// Modifier ces valeurs dans chaque fichier :

// components/Expertise.tsx (ligne 17)
<Scene opacity={0.4} particleCount={800} />  // Au lieu de 2500

// components/Projects.tsx (ligne 93)
<Scene opacity={0.35} particleCount={600} />  // Au lieu de 2200

// components/Stats.tsx (ligne 18)
<Scene opacity={0.3} particleCount={500} />  // Au lieu de 2000

// components/References.tsx (ligne 83)
<Scene opacity={0.3} particleCount={500} speedMultiplier={isHovering ? 0.3 : 1} />  // Au lieu de 2000

// components/Contact.tsx (ligne 118)
<Scene opacity={0.25} particleCount={400} />  // Au lieu de 1800


// ============================================================
// OPTION 2: RÉDUCTION AGRESSIVE (Meilleure performance)
// ============================================================
// Pour une performance maximale, valeurs encore plus basses :

// components/Expertise.tsx
<Scene opacity={0.3} particleCount={400} />

// components/Projects.tsx
<Scene opacity={0.3} particleCount={300} />

// components/Stats.tsx
<Scene opacity={0.25} particleCount={250} />

// components/References.tsx
<Scene opacity={0.25} particleCount={250} speedMultiplier={isHovering ? 0.3 : 1} />

// components/Contact.tsx
<Scene opacity={0.2} particleCount={200} />


// ============================================================
// OPTION 3: DÉSACTIVER COMPLÈTEMENT (Performance maximale)
// ============================================================
// Si les performances restent un problème, commentez ou supprimez
// toutes les lignes <Scene ... /> dans tous les composants


// ============================================================
// AUTRES OPTIMISATIONS
// ============================================================

// 1. Dans Scene.tsx, le code détecte déjà mobile et réduit à 500 particules max
// 2. L'antialias est déjà désactivé (ligne 145: antialias: false)
// 3. powerPreference est déjà sur "high-performance" (ligne 146)

// Pour aller plus loin, vous pouvez :
// - Augmenter le seuil mobile dans Scene.tsx ligne 125 :
//   const adjustedParticleCount = isMobile ? Math.min(particleCount, 300) : particleCount * 0.5;
//
// - Réduire globalement de 50% pour desktop aussi


// ============================================================
// RECOMMANDATION
// ============================================================
// Commencez par l'OPTION 1 (réduction modérée)
// Si CPU/GPU toujours élevé, passez à l'OPTION 2
// En dernier recours, utilisez l'OPTION 3
