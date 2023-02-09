// very similar to type alias
// can only be an object
// no equal sign for interface
var pt = { x: 123, y: 33 };
var pt2 = { x: 123, y: 33 };
var Thomas = {
    id: 2222,
    first: "Tom",
    last: "Hardy",
    nickname: "Tommy",
    sayHi: function () {
        return "Hello!";
    }
};
Thomas.id = 222;
Thomas.first = "Kyle";
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
console.log(shoes);
// primitive values are data that is not an object and has no methods or properties or is a function
// primitive values (string, boolean, number)
