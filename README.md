# groupomania-frontend

## Installation du projet

lancer la comande 

```
npm install
```
Créer dans le dossier racine un fichier .env qui doit contenir la varible suuivante afin de fonctionner en local:
```
VUE_APP_APIURL=http://localhost:3000/api/
```
Remplacer eventuellement cette valeur avec l'adresse de votre backend

## Utilisation
- en devellopement utiliser la commande ci dessous qui vous lancera un serveur non optimisé
```
npm run serve
```
- en production, lancer la commande 
```
npm run build
```
puis
```
npm run start
```