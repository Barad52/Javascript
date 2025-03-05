// Code 11: Create an array of 6 numbers, print the numbers array, delete last 3 numbers, and print the array
// First Way:

var numbers = [2, 3, 4, 5, 6, 7];
console.log(numbers);
numbers.pop();
numbers.pop();
numbers.pop();
console.log(numbers);


// Second Way:

var numbers = [2, 3, 4, 5, 6, 7];
console.log(numbers);
for (var i = 1; i <= 3; i++) {
    numbers.pop();
}
console.log(numbers);