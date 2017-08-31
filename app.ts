// let & const
console.log('LET & CONST');
let myLevel = 100;
console.log(myLevel);
myLevel = 99;
console.log(myLevel);

const myGame = 'Carrom';
console.log(myGame);
//myGame = 'Chess'; //won't work

//blank scope
console.log('BLANK SCOPE');
function reset() {
    let myLevel = null;
    console.log(myLevel);
}
reset();
console.log(myLevel);

//arrow functions
console.log('ARROW FUNCTIONS');
const addition = function Addition(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(addition(10, 5));

const multiplication = (num1: number, num2: number): number => num1 * num2;
console.log(multiplication(10, 5));

const greet = () => {
    console.log('Hello - from Greet');
}
greet();

const greetFriend = (name: string) => console.log(name);
greetFriend('Mukesh');

console.log('DEFAULT PARAMETERS');
const countdown = (start: number = 10) => {
    console.log(start);
    while (start > 0)
        start--;
    console.log('Finish>>', start);
}
countdown();

console.log('SPREAD & REST Operators');
let numbers = [1, 12, 54, -99];
console.log(Math.max(1, 12, 44, -7));
console.log(Math.max(...numbers));

function makeArray(name: string, ...arg: number[]) {
    return arg;
}
console.log(makeArray('TGOD', 4, 5, 7, 9));

console.log('DESTRUCTURING');
const newHobbies = ['Playing Piano', 'AquaHobbist']; //Arrays
// const newHobby1 = newHobbies[0];
// const newHobby2 = newHobbies[1];
const [newHobby1, newHobby2] = newHobbies;
console.log(newHobby1, newHobby2);

const newUserData = { //Objects
    name: 'Mukesh',
    age: 29
};
// const newname = newUserData.name;
// const newage = newUserData.age;
const { name: newname, age: newage } = newUserData;
console.log(newname, newage);


