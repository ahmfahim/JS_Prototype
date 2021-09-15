// -----------------------------------------------------------------------
//                             -PROTOTYPE-
// Prototype is a property of a JS function, thats point an Object
// -----------------------------------------------------------------------

// function whatIsProto(){}
// console.dir(whatIsProto);

// -----------------------------------------------------------------------

// const Person = (name, age) => {
//     let person = Object.create(Person.prototype);

//     person.name = name;
//     person.age = age;

//     return person;
// }



// Person.prototype= {
//     eat() {
//         console.log('Person Eating Daily.');
//     },
//     sleep() {
//         console.log('Person Sleep Daily.');
//     },
// }

// const person1 = Person('Fahim', 21);
// person1.eat();
// console.log(person1);

// New Keyword
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype = {
    eat() {
        console.log('Person Eating Daily.');
    },
    sleep() {
        console.log('Person Sleep Daily.');
    },
}


// New Keyword Outputs
const newPerson = new Person('Fahim', 21);
newPerson.eat();
console.log(newPerson);

// -----------------------------------------------------------------------
// HOW TO CREATE ON OBJECT TO ANOTHER OBJECT USING [Object.create()]method
// -----------------------------------------------------------------------

// const Programmer = {
//     name: 'Fahim',
//     age: 21,
//     country: 'Bangladesh'
// }
// const programmerInfo = Object.create(Programmer);
// console.log("Programmer name:", programmerInfo.name);

// -----------------------------------------------------------------------
