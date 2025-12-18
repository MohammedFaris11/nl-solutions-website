### NL Solutions – Excellence Industrielle  

Site vitrine React pour présenter l’expertise, les projets de référence et les coordonnées de **NL Solutions**.

Ce document est pensé pour votre équipe : il explique **comment faire évoluer le texte, les photos, les logos et les informations de contact**, de A à Z.

---

## 1. Technologies utilisées

- **Front-end** : React + TypeScript (Vite)
- **Styles** : Tailwind CSS (classes utilitaires dans `index.css` + classes dans les composants)
- **Animation & 3D** : Framer Motion, Three.js (`@react-three/fiber`, `@react-three/drei`)
- **Internationalisation (i18n)** : `i18next` + `react-i18next`
- **Formulaire de contact** : EmailJS (`@emailjs/browser`)

---

## 2. Architecture du projet

Cette application est un **SPA (Single Page Application)** côté front uniquement : il n’y a **pas de back-end** dans ce dépôt.  
Le site est structuré en 4 grandes couches :

- **1. Présentation / UI**  
  - Composants React dans le dossier `components/` (`Hero`, `Expertise`, `Projects`, `References`, `Contact`, `Navbar`, `Footer`, etc.).
  - Le fichier `App.tsx` assemble ces composants pour former la page.

- **2. Données de contenu**  
  - `constants.tsx` centralise les données métier :
    - Liste des **projets** (`PROJECTS`)
    - Liste des **services** BEI / BET (`SERVICES`)
    - **Statistiques** (`STATS`)
    - **Références clients / partenaires** et leurs logos (`CLIENTS_PRINCIPAUX`, `ENTREPRISES_MAROCAINES`, etc.)
    - **Coordonnées** (`CONTACT_INFO`)
  - Les fichiers de traductions `locales/fr/translation.json` et `locales/en/translation.json` gèrent les textes d’interface (menus, titres, boutons…).

- **3. Infrastructure d’interface (i18n, thème, 3D)**  
  - `i18n.ts` : configuration de l’internationalisation et détection de la langue du navigateur.
  - `contexts/ThemeContext.tsx` + `hooks/useThemeClasses.ts` : gestion du thème (couleurs, classes utilitaires).
  - `Scene.tsx` et les dépendances Three.js : éléments 3D / animations spécifiques.

- **4. Assets statiques (images, logos)**  
  - Dossier `public/` :
    - Images des secteurs et projets (`/Secteur .../`, `/BEI/`, `/BET/`…).
    - Logo principal (`/NL-Solutions-Logo-Main.png`).
    - Logos clients / partenaires (`/logos_categorises/...`).

**Flux de données simplifié :**

1. `App.tsx` importe les composants de présentation.
2. Les composants importent les données depuis `constants.tsx` et les fichiers de traduction via `react-i18next`.
3. Les composants d’interface affichent ces données (projets, services, chiffres clés, références…).
4. Le formulaire de contact envoie les données saisies vers EmailJS côté navigateur (aucun serveur custom).

---

## 3. Lancer le projet en local

**Prérequis** : Node.js installé sur votre machine.

1. Installer les dépendances :
   ```bash
   npm install
   ```
2. Lancer le site en mode développement :
   ```bash
   npm run dev
   ```
3. Ouvrir le lien affiché dans le terminal (en général `http://localhost:5173`).

Pour créer une version de production (build) :

```bash
npm run build
```

Le dossier `dist` contiendra les fichiers prêts pour déploiement (Vercel, OVH, autre hébergeur…).

---

## 4. Organisation des dossiers (où se trouvent les choses importantes)

- **Racine du projet**
  - `App.tsx` : composition principale de la page (sections Accueil, Expertise, Projets, Références, Contact…).
  - `index.tsx` : point d’entrée React.
  - `index.css` : styles globaux (dont la configuration de Tailwind).

- **Composants principaux** (`components/`)
  - `Hero.tsx` : bloc d’accueil.
  - `Expertise.tsx` : présentation des pôles BEI / BET.
  - `Projects.tsx`, `ProjectDetail.tsx` : liste des projets de référence + fiche projet.
  - `References.tsx`, `ReferencesPage.tsx` : logos et références clients / partenaires.
  - `Contact.tsx`, `ContactPage.tsx` : formulaire de contact + coordonnées.
  - `Navbar.tsx`, `Footer.tsx`, `LanguageSwitcher.tsx`, `Scene.tsx`, `Stats.tsx`, etc.

- **Données de contenu** :
  - `constants.tsx` : **toutes les données structurées** (projets, services, stats, logos, coordonnées…).
  - `locales/fr/translation.json` : textes en **français** pour l’interface.
  - `locales/en/translation.json` : textes en **anglais**.
  - `i18n.ts` : configuration de l’internationalisation (détection langue, etc.).

