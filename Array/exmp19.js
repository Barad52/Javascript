// Que-5
// Given an array of numbers, write JavaScript code to find the maximum, minimum, and average values.

let arr = [22, 33, 2, 7, 99, 54];

let max = arr[0];
let min = arr[0];
let sum = 0;s

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
    sum += arr[i]; 
}

let avg = sum / arr.length;

console.log("Maximum:", max);
console.log("Minimum:", min);
console.log("Average:", avg);
