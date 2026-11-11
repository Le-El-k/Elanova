# ÉLANOVA — maquette frontend

Maquette statique en français, construite sans dépendance ni service backend.

Le premier projet présente M.LAB / BEST SOAP SERVICES à partir des informations et photos fournies. Cinq autres portraits fournis sont associés aux noms et idées demandés ; le nom « Marius Tchoumi » et les projets hors M.LAB sont fictifs pour la démonstration.

## Ouvrir la maquette

Ouvrez `index.html` dans un navigateur. Les photos et les polices sont chargées depuis Unsplash et Google Fonts et nécessitent une connexion Internet.

## Contenu

- `index.html` : structure des pages et sections.
- `projets.html` : catalogue et formulaire de montant pour le vote. Les boutons « Passer au vote » y conduisent.
- `projet.html` : modèle de fiche dédiée, ouvert avec l'identifiant du projet dans l'URL.
- `styles.css` : identité visuelle et mises en page responsive.
- `app.js` : données, filtres, recherche, navigation vers les fiches et validation du montant minimum.
- `assets/` : photos fournies pour M.LAB et les cinq profils suivants.

Les compteurs et classements de votes fictifs ont été retirés. Le formulaire accepte un montant entier à partir de 100 FCFA sans plafond et affiche SoleasPay, mais ne déclenche encore aucun paiement ni vote. L'API de paiement sera intégrée lorsqu'elle sera fournie.
