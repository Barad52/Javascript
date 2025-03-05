// Student Task
// Que-1
// Write a JavaScript  code to reverse a given string and print the reversed string.

let str = "Diwakar";
let reversestr = "";

for (let i = str.length - 1; i >= 0; i-- ){
    reversestr += str[i];
}
console.log(reversestr);