- **Images & logos** (`public/`)
  - Logos, photos des secteurs & projets :
    - `public/NL-Solutions-Logo-Main.png` : logo principal.
    - `public/BEI/` : images pour la partie BEI.
    - `public/BET/` : images pour la partie BET.
    - `public/Secteur Papeterie/`, `Secteur Plasturgie/`, `Secteur Agro-alimentaire/`, etc. : photos par secteur.
    - `public/logos_categorises/` : logos structurés par catégories (`agroalimentaire/`, `clients_principaux/`, `collaborateurs/`, `entreprises_marocaines/`…).

---

## 5. Modifier les textes (titres, descriptions, boutons…)

Il y a **deux niveaux** de texte :

1. **Textes “généraux” de l’interface** (menus, titres de sections, boutons, petites phrases) – gérés par les fichiers de traduction.
2. **Contenus détaillés des projets, services, stats, coordonnées** – gérés dans `constants.tsx`.

### 4.1. Textes gérés par les traductions (i18n)

- Français : `locales/fr/translation.json`
- Anglais : `locales/en/translation.json`

Pour modifier ces textes :

1. Ouvrir le fichier de la langue souhaitée (par exemple `locales/fr/translation.json`).
2. Repérer la clé correspondant au texte (ex. `"navbar.home"`, `"hero.title"`, `"contact.submit"`…).
3. Modifier la valeur en conservant la structure JSON.

Exemple simplifié dans `translation.json` :

```json
{
  "navbar": {
    "home": "Accueil",
    "expertise": "Expertise"
  }
}
```

> Si vous changez une clé, pensez à faire la même modification dans le fichier anglais pour rester cohérent.

### 4.2. Textes métiers (projets, services, stats, coordonnées)

Ces contenus sont principalement dans `constants.tsx`.

#### a) Statistiques (“+20 ans de benchmark…”) – section chiffres clés

- Fichier : `constants.tsx`
- Constante : `STATS`

Vous pouvez :
- Changer les valeurs (`value`), les labels (`label`) et les sous-textes (`sub`).
- Ajouter ou supprimer une entrée du tableau.

#### b) Services BEI / BET (titres, descriptions, méthodologie)

- Fichier : `constants.tsx`
- Constante : `SERVICES`

Chaque entrée représente un service (ex : BEI, BET) avec :
- `title`, `shortDescription`, `description`
- `features` (liste de points forts)
- `methodology` (étapes d’accompagnement)

Vous pouvez mettre à jour ces textes directement dans cet objet.

#### c) Projets de référence (cartes + pages détail)

- Fichier : `constants.tsx`
- Constante : `PROJECTS`

Pour chaque projet, vous trouverez :
- `id` : identifiant interne (ne pas modifier sans être sûr).
- `category` : catégorie affichée (ex. “BEI - Plasturgie”).
- `title` : titre du projet.
- `desc` : courte description (carte projet).
- `fullDescription` : description longue (page détail).
- `details` : liste de points (puces).
- `image` : image principale.
- `gallery` : galerie d’images (générée via `getGallery` selon `id`).

Vous pouvez :
- Modifier les textes (`title`, `desc`, `fullDescription`, `details`).
- Changer l’`image` (attention : le fichier doit exister dans `public/...`).
- Ajouter un nouveau projet en copiant un bloc, en changeant l’`id` + textes + images.

#### d) Coordonnées & adresses

- Fichier : `constants.tsx`
- Constante : `CONTACT_INFO`

Champs principaux :
- `phone` : numéro de téléphone affiché.
- `emails` : liste des e-mails de contact.
- `addresses` : villes et adresses (Casablanca, Fès, etc.).

Vous pouvez adapter ces informations si vos coordonnées évoluent.

#### e) Références & logos clients / partenaires

- Fichier : `constants.tsx`
- Constantes : `LOGO_MAP`, `CLIENTS_PRINCIPAUX`, `ENTREPRISES_MAROCAINES`, `POLE_AGROALIMENTAIRE`, `COLLABORATEURS`, `CLIENT_REFERENCES`.

Fonctionnement :
- `LOGO_MAP` fait le lien entre **nom du client** et **fichier du logo** dans `public/` ou `public/logos_categorises/...`.
- Les tableaux `CLIENTS_PRINCIPAUX`, `ENTREPRISES_MAROCAINES`, etc. utilisent ces noms :
  - `name` : libellé affiché.
  - `logo` : récupéré via `getClientLogo("NomClient")`.
  - `url` : site internet du client (facultatif).

Pour ajouter un nouveau logo :
1. Ajouter le fichier dans le dossier approprié (`public/logos_categorises/...`).
2. Ajouter une entrée dans `LOGO_MAP` avec le bon chemin.
3. Ajouter une entrée dans le tableau de références souhaité (`CLIENTS_PRINCIPAUX`, etc.).

---

## 6. Modifier les images (secteurs, projets, bannières…)

Toutes les images sont dans le dossier `public/`.  
**Règle importante :** dans React + Vite, on y accède par un chemin commençant par `/`, par exemple :  
`/Secteur Papeterie/image10.png`

### 5.1. Images de secteurs / projets

- Dossier : `public/Secteur .../`
  - `Secteur Papeterie/`
  - `Secteur Plasturgie/`
  - `Secteur Agro-alimentaire/`
  - `Secteur BTP/`
  - `Secteur Santé/`
  - `Secteur Industrie Lourde/`
  - `Secteur Emballage/`
  - `Secteur Plate Forme/`
  - etc.

