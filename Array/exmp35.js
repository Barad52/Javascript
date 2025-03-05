// Code 15: For Even Array, print the second half of the array

var names = ["A", "B", "C", "D", "E", "F", "G", "H"];
var start = Math.floor(names.length / 2);
for (var i = start; i < names.length; i++) {
    console.log(names[i]);
}