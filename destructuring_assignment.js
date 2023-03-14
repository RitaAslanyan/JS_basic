// //Array dectructuring
// let myArr = ["Nane", "Mikoyan", 40, "Female", "Armenian"];

// let [name1, surname, age, sex, citizenship] = myArr;

// console.log(name1);
// console.log(surname);
// console.log("Array isn't destruct, values are copied.");
// console.log(myArr);

// // array-returning methods
// let [name2, profession] = "Mesrop programmer".split(' ');
// console.log(name2);
// console.log(profession);

// // aj koxmum mnacac myusner@ ignore en linum
// let [col1, col2, col3, col4] = ["blue", "red", "yellow", "green", "black", "white"];
// console.log(col3);

// // ...rest avel mnacac elementner@ copy en linum arandzin arrayi mej
// let [mo, tu, we, ...otherDays] = ["Monday", "Tuesday", "Wednesday",
//     "Thursday", "Friday", "Saturday", "Sunday"
// ];
// console.log(we);
// console.log(otherDays);

// // any iterable on the right-side
// let [a, b, c] = "abc";
// let [doo, re, mi, fa] = new Set(["do", "re", "mi", "fa"]);
// console.log(mi);
// console.log(b);

// // assign to anything at the left-side
// let worker = {};
// [worker.name, worker.age] = ["Narbe Arushanyan", 50];
// console.log(worker.name + " - " + worker.age);

// // looping
// let otherWorker = {
//     name: "Mary",
//     profession: "accountant"
// };

// for (let [key, value] of Object.entries(otherWorker)) {
//     console.log(`${key}: ${value}`);
// }

// // nuyn@ kareli a anel map-ov

// // swaping

// let juice = "cold";
// let coffee = "hot";

// [juice, coffee] = [coffee, juice];

// console.log(juice, coffee);

// // default values
// let months = ["January", "February", "March"];

// let [first, second, third, fourth = "April"] = months;
// console.log(first);
// console.log(fourth);



// ----------------------------------------------
// Object destructuring
// nuyn@ inch vor array-i depqum

// let options = {
//     title: "Menu",
//     width: 150,
//     height: 200
// };

// let { title, height, width } = options;
// console.log(title);
// console.log(width);

// // with ...rest
// let { title: t, ...rest } = options;
// console.log(t);
// console.log(rest.height);


// let employee = {
//     name: "Armen",
//     age: 25,
// };

// let name, surname, age, position;

// // without let
// ({
//     name,
//     surname = "Khurshudyan",
//     age,
//     position: pos = "Middle software engineer"
// } = employee);

// console.log(name);
// console.log(pos);
// console.log(surname);
// console.log(age);


// -----------------
// Nested destructuring

// let options = {
//     size: {
//         width: 100,
//         height: 200
//     },
//     items: ["Cake", "Donut"],
//     extra: true
// };

// let {
//     size: { width, height },
//     items: [item1, item2]
// } = options;

// console.log(width);
// console.log(item2);


// destructuring in functions

// let options = {
//     title: "Menu",
//     items: ["Item1", "Item2"]
// };

// function showMenu({
//     title = "Default",
//     width: w = 150,
//     height: h = 200,
//     items: [item1, item2]
// }) {
//     console.log(title, w, h);
//     console.log(item1);
//     console.log(item2);
// }

// showMenu(options);


// task 1
// let user = {
//     name: "John",
//     years: 30
// };

// let { name, years: age, isAdmin = false } = user;

// console.log(name);
// console.log(age);
// console.log(isAdmin);

// task 2
// let salaries = {
//     "John": 400,
//     "Pete": 300,
//     "Mary": 550
// };

// function topSalary(salaries) {
//     let topPaidPerson = null;
//     let maxSalary = 0;

//     for (let [name, salary] of Object.entries(salaries)) {

//         if (salary > maxSalary) {
//             maxSalary = salary;
//             topPaidPerson = name;
//         }
//     }

//     return topPaidPerson;
// }

// console.log(topSalary(salaries));
// console.log(topSalary({}));