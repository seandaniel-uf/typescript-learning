// type narrowing
function triple(value: number | string): string | number {
  // value has to be number, bigInt or enum
  // return value * 3;
  // value has to be a string
  // value.repeat(3)

  // if (typeof value === "string") {
  //   return value.repeat(3);
  // }

  // return value * 3;

  return typeof value === "string" ? value.repeat(3) : value * 3;
}

console.log(triple(3));
console.log(triple("Hello"));

// truthiness guards - checks if a value is truthy or falsy before evaluating
const printLetters = (word: string | null) => {
  if (!word) {
    console.log("No Word was provided!");
  } else {
    Array.from(word).forEach((letter) => console.log(letter));
  }
};

console.log(printLetters(null));
console.log(printLetters("Sean Daniel"));

const printLetters2 = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log("You did not pass in a word!");
  }
};

// const el = document.getElementById("idk");

// if (el) {
//   //typescript infers it is a HTML element
//   el;
// } else {
//   el;
// }

// equality narrowing - comparing types to each other before doing certain operations with values
function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
  }
}

someDemo(3, "3");

// in operator (can't use type of, we will get object all the time)- checks if a certain property exists on an object, we can check if a value exists in an object before working with it depending on its type
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

// camelCase
// PascalCase
// snake_case

function getRunTime(media: Movie | TVShow) {
  // typeof media will always get an object
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}

console.log(getRunTime({ title: "Amadeus", duration: 140 }));
console.log(
  getRunTime({ title: "Breaking Bad", duration: 55, numEpisodes: 60 })
);

// instanceOf Narrowing - javascript operator that allows us to check if one thing is an instance of another
function printFullDate(date: string | Date) {
  // if date argument is a date, convert it to a string
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(date);
  }
}

console.log(printFullDate(new Date()));
console.log(printFullDate(new Date().toUTCString()));

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

// both objects so we need to get deeper - instanceof
function printName(entity: User | Company) {
  if (entity instanceof User) {
    // infers type of User
    entity;
  }

  if ("name" in entity) {
    // infers type of Company
    entity;
  }
}

// Type Predicates - functions that have a special return type called a type predicate

interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog) {
  if (isCat(animal)) {
    animal;
    return "Meow";
  } else {
    animal;
  }
}

// discriminated unions - creaing a literal property that is common across multiple types, we can then narrow the type using that literal property
// named kind or __type

interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

// nothing to test for in differences for Rooster, Cow or Pig
type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  // if (animal.kind === "pig") {
  //   console.log("Pig");
  // } else {
  //   console.log("Other animal");
  // }

  switch (animal.kind) {
    case "pig":
      return "Oink!";
    case "cow":
      return "Moo!";
    case "rooster":
      return "Cockadoodle doo!";
    case "sheep":
      return "Baaa!";
    default:
      // We should never make it here, if we handled all cases correctly
      const shouldNeverGetHere: never = animal;
  }
}

console.log(
  getFarmAnimalSound({ name: "Wilbur", weight: 2, age: 22, kind: "cow" })
);

console.log(
  getFarmAnimalSound({ name: "Wilbur", weight: 2, age: 22, kind: "rooster" })
);
console.log(
  getFarmAnimalSound({ name: "Wilbur", weight: 2, age: 22, kind: "pig" })
);

const Wilbur: Pig = {
  name: "Wilbur",
  weight: 22,
  age: 5,
  kind: "pig",
};

console.log(getFarmAnimalSound(Wilbur));

// Exhaustive checks with never
