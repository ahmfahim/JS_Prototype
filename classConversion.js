console.log("class Conversion");
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log('Person Eating Daily.');
    }
    sleep() {
        console.log('Person Sleep Daily.');
    }
}
const newPerson = new Person('Fahim', 21);
newPerson.eat();
console.log(newPerson);
