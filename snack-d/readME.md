**ASSEGNAZIONE**
scrivere una funzione rimuoviDallaCoda() che, dato un array A in input, restituisca un nuovo array B, con tutti gli elementi dell'array A, tranne l'ultimo


**RAGIONIAMO UN PO**
allora la logica alla base penso sia semplice 
- andrà creato un nuovo array vuoto a cui aggiungo scorrendoli con un ciclo 1 a 1 tutti gli elementi tranne l'ultimo

voglio però fare qualcosa di ancora più riutilizzabile, visto che l'esercizio e richiede la stessa cosa ma al contrario potrebbe essere interessante creare una funzione che prende in input 1 array e 2 interi (start, stop) e restituisca un array contenente solo gli elementi presenti nel range start(incluso) stop(escluso)

chiamerò poi questa funzione nella mia funzione rimuoviDallaCoda passando A,0,riccardosLength(A) in input
[riccardosLength di A è stata definita nello snack-a]

**ESECUZIONE**
importo riccardosLength dallo snack-a

definisco una funzione clonePieceOfArray(inputArray, start, stop)

    creo una costante result e la inizializzo ad array vuoto []

    creo un ciclo for per valori di i che partono da start e che siano minori di stop con step di 1

        aggiungo a result in posizione i-start il valore di inputArray in posizione i
    
    restituisco l'array contenuto in result

definisco una funzione rimuoviDallaCoda(inputArray)
    invoco e restituisco la funzione clonePieceOfArray(inputArray, 0, riccardosLength(inputArray)-1)
