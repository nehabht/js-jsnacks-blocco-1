// SNACK 1 
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.


const first_number = prompt("inserisci il primo numero")

const second_number = prompt("inserisci il secondo numero")

console.log(first_number)
console.log(second_number)

if (first_number > second_number){
    console.log(`il primo vince: ${first_number}`);
}else if (first_number < second_number){
    console.log(`il secondo vince: ${second_number}`);
}else {
    console.log("pareggio riprova!")
}