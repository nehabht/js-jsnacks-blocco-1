// SNACK 3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti. (con ciclo while)



const lista_numeri = []
sum = 0



let i = 0

while (i<10){
    const ask_number = Number(prompt("inserisci un numero"));
    lista_numeri.push(ask_number);
    sum += lista_numeri[i]

    i++

}

console.log(sum)