# Store multi‑plateforme (iOS, Android, macOS, Windows)

StoreDō est une interface web statique pour lister et télécharger des applications, avec recherche/tri, mode sombre, et pages dédiées par plateforme.

## 📋 Compte rendu complet du projet

### Qu'est-ce que StoreDō ?

StoreDō est un **site web statique** qui simule un magasin d'applications (comme l'App Store d'Apple ou Google Play). Il permet de :
- Afficher une liste d'applications avec leurs informations (nom, développeur, version, taille, etc.)
- Rechercher et filtrer les applications
- "Télécharger" des applications (simulation)
- Naviguer entre différentes plateformes (iOS, Android, macOS, Windows)

### Pourquoi ce projet ?

Ce projet est idéal pour :
- **Apprendre le développement web** (HTML, CSS, JavaScript)
- **Créer un portfolio** de développeur
- **Démontrer des compétences** en interface utilisateur
- **Prototyper** un vrai store d'applications
- **Organiser** une collection d'applications personnelles

### Comment ça fonctionne ?

1. **Structure simple** : Le projet contient 4 pages HTML (une par plateforme) qui partagent les mêmes fichiers CSS et JavaScript
2. **Données centralisées** : Toutes les informations des applications sont stockées dans un fichier JavaScript
3. **Filtrage automatique** : Chaque page ne montre que les applications de sa plateforme
4. **Interface réactive** : Le design s'adapte automatiquement à la taille de l'écran

### Technologies utilisées (explication simple)

- **HTML** : Structure de la page (titres, boutons, images)
- **CSS** : Apparence et design (couleurs, tailles, positionnement)
- **JavaScript** : Interactivité (recherche, filtres, animations)
- **Font Awesome** : Icônes (petites images pour les boutons)

### Fonctionnalités détaillées

#### 🔍 Recherche et filtrage
- **Barre de recherche** : Tapez le nom d'une app, son développeur ou son Bundle ID
- **Filtres par catégorie** : Réseaux sociaux, jeux, outils, etc.
- **Tri** : Par nom, taille ou développeur
- **Résultats en temps réel** : Les résultats se mettent à jour pendant que vous tapez

#### 🌙 Mode sombre
- **Bouton toggle** : Cliquez sur l'icône lune/soleil dans l'en-tête
- **Sauvegarde automatique** : Vos préférences sont mémorisées
- **Transition fluide** : Changement d'apparence en douceur

#### 📱 Pages par plateforme
- **iOS** : Applications pour iPhone/iPad (.ipa)
- **Android** : Applications pour Android (.apk)
- **macOS** : Applications pour Mac (.dmg/.pkg)
- **Windows** : Applications pour PC (.exe/.msi)

#### 📦 Gestion des applications
- **Cartes d'applications** : Chaque app est affichée dans une carte avec :
  - Icône de l'application
  - Nom et développeur
  - Version (en police monospace)
  - Bundle ID (cliquable pour copier)
  - Taille du fichier
  - Bouton de téléchargement
  - Bouton d'historique des versions

#### 📜 Historique des versions
- **Modal popup** : Cliquez sur l'icône horloge pour voir l'historique
- **Versions multiples** : Affiche toutes les versions disponibles
- **Informations détaillées** : Taille, changelog, liens de téléchargement
- **Téléchargement par version** : Choisissez quelle version télécharger

### Comment utiliser le projet

#### Pour un utilisateur final
1. **Ouvrir le site** : Double-cliquez sur `index.html` ou servez-le via un serveur web
2. **Naviguer** : Utilisez les onglets iOS/Android/macOS/Windows en haut
3. **Rechercher** : Tapez dans la barre de recherche
4. **Filtrer** : Utilisez les menus déroulants
5. **Télécharger** : Cliquez sur "TÉLÉCHARGER" (simulation)
6. **Mode sombre** : Cliquez sur l'icône lune/soleil

#### Pour un développeur
1. **Modifier les données** : Éditez le tableau `appsData` dans `script.js`
2. **Changer l'apparence** : Modifiez `styles.css`
3. **Ajouter des fonctionnalités** : Éditez `script.js`
4. **Créer de nouvelles pages** : Copiez une page existante et changez la plateforme

### Structure des fichiers expliquée

