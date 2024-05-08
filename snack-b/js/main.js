"use strict"


// importo la funzione riccardosLength dallo snack-a
function riccardosLength(inputArray){
    // creo una variabile risultato e la pongo = 0
    let result = 0;
    // fintanto che il valore dell'inputArray nella posizione risultato sia diverso da undefined
    while (inputArray[result] !== undefined){
        // incremento la variabile risultato di 1
        result += 1
    }
    // restituisco il valore di result
    return result
}


// definisco la funzione trovaIndice(inputArray, inputElement, allOccurencies = false)
function trovaIndice(inputArray, inputElement, allOccurencies = false){
    // definisco un array vuoto chiamato indexes
    const indexes = []
    // definisco una variabile currentIndex = 0
    let currentIndex = 0;

    // definisco una variabile counter = 0
    let counter = 0

    // fino a che counter il contatore è minore della lunghezza dell' inputArray
    while (counter < riccardosLength(inputArray)){
        // controllo se l'elemento in posizione counter corrisponde a inputElement
        if (inputArray[counter] === inputElement){
            // se corrisponde e allOccurencies è false
            if(allOccurencies === false){
                // restituisco il valore del contatore
                return counter;
            }
            // se corrisponde e allOccurencies è vero (potrei evitare di usare un else ma lo mantengo per leggibilità del codice)
            else{
                // aggiungo ad indexes in posizione currentIndex il valore del contatore
                indexes[currentIndex] = counter;
                // incremento currentIndex di 1
                currentIndex++;
            }
        }
        counter += 1
    }
    // se allOccurencies è vero
    if (allOccurencies === true){
        // se currentIndex è uguale a 0
        if(currentIndex === 0){
            // restituisco -1
            return -1;
        }
        else{
            // sennò restituisco indexes 
            return indexes;
        }
    }
    // altrimenti resituisco -1
    else {
        return -1;
    }

}

console.log(trovaIndice([1,2,3,4,2,6,7,2,9], 9, true))