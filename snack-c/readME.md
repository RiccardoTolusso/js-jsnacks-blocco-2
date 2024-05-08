/*= ASSEGNAZIONE =*/
scrivere una funzione stampa() che, dato un array in input, restituisca una stringa contenente tutti gli elementi dell'array, separati da una virgola



/*= RAGIONIAMO UN PO =*/
utilizzo la funzione riccardosLength per accedere alla lunghezza dell'array

se l'array è vuoto restituisco undefined

definisco una variabile result

creo un ciclo for per iterare gli elementi dell'array
per ogni elemento dell'array controllo che non sia null o undefined 
(questo perchè la documentazione dice che qualisasi elemento che non appartenga alla famiglia dei null possiede il metodo toString() ) 
e a quel punto utilizzando il metodo toString() lo trasformo in una stringa
ora concateno la stringa così ottenuta a result

restituisco il valore di result

/*= ESECUZIONE =*/
importo la funzione riccardosLength dallo snack a

definisco la funzione stampa(inputArray)
    definisco una costante inputArrayLength che corrisponde alla lunghezza dell'Array

    definisco una variabile result e la inizializzo a stringa vuota

    se inputArrayLength è uguale a 0 
        faccio un return
    
    creo un ciclo for per iterare tra gli elementi dell'array

        se l'elemento dell'array NON è null o undefined
            se result è diverso da una stringa vuota 
                concateno a result una virgola
            concateno a result il valore dell'elemento.toString()

    restituisco result