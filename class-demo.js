var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, lastname) {
        this.lastname = lastname;
        this.age = 28;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setGender("Man");
    };
    Person.prototype.setGender = function (gender) {
        this.gender = gender;
        console.log(this.gender);
    };
    return Person;
}());
var person = new Person("Hitesh", "Tare");
console.log(person.name, person.lastname);
person.printAge();
//person.setGender("Male"); //Won't work if method is set private
//Inheritance
var Hitesh = /** @class */ (function (_super) {
    __extends(Hitesh, _super);
    //name = "Hitesh";
    function Hitesh(lastname) {
        var _this = _super.call(this, "Hitesh", lastname) || this;
        _this.gender = "Male";
        return _this;
    }
    return Hitesh;
}(Person));
var hitesh = new Hitesh("Tare");
console.log(hitesh);
//Setters and Getters
var Plant = /** @class */ (function () {
    function Plant() {
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3)
                this._species = value;
            else
                this._species = "Default";
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Fern";
console.log(plant.species);
//Static properties and methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(Helpers.PI);
console.log(Helpers.calcCircumference(5));
//Abstract Classes and Methods
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 786;
    }
    Project.prototype.getProjectName = function () {
        return this.projectName;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var myITProject = new ITProject();
console.log(myITProject);
myITProject.changeName('Hitesh IT Project');
console.log(myITProject);
//Private constructor and Singleton
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            this.instance = new OnlyOne("First Instance");
        }
        return this.instance;
    };
    return OnlyOne;
}());
//let wrong = new OnlyOne("Create my instance");
var right = OnlyOne.getInstance();
console.log(right.name);
//right.name = "Second Instance"; 
