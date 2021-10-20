/**
 * Consegna
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento
 */


//1 voglio creare all'intereno del mio .box-container una serie di quadrati


//seleziono gli elementi che mi interessano
//contenitore per il gioco
const boxContainer = document.getElementById('box-container');
//play
const btnPlay = document.getElementById('btn-play');
//difficolta
const selectDifficult = document.getElementById('select-difficult');

console.log('btnPlay');

btnPlay.addEventListener("click", function () {
    // l'utente sceglie il livello
    const level = selectDifficult.value;

  //recupero il numero di celle che bisogna creare
    const totalCell = getCellNum(level);

  //invoco il numero di celle da creare
    generateGrid(totalCell);

    console.log("l'utente ha scelto il livello", level);      //stampo la scelta dell'utente
    console.log(`dovranno essere create ${totalCell} celle.`) //stampo il numero di celle da creare
});


function getCellNum(level){
  let result;

  switch (parseInt(level)){
    case 1: 
    result = 100;

    break;
    case 2: 
    result = 81;

    break;
    case 3: 
    result = 49;
      break;

  }
  return result;
}

//la funzione mi crea il numero di celle 
//in base alla scelta della difficolta

function generateGrid(cellNumber){

//cosi rigenero sempre il contenuto del box container
  boxContainer.innerHTML = '';
  
//per calcolare larghezza e altezza delle celle
  const perRowCells = Math.sqrt(cellNumber);
  const cellSize = 100 / perRowCells;

  //creo le celle
  for (let i = 0; i < cellNumber; i++) {

    //creo una singola cella
   const cell = `<div class='cella' style='width:${cellSize}%; height ${cellSize}% '></div>`;

   //aggiungo la cella al contenitore
   boxContainer.innerHTML += cell;
    
  }

}