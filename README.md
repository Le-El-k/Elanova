# ÉLANOVA — maquette frontend

Site statique en français, avec paiement hébergé SoleasPay Checkout v4.

Le premier projet présente M.LAB / BEST SOAP SERVICES à partir des informations et photos fournies. Cinq autres portraits fournis sont associés aux noms et idées demandés ; le nom « Marius Tchoumi » et les projets hors M.LAB sont fictifs pour la démonstration.

## Ouvrir la maquette

Ouvrez `index.html` dans un navigateur. Toutes les images sont stockées dans `assets/`. Les polices proviennent de Google Fonts et nécessitent une connexion Internet.

## Contenu

- `index.html` : structure des pages et sections.
- `projets.html` : catalogue et formulaire de montant pour le vote. Les boutons « Passer au vote » y conduisent.
- `projet.html` : modèle de fiche dédiée, ouvert avec l'identifiant du projet dans l'URL.
- `styles.css` : identité visuelle et mises en page responsive.
- `app.js` : données, filtres, recherche, navigation vers les fiches et validation du montant minimum.
- `assets/` : photos fournies pour M.LAB et les cinq profils suivants.

Les compteurs et classements de votes fictifs ont été retirés. Le formulaire accepte un montant entier à partir de 100 FCFA sans plafond et redirige vers la page de paiement hébergée par SoleasPay ; les frais sont ajoutés au montant et payés par le votant. La maquette ne valide ni ne comptabilise automatiquement les votes après paiement ; une vérification serveur et un stockage des transactions seront nécessaires pour cela.
