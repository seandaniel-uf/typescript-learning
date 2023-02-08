// built- in types
// string, boolean, void, null, number, undefined
// union types - allows us to give a value a few different possible types with the pipe character |
var age = 22;
age = 'Sup';
age = 99;
age = false;
var coordinates = { x: 1, y: 34 };
coordinates = { lat: 333.22, long: 4222.222 };
var printAge = function (age) {
    console.log("You are ".concat(age, " years old"));
};
printAge(22);
printAge('33');
