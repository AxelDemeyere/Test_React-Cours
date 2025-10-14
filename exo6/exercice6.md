# Exercice — Tests HTTP simulés avec MSW : ProductList

## sujet

Écrire des **tests asynchrones** pour un composant `ProductList` qui interroge une API, en **simulant le réseau avec MSW**.  
Couverture des 3 états : **chargement**, **succès**, **erreur**, et le cas **liste vide**.


## Spécifications fonctionnelles du composant `ProductList`

* Au montage, le composant **récupère** `GET https://api.example.com/products`.
* **États UI** :

  * Pendant la requête : afficher `Chargement...`.
  * En cas d’erreur : afficher un paragraphe avec le texte `Impossible de charger`.
  * Si la liste est vide : afficher `Aucun produit`.
  * Sinon : afficher une **liste** (`ul > li`) de noms de produits.


## tests à faire passer

1. **Chargement -> Succès** : afficher `Chargement...`, puis une liste contenant au moins `Clavier` et `Souris`.
2. **Erreur serveur** : si l’endpoint renvoie 500, afficher un **alert** contenant `Impossible de charger`.
3. **Liste vide** : si l’endpoint renvoie `[]`, afficher `Aucun produit`.