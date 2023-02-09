// very similar to type alias
// can only be an object
// no equal sign for interface

type Point2 = {
  x: number;
  y: number;
};

const pt: Point2 = { x: 123, y: 33 };

interface Point3 {
  x: number;
  y: number;
}

const pt2: Point3 = { x: 123, y: 33 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi(): string;
}

const Thomas: Person = {
  id: 2222,
  first: "Tom",
  last: "Hardy",
  nickname: "Tommy",
  sayHi: () => {
    return "Hello!";
  },
};

Thomas.id = 222;
Thomas.first = "Kyle";

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4));
console.log(shoes);

// primitive values are data that is not an object and has no methods or properties or is a function
// primitive values (string, boolean, number)

interface Player {
  sport: string;
  homeRun(): boolean;
}

const boBichette: Player = {
  sport: "Baseball",
  homeRun() {
    return true;
  },
};
// reopening interfaces, able to add properties instead of type objects

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Australian Shepherd",
  bark() {
    return "Woof";
  },
};

// inherits dog type key properties
interface ServiceDog extends Dog {
  job: "Avalanche Pup" | "Drug Sniffer" | "Guide Dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 2,
  breed: "German Shepherd",
  bark() {
    return "RUFF";
  },
  job: "Avalanche Pup",
};

interface Person2 {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Person2, Employee {
  level: string;
  languages: string[];
}

const seanDaniel: Engineer = {
  name: "Sean",
  id: 22,
  email: "degroot@gmail.com",
  level: "junior",
  languages: ["JavaScript", "React"],
};
