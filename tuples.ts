// tuple - very rigid array, they do not exist in JavaScript
// they make you explicitly say what types and what the order is in the array
// types matter
// order matters
// arrays of fixed length

const arrayOfStrings: string[] = ['hey'];


const stuff: (string | number)[] = ['hey', 9];


let tuple: [number, string] = [2, 'ok'];

const color: [number, number, number] = [255, 0, 255];



type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'Okay'];

// goodRes[0] = '200';
goodRes.push(123);

// an array of HTTPResponses
const responses: HTTPResponse[] = [[404, 'Not Found'], [200, 'OK']];