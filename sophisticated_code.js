/* sophisticated_code.js */

// This code demonstrates a complex algorithm that calculates the Fibonacci sequence up to a given number

function fibonacci(n) {
    let fibSeries = [0, 1];

    for (let i = 2; i <= n; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }

    return fibSeries;
}

function printFibonacciSequence(n) {
    let fibSeries = fibonacci(n);

    console.log(`Fibonacci sequence up to ${n}:`);
    console.log(fibSeries.join(', '));
}

function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

function findPrimesInRange(start, end) {
    let primes = [];

    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }

    return primes;
}

function calculateFactorial(n) {
    if (n === 0 || n === 1) return 1;

    let factorial = 1;

    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }

    return factorial;
}

function checkPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');

    return str === reversedStr;
}

function getDateInCustomFormat(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ];

    const day = daysOfWeek[date.getDay()];
    const month = monthsOfYear[date.getMonth()];
    const year = date.getFullYear();
    const formattedDate = `${day}, ${month} ${date.getDate()}, ${year}`;

    return formattedDate;
}

function encryptMessage(message, key) {
    let encrypted = '';

    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        const asciiValue = char.charCodeAt(0);
        const encryptedChar = String.fromCharCode(asciiValue + key);
        encrypted += encryptedChar;
    }

    return encrypted;
}

function decryptMessage(encryptedMessage, key) {
    let decrypted = '';

    for (let i = 0; i < encryptedMessage.length; i++) {
        const char = encryptedMessage[i];
        const asciiValue = char.charCodeAt(0);
        const decryptedChar = String.fromCharCode(asciiValue - key);
        decrypted += decryptedChar;
    }

    return decrypted;
}

// Main program starts here

const fibNumber = 10;
printFibonacciSequence(fibNumber);

const startRange = 100;
const endRange = 200;
const primesInRange = findPrimesInRange(startRange, endRange);
console.log(`Prime numbers between ${startRange} and ${endRange}:`);
console.log(primesInRange.join(', '));

const factorialNumber = 5;
const factorial = calculateFactorial(factorialNumber);
console.log(`Factorial of ${factorialNumber}: ${factorial}`);

const palindromeStr = 'madam';
const isPalindrome = checkPalindrome(palindromeStr);
console.log(`Is ${palindromeStr} a palindrome? ${isPalindrome}`);

const date = new Date();
const formattedDate = getDateInCustomFormat(date);
console.log(`Current date in custom format: ${formattedDate}`);

const originalMessage = 'Hello, World!';
const encryptionKey = 5;
const encryptedMessage = encryptMessage(originalMessage, encryptionKey);
console.log(`Encrypted message: ${encryptedMessage}`);

const decryptedMessage = decryptMessage(encryptedMessage, encryptionKey);
console.log(`Decrypted message: ${decryptedMessage}`);
