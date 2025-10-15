# Exercice Tests End-to-End avec Cypress : Todo App


## sujet
Mettre en place un **test E2E complet** sur une mini-application React (Todo App) gérée avec **Vite**.  
L’objectif est de valider tout le **parcours utilisateur** : ajout, affichage et suppression d’une tâche.


## Spécifications fonctionnelles
- L’application contient :
  - un champ de saisie (placeholder : “Nouvelle tâche”) ;
  - un bouton “Ajouter” ;
  - une liste des tâches existantes ;
  - pour chaque tâche, un bouton “Supprimer”.
- Lorsqu’on ajoute une tâche, elle s’affiche dans la liste.
- Lorsqu’on clique sur “Supprimer”, la tâche disparaît.
- Si aucune tâche n’existe, afficher le texte : **“Aucune tâche”**.


## tests Cypress à faire passer

1. Le texte **“Aucune tâche”** s’affiche au départ.
2. Lorsqu’on saisit une tâche (“Acheter du pain”) et qu’on clique sur “Ajouter”, elle s’affiche dans la liste.
3. Lorsqu’on clique sur “Supprimer”, la tâche est retirée de la liste et le message “Aucune tâche” réapparaît.