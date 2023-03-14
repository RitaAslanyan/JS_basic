// let obj = {
//     0: "test",
//     n: 5,
// };

// console.log(obj[0]);
// console.log(obj["0"]);


// object ex 1
// let user = {};
// console.log(user);
// user.name = "John";
// console.log(user.name);
// user.surname = "Smith";
// console.log(user.surname);
// user.name = "Pete";
// console.log(user.name);
// delete user.name;
// console.log(user.name);


//ex 2

// function isEmpty(obj) {
//     for (let elem in obj) {
//         return false;
//     }
//     return true;
// }

// let schedule = {};
// console.log(isEmpty(schedule));

// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule));


// ex 3

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// let sum = 0;

// for (let elem in salaries) {
//     sum += salaries[elem];
// }

// console.log(sum);


// ex 4
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }
//     }
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// multiplyNumeric(menu);
// console.log(menu);


// object this

// ex 1
// function makeUser() {
//     return {
//         name: "John",
//         ref: this
//     };
// }

// let user1 = makeUser();
// console.log(user1.ref.name);
// console.log(user1.name);


// ex 2
// const calculator = {

//     read() {
//         this.a = +prompt("Enter a:", 0);
//         this.b = +prompt("Enter b:", 0);
//     },

//     sum() {
//         return this.a + this.b;
//     },

//     mul() {
//         return this.a * this.b;
//     }

// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());


// ex 3
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function() {
//         console.log(this.step);
//         return this;
//     }
// };

// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep();
// // ladder.down();
// // ladder.showStep();

// ladder.up().up().down().showStep().down().showStep();



// constructor function
// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("Jack");

// console.log(user.name);
// console.log(user.isAdmin);


// function Menu(name) {
//     this.name = name;
//     this.language = "English";
// }

// let about = new Menu("About");
// let contact = new Menu("Contacts");
// let home = new Menu("Home");
// let services = new Menu("Services");

// console.log(about.name);
// console.log(about.language);


// for encapsulation
// let user = new function() {
//     this.name = "John";
//     this.isAdmin = false;
// };

// ex 2
// function Calculator() {
//     this.read = function() {
//         this.a = +prompt("a = ?", 0);
//         this.b = +prompt("b = ?", 0);
//     };

//     this.sum = function() {
//         return this.a + this.b;
//     }

//     this.mul = function() {
//         return this.a * this.b;
//     };
// }

// let calc = new Calculator();
// calc.read();

// console.log("Sum = " + calc.sum());
// console.log("Mul = " + calc.mul());


// ex 3
// function Accumlator(startingValue) {
//     this.value = startingValue;

//     this.read = function() {
//         this.value += +prompt("How much to add?", 0);
//     };
// }

// let accumlator = new Accumlator(3);

// accumlator.read();
// accumlator.read();

// console.log(accumlator.value);



//----------------------------------------------
// Symbol type

// let id = Symbol();
// let id2 = Symbol("identifier");
// let id3 = Symbol("identifier");

// console.log(id2 == id3); // false
// // nuyn name-erov en, bayc tarber symbolner en


// let anID = Symbol.for("sameID");
// let sameID = Symbol.for("sameID");

// console.log(anID === sameID); // true
// // Symbol.for() - global symbol a, ete uzum enq nuyn symbolin dimel, anum enq senc


// let globalSymbol = Symbol.for("fingerprint");
// let localSymbol = Symbol("fingerprint1");

// console.log(Symbol.keyFor(globalSymbol));
// console.log(Symbol.keyFor(localSymbol)); // undefined
// // vorovhetev localSymbol@ global Symbol chi
// // ete uzum enq ira name-@ vercnenq, apa piti grenq senc
// console.log(localSymbol.description);


// // symbol@ vorpes objecti key
// let obj = {
//     name: "Jack"
// };

// obj[id2] = 5;

// console.log(obj[id2]);

// // symbol@ miangamic objecti mej stexcac, [] partadir a
// let idntf = Symbol("id");

// let otherObj = {
//     [idntf]: 3,
//     name: "Ann",
//     "age": 20
// };

// console.log(otherObj[idntf]);

// // symbol-@ chi lini, vorovhetev hidden a
// for (let key in otherObj) {
//     console.log(key);
// }



// ---------------------------------
// Iterables

// let range = {
//     from: 1,
//     to: 5
// };

// range[Symbol.iterator] = function() {
//     return {
//         current: this.from,
//         last: this.to,

//         next() {
//             if (this.current <= this.last) {
//                 return { done: false, value: this.current++ }
//             } else {
//                 return { done: true };
//             }
//         }
//     };
// };

// for (let num of range) {
//     console.log(num);
// }


// another way

// let range = {
//     from: 1,
//     to: 5,

//     [Symbol.iterator]() {
//         this.current = this.from;
//         return this;
//     },

//     next() {
//         if (this.current <= this.to) {
//             return { done: false, value: this.current++ };
//         } else {
//             return { done: true };
//         }
//     }

// };

// for(let num of range) {
//     console.log(num);
// }