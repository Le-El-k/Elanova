# ÉLANOVA — plateforme de soutien aux projets

Site en français pour découvrir les porteurs de projet et contribuer à leurs initiatives.

## Pages

- index.html : accueil, mission et fonctionnement.
- projets.html : catalogue des six projets et formulaire de paiement.
- projet.html : fiche dédiée à chaque projet.
- paiement.html : retour du checkout SoleasPay.
- app.js : projets, navigation, formulaire et initialisation du paiement.
- config.js : URL publique du service de vérification des paiements.
- styles.css : identité visuelle et adaptation aux écrans.
- assets/ : portraits et images utilisés par le site.
- api/ : API Node.js et schéma PostgreSQL des commandes de vote.

## Paiements

Le checkout SoleasPay accepte un montant d’au moins 100 FCFA. Les frais de dépôt sont ajoutés au montant et payés par le votant. Chaque tranche cumulée de 100 FCFA issue de paiements vérifiés `COMPLETED` ou `SUCCESS` rapporte une voix au projet concerné ; les montants restants sont cumulés. Les références, le projet, le montant et la devise doivent correspondre à la commande enregistrée avant le paiement. Les doublons ne créent pas de voix supplémentaires et les remboursements retirent leur montant du score.

## Mise en service du compteur

GitHub Pages ne peut pas vérifier les transactions ni conserver les compteurs. Déployez `api/` comme service Node.js (répertoire racine `api`, commande d’installation `npm install`, commande de démarrage `npm start`) avec une base PostgreSQL persistante, puis définissez ces variables dans les paramètres privés de l’hébergeur :

- `DATABASE_URL` : URL de la base PostgreSQL.
- `SP_CLIENT_ID` et `SP_CLIENT_SECRET` : identifiants serveur d’une application créée dans SoleasPay. Ne les ajoutez jamais au dépôt ni au navigateur.
- `SOLEASPAY_WEBHOOK_TOKEN` : secret configuré dans SoleasPay pour authentifier les notifications.
- `ALLOWED_ORIGINS=https://le-el-k.github.io` : origine GitHub Pages autorisée.

Créez les identifiants de l’application serveur en suivant le [démarrage rapide SoleasPay](https://documentation.mysoleas.com/quickstart). Configurez le webhook SoleasPay sur `https://<URL-API>/api/webhooks/soleaspay`. Le service vérifie le hash SHA-256 reçu dans `x-private-key`, puis demande le statut officiel de la transaction à SoleasPay. Les retours de paiement sont également vérifiés par `POST /api/votes/confirm`.

Après le déploiement, renseignez l’URL HTTPS de l’API dans `config.js` (`window.ELANOVA_API_URL`) et republiez le site GitHub Pages. Tant que cette URL ou les identifiants serveur ne sont pas configurés, les compteurs restent indisponibles et le paiement est bloqué pour éviter un vote non vérifiable.

Pour lancer l’API en local, utilisez Node.js 20 ou plus récent, installez les dépendances depuis `api/`, renseignez les variables de `.env.example` dans l’environnement, puis lancez `npm start`.

Le fichier `render.yaml` décrit le service toujours actif et sa base PostgreSQL raccordée par l’URL interne de Render, en région Frankfurt. Le tarif public consulté est d’environ 7 $/mois pour l’API, 6 $/mois pour le plan PostgreSQL et 0,30 $/Go/mois pour le stockage initial de 1 Go. Le compte Render doit être réauthentifié avant la création des ressources.
