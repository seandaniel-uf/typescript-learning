const dog = {
  name: "Elton",
  breed:"Australian Shepherd",
  age: 0.5,
}

function printName(person: {first: string, last: string}): void {
  console.log(`${person.first} ${person.last}`)
}

printName({first: "Sean", last: "de Groot"});

let coordinate: {x: number, y: number } = { x: 34, y: 2};

function randomCoordinate(): {x: number, y: number} {
  return {x: Math.random(), y: Math.random() };
}

printName({first: "Mick", last:"Jagger", age: 79});

// works if I declare a new object
const singer = {first: "Mick", last: "Jagger", age: 79, isAlive: true};
printName(singer);

function createUser(user: {
  username: string,
  email: string,
  isAdmin: boolean
}) {
  return 'blah';
}

createUser({username: 'Sean', email: 'degroot.sd@gmail.com', isAdmin: true});



// type alias - the desired shape of the object, allows us to make our code more readable and reuse these types
type Point = {
  x: number,
  y: number
}

let coordinateLongWay: {x: number, y: number } = { x: 34, y: 2};
let coordinate2: Point = {x: 34, y: 99};

// take in an object as an parameter, return an object
function doublePoint(Point: Point): Point {
  return {x: Point.x * 2, y: Point.y * 2};
}

type MyNum = number;
let age: MyNum = 29;


type Song = {
  title: string,
  artist: string,
  numStreams: number,
  credits: {
    producer: string,
    writer: string
  }
}

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 1111,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  }
}

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);


// optional
type Point2 = {
  x: number;
  y: number;
  z?: number;
}

const myPoint: Point2 = {
  x: 1,
  y: 3,
  z: 9,
}

// readonly keyword - value cannot be changed

type User = {
  readonly id: number;
  username: string;
}

const user: User = {
  id: 2222,
  username: "catgurl",
}

console.log(user.id);

user.id = 22222;


// intersection type

type Circle = {
  radius: number;
}

type Colorful = {
  color: string;
}

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: 'green',
}


const sadFace: ColorfulCircle = {
  radius: 10,
  color: 'blue',
}

type Cat = {
  numLives: number
}

const whiskers: Cat = {
  numLives: 99,
}

type Dog = {
  breed: string,
}

const mylo: Dog = {
  breed: 'Dalmation',
}

type CatDog = Cat & Dog & {
  age: number,
};

const myloWhiskers: CatDog = {
  numLives: 22,
  breed: 'Dalmation',
  age: 99,
}
