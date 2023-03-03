// type narrowing
function triple(value) {
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
var printLetters = function (word) {
    if (!word) {
        console.log("No Word was provided!");
    }
    else {
        Array.from(word).forEach(function (letter) { return console.log(letter); });
    }
};
console.log(printLetters(null));
console.log(printLetters("Sean Daniel"));
var printLetters2 = function (word) {
    if (word) {
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var char = word_1[_i];
            console.log(char);
        }
    }
    else {
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
function someDemo(x, y) {
    if (x === y) {
        x.toUpperCase();
    }
}
someDemo(3, "3");
// camelCase
// PascalCase
// snake_case
function getRunTime(media) {
    // typeof media will always get an object
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
console.log(getRunTime({ title: "Amadeus", duration: 140 }));
console.log(getRunTime({ title: "Breaking Bad", duration: 55, numEpisodes: 60 }));
// instanceOf Narrowing - javascript operator that allows us to check if one thing is an instance of another
function printFullDate(date) {
    // if date argument is a date, convert it to a string
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(date);
    }
}
console.log(printFullDate(new Date()));
console.log(printFullDate(new Date().toUTCString()));
var User = /** @class */ (function () {
    function User(username) {
        this.username = username;
    }
    return User;
}());
var Company = /** @class */ (function () {
    function Company(name) {
        this.name = name;
    }
    return Company;
}());
// both objects so we need to get deeper - instanceof
function printName(entity) {
    if (entity instanceof User) {
        // infers type of User
        entity;
    }
    if ("name" in entity) {
        // infers type of Company
        entity;
    }
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return "Meow";
    }
    else {
        animal;
    }
}
function getFarmAnimalSound(animal) {
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
    }
}
console.log(getFarmAnimalSound({ name: "Wilbur", weight: 2, age: 22, kind: "cow" }));
console.log(getFarmAnimalSound({ name: "Wilbur", weight: 2, age: 22, kind: "rooster" }));
console.log(getFarmAnimalSound({ name: "Wilbur", weight: 2, age: 22, kind: "pig" }));
var Wilbur = {
    name: "Wilbur",
    weight: 22,
    age: 5,
    kind: "pig"
};
console.log(getFarmAnimalSound(Wilbur));
