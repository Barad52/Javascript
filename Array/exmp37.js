// Code 17: For Even or Odd Array, print the first half of the array

var names = ["A", "B", "C", "D", "E", "F", "G", "H", "K"];
var start = 0;
if (names.length % 2 == 0) {
    end = names.length / 2;
} else {
    end = Math.floor(names.length / 2);
}
for (var i = 0; i < end; i++) {
    console.log(names[i]);
}