# Instructions de Déploiement

## 1. Créer un repository GitHub

1. Allez sur [GitHub](https://github.com) et connectez-vous
2. Cliquez sur le bouton "+" en haut à droite, puis "New repository"
3. Nommez votre repository (ex: `nl-solutions-website`)
4. Ne cochez PAS "Initialize this repository with a README" (nous avons déjà un commit)
5. Cliquez sur "Create repository"

## 2. Connecter le repository local à GitHub

Exécutez ces commandes dans votre terminal (remplacez `VOTRE_USERNAME` et `VOTRE_REPO` par vos valeurs) :

```bash
git remote add origin https://github.com/VOTRE_USERNAME/VOTRE_REPO.git
git branch -M main
git push -u origin main
```

## 3. Déployer sur Vercel

### Option A : Via l'interface Vercel (Recommandé)

1. Allez sur [Vercel](https://vercel.com) et connectez-vous (ou créez un compte)
2. Cliquez sur "Add New Project"
3. Importez votre repository GitHub
4. Vercel détectera automatiquement les paramètres :
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Cliquez sur "Deploy"
6. Votre site sera déployé en quelques minutes !

### Option B : Via Vercel CLI

```bash
# Installer Vercel CLI globalement
npm i -g vercel

# Se connecter à Vercel
vercel login

# Déployer
vercel

# Pour déployer en production
vercel --prod
```

## Configuration Vercel

Le fichier `vercel.json` est déjà configuré avec :
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite
- Rewrites pour le routing SPA

## Notes importantes

- Vercel déploiera automatiquement à chaque push sur la branche `main`
- Les variables d'environnement peuvent être configurées dans les paramètres du projet Vercel
- Le site sera accessible via une URL Vercel (ex: `votre-projet.vercel.app`)