```
StoreDou/
├── index.html        # Page principale (iOS)
├── android.html      # Page Android
├── macos.html        # Page macOS  
├── windows.html      # Page Windows
├── styles.css        # Tous les styles (couleurs, layout, responsive)
├── script.js         # Toutes les données et la logique
└── README.md         # Cette documentation
```

**Pourquoi cette structure ?**
- **Séparation des responsabilités** : HTML pour la structure, CSS pour l'apparence, JS pour la logique
- **Réutilisabilité** : Un seul fichier CSS et JS pour toutes les pages
- **Maintenabilité** : Facile de modifier l'apparence ou ajouter des apps
- **Performance** : Les fichiers sont mis en cache par le navigateur

### Exemple concret d'utilisation

1. **Vous ouvrez `index.html`** → La page iOS se charge
2. **Vous voyez la liste des apps iOS** → Delta, YouTube, Spotify, etc.
3. **Vous tapez "Delta" dans la recherche** → Seules les apps contenant "Delta" s'affichent
4. **Vous cliquez sur "TÉLÉCHARGER"** → Une notification apparaît, un fichier se télécharge
5. **Vous cliquez sur l'icône horloge** → L'historique des versions de Delta s'ouvre
6. **Vous changez pour Android** → La page Android se charge avec les apps Android uniquement

### Avantages de ce projet

✅ **Simple à comprendre** : Code clair et bien commenté
✅ **Facile à modifier** : Ajouter des apps ou changer l'apparence
✅ **Responsive** : Fonctionne sur mobile, tablette et desktop
✅ **Moderne** : Utilise les dernières technologies web
✅ **Extensible** : Peut être connecté à une base de données ou API
✅ **Portable** : Fonctionne sur n'importe quel serveur web

## 🚀 Fonctionnalités principales

- **Multi‑plateforme**: pages séparées iOS, Android, macOS et Windows, avec filtrage automatique par plateforme
- **Recherche et tri**: par nom, développeur, Bundle ID, et tri par nom/taille/développeur
- **Filtres**: catégories (réseaux sociaux, jeux, outils, etc.)
- **Historique des versions**: modal avec versions et liens de téléchargement
- **Mode sombre**: persistance via `localStorage`
- **Responsive**: design adapté desktop/tablette/mobile

## 📄 Pages

- `index.html` → iOS (définit `window.APP_PLATFORM = 'ios'`)
- `android.html` → Android (`'android'`)
- `macos.html` → macOS (`'macos'`)
- `windows.html` → Windows (`'windows'`)

Toutes les pages partagent `styles.css` et `script.js`. La barre de plateforme permet de naviguer entre elles.

## 🧱 Structure du projet

```
StoreDou/
├── index.html        # Page iOS
├── android.html      # Page Android
├── macos.html        # Page macOS
├── windows.html      # Page Windows
├── styles.css        # Styles (clair/sombre, layout, composants)
├── script.js         # Logique (données, rendu, filtres, historique)
└── README.md         # Documentation
```

## ▶️ Démarrer en local

Option rapide (macOS):
```bash
open index.html
```

Serveur local recommandé (meilleure compatibilité):
```bash
python -m http.server 8000
# Ouvrir ensuite http://localhost:8000
```

## 🗂️ Modèle de données (appsData)

Les applications sont définies dans `script.js` dans le tableau `appsData`.

Champs supportés (principaux):
- `id` (number) — identifiant unique
- `name` (string) — nom de l’app
- `developer` (string)
- `version` (string)
- `bundleId` (string)
- `size` (string) — ex: `112.2 Mo`
- `icon` (string URL)
- `downloadUrl` (string URL)
- `category` (string) — ex: `social`, `games`, `outils`, `photo`, `streaming`, `emulateur`, `autres`
- `history` (array) — objets `{ version, size, downloadUrl, changelog, isCurrent }`
- `platforms` (array<string>) — plateformes où afficher l’app

### Plateformes et filtrage

- Chaque page définit `window.APP_PLATFORM` (`'ios' | 'android' | 'macos' | 'windows'`).
- Le rendu filtre automatiquement les apps dont `platforms` contient cette valeur.
- Par défaut, si `platforms` est omis, l’app est considérée iOS. Pour éviter toute ambiguïté, ajoutez explicitement `platforms`.