Pour changer une photo de projet :

1. Remplacer le fichier existant par un autre avec **le même nom** (ex : `image10.png`).
   - Avantage : aucun changement de code.
2. Ou bien, **ajouter un nouveau fichier** dans le bon dossier et mettre à jour le chemin dans :
   - `constants.tsx` → dans la constante `PROJECTS` (champ `image`), ou
   - `PROJECT_IMAGES` (mapping par `id` de projet) si vous voulez modifier la galerie.

### 5.2. Images BEI / BET (bannières de services)

- Dossiers :
  - `public/BEI/` (ex: `image1.png`, `image2.png`, `image3.png`)
  - `public/BET/` (ex: `image5.png`, `image6.png`, `image8.png`)

Les chemins sont configurés dans `constants.tsx` → `SERVICES` (`heroImage`, `gallery`).

### 5.3. Logo principal NL Solutions

- Fichier : `public/NL-Solutions-Logo-Main.png`
- Utilisé dans : `constants.tsx` → `COMPANY_LOGO`

Pour changer le logo :
1. Remplacer `NL-Solutions-Logo-Main.png` par un nouveau fichier avec le même nom **ou**
2. Mettre un autre chemin dans `COMPANY_LOGO`.

### 5.4. Logos partenaires / clients

- Dossier : `public/logos_categorises/...`

Pour chaque nouveau logo :
1. Ajouter le fichier image dans le bon sous-dossier.
2. Déclarer le chemin dans `LOGO_MAP` (dans `constants.tsx`).
3. L’ajouter dans le tableau correspondant (`CLIENTS_PRINCIPAUX`, etc.).

---

## 7. Navigation, sections et structure de la page

### 6.1. Liens du menu (navbar)

- Fichier : `constants.tsx`
- Constante : `NAV_LINKS`

Chaque entrée contient :
- `name` : texte affiché (ex. “Accueil”, “Expertise”, “Projets”…).
- `id` : identifiant d’ancrage (doit correspondre à l’`id` de la section dans les composants).

Si vous ajoutez ou retirez une section :
1. Mettre à jour `NAV_LINKS`.
2. Vérifier que la section correspondante existe dans `App.tsx` / les composants (`id="home"`, `id="expertise"`, etc.).

### 6.2. Disposition des sections

- Fichier : `App.tsx`

Ce fichier assemble :
- Le `Navbar`
- Le `Hero`
- Les sections `Expertise`, `Projects`, `References`, `Contact`, etc.

Pour réorganiser l’ordre des sections :
- Modifier l’ordre d’affichage des composants dans `App.tsx`.

---

## 8. Formulaire de contact (EmailJS)

Le formulaire de contact utilise **EmailJS** pour envoyer les messages par e-mail.

Pour adapter :
- Les champs du formulaire : modifier `Contact.tsx` / `ContactPage.tsx`.
- Les adresses de réception / configuration EmailJS : se référer au fichier `EMAILJS_SETUP.md` à la racine du projet.

Si vous changez les IDs de service / template / clé publique dans EmailJS :
- Adaptez les constantes utilisées dans le composant de contact (où l’appel à `emailjs.send` est fait).

---

## 9. Thème & apparence

Le site utilise :
- **Tailwind CSS** pour la mise en page (classes dans `index.css` + classes utilitaires dans les JSX).
- Un système de thème géré dans :
  - `contexts/ThemeContext.tsx`
  - `hooks/useThemeClasses.ts`

Pour ajuster :
- Les couleurs, marges, typographies globales : modifier `index.css` et/ou la configuration Tailwind.
- Les classes de certains blocs : modifier les classes directement dans les composants (`Hero.tsx`, `Expertise.tsx`, etc.).

Des guides complémentaires sont fournis dans :
- `THEME_SYSTEM_GUIDE.js`
- `OPTIMISATION_PERFORMANCE.js`
- `MODIFICATIONS_PROJECTS.js`
- `TRADUCTIONS_MANQUANTES.js`
- `I18N_INSTRUCTIONS.js`

Ces fichiers sont là pour documenter la logique et faciliter les modifications futures.

---

## 10. Résumé pour le client (ce qu’il faut retenir)

- **Changer un texte simple (menu, titre, bouton)**  
  → `locales/fr/translation.json` et `locales/en/translation.json`.

- **Modifier un projet, un service, les stats, les coordonnées, les références**  
  → `constants.tsx` (`PROJECTS`, `SERVICES`, `STATS`, `CONTACT_INFO`, `CLIENTS_PRINCIPAUX`, etc.).

- **Changer une image (photo secteur, projet, logo)**  
  → Dossier `public/` (remplacer l’image ou mettre à jour le chemin dans `constants.tsx`).

- **Changer l’ordre ou les sections du site**  
  → `App.tsx` (structure globale) + `NAV_LINKS` dans `constants.tsx`.

Avec ces points, votre équipe peut faire évoluer le site sans toucher au cœur technique de l’application.
