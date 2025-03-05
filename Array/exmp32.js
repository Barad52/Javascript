// Code 12: Print the first 3 items in the array using a loop
// First Way:

var movies = ["bahuballi", "Spider Man", "Iron Man", "Super Man"];
for (var i = 1; i <= 3; i++) {
    console.log(movies[i]);
}

// Second Way [ Using Break ]:

var movies = ["bahuballi", "Spider Man", "Iron Man", "Super Man"];
for (var i = 0; i < movies.length; i++) {
    if (i == 3) {
        break;
    }
    console.log(movies[i]);
}
