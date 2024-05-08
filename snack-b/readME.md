/*= ASSEGNAZIONE =*/
scrivere una funzione trovaIndice() che, dati un array e un elemento in input, restituisca la posizione in cui si trova l'elemento all'interno dell'array; se l'elemento non è presente nell'array, allora la funzione deve restituire -1

/*= RAGIONIAMO UN PO =*/
allora la soluzione più semplice che mi viene in mente è quella di incrementare un contatore con step di 1
ad ogni step accedere al valore contenuto nell'array e controllare se corrisponde all'elemento da controllare

così facendo però escludo la possibilità di trovare la posizione per elementi successivi
decido quindi che creerò un parametro che di default sarà false chiamato allOccurencies = false
nel caso in cui allOccurrencies sia true restituisco un array di posizioni se è presente più di una volta altrimenti restituisco -1 se non è presente


/*= ESECUZIONE =*/
importo la funzione riccardosLength dallo snack-a

definisco la funzione trovaIndice(inputArray, inputElement, allOccurencies = false)
    se allOccurencies è vero
        definisco un array vuoto chiamato indexes 
        definisco una variabile currentIndex = 0

    definisco una variabile counter = 0

    fino a che counter il contatore è minore della lunghezza dell' inputArray
        controllo se l'elemento in posizione counter corrisponde a inputElement
            se corrisponde e allOccurencies è false
                restituisco il valore del contatore

            se corrisponde e allOccurencies è vero
                aggiungo ad indexes in posizione currentIndex il valore del contatore
                incremento currentIndex di 1
    


    alla fine
    se allOccurencies è vero
        se currentIndex è uguale a 0
            restituisco -1
        sennò restituisco 
            indexes
    altrimenti resituisco -1

    // PICCOLA NOTA //
        in questa ultima parte di codice avrei potuto semplificare il tutto utilizzando un solo if
        ovvero se allOccurrencis è vero e currentIndex è diverso da 0 restituisco indexes 
        mentre in tutti gli altri casi restituisco -1

        ma manterrò la versione estesa in quanto credo porti ad una maggiore leggibilità del codice
    // FINE PICCOLA NOTA //


    
