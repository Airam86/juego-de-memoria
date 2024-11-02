// cada elemento de la tabla necesita un valor

const allSquares =  document.querySelectorAll(".square")
console.log(allSquares);

class Card {
    constructor(value, element){
        this.value = value
        this.element = element
    }
}


//generacion de numeros aleatorios
let values = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

let cards = [];

allSquares.forEach((ditto)=>{


    const randomIndex = Math.floor(Math.random() * values.length)
    const randomValue = values[randomIndex];
    cards.push(new Card(randomValue, ditto));
    values.splice(randomIndex, 1)


})
console.log(cards);


//apuntando a documento HTML

let showMoves = document.getElementById('movimientos');
let showMatches = document.getElementById('aciertos');
let showTime = document.getElementById('t-restante');


//declaracion de variables

let timer = false;
let flippedCards = 0;
let card1 = null;
let card2 = null;
let secondResult = null;
let firstResult = null;
let moves = 0;
let matches = 0;
let counter = 30;
let timeDown = null;
let initialCounter = 30;