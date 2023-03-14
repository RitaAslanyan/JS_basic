// Map

// let myMap = new Map();

// myMap.set("name", "Jack");
// myMap.set(5, "lesson");
// myMap.set("5", true);

// console.log(myMap.size);
// console.log(myMap.get("name"));
// console.log(myMap.get("5"));
// console.log(myMap.get(5));
// console.log(myMap.has(5));

// myMap.delete("5");
// console.log(myMap.get("5"));

// // myMap.set(true, "yes");
// // console.log(myMap[true]); // chi kareli [] ogtagorcel

// let person = {
//     name: "Mard",
//     age: 55,
//     job: "Shef"
// };

// myMap.set(person, "candidate");
// console.log(myMap.get(person));

// myMap.set("myName", "Rita")
//     .set("myAge", 22)
//     .set("myProfession", "nervakerutyun");


// console.log(myMap.get("myProfession"));
// console.log(myMap.size);



// for (let key of myMap.keys()) {
//     console.log(key);
// }
// console.log("--------------------------");

// for (let value of myMap.values()) {
//     console.log(value);
// }
// console.log("--------------------------");

// for (let elem of myMap.entries()) {
//     console.log(elem);
// }
// console.log("--------------------------");


// let jobsMap = new Map([
//     [1, "programmer"],
//     [2, "doctor"],
//     [3, "teacher"],
//     [4, "accountant"]
// ]);

// console.log("My lovely job:", jobsMap.get(3));

// jobsMap.forEach((val, key, jobsMap) => {
//     console.log(`${key}: ${val}`);
// });

// let objFromMap = Object.fromEntries(jobsMap);
// console.log(objFromMap[1]);
// console.log(typeof objFromMap);

// let obj = {
//     name: "John",
//     age: 40
// };

// let mapFromObj = new Map(Object.entries(obj));
// console.log('Age =', mapFromObj.get('age'));


// -------------------------------------------------------------
// Set

// let mySet = new Set();

// let mo = "monday";
// let tu = "tuesday";
// let we = "wednesday";
// let th = "thursday";

// mySet.add(mo);
// mySet.add(tu);
// mySet.add(we);
// mySet.add(mo);
// console.log(mySet);
// console.log(mySet.size);

// console.log(mySet.has('fr'));
// console.log(mySet.has('monday'));
// console.log(mySet.has(mo));

// console.log(mySet.delete(tu));

// console.log(mySet.size);

// mySet.add('saturday');
// console.log(mySet.size);

// mySet.clear();
// console.log(mySet.size);


// let setOfMonths = new Set(["March", "April", "May", "June", "July", "August"]);

// for (let elem of setOfMonths) {
//     console.log("Month: " + elem);
// }

// setOfMonths.forEach((elem, sameElem, setOfMonths) => {
//     console.log(elem);
// });


// task 1
// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// let values = ['Hare', 'Krishna', 'Hare', 'Krishna',
//     'Krishna', 'Krishna', 'Hare', ':-O'
// ];

// console.log(unique(values));


// task 2
// function aclean(arr) {
//     let map = new Map();

//     for (let elem of arr) {
//         let sortedElem = elem.toLowerCase().split('').sort().join('');

//         map.set(sortedElem, elem);

//     }

//     return Array.from(map.values());
// }

// let arr = [
//     'nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'
// ];

// console.log(aclean(arr));


// task 3
// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// keys.push("more");
// console.log(keys);


// -----------------------------------------
// WeakMap and WeakSet

// task 1 - store 'unread' flags

// let messages = [
//     { text: 'Hello', from: 'John' },
//     { text: 'How goes?', from: 'John' },
//     { text: 'See you soon', from: 'Alice' }
// ];

// let readMessages = new WeakSet();

// readMessages.add(messages[0]);
// readMessages.add(messages[1]);

// readMessages.add(messages[0]);

// console.log("Read message 0: " + readMessages.has(messages[0]));

// messages.shift();


// task 2 - store read dates

// let messages = [
//     { text: 'Hello', from: 'John' },
//     { text: 'How goes?', from: 'John' },
//     { text: 'See you soon', from: 'Alice' }
// ];

// let readMap = new WeakMap();

// readMap.add(messages[0], new Date(2022, 8, 30));


// ---------------------------------
// Object.keys, values, entries

// task 1

// function sumSalaries(salaries) {
//     let sumOfSalaries = 0;

//     for (let val of Object.values(salaries)) {
//         sumOfSalaries += val;
//     }

//     return sumOfSalaries;
// }

// tarberak 2
// function sumSalaries(salaries) {
//     return Object.values(salaries).reduce((a, b) => a + b, 0);
// }

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// console.log(sumSalaries(salaries));


// task 2
// function count(obj) {
//     return Object.keys(obj).length;
// }

// let user = {
//     name: "John",
//     age: 30
// };

// console.log(count(user));