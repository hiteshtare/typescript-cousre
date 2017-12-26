// Exercise 1 - Arrow Operator
var double = function (value) { return value * 2; };
console.log(double(10));
// Exercise 2 - Default Params
var modulegreet = function (name) {
    if (name === void 0) { name = "Max"; }
    console.log("Hello, " + name);
};
modulegreet();
modulegreet("Hitesh");
// Exercise 3 - Spread Operator
var modulenumbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, modulenumbers));
// Exercise 4 - Spread Operator
var newArray = [55, 20];
newArray.push.apply(newArray, modulenumbers);
console.log(newArray);
// Exercise 5 - Destructing Arrays
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// Exercise 6 - Destructing Objects
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
