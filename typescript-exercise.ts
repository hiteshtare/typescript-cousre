// Exercise 1 - Arrow Operator
const double = (value: number): number => value * 2;
console.log(double(10));

// Exercise 2 - Default Params
const modulegreet = (name = "Max"): void => {
    console.log(`Hello, ${name}`);
}

modulegreet()
modulegreet("Hitesh");

// Exercise 3 - Spread Operator
let modulenumbers: number[] = [-3, 33, 38, 5];
console.log(Math.min(...modulenumbers));

// Exercise 4 - Spread Operator
let newArray: number[] = [55, 20];
newArray.push(...modulenumbers);
console.log(newArray);

// Exercise 5 - Destructing Arrays
let testResults: number[] = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6 - Destructing Objects
const scientist: { firstName: string, experience: number } = { firstName: "Will", experience: 12 };
const { firstName, experience } = scientist;
console.log(firstName, experience);