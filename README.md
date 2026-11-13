# ÉLANOVA — plateforme de soutien aux projets

Site en français pour découvrir les porteurs de projet et contribuer à leurs initiatives.

## Pages

- index.html : accueil, mission et fonctionnement.
- projets.html : catalogue des six projets et formulaire de paiement.
- projet.html : fiche dédiée à chaque projet.
- paiement.html : retour du checkout SoleasPay.
- app.js : projets, navigation, formulaire et initialisation du paiement.
- vote-storage.js : calcul et suivi local des contributions dans le navigateur.
- styles.css : identité visuelle et adaptation aux écrans.
- assets/ : portraits et images utilisés par le site.

## Paiements et scores locaux

Le checkout SoleasPay accepte un montant d’au moins 100 FCFA. Les frais de dépôt sont payés par le votant. Le navigateur lit le statut du retour SoleasPay et ajoute une contribution au suivi local lorsque ce retour indique `COMPLETED` ou `SUCCESS`. Chaque tranche cumulée de 100 FCFA rapporte une voix ; les montants restants sont cumulés par projet. Une référence déjà enregistrée dans ce navigateur n’est pas comptée deux fois.

Les scores et le classement sont enregistrés uniquement dans le stockage local du navigateur qui a effectué le paiement. Ils ne sont ni partagés entre visiteurs ou appareils, ni vérifiés indépendamment auprès de SoleasPay. Effacer les données du navigateur les réinitialise. Un classement global réellement vérifié ne peut pas fonctionner sur GitHub Pages seul.
