# testTechniqueFonsa
Application MERN Gestion produits

Salut...

Bienvenu(e)!!!

Cette application MERN a pour but aux utilisateurs de s'authentifier sur l'application puis pouvoir ajouter, modifier(leurs propres produits), 
supprimer(leurs propres produits), et afficher les produits de la base de données sur l'application.

Pour tester cette application, il faut installer:

COTÉ SERVEUR: express, cors, body-parser, mongoose, nodemon(facultatif), dotenv, bcryptjs, jsonwebtoken

COTÉ CLIENT: axios(pour les requetes http), moment, react-file-base64(s'il faut ajouter des images), redux, redux-thunk, 
react-redux, react-hot-toast(pas encore installé: pour de belles notifications après creation, suppression, modification),
material-ui/core, material-ui/icons, react-router-dom(pas encore installé), jwt-decode, react-google-login

TRES IMPORTANT !!!

--- Pour démarer le serveur, il faut se positionner dans le dossier "api-serveur" et ouvrrir le fichier index.js puis changer le contenu de la  variable constante BASE_URL (aller dans votre BD Mongodb et copier le lien de connexion de votre cluster et l'attribuer à BASE_URL)
A bien entrer le bon nom_Utilisateur et le bon Mot_de_Passe
et taper dans le terminal: 'npm install' ou bien 'npm install --force' afin d'intaller tous les paquets dont le serveur a besoin pour se lancer puis taper 'nodemon' ou bien 'npm start' pour démarrer le serveur

--- Pour démarer le client, il faut se positionner dans le dossier "app-client" et taper: 'npm install' ou bien 'npm install --force' pour intaller toutes les dépendances de paquets dont le client à besoin pour se lancer puis taper 'npm start' pour démarrer l'application client.


Et c'est tout.


Ce dépôt sera mis a jour sous peu de temps.


Merci pour votre visite.
