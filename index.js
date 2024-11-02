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
let aciertos = 0;
let counter = 30;
let timeDown = null;


//funcnion contador de tiempo

function contarTiempo(){
    timeDown = setInterval(()=>{
counter--;
showTime.innerHTML = `Tiempo: ${counter} segundos`;
  if(counter == 0){
   clearInterval(timeDown);
   blockcards();
   alert('GAME OVER! try again!')
  }
 },1000);
}

function blockcards(){
    for(let i = 0; i <= 15; i++){
        let blockedcards = document.getElementById(i);
        blockcards.innerHTML = values[i]
        blockcards.disabled = true;
    }
}





//funcion principal 

function reveal(id){
    if( timer == false){
     contarTiempo();
    timer = true;
 }
    flippedCards++;

    if(flippedCards == 1){
        //mostrar primer numero
        card1 = document.getElementById(id);
        firstResult = cards[id].value;
        card1.innerHTML = firstResult;
        
        //deshabilitar primer boton

        card1.disabled = true;

    }else if(flippedCards == 2){
        //mostrar segundo numero
        card2 = document.getElementById(id);
        secondResult = cards[id].value;
        card2.innerHTML = secondResult;
        

        //deshabilitar segundo boton

        card2.disabled = true;


        //incrementar movimientos

        moves++;
        showMoves.innerHTML = `Movimientos: ${moves}`;



        if(firstResult == secondResult){
         flippedCards = 0;
         
         //incrementar aciertos
         
         aciertos++;
         showMatches.innerHTML = `Aciertos: ${aciertos}`;

         if(aciertos == 8){
            showMatches.innerHTML = `Aciertos: ${aciertos} 😎`;
            showMoves.innerHTML = `Movimientos: ${moves} `;
           

         }
         }else {
            setTimeout(()=>{
                card1.innerHTML = ' ';
                card2.innerHTML = ' ';
                card1.disabled = false;
                card2.disabled = false;
                flippedCards = 0;
            },500);
        }
    }
}