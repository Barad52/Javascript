// Que-4
// Write a JavaScript  code to find the sum of digits of a positive integer.

let num = 123456;
let sum = 0;

while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}

console.log("Sum of digits:", sum);