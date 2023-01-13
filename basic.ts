let movieTitle: string = 'Django Unchained';

movieTitle = 2;


let angry: boolean = false;

angry = 'Hey'


const favNumber: number = 19;

favNumber = 'Cat';

variableName: type


let favMovie = 'Django Unchained';
favMovie = "The Other Guys";


// the any type - an escape hatch
// let thing: object = "hello";
// thing = 1;
// thing = false;
// thing = {
//   apple: 1,
//   banana: 2,
// }

// delayed initialization & implicit any

const movies = ['Moneyball', "The Wolf of wall street", "Dallas Buyers Club", "Interstellar"];

// implicit any
let foundMovie;

for ( let movie of movies) {
  if (movie === "Interstellar") {
    foundMovie = "Interstellar";
  }
}

foundMovie();
foundMovie = 1;
