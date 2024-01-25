# Projet HRNet en React

Bienvenue sur le projet de conversion de HRNet en React. Ce README vous guidera à travers les principales tâches à accomplir.

## Tâches

1. Convertir l'ensemble du projet HRNet en React.
2. Convertir l'un des quatre plugins jQuery actuels en React.
3. Remplacer les 3 plugins jQuery restants par des composants React.
4. Effectuer des tests de performance Lighthouse en comparant l'ancienne et la nouvelle application.

## Technologies utilisées

Ce projet utilise une variété de technologies pour atteindre ses objectifs. Voici une liste des principales technologies utilisées :

- **Next.js** : Un framework React pour la production. Il donne la possibilité de faire du rendu côté serveur et génère des sites statiques pour les applications React.
- **Zustand** : Une petite bibliothèque de gestion d'état pour React.
- **Tailwind CSS** : Un framework CSS utilitaire pour créer rapidement des designs personnalisés.
- **React Modal** : Un composant modal accessible et réactif.
- **React Select** : Un composant select flexible et personnalisable pour React.
- **Custom react table** : Un composant de table de données interactives pour React ([repo](https://github.com/Warrios974/custom-react-table)).
- **Date Picker** : Un composant pour sélectionner une date à partir d'un calendrier interactif.

Chaque technologie a été choisie pour sa robustesse, sa flexibilité et sa facilité d'utilisation, afin de rendre l'application aussi efficace et maintenable que possible.

## Installation

Pour installer et exécuter ce projet, suivez les étapes suivantes :

1. Clonez le dépôt :

```shell
git clone https://github.com/Warrios974/hrnet.git
```

2. Accédez au dossier du projet :

```shell
cd nom_du_projet
```

3. Installez les dépendances :

```shell
npm install
```

4. Lancez le projet :

```shell
npm run dev
```

Cela lancera l'application en mode développement. Ouvrez [http://localhost:3000](http://localhost:3000) pour la voir dans le navigateur. La page se rechargera si vous faites des modifications. Vous verrez également les éventuelles erreurs lint dans la console.

## Utilisation

Après avoir installé et lancé le projet, vous pouvez accéder à l'application via votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000).

### Pages

L'application contient les pages suivantes :

- **Create Employee** : Sur cette page, vous pouvez créer un nouvel employé en remplissant le formulaire et en cliquant sur le bouton "Submit".
- **Employee List** : Cette page affiche une liste de tous les employés. Vous pouvez cliquer sur un employé pour voir plus de détails, qui utilise la librairie Custom react table que j'ai créé.

```shell
  ├── Home
  ├── Create Employee
  └── Employee List
```

### Gestion d'état

L'application utilise Zustand pour la gestion d'état. Zustand est une petite bibliothèque de gestion d'état pour React qui offre une API simple et intuitive.

#### Users Store

Nous avons un store `users` qui gère l'état des utilisateurs dans l'application. Voici un aperçu de ce que contient ce store :

- **users** : Un tableau qui contient les informations de tous les utilisateurs. Chaque utilisateur est un objet qui contient des champs tels que `id`, `firstName`, `lastName`, `dateOfBirth`, `startDate`, `streetAddress`, `cityAddress`, `stateAddress`, `zipCodeAddress`, et `departement`.
- **addUser(user)** : Une fonction qui permet d'ajouter un nouvel utilisateur au tableau `users`.

```javascript
import { create } from "zustand";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  streetAddress: string;
  cityAddress: string;
  stateAddress: string;
  zipCodeAddress: string;
  department: string;
};

type Store = {
  users: User[] | [];
  addUser: (user: User) => void;
};

export const useEmployeeStore = create<Store>()((set) => ({
  users: [],
  addUser: (newUser: User) =>
    set((state) => ({ users: [...state.users, newUser] })),
}));
```
