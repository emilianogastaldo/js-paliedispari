/*
    Palindorma:
    -creo una flag booealana
    -confronto la prima e ultima lettera della parola per vedere se sono uguali
    -basta fare il confronto per metà della lunghezza
    -!attenzione alle lunghezze dispari: meglio usare Math.floor
    -se qualche lettera non coincide trasformo la flag di validazione
    -ritorno la flag
*/
/** */
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
const input = prompt('Dammi una parola e ti dirò se è palindroma')

console.log(isPalindrome(input));