// built- in types
// string, boolean, void, null, number, undefined


// union types - allows us to give a value a few different possible types with the pipe character - string | number


let age: number | string | boolean = 22;

age = 'Sup';
age = 99;
age = false;


type Point = {
  x: number;
  y: number;
}

type Loc = {
  lat: number;
  long: number;
}

let coordinates: Point | Loc = {x: 1, y: 34};

coordinates = {lat: 333.22, long: 4222.222};

const printAge = (age: number | string): void => {
  console.log(`You are ${age} years old`);
}

printAge(22);
printAge('33');


function calculateTax(price: number | string, tax: number) {
  // does not exist on type number
  // price.replace("$", "");
  // does not exist on type string
  // return price * tax;

  // type narrowing
  if (typeof price === "string") {
    // if price is a string and has a dollar sign
    price = parseFloat(price.replace("$", ""));
  }

  return price * tax;
}

console.log(calculateTax('99.04', .02));
console.log(calculateTax(99.03, .02));
console.log(calculateTax('$33.02', .33));

// an integer is a full number 1
// a floating point number is a decimal 1.023
//parseInt returns a whole number
//parseFloat returns a decimal

const nums: number[] = [1, 2, 3, 4, 5];

// all types with any
const stuff: any[] = [1, 2, 4, false, {}];

// multiple types but not all
const stuff2: (number | string | boolean)[] = [1, 2, 'string', false];


type Point2 = {
  x: number;
  y: number;
}

type Loc2 = {
  lat: number;
  long: number;
}

const coords: (Point2 | Loc2)[] = [{x: 1, y: 2}, {lat: 2, long: 3}];


// literal types, doesn't go by its type but literal valie

const zero: 0 = 0;
const hi: "hi" = "hi";

const giveAnswer = (answer: 'yes' | 'no' | 'maybe') => {
  console.log(answer);
}

giveAnswer('what');
giveAnswer('yes');

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
mood = "Angry";

// literal types - has to be THESE Strings
type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";

let today: DayOfWeek = "Monday";