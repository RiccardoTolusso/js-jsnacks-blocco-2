// importo la funzione riccardosLength dallo snack-a
function riccardosLength(inputArray){
    // creo una variabile risultato e la pongo = 0
    let result = 0;
    // fintanto che il valore dell'inputArray nella posizione risultato sia diverso da undefined
    while (inputArray[result] !== undefined){
        // incremento la variabile risultato di 1
        result += 1;
    }
    // restituisco il valore di result
    return result
}


// definisco la funzione stampa(inputArray)
function stampa(inputArray){
    //     definisco una costante inputArrayLength che corrisponde alla lunghezza dell'Array
    const inputArrayLength = riccardosLength(inputArray);

    //     definisco una variabile result e la inizializzo a stringa vuota
    let result = "";

    //     se inputArrayLength è uguale a 0 
    if (inputArrayLength === 0){
        //         faccio un return
        return
    }
    
    //     creo un ciclo for per iterare tra gli elementi dell'array
    for(let i=0; i < inputArrayLength; i++){
        //         se l'elemento dell'array NON è null o undefined
        if(inputArray[i] != null){
            //             se result è diverso da una stringa vuota 
            if (result !== ""){
                //                 concateno a result una virgola
                result += ","
            }
            //             concateno a result il valore dell'elemento.toString()
            result += inputArray[i].toString()
        }
    }
    //     restituisco result
    return result
}

console.log(stampa([{'a':1},{},{},2,'ciao']))


    

