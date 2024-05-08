**ASSEGNAZIONE**
scrivere una funzione inserisciInTesta() che, dati un array A e un elemento E in input, resituisca un nuovo array B, con E in prima posizione e a seguire tutti gli elementi di A



**RAGIONIAMO UN PO**
fino ad ora ho sempre generato un array vuoto in cui inserire la variabile 
ora per rendere le cose un po più interessanti ho deciso che proverò a non utilizzare nessuna delle funzioni scritte negli altri snack
e a non definire nuovi array oltre a quello che ricevo come input

come nello snack a do per assunto che nessuno dei valori nell'array sia undefined


**ESECUZIONE**
A = ['a', 'b', 'c']
E = 'c'
T = 'd'
definisco una funzione inserisciInTesta(inputArray, ElementToAdd)
    definisco una variabile tempValueKeeper

    definisco una costante cont 
    creo un ciclo while che continui fino a che inputArray[cont] sia diverso da undefined
        salvo il valore attualmente presente in inputArray[cont] dentro tempValuekeeper
    
    inserisco in inputArray[cont] il valore presente in tempValueKeeper

    restituisco inputArray