/*
    Palindorma:
    -creo una flag booealana
    -confronto la prima e ultima lettera della parola per vedere se sono uguali
    -basta fare il confronto per metà della lunghezza
    -!attenzione alle lunghezze dispari: meglio usare Math.floor
    -se qualche lettera non coincide trasformo la flag di validazione
    -ritorno la flag
*/
/**
 * This function tells you if the word is palindrome or not
 * @param {string} word 
 * @returns true or false
 */
function isPalindrome(word) {
    //flag per sapere se è palindroma o meno
    let isValid = false;

    //Controllo le lettere
    for (let i = 0; i < Math.floor(word.length / 2) && !isValid; i++) {
        // if (word.charAt(i) === word.charAt(word.length - 1 - i)) isValid = true;
        isValid = word.charAt(i) === word.charAt(word.length - 1 - i);
    };

    return isValid;
};
// const input = prompt('Dammi una parola e ti dirò se è palindroma')

// console.log(isPalindrome(input));


/*
    Pari e dispari:
    -creo una funzione per il numero randomico
    -prendo il numero dell'utente e la decisione dell'utente (pari o dispari)
    -genero il numero randomico
    -sommo i due numeri
    -controllo se è pari o dispari
    -controllo la scelta del giocatore
    -dichiaro chi ha vinto
*/

