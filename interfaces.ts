// very similar to type alias
// can only be an object
// no equal sign for interface

type Point2 = {
  x: number,
  y: number,
}

const pt: Point2 = {x: 123, y: 33};

interface Point3 {
  x: number,
  y: number,
}

const pt2: Point3 = {x: 123, y: 33};


interface Person {
  readonly id: number,
  first: string,
  last: string,
  nickname?: string
}


const thomas: Person = {first: "Thomas", last: "Hardy", nickname:"Tom", id: 222};

thomas.first = 'Sean';
thomas.id = 222;

// primitive values are data that is not an object and has no methods or properties or is a function
// primitive values (string, boolean, number)