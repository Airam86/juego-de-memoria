//funcnion contador de tiempo

function contarTiempo(){
    timeDown = setInterval(()=>{
    counter--;
    showTime.innerHTML = `Tiempo: ${counter} segundos`;
     if(counter == 0){
      clearInterval(timeDown);
      blockcards();
      alert('Game Over! Inténtalo de nuevo.');
     }
    },1000);
   }
   
   
   //funcion bloquear cartas
   
   function blockcards(){
   
       cards.forEach((card)=>{
           card.element.innerHTML = card.value
           card.element.disabled = true
       })
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
            
            //aumentar aciertos
            
            matches++;
            showMatches.innerHTML = `Aciertos: ${matches}`;
   
            if(matches == 8){
               clearInterval(timeDown);
               showMatches.innerHTML = `Aciertos: ${matches} 🥳`;
               showMoves.innerHTML = `Movimientos: ${moves} 😎👍🏻`;
               showTime.innerHTML = `Solo tardaste ${initialCounter - counter} segundos 💪🏻`
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