var dog = {
    name: "Elton",
    breed: "Australian Shepherd",
    age: 0.5
};
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Sean", last: "de Groot" });
var coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
printName({ first: "Mick", last: "Jagger", age: 79 });
// works if I declare a new object
var singer = { first: "Mick", last: "Jagger", age: 79, isAlive: true };
printName(singer);
function createUser(user) {
    return 'blah';
}
createUser({ username: 'Sean', email: 'degroot.sd@gmail.com', isAdmin: true });
var coordinateLongWay = { x: 34, y: 2 };
var coordinate2 = { x: 34, y: 99 };
// take in an object as an parameter, return an object
function doublePoint(Point) {
    return { x: Point.x * 2, y: Point.y * 2 };
}
var age = 29;
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 1111,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
