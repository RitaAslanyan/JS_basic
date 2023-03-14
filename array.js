// let styles = ["Jazz", "Blues"];
// console.log(styles);
// styles.push("Rock-n-Roll");
// console.log(styles);
// styles[Math.round((styles.length / 2) - 1)] = "Classics";
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift("Rap", "Reggae");
// console.log(styles);


//...
// let num = prompt("Enter number", 0);
// let arr = [];

// while (isFinite(num) && num !== null && num !== '') {
//     arr.push(+num);
//     num = prompt("Enter number", 0);
// }

// let sum = 0;
// for (let elem of arr) {
//     sum += elem;
// }

// alert(sum);


// array methods
// let arr = ["There", "are", "few", "words", "with", "no", "logic"];


// splice
// arr.splice(3, 2, "esim");
// console.log(arr);

// arr.splice(2, 0, "hello", "hi");
// console.log(arr);

// arr.splice(-1, 0, 5, 6);
// console.log(arr);

// let removed = arr.splice(2, 4);
// console.log(removed);


// slice
// let copyOfElems = arr.slice(3, 6);
// console.log(copyOfElems);
// console.log(arr);

// let copyOfArr = arr.slice();
// console.log(copyOfArr);
// console.log(arr);


// concat
// let newArr = arr.concat("bla", "bla", "boom", [1, 2, 3, 4]);
// console.log(newArr);

// let obj1 = {
//     0: "Artak",
//     1: 23,
//     length: 2,
// };

// let obj2 = {
//     0: "Artak",
//     1: 23,
//     [Symbol.isConcatSpreadable]: true,
//     length: 2,
// };

// let arr1 = arr.concat(obj1);
// console.log(arr1);

// let arr2 = arr.concat(obj2);
// console.log(arr2);


// forEach
// arr.forEach(alert);


// searching
// console.log(arr.indexOf("There"));
// console.log(arr.indexOf("There", 3));
// console.log(arr.includes("logic"));
// console.log(arr.includes("many"));
// console.log(arr.lastIndexOf("logic"));
// console.log(arr.lastIndexOf("logic", 3));

// let users = [
//     { name: "Jack", age: 34 },
//     { name: "John", age: 36 },
//     { name: "Ann", age: 20 },
//     { name: "Jack", age: 48 },
// ];

// let findUserName = users.find(item => item.age == 36);
// console.log(findUserName.name);
// let findUserIndex = users.findIndex(item => item.age == 20);
// console.log(findUserIndex);
// let findUserInd = users.findIndex(item => item.name == "Jack");
// console.log(findUserInd);
// let findUserLastInd = users.findLastIndex(item => item.name == "Jack");
// console.log(findUserLastInd);


// filter
// let filt = users.filter(item => item.age < 36);
// console.log(filt.length);

// let newUsers = users.map(item => item.name);
// console.log(newUsers);

// console.log(arr.reverse());

// console.log(arr.join(' '));

// reduce
// let arrOfNums = [2, 4, 6, 8, 10];
// let result = arrOfNums.reduce((sum, item) => sum + item, 0);
// console.log(result);

// console.log(Array.isArray(arr));


// ex 1
// function camelize(str) {
//     let arr = str.split('-');

//     for (let i = 0; i < arr.length; i++) {
//         if (i == 0) continue;
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//     }

//     return arr.join('');
// }

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));


// ex 2
// function filterRange(arr, a, b) {
//     return arr.filter(elem => (elem >= a && elem <= b));
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered);
// console.log(arr);


// ex 3
// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1);
//         }
//     }

//     return arr;
// }

// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);


// ex 4
// let arr = [5, 2, 1, 2, -10, 8];

// arr.sort((a, b) => b - a);

// console.log(arr);


//ex 5
// function copySorted(arr) {
//     return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log(sorted);
// console.log(arr);

// ex 6
// function Calculator() {

//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b,
//     };

//     this.calculate = function(str) {
//         let split = str.split(' '),
//             a = +split[0],
//             op = split[1],
//             b = +split[2];

//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }

//         return this.methods[op](a, b);
//     };

//     this.addMethod = function(name, func) {
//         this.methods[name] = func;
//     };
// }

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);

// let result = powerCalc.calculate("10 / 5");
// console.log(result);


// ex 7
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map(item => item.name);

// console.log(names);


//ex 8
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }));


// console.log(usersMapped[0].id);
// console.log(usersMapped[0].fullName);


// ex 9
// function sortByAge(users) {
//     users.sort((a, b) => a.age - b.age);
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [john, pete, mary];

// sortByAge(arr);

// console.log(arr[0].name);
// console.log(arr[1].name);
// console.log(arr[2].name);


// ex 10 -


// ex 11
// function getAverageAge(users) {
//     return (users.reduce((sum, current) => sum + current.age, 0)) / users.length;
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [john, pete, mary];

// console.log(getAverageAge(arr));


// ex 12
// function unique(arr) {
//     let newArr = [];
//     for (let elem of arr) {
//         if (!newArr.includes(elem)) {
//             newArr.push(elem);
//         }
//     }
//     return newArr;
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

// console.log(unique(strings));


// ex 13
// function groupById(arr) {
//     let usersObj = {};
//     for (let user of arr) {
//         usersObj[user.id] = user;
//     }
//     return usersObj;
// }

// function groupById(array) {
//     return array.reduce((obj, value) => {
//         obj[value.id] = value;
//         return obj;
//     }, {})
// }

// let users = [
//     { id: 'john', name: "John Smith", age: 20 },
//     { id: 'ann', name: "Ann Smith", age: 24 },
//     { id: 'pete', name: "Pete Peterson", age: 31 },
// ];

// let usersById = groupById(users);
// console.log(usersById);