/*= ASSEGNAZIONE =*/
scrivere una funzione contaElementi() che, dato un array in input, restituisca il numero di elementi presenti nell'array


/*= RAGIONIAMO UN PO =*/
Allora ovviamente non avrebbe senso utilizzare la length perchè risolverebbe da solo la funzione senza richiedere un ragionamento

Potrei usare il array[i] per accedere alle posizioni e bloccarmi quando non trovo nulla ma potrei essere soggetto a problemi qualora lo spazio in memora immediatamente successivo non fosse vuoto

Ho controllato con Christian e questa eccezione viene gestita autonomamento da javascript quindi procedo ad utilizzare le [] per accedere ai valori

Rimane da pensare al fatto che per ora darò per scontato che non ci siano valori undefined nell'array di input altrimenti la logica del mio codice cade

/*= ESECUZIONE =*/
definisco un funzione riccardosLength() che abbia come parametro un array chiamato inputArray

creo una variabile risultato e la pongo = 0

fintanto che il valore dell'inputArray nella posizione risultato sia diverso da undefined

    incremento la variabile risultato di 1

restituisco il valore di result