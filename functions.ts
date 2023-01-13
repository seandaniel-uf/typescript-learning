const encourageMyself = (name: string) => {
  return `Hey, ${name}, you're doing great!`;
}

encourageMyself('Sean');

encourageMyself(88);


// function square(num) {
//   return num * num;
// }

// square(3);
// square("asd");


// implicit, so anything will apply
function greet(person) {
  return `Hi There, ${person}`;
}

greet('Doug');
greet(22)
greet(true)

function greet2(person: string) {
  return `Hey There, ${person}`;
}

greet2('Sam');
greet2(22);
greet2(false)


const doSomething = (person: string, age: number, isFunny: boolean) => {

}

doSomething("Sean", 29, false);


// default parameters

function greetThird(person: string = "Sean Daniel") {
  console.log(`Hey there ${person}`);
}

greetThird('Bo Bichette');
greetThird(false)


// function return types
// EXPLICIT
const addNumbers = (num1: number = 10, num2: number = 20): number => {
  return num1 * num2;
}

addNumbers(10, 10);

function square(num: number) {
  num * num;
}

square(2);

function rando(num: number): string | number {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

rando(0.4);
rando(10);

const add = (x:number, y: number): number => {
  return x + y;
}

// anonymous functions
const colors = ["red", "pink", "yellow"];

// implicitly understands these are strings
colors.map((color)=> {
  return color.toUpperCase();
})

// void, used to say that we are returning nothing

function printTwice(msg: string) {
  console.log(msg);
}

function secondsInDay() {
  return 24 * 60 * 60;
};


// never type, don't be confused with void as void returns undefined or null, never does not finish executing
// a function that never finished or a function that throws an error

function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("Game Loop Running");
  }
}

