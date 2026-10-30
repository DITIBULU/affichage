# Affichage TV — DITIB Montargis Camii

Écran d'information diffusé en boucle sur la télé de la mosquée DITIB de Montargis.
Site statique publié par GitHub Pages depuis la branche `main` (racine) :
https://ditibulu.github.io/affichage/ — aucune étape de build.

## Fichiers
- `config.js` : **presque toutes les demandes se font ici** (annonces, affiches, hadiths,
  bonnes conduites, bandeau, réglages des horaires, Cuma).
- `index.html` : l'application (mise en page, calcul des horaires, rotation). À ne modifier
  que pour un changement de présentation.
- `horaires-officiels.js` : horaires officiels DITIB facultatifs (prioritaires sur le calcul).
  Ordre : İmsak, Güneş, Öğle, İkindi, Akşam, Yatsı.
- `affiches/` : images affichées en plein cadre (JPG, PNG, WEBP, SVG), listées dans
  `config.affiches`. Format idéal : paysage 1280×800 ; le portrait est accepté.
- `logo.jpg` : logo de l'association.

## Règles de contenu
- Textes **bilingues, turc d'abord** : `{ fr: "…", tr: "…" }` (`languePrincipale: "tr"`).
- Noms des prières : İmsak, **Güneş** (pas « Sabah »), Öğle, İkindi, Akşam, Yatsı, Cuma.
- Une seule heure par prière (pas de colonne Kamet, `afficherKamet: false`) ; la prière
  commence à l'heure affichée. Exception : Sabah namazı = Güneş − 30 min (`iqama.fajr: "gunes-30"`).
- Hadiths et versets : faire valider par l'imam ; toujours indiquer la source.
- Affiches d'événements datés : ajouter `du` / `au` (format `AAAA-MM-JJ`) pour qu'elles
  disparaissent seules après l'événement.
- Annonce « don » : retirée pour l'instant, à remettre seulement sur demande.
- Ne pas réintroduire : diapositives
  « ne pas passer devant une personne qui prie », versions petit format chaussettes /
  téléphone / stationnement (remplacées par les affiches illustrées).
- Style des affiches SVG : reprendre `affiches/stationnement.svg` ou `chaussettes.svg`
  (fond bordeaux, accent rouge #e8404a, texte turc en grand, français en dessous).

## Tester
`index.html?simuler=AAAA-MM-JJTHH:MM` simule une date/heure (écran de prière, Cuma).
Flèche droite = diapositive suivante.

## Publier
Les changements ne sont visibles sur la télé qu'une fois **dans `main`** (GitHub Pages
republie en 1 à 2 minutes ; l'écran se recharge seul dans les 5 minutes).
Après une modification : proposer les changements et les fusionner dans `main`, puis
vérifier que `https://ditibulu.github.io/affichage/config.js` contient la nouveauté.
L'utilisateur échange en français.
