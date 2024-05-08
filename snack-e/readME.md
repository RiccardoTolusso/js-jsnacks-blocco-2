**ASSEGNAZIONE**
scrivere una funzione rimuoviDallaTesta() che, dato un array A in input, restituisca un nuovo array B, con tutti gli elementi dell'array A, tranne quello in prima posizione



**RAGIONIAMO UN PO**
avendo creato lo snack-d per poter essere estremamente riutilizzabile riciclo la funzione clonePieceOfArray
ora mi basta passare in input alla funzione i valori dell'Array di partenza, 1 e la lunghezza totale dell'array




**ESECUZIONE**
importo riccardosLength() da snack-a

importo clonePieceOfArray() da snack-d

definisco la funzione rimuoviDallaTesta(inputArray)
    restituisco l'array generato da clonePieceOfArray(inputArray, 1, riccardosLength(inputArray))
