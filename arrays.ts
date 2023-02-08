// number, string, boolean, array, object

const favNumber: number = 19;
const firstName: string = 'Sean Daniel';
const isConfident: boolean = true;
const sports: string[] = ['Tiger Woods', 'Toronto Blue Jays', 'Max Domi'];

type playerStats = {
  name: string,
  number: number,
  description?: string,
  readonly awards: string[],
  teams: {
    team1: string,
    team2: string,
  }
}

const boBichette: playerStats = {
  name: 'Bo Bichette',
  number: 11,
  description: 'From Tennis to Baseball, Bo does it all',
  awards: ["Roberto Clemente", "2023 World Series Champions"],
  teams: {
    team1: 'Lansing Lugnuts',
    team2: 'Toronto Blue Jays',
  }
}

const mikeModano: playerStats = {
  name: 'Mike Modano',
  number: 9,
  awards: ["Stanley Cup", "MVP"],
  teams: {
    team1: "Minnesota North Stars",
    team2: "Dallas Stars",
  }
}

mikeModano.awards = ['Broken Leg', 'Falling off a stretcher'];

let names: string[] = ["Sean", "Michael"];

let ages: number[] = [23, 44, 55, 33];

let lastNames: Array<string> = ["de Groot", "Phelps"];

let favNumbers: Array<number> = [19, 27];


// telling TS this is empty
const activeUsers: [] = [9, 'Sean Daniel'];

let username: string = "Sean";

const activeUsers2: string[] = ['Sean Daniel', 'Michael Imperial'];

activeUsers2.push('Kyle');

const ageList: number[] = [45, 19, 29];

ageList[0] = 99;
ageList[1] = 'Papayawhip';

const bools: Array<boolean> = [];
const bools2: boolean[] = [];


// object type - pattern of an object
type Point = {
  x: number,
  y: number
}

const coords: Point[] = [];

coords.push({x: 23, y: 8});

coords.push({x: 23, y: "8"});


// multidimensional arrays
const board: string[][] = [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]];