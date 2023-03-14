// let user = {
//     name: "Michael",
//     age: 21
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
// console.log(JSON.stringify(descriptor, null, 2));

// Object.defineProperty(user, "age", {
//     value: 21
// });

// let descrip = Object.getOwnPropertyDescriptor(user, 'age');
// console.log(JSON.stringify(descrip, null, 2));


// Object.defineProperty(user, 'profession', {
//     value: "programmer",
//     writable: true,
//     enumerable: true,
// }, );

// let desc1 = Object.getOwnPropertyDescriptor(user, "profession");
// console.log(JSON.stringify(desc1, null, 2));


// non-wirtable
// let user = {
//     name: "Jack",
// };

// Object.defineProperty(user, 'name', { writable: false });

// user.name = "Peter";
// console.log(user.name);


// non-enumerable
// let user = {
//     name: "Jack",
//     toString() {
//         return this.name;
//     }
// };

// Object.defineProperty(user, "toString", { enumerable: false });

// for (let key in user) {
//     console.log(key);
// }

// console.log(Object.keys(user));


//non-configurable
// let descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(JSON.stringify(descriptor, null, 2));
// Math.PI = 15;
// console.log(Math.PI);
// delete Math.PI;


// let user = {
//     name: "Alex",
//     age: 47
// };

// Object.defineProperty(user, "age", {
//     configurable: false,
// });

// user.age = 28;
// console.log(user.age);
// // delete user.age;

// Object.defineProperty(user, "age", {
//     writable: false
// });

// user.age = 11;
// console.log(user.age);

// // "use strict"
// let user = {
//     name: "Ann"
// };

// Object.defineProperty(user, "name", {
//     writable: false,
//     configurable: false
// });

// // delete user.name;
// // user.name = "Poghos";
// // Object.defineProperties(user, "name", {
// //     writable: true
// // });



// let user = {
//     name: "John",
// };

// Object.defineProperties(user, {
//     name: { writable: false },
//     age: { value: 31, writable: true, configurable: true }
// });

// let descriptors = Object.getOwnPropertyDescriptors(user);
// console.log(JSON.stringify(descriptors, null, 2));

// let clone = Object.defineProperties({}, descriptors);
// console.log(clone);


// Property getters and setters
// let user = {
//     name: "John",
//     surname: "Smith",

//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },

//     set fullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     }
// };

// console.log(user.fullName);
// user.fullName = "Ann Cooper";
// console.log(user.name);


// let user = {
//     name: "John",
//     surname: "Smith"
// };

// Object.defineProperty(user, 'fullName', {
//     get() {
//         return `${this.name} ${this.surname}`;
//     },

//     set(value) {
//         [this.name, this.surname] = value.split(' ');
//     }
// });

// console.log(user.fullName);

// for (let key in user) {
//     console.log(key);
// }


// let user = {
//     get name() {
//         return this._name;
//     },

//     set name(value) {
//         if (value.length < 4) {
//             console.log("Name is too short, need at least 4 characters.");
//             return;
//         }
//         this._name = value;

//     }
// };


// user.name = "Pete";
// console.log(user.name);

// user.name = "Lol";



//
// function User(name, birthday) {
//     this.name = name;
//     this.birthday = birthday;

//     Object.defineProperty(this, "age", {
//         get() {
//             let todayYear = new Date().getFullYear();
//             return todayYear - this.birthday.getFullYear();
//         }
//     });
// }

// let pete = new User("Pete", new Date(2000, 11, 25));
// console.log(pete.birthday);
// console.log(pete.age);