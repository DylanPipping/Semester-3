console.log("Demo Time!");

class Animal {
    //contructor initialize the class properties
    constructor(name, age = 1) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        if (this.age < 100) {
            this.age++;
        } else {
            console.log("Oh shit!! He Dead!");
        }
    }

    toString() {
        return this.name + " (" + this.age + " years)";
    }
}

class Cat extends Animal {
    celebrateBirthday() {
        if (this.age < 25) {
            this.age++;
        } else {
            console.log("Oh shit!! He Dead!");
        }
    }

    toString() {
        return "Cat: " + this.name + " (" + this.age + " years)";
    }

    speak() {
        console.log("Meow");
    }
}

class Dog extends Animal {
    celebrateBirthday() {
        if (this.age < 20) {
            this.age++;
        } else {
            console.log("Oh shit!! He Dead!");
        }
    }

    toString() {
        return "Dog: " + this.name + " (" + this.age + " years)";
    }
    speak() {
        console.log("Woof");
    }
}

class Turtle extends Animal {
    toString() {
        return "Turtle: " + this.name + " (" + this.age + " years)";
    }

    speak() {
        console.log("Eehh");
    }
}


let animal = new Animal("Rex", 80);
animal.celebrateBirthday();
console.log(animal.toString());

let cat = new Cat("Selena", 9);
cat.celebrateBirthday();
console.log(cat.toString());

let dog = new Dog("Scruffy", 20);
dog.celebrateBirthday();
console.log(dog.toString());

let turtle = new Turtle("Alejandro", 75);
turtle.celebrateBirthday();
console.log(turtle.toString());


let animalArray = [cat, dog, turtle];

for (let i = 0; i < animalArray.length; i++) {
    const animal = animalArray[i];
    animal.speak();

}