var encourageMyself = function (name) {
    return "Hey, ".concat(name, ", you're doing great!");
};
encourageMyself('Sean');
// encourageMyself(88);
// function square(num) {
//   return num * num;
// }
// square(3);
// square("asd");
// implicit, so anything will apply
function greet(person) {
    return "Hi There, ".concat(person);
}
greet('Doug');
greet(22);
greet(true);
function greet2(person) {
    return "Hey There, ".concat(person);
}
greet2('Sam');
// greet2(22);
// greet2(false)
var doSomething = function (person, age, isFunny) {
};
doSomething("Sean", 29, false);
// default parameters
function greetThird(person) {
    if (person === void 0) { person = "Sean Daniel"; }
    console.log("Hey there ".concat(person));
}
greetThird('Bo Bichette');
// greetThird(false)
// function return types
// EXPLICIT
var addNumbers = function (num1, num2) {
    if (num1 === void 0) { num1 = 10; }
    if (num2 === void 0) { num2 = 20; }
    return num1 * num2;
};
addNumbers(10, 10);
function square(num) {
    num * num;
}
square(2);
function rando(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
rando(0.4);
rando(10);
var add = function (x, y) {
    return x + y;
};
// anonymous functions
var colors = ["red", "pink", "yellow"];
// implicitly understands these are strings
colors.map(function (color) {
    return color.toUpperCase();
});
// void, used to say that we are returning nothing
function printTwice(msg) {
    console.log(msg);
}
function secondsInDay() {
    return 24 * 60 * 60;
}
;
// never type, don't be confused with void as void returns undefined or null, never does not finish executing
// a function that never finished or a function that throws an error
function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log("Game Loop Running");
    }
}
var twoFer = function (name) {
    if (name === void 0) { name = 'you'; }
    return "one for ".concat(name, ", one for me");
};
console.log(twoFer());
console.log(twoFer('Sean Daniel'));
var isLeapYear = function (year) {
    return (year % 4 === 0);
};
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
