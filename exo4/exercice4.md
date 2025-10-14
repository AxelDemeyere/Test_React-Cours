# Exercice — Tests asynchrones : Recherche d’utilisateur

## sujet

Mettre en œuvre un test asynchrone complet sur un composant React simulant la recherche d’un utilisateur.  
L’objectif est de vérifier le comportement du composant à chaque étape :  
1. Affichage du message de chargement.  
2. Apparition des données après une requête réussie.  
3. Affichage d’un message d’erreur en cas d’échec.



### Description fonctionnelle
Créer un composant `UserSearch` qui :
- Affiche un champ texte pour saisir un nom d’utilisateur et un bouton “Rechercher”.
- Lors du clic sur le bouton :
  - Affiche le texte “Chargement…” pendant la requête.
  - Appelle `fetch('https://api.example.com/user/' + username)` (simulé).
  - Si la requête réussit : affiche “Utilisateur trouvé : <nom>”.
  - Si la requête échoue : affiche “Utilisateur introuvable”.



### Comportement attendu
1. **Avant toute action :** seul le champ et le bouton sont visibles.  
2. **Après clic sur “Rechercher” :**
   - “Chargement…” s’affiche immédiatement.  
   - Le message disparaît à la fin de la requête.  
3. **Cas de succès :**  
   - Le nom de l’utilisateur s’affiche correctement.  
4. **Cas d’échec :**  
   - Le message d’erreur “Utilisateur introuvable” s’affiche.  

