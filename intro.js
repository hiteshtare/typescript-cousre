//string
var myName = 'Hitesh';
//myName = 27;
//number
var myAge = 27;
//myAge = 'Hitesh';
//boolean
var myHobbies = true;
//myHobbies = 1;
//assignment
var message = 1;
//message = '1';
//message = 'Hey';
//Array of type any 
var hobbies = ['Cooking', 'Football'];
hobbies = [100];
console.log(typeof hobbies);
//Tuple eg.
var address = ['Shanti Park', 400051];
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 101] = "Green";
    Color[Color["Blue"] = 222] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
/*
Type any gives up all the type checking, should avoid using this type as it send back to JavaScript world
 */
var fullName = 'Holla!';
console.log(fullName);
fullName = { First: 'Hitesh', Last: 'Tare' };
console.log(fullName);
//functions
function returnMyName() {
    //return myAge;
    return myName;
}
console.log(returnMyName());
//void
function logMessage() {
    //return myHobbies;
    console.log('logMessage called.');
}
logMessage();
//passing arguments to function
function multiply(arg1, arg2) {
    return arg1 * arg2;
}
//console.log(multiply('Hitesh', 24));
console.log(multiply(2, 24));
//function types
var myFunction; //sequence of arguments does matter
//myFunction = logMessage;
//myFunction();
myFunction = multiply;
console.log(myFunction(2, 5));
//object types
var userData = {
    name: 'Hitesh',
    age: 27
};
userData = {
    age: 26,
    name: 'Trupti'
};
//complex types
var complex = {
    data: [10.2, 99, 3],
    output: function (flag) {
        return this.data;
    }
};
var complex2 = {
    data: [10.2, 99, 3],
    output: function (flag) {
        return this.data;
    }
};
//union types
var myRealAge = "27";
myRealAge = 27;
//myRealAge = true;
//check types
var myValue = 30;
if (typeof myValue == "number") {
    console.log("myValue is of type number");
}
//never type (Typescript 2.0b)
/*
  To be used in cases where we don't want our execution to enter.
  Totally different from void type.
*/
function neverReturns() {
    throw new Error('return a new Error');
}
//Nullable type (Typescript 2.0)
var thisBeNull = 12;
thisBeNull = null;
var thisAlsoBeNull; // value is undefined
thisAlsoBeNull = null;
var thisWillBeNullAlways = null;
thisWillBeNullAlways = 12;
