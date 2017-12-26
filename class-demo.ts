class Person {
    name: string;
    private age: number = 28;
    protected gender: string

    constructor(name: string, public lastname: string) {
        this.name = name
    }

    printAge() {
        console.log(this.age);
        this.setGender("Man");
    }

    private setGender(gender: string) {
        this.gender = gender
        console.log(this.gender);
    }
}

const person = new Person("Hitesh", "Tare");
console.log(person.name, person.lastname);
person.printAge();
//person.setGender("Male"); //Won't work if method is set private

//Inheritance
class Hitesh extends Person {
    //name = "Hitesh";
    constructor(lastname: string) {
        super("Hitesh", lastname);
        this.gender = "Male";
    }
}

const hitesh = new Hitesh("Tare");
console.log(hitesh);

//Setters and Getters
class Plant {
    private _species: string;

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3)
            this._species = value;
        else
            this._species = "Default";
    }
}

const plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Fern";
console.log(plant.species);

//Static properties and methods
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}

console.log(Helpers.PI);
console.log(Helpers.calcCircumference(5));

//Abstract Classes and Methods
abstract class Project {
    projectName: string = "Default";
    budget: number = 786;

    abstract changeName(name: string): void;
    getProjectName(): string {
        return this.projectName;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let myITProject = new ITProject();
console.log(myITProject);
myITProject.changeName('Hitesh IT Project');
console.log(myITProject);

//Private constructor and Singleton
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name: string) { }

    static getInstance() {
        if (!OnlyOne.instance) {
            this.instance = new OnlyOne("First Instance");
        }
        return this.instance;
    }
}

//let wrong = new OnlyOne("Create my instance");
let right = OnlyOne.getInstance();
console.log(right.name);
//right.name = "Second Instance";