// definisco una funzione inserisciInTesta(inputArray, ElementToAdd)
function inserisciInTesta(inputArray, ElementToAdd){
    // definisco una variabile tempValueKeeper
    let tempValueKeeper

    // definisco una variabile cont 
    let cont = 0
    // creo un ciclo while che continui fino a che inputArray[cont] sia diverso da undefined
    while (inputArray[cont] !== undefined){
        // salvo il valore attualmente presente in inputArray[cont] dentro tempValuekeeper
        tempValueKeeper = inputArray[cont]
        // inserisco in inputArray[cont] il valore presente in ElementToAdd
        inputArray[cont] = ElementToAdd
        // inserisco in ElementToAdd il tempValueKeeper
        ElementToAdd = tempValueKeeper

        // incremento il contatore
        cont++
    } 
    // inserisco in inputArray[cont] il valore presente in ElementToAdd
    inputArray[cont] = ElementToAdd;

    // restituisco inputArray
    return inputArray
}

console.log(inserisciInTesta(['b', 'c', 'd'], 'a').toString())



