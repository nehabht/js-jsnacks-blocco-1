// SNACK 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.


const lista_numeri = []
sum = 0



for (let i = 0; i < 10; i++){
    const ask_number = Number(prompt("inserisci un numero"));
    lista_numeri.push(ask_number);
    sum += lista_numeri[i]
    
}

console.log(sum)

