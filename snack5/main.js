
// SNACK 5
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

const lista_numeri = []

let numero_da_aggiungere;



// console.log(lista_numeri)

for (let i = 0; i < 6; i++ ){
    numero_da_aggiungere = prompt("inserisci un numero")
    console.log(lista_numeri)

    if (numero_da_aggiungere % 2 === 0){
        console.log("pari");
    }else {
        
        lista_numeri.push(`${numero_da_aggiungere}`)
    }


} 