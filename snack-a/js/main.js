"use strict"

// definisco un funzione riccardosLength() che abbia come parametro un array chiamato inputArray
function riccardosLength(inputArray){
    // creo una variabile risultato e la pongo = 0
    let result = 0;
    // fintanto che il valore dell'inputArray nella posizione risultato sia diverso da undefined
    while (inputArray.at(result) !== undefined){
        // incremento la variabile risultato di 1
        result += 1
    }
    // restituisco il valore di result
    console.log(result)
}

riccardosLength([])


