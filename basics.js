"use strict";
// import { parseJsonSourceFileConfigFileContent } from "typescript";
Object.defineProperty(exports, "__esModule", { value: true });
var user = { name: "rohit", age: 20 };
console.log(user.name);
console.log("hello world");
//primitive datatypes
var age = 23;
var id = 23; // automatice detect number 
var greet = "hello world";
var teenager = false;
console.log(typeof (age)); //number no int float
console.log(typeof (greet)); //string
console.log(typeof (teenager)); //boolean
var name = "rohit";
function greetUser(name) {
    console.log("hello " + name);
}
greetUser("rohit");
var login = function (username, password) {
    if (username === void 0) { username = "rohit"; }
    if (password === void 0) { password = "pass"; }
    if (username === "rohit" && password === "pass") {
        return true;
    }
};
console.log(login());
var multiply = function (a, b) {
    var multiplyed = a * b;
    return multiplyed;
};
console.log(multiply(2, 3));
var heros = ["thor", "iron man", "captain america"];
var love = heros.map(function (hero) {
    if (hero == "iron man") {
        return "i love ".concat(hero);
    }
});
console.log(love);
//objects
function createUser(_a) {
    var string = _a.name;
    console.log(name);
    // console.log(User.age);
}
//arrays
var superHeroes = ["thor", "iron man", "captain america"];
superHeroes.push("black panther");
superHeroes.push("spiderman");
console.log(superHeroes);
var superPower = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var users = [];
users.push({ name: "rohit", age: 20, email: "something.me@gmail.com", isActive: true });
console.log(users);
