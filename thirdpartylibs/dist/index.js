"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
// have to install types package (save--dev) as this is local only!
// npm install --save @types/lodash
var lodash_1 = __importDefault(require("lodash"));
lodash_1.default.sample([45, 433, 44, 233, 3333]);
// single user endpoint
axios_1.default
    // the type we pass in, will be the type we expect back
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then(function (res) {
    console.log("API Fetched Succesfully");
    var data = res.data;
    // res.data matches User type
    printUser(res.data);
})
    .catch(function (e) {
    console.log("Error", e);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
axios_1.default
    // the type we pass in, will be the type we expect back
    .get("https://jsonplaceholder.typicode.com/users")
    .then(function (res) {
    console.log("API Fetched Succesfully");
    var data = res.data;
    // res.data matches User array type
    // res.data.forEach((user) => {
    //   printUser2(user);
    // });
    res.data.forEach(printUser2);
})
    .catch(function (e) {
    console.log("Error", e);
});
function printUser2(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