Exemples:
```javascript
// iOS uniquement
{ id: 1, name: 'Delta', /* ... */ platforms: ['ios'] }

// Android + iOS
{ id: 2, name: 'Example', /* ... */ platforms: ['android', 'ios'] }

// Windows uniquement
{ id: 3, name: 'ARMGDDN Browser', /* ... */ platforms: ['windows'] }
```

## ➕ Ajouter une application

Ajoutez un objet dans `appsData` (dans `script.js`):
```javascript
{
    id: 100,
    name: 'Nom de l\'App',
    developer: 'Auteur',
    version: '1.0.0',
    bundleId: 'com.exemple.app',
    size: '50 Mo',
    icon: 'https://.../icon.png',
    downloadUrl: 'https://.../App.ipa',
    category: 'outils',
    platforms: ['ios'],
    history: [
        { version: '1.0.0', size: '50 Mo', downloadUrl: 'https://...', changelog: 'Initial release', isCurrent: true }
    ]
}
```

## 🎨 Style & UI

- Thème clair/sombre géré via `body.dark-mode` (toggle dans l’en‑tête)
- Barre d’information: `.information-bar`
- Navigation de plateformes: `.platform-nav` / `.platform-link` (lien actif `.active`)
- Grille d’apps: `.apps-grid` et cartes `.app-card`
- Bundle ID affiché en police monospace (Menlo si disponible)

Astuce: Pour changer la police monospace globalement, ajoutez un style CSS ciblant `.bundle-id` et la valeur de version.

## 🧪 Bonnes pratiques des liens

- Remplacer les URLs d’exemple par de vrais liens de téléchargement
- Vérifier `downloadUrl` côté navigateur (les `.ipa/.tipa` s’ouvrent dans un nouvel onglet)

## 🚀 Déploiement

Ce projet est 100% statique. Vous pouvez le déployer sur:
- GitHub Pages
- Netlify / Vercel (Drop-in)
- Hébergement statique classique (Nginx, Apache)

Étapes (ex: GitHub Pages):
1. Pousser le repo sur GitHub
2. Activer Pages (branche `main`, répertoire `/`)
3. Accéder à l’URL fournie

## 📄 Licence

MIT — utilisez, modifiez et distribuez librement.

## 🆘 Support

Créez une issue ou ouvrez une discussion si vous avez besoin d’aide.

---

## 🧭 Tutoriel complet: reproduire StoreDō de zéro

Ce guide explique, pas à pas, comment recréer ce projet à partir d’un dossier vide.

### 1) Prérequis installés

- Un navigateur récent (Chrome, Safari, Firefox, Edge)
- Un éditeur de code (VS Code, Cursor, etc.)
- Optionnel: Python 3 (pour lancer un petit serveur local)

### 2) Créez l’architecture des fichiers

Créez un dossier, puis 4 fichiers HTML + 2 fichiers statiques:

```
StoreDou/
├── index.html
├── android.html
├── macos.html
├── windows.html
├── styles.css
└── script.js
```

### 3) Base HTML commune (ex: copiez-coller depuis `index.html`)

Dans chaque page HTML:
- Incluez `styles.css` et Font Awesome
- Ajoutez l’en‑tête (logo + bouton mode sombre)
- Ajoutez la barre d’informations et la navigation plateformes
- Ajoutez la section recherche + filtres
- Ajoutez le conteneur principal avec:
  - Titre de section
  - Grille d’applications `#appsGrid`
  - Modal d’historique

Important: avant `script.js`, définissez la plateforme de la page:

```html
<script>
  window.APP_PLATFORM = 'ios';     <!-- index.html -->
  // 'android' pour android.html, 'macos' pour macos.html, 'windows' pour windows.html
 </script>
<script src="script.js"></script>
```

### 4) Styles globaux (`styles.css`)

- Définissez la grille, les cartes d’apps, la barre d’info, la nav plateformes (`.platform-nav`, `.platform-link`), les boutons
- Ajoutez les styles responsive (`@media (max-width: 768px) { ... }`)
- Implémentez le mode sombre en ajoutant des variantes sous `body.dark-mode { ... }`

Astuce: Inspirez-vous des classes existantes dans ce repo pour obtenir un rendu identique.

### 5) Logique JavaScript (`script.js`)

