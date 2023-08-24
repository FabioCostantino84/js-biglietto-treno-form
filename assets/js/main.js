/* 
Descrizione:
 Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero 
Sulla base di queste informazioni dovrà 
calcolare il prezzo totale del biglietto di viaggio, 
secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

##tool
-prompt x2
-number
-let/const
-if/else
-console log
*/

// seleziono l'input usando l'id
const userDistance = document.getElementById('km').value;

// seleziono l'altro input usando l'id
const userAge = document.getElementById('age').value;

// seleziono il select usando l'id
document.getElementById('genera'); addEventListener('click', myGenerator);

function myGenerator() {
    console.log('cliccato');
    
}
// poi una volta selezionati, devo leggere il loro valore, ma solo dopo che l'utente clicca sul pulsante.