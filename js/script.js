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
    //confermo la parola in minuscolo
    word = word.toLowerCase();
    //flag per sapere se è palindroma o meno
    let isValid = true;

    //Controllo le lettere
    for (let i = 0; i < word.length / 2 && isValid; i++) {
        if (word.charAt(i) !== word.charAt(word.length - 1 - i)) isValid = false;
    };

    return isValid;
};

const formPalindrome = document.getElementById('form-palindrome');
const resultPalindorm = document.getElementById('result-palindrome');
formPalindrome.addEventListener('submit', function (event) {
    //Sistemo il form così che non ricarichi la pagina
    event.preventDefault();

    //Recupero il valore dell'input
    const inputPalindrome = document.getElementById('palindrome').value;

    //Creo il messaggio che poi stamperò in pagina
    let messagePalindrome = 'La tua parola NON è palindroma!'

    //Modifico il messaggio se la parola è palindroma
    if (isPalindrome(inputPalindrome)) {
        messagePalindrome = 'La tua parola è palindroma';
        resultPalindorm.classList.add("alert-success");
        resultPalindorm.classList.remove("alert-danger");
    } else {
        resultPalindorm.classList.add("alert-danger");
        resultPalindorm.classList.remove("alert-success");
    }

    //Stampo il messaggio in pagina
    resultPalindorm.innerText = messagePalindrome;
});


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

/**
 * This function, given a minimum number and a maximum number, create a ramdom number.
 * @param {number} min 
 * @param {number} max 
 * @returns number
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
    let result = 'even';
    if (isOdd(n)) result = 'odd';
    return result;
}






const formEvenOdd = document.getElementById('form-even-odd');
const resultEvenOdd = document.getElementById('result-even-odd');
formEvenOdd.addEventListener('submit', function (event) {
    event.preventDefault();
    //Recupero la decisione del giocatore se pari (even) o dispari (odd)
    const playerDecision = document.getElementById('select-even-odd').value;

    //recupero il numero del giocatore
    const playerNumber = parseInt(document.getElementById('number-even-odd').value);

    //Creo il numero ramdomico per il computer
    const computerNumber = randomNumber(1, 5);

    //sommo i due valori
    const sumNumbers = playerNumber + computerNumber;

    //Dichiaro chi ha vinto
    let decisionMessage = '';
    if (playerDecision === 'even') {
        decisionMessage = 'pari';
    } else {
        decisionMessage = 'dispari';
    };

    let message = `Il giocatore ha deciso ${decisionMessage} e ha lanciato ${playerNumber}<br>
    Il computer ha lanciato ${computerNumber}.<br>
    La somma fa ${sumNumbers}, quindi `;

    if (isEvenOrOdd(sumNumbers) === playerDecision) {
        message += 'ha vinto il giocatore'
    } else {
        message += 'ha vinto il computer';
    }

    resultEvenOdd.innerHTML = message;
});

