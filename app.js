// Objectif: Reproduire un générateur de punchlines "Chuck Norris"

// Consignes:
// - Dans un tableau, stocker au moins 10 punchlines de Chuck Norris
// - A chaque click du bouton
// o générer une couleur aléatoire 
// o récupérer aléatoirement une des punchlines
// o Afficher la nouvelle phrase
// o Remplacer l'ancienne couleur du texte/bouton/arrière-plan par la nouvelle

// A rendre: lien git du projet

// Chuck Norris a réussi à trouver la page 404. 
// Parmi les accessoires du couteau suisse de Chuck Norris, il y a Mac Gyver. 
// Un jour, Chuck Norris a fait la blague « j'ai volé ton nez » à Mickael Jackson. 
// Un aigle peut lire un journal à 1400 mètres de distance. Chuck Norris peut tourner la page.
// Lorsque Chuck Norris fait l'amour à sa femme, la voisine jouit aussi.
// Quand Chuck Norris entre dans la cuisine, Brian sort.
// Si Chuck Norris avait été dans « Lost », il aurait ramené l'île à la rame, jusqu'au Texas. 
// Chuck Norris peut faire travailler un fonctionnaire.
// Chuck Norris peut se souvenir du futur.
// Quand Chuck Norris viole la loi, elle en redemande. 


var jokes =[
    "Chuck Norris a réussi à trouver la page 404.",
    "Parmi les accessoires du couteau suisse de Chuck Norris, il y a Mac Gyver. ",
    "Un jour, Chuck Norris a fait la blague « j'ai volé ton nez » à Mickael Jackson. ",
    "Un aigle peut lire un journal à 1400 mètres de distance. Chuck Norris peut tourner la page.",
    "Lorsque Chuck Norris fait l'amour à sa femme, la voisine jouit aussi.",
    "Quand Chuck Norris entre dans la cuisine, Brian sort.",
    "Si Chuck Norris avait été dans « Lost », il aurait ramené l'île à la rame, jusqu'au Texas.",
    "Chuck Norris peut faire travailler un fonctionnaire.",
    "Chuck Norris peut se souvenir du futur.",
    "Quand Chuck Norris viole la loi, elle en redemande. ",
]


function getJokes() {
    const randomJoke = Math.floor(Math.random() * jokes.length) ;
    document.querySelector("#newJoke").innerHTML = jokes[randomJoke];

  }

  getJokes();

  function random_backgroundColor() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(backgroundColor);
  
    document.body.style.background = backgroundColor;
    }

random_backgroundColor();

const button = document.querySelector("#button");
button.addEventListener("click", random_backgroundColor);
button.addEventListener("click", getJokes);