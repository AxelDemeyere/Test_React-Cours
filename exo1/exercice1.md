# Exercices 

## Tests unitaires sur fonctions utilitaires avec Vitest


## **Exercice 1 – Fonction de moyenne**

### Enoncé

Créez une fonction `moyenne()` qui reçoit un tableau de nombres et retourne la moyenne arithmétique.
Si le tableau est vide, la fonction doit lever une erreur.

```js
// src/utils/moyenne.js
export function moyenne(values) {
  // à implémenter
}
```

### Attendus 

* Test de cas standard : `[10, 20, 30]` → `20`.
* Test de cas limite : un seul élément `[5]` → `5`.
* Test d’erreur : tableau vide → exception.


---

## **Exercice 2 – Fonction de capitalisation**

### Enoncé

Écrivez une fonction `capitalize()` qui met en majuscule la première lettre d’une chaîne.
Si l’entrée n’est pas une chaîne, elle doit lever une erreur.

```js
// src/utils/capitalize.js
export function capitalize(str) {
  // à implémenter
}
```

### Attendus

* `"bonjour"` → `"Bonjour"`
* `"rEact"` → `"REact"`
* `123` → erreur


---

## **Exercice 3 – Fonction de filtrage pair/impair**

### Enoncé

Créez une fonction `filtrerPairs()` qui renvoie uniquement les nombres pairs d’un tableau.
Si un élément n’est pas un nombre, il doit être ignoré.

### Attendus

* `[1, 2, 3, 4, 5]` → `[2, 4]`
* `[10, 'a', 15, 20]` → `[10, 20]`


---

## **Exercice 4 – Fonction de validation d’email (facultatif)**

### Enoncé

Créez une fonction `isValidEmail()` qui vérifie la validité d’un email à l’aide d’une expression régulière simple.

### Attendus

* `"test@example.com"` → `true`
* `"invalid@"` → `false`
* `""` → `false`



