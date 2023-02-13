// parameter is a number or string, function returns a number or string
function doThing(thing: number | string): number | string {
  return thing;
}

doThing(99);
doThing("22");
doThing(false);

// type
const nums1: number[] = [];

// generic
const nums2: Array<number> = [];

const colors: Array<string> = [22, "hey"];

// bang ! means this will not be null
const inputElem = document.querySelector<HTMLInputElement>("#username")!;
console.log(inputElem);
inputElem.value = "Hacked!";

const btn = document.querySelector<HTMLButtonElement>(".btn");

function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}

// function identity(item: any) : any {
//   return item;
// }

interface Cat {
  name: string;
  breed: string;
}

// the function is equivalent to any, but when we specify the type generic, we are being explicit in the type
function identity<Type>(item: Type): Type {
  return item;
}

// can be referenced as <T> instead
function identity2<T>(item: T): T {
  return item;
}

identity2<string>("John");
identity2<boolean>(false);

identity<string>("sean");

identity<boolean>(false);

identity<Cat>({ name: "Whiskers", breed: "Bengal" });

// without generics
const getRandomElement = (
  arrayItem: string | boolean | object
): string | boolean | object => {
  return arrayItem;
};

getRandomElement([1, 2, 3, 4]);
getRandomElement(["Sean", "Bo", "Kyler"]);
getRandomElement([
  { first: "Sean", last: "de Groot" },
  { first: "Sam", last: "Gagne" },
]);

// with generics
// when you give me one of these types, I will give you back that same type - like any
function getRandomElement3<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

// you pass in the type, I will give you that type and type check
console.log(getRandomElement3<string>(["a", "b", "c"]));
console.log(getRandomElement3<string>(["a", "b", "c"]));
console.log(getRandomElement3<string>(["a", "b", "c"]));

console.log(getRandomElement3<number>([1, 2, 3, 4]));
console.log(getRandomElement3<number>([1, 2, 3, 4]));
console.log(getRandomElement3<number>([1, 2, 3, 4]));

console.log(
  getRandomElement3<object>([
    { first: "Sean", last: "de Groot" },
    { first: "Sam", last: "Gagne" },
  ])
);

// inferred type generics
console.log(getRandomElement3(["a", "v", "asd"]));
console.log(getRandomElement3([1, 2, 3, 4]));

// generics that accept two types
// 3? - <T,U,V> - follow the alphabet
function merge<T, U>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

// infers
const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
const comboObj2 = merge({ age: 1 }, { confident: true });

// without inferring (comboObj1)
const comboObj3 = merge<{ name: string }, { pets: string[] }>(
  { name: "Sean" },
  { pets: ["dog", "kitten"] }
);

// default types
function makeEmptyArray<T = number>(): T[] {
  return [];
}

// infers to number
const strings = makeEmptyArray();
const bools = makeEmptyArray<boolean>();
