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
    -genero il numero randomico (funzione)
    -sommo i due numeri
    -controllo se è pari o dispari (funzione)
    -controllo la scelta del giocatore
    -dichiaro chi ha vinto
*/

const playerDecision = 'dispari';
const playerNumber = 5;

/**
 * This function, given a minimum number and a maximum number, create a ramdom number.
 * @param {number} min 
 * @param {number} max 
 * @returns number
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const computerNumber = randomNumber(1, 5);

const sumNumbers = playerNumber + computerNumber;

console.log('player: ' + playerNumber, 'PC: ' + computerNumber, 'somma: ' + sumNumbers);
/**
 * This function tells you in n is an odd number or not
 * @param {number} n 
 * @returns true | false
 */
function isOdd(n) {
    return n % 2 === 1;
}

/**
 * This function tells you if your number is even or odd
 * @param {number} n 
 * @returns string
 */
function isEvenOrOdd(n) {
    let result = 'pari';
    if (isOdd(n)) result = 'dispari';
    return result;
}
console.log(isEvenOrOdd(sumNumbers));

//Dichiaro chi ha vinto
let message = 'Ha vinto il computer'
if (isEvenOrOdd(sumNumbers) === playerDecision) message = 'Ha vinto il player';
/*
Prima interazione che avevo creato:
if (!isOdd(sumNumbers) && playerDecision === 'pari' || isOdd(sumNumbers) && playerDecision === 'dispari') {
    message = 'Ha vinto il player'
}
*/
console.log(message);