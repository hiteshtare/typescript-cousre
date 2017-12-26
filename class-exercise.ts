// Exercise 1 - Class
class Car {
    public acceleration: number = 0;

    constructor(public name: string) { }

    honk(): void {
        console.log("Toooooooooot!");
    }
    accelerate(speed: number): void {
        this.acceleration = this.acceleration + speed;
    }
}

let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);


// Exercise 2 - Inheritance
abstract class BaseObject {
    public width: number = 0;
    public length: number = 0;

    abstract calcSize(): number;
}

class Rectangle extends BaseObject {
    calcSize(): number {
        return this.width * this.length;
    }
}

let rectangle = new Rectangle();
rectangle.width = 3;
rectangle.length = 4;
console.log(rectangle.calcSize());

// Exercise 3 - Getters & Setters
class newPerson {
    private _firstName: string = "";
    public enumerable = true;
    public configurable = true;

    get firstName() {
        return this._firstName;
    }

    set firstName(name: string) {
        if (name.length > 3)
            this._firstName = name;
        else
            this._firstName = "";
    }
}

let newperson = new newPerson();
console.log(newperson.firstName);
newperson.firstName = "Ma";
console.log(newperson.firstName);
newperson.firstName = "Maximilian";
console.log(newperson.firstName);