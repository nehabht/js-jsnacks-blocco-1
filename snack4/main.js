
// // SNACK 4
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


const ospiti = prompt("nome?")

const invitati = ["gatsby", "mark", "eleonora", "sun"]

let puo_entrare;

for (let i = 0; i < invitati.length; i++){

    if (invitati[i] === ospiti){
        puo_entrare = true
        
    }
    
}


if (puo_entrare){
    alert("entra alla festa");
} else {
    alert("non puoi entrare alla festa")
}