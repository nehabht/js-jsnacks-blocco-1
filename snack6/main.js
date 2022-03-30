
// SNACK 6
// stampa il cubo dei primi N numeri
// dove N è un numero indicato dall'utente


// Math.pow(base, exponent)


let user_n_number = Number(prompt("inserisci un numero"))

const numbers_beforeN = []



for (let i = 0; i < user_n_number; i++){

    numbers_beforeN.push(i)
    Math.pow(i, 3)
    console.log(Math.pow(i, 3))

}   