Implémentez:
- Le tableau `appsData` (les objets app)
- Le rendu: `renderApps()` crée les cartes dans `#appsGrid`
- La recherche/tri/filtre: `searchApps()`, `filterByCategory()`, `sortApps()`, `filterApps()`
- Le modal d’historique: `showAppHistory()`, `createVersionItem()`
- Le téléchargement simulé: `downloadApp()` et `downloadVersion()`
- Le mode sombre: `toggleDarkMode()`, `loadDarkMode()`
- Les écouteurs d’événements: `setupEventListeners()`

Points clés pour la multi‑plateforme:
- Chaque page définit `window.APP_PLATFORM`
- Dans `filterApps()`, filtrez: `app.platforms.includes(APP_PLATFORM)`
- Si une app n’a pas de `platforms`, utilisez `['ios']` par défaut (ou ajoutez-le partout)

Extrait minimal pour filtrer par plateforme:
```javascript
const pagePlatform = window.APP_PLATFORM; // 'ios' | 'android' | 'macos' | 'windows'
const appPlatforms = Array.isArray(app.platforms) && app.platforms.length ? app.platforms : ['ios'];
const matchesPlatform = !pagePlatform || appPlatforms.includes(pagePlatform);
```

### 6) Ajouter vos applications (données)

Ajoutez des objets dans `appsData`:
```javascript
{
  id: 1,
  name: 'Nom',
  developer: 'Auteur',
  version: '1.0.0',
  bundleId: 'com.exemple.app',
  size: '50 Mo',
  icon: 'https://.../icon.png',
  downloadUrl: 'https://.../fichier.ipa',
  category: 'outils',        // social | games | outils | photo | streaming | emulateur | autres
  platforms: ['ios'],        // ou ['android'], ['macos'], ['windows'] ou plusieurs
  history: [
    { version: '1.0.0', size: '50 Mo', downloadUrl: 'https://...', changelog: 'Initial', isCurrent: true }
  ]
}
```

### 7) Lancer le projet en local

Option simple (macOS):
```bash
open index.html
```

Serveur local (recommandé):
```bash
python -m http.server 8000
# Ouvrez http://localhost:8000
```

### 8) Déployer le site

Le projet est statique; il peut être déployé sur:
- GitHub Pages (branche `main` → Pages → root)
- Netlify / Vercel (drag & drop du dossier)
- Hébergement statique (Nginx/Apache)

### 9) Personnaliser l’UI

- Couleurs / typographies: `styles.css`
- Taille des cartes et colonnes: `.apps-grid`
- Mode sombre: ajustez les règles `body.dark-mode`
- Icônes: Font Awesome (classes `fa-...`)

### 10) Bonnes pratiques & pièges

- Évitez les liens de téléchargement cassés → testez les URLs
- Gardez des `id` uniques pour chaque app
- Préférez des icônes carrées (512x512) pour un rendu propre
- Utilisez une police monospace pour `bundleId` et `version` si besoin (ex: Menlo)
- Si vous créez de nouvelles plateformes, ajoutez simplement une page et une valeur dans `platforms`

Avec ces étapes, vous pouvez reproduire StoreDō à l'identique, puis l'adapter à vos besoins.

---

## 🌐 Tutoriel: Mettre en ligne le site (100% gratuit)

Ce guide vous montre comment déployer StoreDō sur Internet avec des solutions entièrement gratuites.

### Option 1: GitHub Pages (Recommandé)

**Avantages :** Gratuit, fiable, intégré à GitHub, domaine personnalisé possible

