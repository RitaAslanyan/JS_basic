// const myObject = {

//     city: "Madrid",
//     greet() {
//         console.log(`Greetings from ${this.city}`);
//     },
// };

// myObject.greet();

// console.log(Object.getPrototypeOf(myObject));


// const myDate = new Date();
// let object = myDate;

// do {
//     object = Object.getPrototypeOf(object);
//     console.log(object);
// } while (object);


// const personPrototype = {
//     greet() {
//         console.log("hello");
//     },
// };

// const carl = Object.create(personPrototype);
// carl.greet();


// const personPrototype = {
//     greet() {
//         console.log(`hello, my name is ${this.name}`);
//     },
// };

// function Person(name) {
//     this.name = name;
// }

// Object.assign(Person.prototype, personPrototype);


// const personPrototype = {
//     greet() {
//         console.log(`hello my friend, i'm ${this.name}`);
//     },
// };

// function Person(name) {
//     this.name = name;
// }

// Object.assign(Person.prototype, personPrototype);


// const hanry = new Person("Hanry");
// hanry.greet();


// const irma = new Person("Irma");

// console.log(Object.hasOwn(irma, "name"));
// console.log(Object.hasOwn(irma, "greet"));

// console.log(Object.hasOwn(hanry, "name"));



// ---------------------------------------------------
// Schedule - setTimeout, setInterval

// function printNumbers(from, to) {
//     let current = from;

//     let timer = setInterval(() => {
//         if (current == to) clearInterval(timer);
//         console.log(current);
//         current++;

//     }, 1000);
// }

// printNumbers(1, 5);

// function printNumbers2(from, to) {
//     let current = from;

//     setTimeout(function go() {
//         console.log(current);
//         if (current < to) {
//             setTimeout(go, 1000);
//         }
//         current++;
//     }, 1000);
// }

// printNumbers2(5, 10);