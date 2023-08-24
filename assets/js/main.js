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




// chiedere all'utente quanti km deve percorrere
const distance = Number('type distance in km');

// chiedere l'età dell'utente
const userAge = Number('type yuor age');

let priceKm = Number(0.21);

let totalPrice;

if (userAge < 18) {
    // calcolo prezzo minorenni
    underDiscount = Number(0.21 * 20 / 100);
    totalPrice = Number(distance * (priceKm - underDiscount));

} else if (userAge > 65 - 1) {
    // calcolo prezzo over 65
    overDiscount = Number(0.21 * 40 / 100);
    totalPrice = Number(distance * (priceKm - overDiscount));
    console.log(totalPrice);
} else {
    // calcolo prezzo intero
    totalPrice = Number(distance * priceKm);
    console.log(totalPrice);
}