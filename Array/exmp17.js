// Que-3
// Write a JavaScript  code that takes a string as input and counts the number of vowels in 

let str = "Diwakar";
let count = 0;

for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();

    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        count++; 
    }
}

console.log("Vowel count:", count);