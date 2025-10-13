# Exercices

## Tests de composants React avec React Testing Library


## **Exercice 1 – Bouton compteur**

### Enoncé

Créez un composant `CounterButton` :

* Il affiche un texte « Compteur : X ».
* Un clic sur le bouton incrémente la valeur.

```jsx
// src/components/CounterButton.jsx
export function CounterButton() {
  // à compléter
}
```

### Attendus

* Le compteur démarre à 0.
* Chaque clic sur le bouton incrémente la valeur de 1.


---

## **Exercice 2 – Affichage conditionnel**

### Enoncé

Créez un composant `ToggleMessage` :

* Il contient un bouton « Afficher / Cacher ».
* Quand on clique, il affiche ou masque un paragraphe de texte.

```jsx
// src/components/ToggleMessage.jsx
export function ToggleMessage() {
  // à compléter
}
```

### Attendus

* Au départ, le message n’est pas affiché.
* Après un clic, le message apparaît.
* Après un second clic, le message disparaît.


---

## **Exercice 3 – Prop et rendu dynamique**

### Enoncé

Créez un composant `Greeting` qui reçoit une prop `name`.

* Il affiche « Bonjour, [nom] ».
* Si aucun nom n’est fourni, il affiche « Bonjour, invité ».

```jsx
// src/components/Greeting.jsx
export function Greeting({ name }) {
  // à compléter
}
```

### Attendus

* `<Greeting name="React" />` → affiche « Bonjour, React ».
* `<Greeting />` → affiche « Bonjour, invité ».


---

## **Exercice 4 – Test de callback (avancé)**

### Enoncé

Créez un composant `ButtonWithCallback` :

* Il reçoit une prop `onClick`.
* Quand on clique, cette fonction est appelée.

```jsx
// src/components/ButtonWithCallback.jsx
export function ButtonWithCallback({ onClick }) {
  // à compléter
}
```

### Attendus

* Le bouton appelle la fonction passée en prop.
* Vérifiez le nombre d’appels avec `vi.fn()`.



