// -----------------------------
// Fonctions de manipulation de chaînes
// -----------------------------

// 1. Inverser une chaîne
// Cette fonction prend une chaîne de caractères en entrée,
// puis la transforme en tableau de caractères avec split(''),
// inverse l'ordre avec reverse(), puis recompose la chaîne avec join('')
function inverserChaine(str) {
  return str.split('').reverse().join('');
}

// 2. Compter les caractères
// Cette fonction retourne la longueur de la chaîne, c’est-à-dire
// le nombre total de caractères qu’elle contient
function compterCaracteres(str) {
  return str.length;
}

// 3. Mettre les mots en majuscule (première lettre de chaque mot)
// Cette fonction découpe la phrase en mots, met en majuscule
// la première lettre de chaque mot, puis recompose la phrase
function majusculePremiereLettre(phrase) {
  return phrase
    .split(' ')                             // Sépare la phrase en mots
    .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))  // Majuscule 1ère lettre + reste du mot
    .join(' ');                            // Recolle les mots avec un espace
}

// -----------------------------
// Fonctions du tableau
// -----------------------------

// 4. Trouver le maximum dans un tableau
// Utilise Math.max et l’opérateur spread (...) pour
// extraire le plus grand nombre d’un tableau
function trouverMax(tableau) {
  return Math.max(...tableau);
}

// 5. Trouver le minimum dans un tableau
// Pareil que pour le maximum, mais avec Math.min
function trouverMin(tableau) {
  return Math.min(...tableau);
}

// 6. Somme des éléments d'un tableau
// Utilise reduce() pour additionner tous les nombres du tableau
function sommeTableau(tableau) {
  return tableau.reduce((acc, val) => acc + val, 0);
}

// 7. Filtrer les nombres pairs d'un tableau (exemple de filtre)
// Renvoie un nouveau tableau ne contenant que les nombres pairs
function filtrerPairs(tableau) {
  return tableau.filter(nombre => nombre % 2 === 0);
}

// -----------------------------
// Fonctions mathématiques
// -----------------------------

// 8. Calculer la factorielle d'un nombre
// La factorielle de n est le produit de tous les entiers de 1 à n
// Exemple : 5! = 5*4*3*2*1 = 120
function factorielle(n) {
  if (n === 0) return 1;  // Par définition 0! = 1
  let resultat = 1;
  for (let i = 1; i <= n; i++) {
    resultat *= i;       // Multiplie resultat par i à chaque boucle
  }
  return resultat;
}

// 9. Vérifier si un nombre est premier
// Un nombre premier est un entier >1 divisible seulement par 1 et lui-même
// On teste ici si n est divisible par un nombre entre 2 et racine carrée de n
function estPremier(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;  // Divisible => pas premier
  }
  return true;  // Sinon c’est premier
}

// 10. Générer la suite de Fibonacci jusqu'à n termes
// La suite commence par 0, 1, et chaque terme suivant est la somme des deux précédents
function fibonacci(n) {
  let suite = [0, 1];
  for (let i = 2; i < n; i++) {
    suite.push(suite[i - 1] + suite[i - 2]);  // Somme des 2 derniers termes
  }
  return suite.slice(0, n);  // Retourne la suite tronquée à n termes
}