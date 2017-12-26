// let & const
console.log('LET & CONST');
var myLevel = 100;
console.log(myLevel);
myLevel = 99;
console.log(myLevel);
var myGame = 'Carrom';
console.log(myGame);
//myGame = 'Chess'; //won't work
//blank scope
console.log('BLANK SCOPE');
function reset() {
    var myLevel = null;
    console.log(myLevel);
}
reset();
console.log(myLevel);
//arrow functions
console.log('ARROW FUNCTIONS');
var addition = function Addition(num1, num2) {
    return num1 + num2;
};
console.log(addition(10, 5));
var multiplication = function (num1, num2) { return num1 * num2; };
console.log(multiplication(10, 5));
var greet = function () {
    console.log('Hello - from Greet');
};
greet();
var greetFriend = function (name) { return console.log(name); };
greetFriend('Mukesh');
console.log('DEFAULT PARAMETERS');
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0)
        start--;
    console.log('Finish>>', start);
};
countdown();
console.log('SPREAD & REST Operators');
var numbers = [1, 12, 54, -99];
console.log(Math.max(1, 12, 44, -7));
console.log(Math.max.apply(Math, numbers));
function makeArray(name) {
    var arg = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg[_i - 1] = arguments[_i];
    }
    return arg;
}
console.log(makeArray('TGOD', 4, 5, 7, 9));
console.log('DESTRUCTURING');
var newHobbies = ['Playing Piano', 'AquaHobbist']; //Arrays
// const newHobby1 = newHobbies[0];
// const newHobby2 = newHobbies[1];
var newHobby1 = newHobbies[0], newHobby2 = newHobbies[1];
console.log(newHobby1, newHobby2);
var newUserData = {
    name: 'Mukesh',
    age: 29
};
// const newname = newUserData.name;
// const newage = newUserData.age;
var newname = newUserData.name, newage = newUserData.age;
console.log(newname, newage);
