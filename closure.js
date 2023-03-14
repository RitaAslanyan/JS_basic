// function makeCounter() {
//     let count = 0;

//     return function() {
//         return count++;
//     };
// }

// let counter = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let counter2 = makeCounter();
// console.log(counter2());

// console.log(makeCounter());


// function f() {
//     let value = Math.random();

//     function g() {
//         debugger;
//     }

//     return g;
// }

// let g = f();
// g();


// let value = "Surprise!";

// function f() {
//     let value = "the closest value";

//     function g() {
//         debugger;
//     }

//     return g;
// }

// let g = f();
// g();



// tasks 
// task 1
// let name = "John";

// function sayHi() {
//     console.log("Hi, " + name);
// }

// sayHi(); // John
// name = "Pete";

// sayHi(); // Pete


// task 2
// function makeWorker() {
//     let name = "Pete";

//     return function() {
//         console.log(name);
//     }
// }

// let name = "John";
// let work = makeWorker();

// work();


// task 3
// function makeCounter() {
//     let count = 0;

//     return function() {
//         return count++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter());
// console.log(counter());

// console.log(counter2());
// console.log(counter2());


// task 4
// function Counter() {
//     let count = 0;

//     this.up = function() {
//         return ++count;
//     };

//     this.down = function() {
//         return --count;
//     };
// }

// let counter = new Counter();
// console.log(counter.up());
// console.log(counter.up());
// console.log(counter.down());


// task 5 - anhaskanali sxal ashxatox task
// 'use strict';
// let phrase = "Hello";

// if (true) {
//     let user = "John";

//     function sayHi() {
//         console.log(`${phrase}, ${user}`);
//     }
// }

// sayHi();


// task 6
// function sum(a) {
//     return function(b) {
//         return a + b;
//     };
// }

// console.log(sum(1)(2));
// console.log(sum(5)(-1));


// task 7
// let x = 1;

// function func() {
//     console.log(x);

//     let x = 2;
// }

// func();


// task 8
// function inBetween(a, b) {
//     return function(x) {
//         return x >= a && x <= b;
//     };
// }

// function inArray(arr2) {
//     return function(m) {
//         return arr2.includes(m);
//     };
// }


// let arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(arr.filter(inBetween(3, 6)));

// console.log(arr.filter(inArray([1, 2, 10])));


// task 9
// function byField(fieldName) {
//     return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
// }

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// // debugger;
// users.sort(byField("name"));
// console.log(users);
// // users.sort(byField("age"));
// // console.log(users);


// task 10
// function makeArmy() {
//     let shooters = [];

//     let i = 0;

//     while (i < 10) {
//         let j = i;
//         let shooter = function() {
//             console.log(j);
//         };

//         shooters.push(shooter);
//         i++;
//     }

//     return shooters;
// }

// let army = makeArmy();
// army[0]();
// army[1]();
// army[2]();


// ------------------------------------------------------------
// Function object, NFE    - bard tema

// task 1

// function makeCounter() {
//     let count = 0;

//     function counter() {
//         return count++;
//     };

//     counter.set = (value) => count = value;
//     counter.decrease = () => count--;

//     return counter;
// }

// let counter = makeCounter();
// console.log(counter());
// console.log(counter());

// console.log(counter.set(5));
// console.log(counter.decrease());


// task 2
// function sum(a) {
//     let currentSum = a;

//     function f(b) {
//         currentSum += b;
//         return f;
//     }

//     f.toString = function() {
//         return currentSum;
//     };

//     return f;
// }

// alert(sum(1)(2));
// console.log(sum(5)(-1)(4));