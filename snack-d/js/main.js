"use strict"
// importo riccardosLength dallo snack-a
function riccardosLength(inputArray){
    // creo una variabile risultato e la pongo = 0
    let result = 0;
    // fintanto che il valore dell'inputArray nella posizione risultato sia diverso da undefined
    while (inputArray[result] !== undefined){
        // incremento la variabile risultato di 1
        result += 1
    }
    // restituisco il valore di result
    return result;
}

// definisco una funzione clonePieceOfArray(inputArray, start, stop)
function clonePieceOfArray(inputArray, start, stop){
    // creo una costante result e la inizializzo ad array vuoto []
    const result = [];

    // creo un ciclo for per valori di i che partono da start e che siano minori di stop con step di 1
    for (let i = start; i < stop; i++){
        // aggiungo a result in posizione i-start il valore di inputArray in posizione i
        result[i-start] = inputArray[i];
    }
    //     restituisco l'array contenuto in result
    return result
}

// definisco una funzione rimuoviDallaCoda(inputArray)
function rimuoviDallaCoda(inputArray){
    return(clonePieceOfArray(inputArray, 0, riccardosLength(inputArray)-1))
}
console.log(rimuoviDallaCoda(['a','b','c','d']))

    

//     invoco e restituisco la funzione clonePieceOfArray(inputArray, 0, riccardosLength(inputArray)-1)