#### Étape 1: Créer un compte GitHub
1. Allez sur [github.com](https://github.com)
2. Cliquez sur "Sign up" et créez un compte
3. Vérifiez votre email

#### Étape 2: Créer un nouveau repository
1. Cliquez sur le "+" en haut à droite → "New repository"
2. Nom du repository : `storedou` (ou le nom de votre choix)
3. Description : "Store multi-plateforme pour applications"
4. Cochez "Public" (obligatoire pour GitHub Pages gratuit)
5. Cochez "Add a README file"
6. Cliquez "Create repository"

#### Étape 3: Uploader vos fichiers
1. Dans votre repository, cliquez "uploading an existing file"
2. Glissez-déposez tous vos fichiers : `index.html`, `android.html`, `macos.html`, `windows.html`, `styles.css`, `script.js`
3. Message de commit : "Initial commit - StoreDō project"
4. Cliquez "Commit changes"

#### Étape 4: Activer GitHub Pages
1. Allez dans "Settings" (onglet en haut)
2. Faites défiler jusqu'à "Pages" (menu de gauche)
3. Source : "Deploy from a branch"
4. Branch : "main" (ou "master")
5. Folder : "/ (root)"
6. Cliquez "Save"

#### Étape 5: Accéder à votre site
1. Attendez 2-3 minutes
2. Votre site sera disponible à : `https://votre-username.github.io/storedou`
3. Le lien apparaît dans l'onglet "Pages" des Settings

**💡 Astuce :** Pour un domaine personnalisé, ajoutez un fichier `CNAME` avec votre domaine.

### Option 2: Netlify (Très simple)

**Avantages :** Drag & drop, déploiement instantané, HTTPS automatique

#### Méthode 1: Drag & Drop
1. Allez sur [netlify.com](https://netlify.com)
2. Créez un compte (gratuit)
3. Glissez-déposez votre dossier StoreDou dans la zone "Deploy manually"
4. Votre site est en ligne immédiatement !

#### Méthode 2: Depuis GitHub
1. Connectez votre compte GitHub à Netlify
2. Sélectionnez votre repository `storedou`
3. Netlify détecte automatiquement que c'est un site statique
4. Cliquez "Deploy site"

**URL générée :** `https://nom-aleatoire.netlify.app`

### Option 3: Vercel (Pour développeurs)

**Avantages :** Performance optimale, déploiement automatique, analytics

1. Allez sur [vercel.com](https://vercel.com)
2. Créez un compte avec GitHub
3. Cliquez "New Project"
4. Importez votre repository `storedou`
5. Vercel détecte automatiquement le framework (None)
6. Cliquez "Deploy"

**URL générée :** `https://storedou-xxx.vercel.app`

### Option 4: Surge.sh (En ligne de commande)

**Avantages :** Très rapide, contrôle total

#### Installation
```bash
# Installez Node.js d'abord (nodejs.org)
npm install -g surge
```

#### Déploiement
```bash
# Dans votre dossier StoreDou
surge

# Suivez les instructions :
# - Choisissez un nom de domaine (ex: storedou.surge.sh)
# - Votre site est en ligne !
```

### Comparaison des solutions gratuites

| Solution | Facilité | Performance | Domaine perso | Limites |
|----------|----------|-------------|---------------|---------|
| **GitHub Pages** | ⭐⭐⭐ | ⭐⭐⭐ | ✅ | 1GB, 100GB/mois |
| **Netlify** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ | 100GB/mois |
| **Vercel** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ | 100GB/mois |
| **Surge** | ⭐⭐ | ⭐⭐⭐ | ❌ | Illimité |

### Configuration avancée (optionnel)

#### Domaine personnalisé gratuit
1. **Freenom** : Obtenez un domaine .tk, .ml, .ga gratuit
2. **No-IP** : Sous-domaine gratuit (ex: storedou.ddns.net)
3. **DuckDNS** : Sous-domaine gratuit (ex: storedou.duckdns.org)

#### HTTPS automatique
- **Netlify/Vercel** : HTTPS activé par défaut
- **GitHub Pages** : HTTPS activé par défaut
- **Surge** : HTTPS automatique

#### Mise à jour automatique
1. Modifiez vos fichiers localement
2. Committez et pushez sur GitHub
3. Netlify/Vercel se mettent à jour automatiquement

### Dépannage courant

#### Le site ne s'affiche pas
- Vérifiez que `index.html` est à la racine
- Attendez 5-10 minutes (propagation DNS)
- Videz le cache de votre navigateur

#### Les images ne se chargent pas
- Vérifiez que les URLs d'images sont correctes
- Utilisez des URLs HTTPS

#### Le mode sombre ne fonctionne pas
- Vérifiez que `localStorage` est activé
- Testez dans un navigateur privé

### Recommandation finale

**Pour débuter :** GitHub Pages (simple, fiable, intégré)
**Pour la performance :** Vercel (rapide, moderne)
**Pour la simplicité :** Netlify (drag & drop)

Toutes ces solutions sont 100% gratuites et suffisantes pour héberger StoreDō !
