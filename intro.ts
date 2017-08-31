//string
let myName: string = 'Hitesh';
//myName = 27;

//number
let myAge: number = 27;
//myAge = 'Hitesh';

//boolean
let myHobbies: boolean = true;
//myHobbies = 1;

//assignment
let message = 1;
//message = '1';
//message = 'Hey';

//Array of type any 
let hobbies: any[] = ['Cooking', 'Football'];
hobbies = [100];
console.log(typeof hobbies);

//Tuple eg.
let address: [string, number] = ['Shanti Park', 400051];

//enum
enum Color {
    Red, //0
    Green = 101, //1
    Blue = 222 //2
}
let myColor: Color = Color.Blue;
console.log(myColor);

/* 
Type any gives up all the type checking, should avoid using this type as it send back to JavaScript world
 */
let fullName: any = 'Holla!';
console.log(fullName);
fullName = { First: 'Hitesh', Last: 'Tare' };
console.log(fullName);

//functions
function returnMyName(): string {
    //return myAge;
    return myName;
}
console.log(returnMyName());

//void
function logMessage(): void {
    //return myHobbies;
    console.log('logMessage called.');
}
logMessage();

//passing arguments to function
function multiply(arg1: number, arg2: number): number {
    return arg1 * arg2;
}
//console.log(multiply('Hitesh', 24));
console.log(multiply(2, 24));

//function types
let myFunction: (val1: number, val2: number) => number; //sequence of arguments does matter
//myFunction = logMessage;
//myFunction();
myFunction = multiply;
console.log(myFunction(2, 5));

//object types
let userData: { name: string, age: number } = {
    name: 'Hitesh',
    age: 27
};
userData = { //sequence of properties does not matter 
    age: 26,
    name: 'Trupti'
};

/*
  Complex object - Usually type is specified only after colon sign but for 'type' keyword 
  only it is specified after equalto sign. 
 */
type Complex = { data: number[], output: (flag: boolean) => number[] };

//complex types
let complex: Complex = {
    data: [10.2, 99, 3],
    output: function (flag: boolean): number[] {
        return this.data;
    }
};

let complex2: Complex = {
    data: [10.2, 99, 3],
    output: function (flag: boolean): number[] {
        return this.data;
    }
};

//union types
let myRealAge: number | string = "27";
myRealAge = 27;
//myRealAge = true;

//check types
let myValue = 30;
if (typeof myValue == "number") {
    console.log("myValue is of type number");
}

//never type (Typescript 2.0b)
/* 
  To be used in cases where we don't want our execution to enter.
  Totally different from void type.
*/
function neverReturns(): never {
    throw new Error('return a new Error');
}

//Nullable type (Typescript 2.0)
let thisBeNull : number | null = 12;
thisBeNull = null;

let thisAlsoBeNull; // value is undefined
thisAlsoBeNull = null;

let thisWillBeNullAlways : number | null = null;
thisWillBeNullAlways = 12;