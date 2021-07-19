/* On te donne 2 angles d'un triangle.
écris la fonction qui permet de récupérer la valeur du 3e angle.
(Pour rappel, la somme des 3 angles d'un triangle est toujours égale à 180)
Exemple :
thirdAngle(90, 30) doit renvoyer 60
thirdAngle(20, 80) doit renvoyer 80
*/

function thirdAngle(a, b) {
    let result = 180 - (a+b);
    return result;
}
console.log(thirdAngle(90,30)); // retourne 60
console.log(thirdAngle(20,80)); // retourne 80







/*
Tu dois écrire une fonction permettant de déterminer si une année est bissextile.
Elle renverra true si l'année passée en paramêtre est bissextile et false si ce n'est pas le cas.
Pour rappel, une année est bissextile:
 - si elle est divisible par 4 sans être divisible par 100,
 ou
 - si elle est divisible par 400.
Les années 2004, 2016 et 2020 sont bissextiles.
Autre rappel: Tu dois utiliser l'opérateur modulo (%) pour vérifier si un nombre est divisible par un autre.
*/

function isLeapYear(year) {
  if ((year %4 === 0 && year % 100 > 0)||(year % 400 === 0)) {
    console.log("true");
  } else {
    console.log("false");
  }
}
console.log(isLeapYear(2004)); // retourne "true"
console.log(isLeapYear(2021)); // retourne "false"










/*
Un employé de théatre voudrait afficher la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"
Au final la liste devra ressembler à : 
1-1 
1-2
1-3
.
.
.
26-98
26-99
26-100
*/

function theaterSieges() {
}
  
console.log(theaterSieges());










/*
Voici un tableau de personnes.
Tu dois écire le code de la fonction findAdult, qui renvoie un
nouveau tableau avec 2 tableaux à l'intérieur: 
- Le premier avec uniquement les femmes adultes.
- Le deuxième avec uniquement les hommes adultes.
(Compte tenu qu'on est adulte à 18 ans)
Exemple : output [ [femmes adultes], [hommes adultes] ]
*/
const persons = [
    { name: 'Mary Poppins', age: 32, sex: 'female' },
    { name: 'Tony Stark', age: 36, sex: 'male' },
    { name: 'John Doe', age: 12, sex: 'male' },
    { name: 'Jane Doe', age: 6, sex: 'female' },
    { name: 'Maggie Simpson', age: 2, sex: 'female' },
    { name: 'Leonardo', age: 92, sex: 'male' },
    { name: 'Carla Moreau', age: 24, sex: 'female' },
    { name: 'Mickael Jackson', age: 17, sex: 'male' },
    { name: 'Penelope Milena', age: 27, sex: 'female' },
    { name: 'Homer Simpson', age: 45, sex: 'male' },
    { name: 'Leonardo Di Caprio', age: 42, sex: 'male' },
    { name: 'Carla Bruni', age: 54, sex: 'female' },
    { name: 'Lisa Simpson', age: 13, sex: 'female' },
    { name: 'Millie Bobby Brown', age: 15, sex: 'female' },
    { name: 'Penelope Cruz', age: 47, sex: 'female' },
  ];
  
  function findAdults(arr) {

    let adultFemale = []; // Tableau vide female
    let adultMale = []; // Tableau vide Male

      for(let i = 0; i< persons.length; i++){

        if(persons[i].age >= 18 && persons[i].sex =="female"){ //
        adultFemale.push(persons[i].name); // Ajoute au tableau vide les noms qui remplissent les 2 conditions
        console.log(adultFemale); // Affiche 5 femmes

        }else if(persons[i].age >=18 && persons[i].sex =="male"){
        adultMale.push(persons[i].name);
        console.log(adultMale); // Affiche 4 hommes
        }
      }
    }
    console.log(findAdults(persons)); //Permet de vérifier si la fonction marche correctement
    
















  /* Notre équipe de football participe à un championnat
dans laquelle elle a joué 13 matchs.
Le résultat d'un match est comme suit : "3-0"
Le premier chiffre correspond au nombre de but que notre équipe a marqué.
Le deuxième correspond au nombre de but que notre adversaire a marqué.
Victoire : +3 points
Match nul : +1 points
Défaite : +0 point
Ci-dessous, tu as un tableau avec tous les résultats de notre équipe,
qui te permet de tester si ta fonction est bonne. Le résultat doit être 10
écris la fonction qui nous permet de récupérer le nombre
de points de notre équipe à la fin du championnat
*/

const scores = ['1:0', '2:0', '3:0', '4:4', '2:2', '3:3', '1:4', '2:3', '2:4', '3:3'];

function getPoints(array) {
  // Your code here !
}












/*
écris une fonction, qui prend deux paramètres.
Ces deux paramètres sont des arrays de string numbers.
Ta fonction doit renvoyer un seul array avec la somme des
éléments correspondants en string.
Si l'un des deux éléments est vide, il doit être considéré comme 0.
Exemple :
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) doit renvoyer ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) doit renvoyer ["4", "11", "12", "8", "2"]
*/

function sumArr(arrayA, arrayB) {
    // Your code here !
  }