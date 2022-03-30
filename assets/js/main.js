// SNACK 1 
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.


// const first_number = prompt("inserisci il primo numero")

// const second_number = prompt("inserisci il secondo numero")

// console.log(first_number)
// console.log(second_number)

// if (first_number > second_number){
//     console.log(`il primo vince: ${first_number}`);
// }else if (first_number < second_number){
//     console.log(`il secondo vince: ${second_number}`);
// }else {
//     console.log("pareggio riprova!")
// }


// _______________SNACK 2 
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


const first_word = prompt("inserisci una parola")

const second_word = prompt("inserisci una seconda parola")

console.log(first_word)
console.log(second_word)

if (first_word.length > second_word.length){
    console.log(`${second_word} è una parola più corta di ${first_word}`);
} else if (first_word.length < second_word.length){
    console.log(`${first_word} è una parola più corta di ${second_word}`)
}else {
    console.log("le due parole hanno lo stesso numero di caratteri")
}
