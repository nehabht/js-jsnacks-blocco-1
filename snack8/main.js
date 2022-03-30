// SNACK 8
// chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero



// prendi le 4 cifre
let user_4digits = prompt("inserisci un numero a 4 cifre")


// definisci una variabile per contenere il for loop
total_sum = 0


if (user_4digits.length > 4){
    alert("metti 4 numeri")
}

for (i = 0; i < user_4digits.length; i++){

    // parse ritorna il primo numero
    total_sum+= parseInt(user_4digits[i]);

}

console.log(total_sum)


