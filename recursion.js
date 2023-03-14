// function pow(x, n) {
//     return (n == 1) ? x : x * pow(x, n - 1);
// }

// console.log(pow(2, 3));
// console.log(pow(2, 5));


// const company = {
//     sales: [{ name: "John", salary: 5000 }, { name: "Ann", salary: 4500 }],
//     development: {
//         sites: [{ name: "Rita", salary: 5500 }, { name: "Grigor", salary: 20000 }],
//         internals: [{ name: "Karen", salary: 3800 }]
//     }
// };

// function sumOfSalaries(department) {
//     if (Array.isArray(department)) {
//         return department.reduce((prev, current) => prev + current.salary, 0);
//     } else {
//         let sum = 0;
//         for (let subdep of Object.values(department)) {
//             sum += sumOfSalaries(subdep);
//         }
//         return sum;
//     }
// }

// console.log(sumOfSalaries(company));


// tasks
// task 1
// variant 1 - using for loop
// function sumTo(n) {
//     let sum = 0;
//     for (let num = 1; num <= n; num++) {
//         sum += num;
//     }
//     return sum;
// }

// variant 2 - using a recursion
// function sumTo(n) {
//     if (n == 1) return 1;
//     return n + sumTo(n - 1);
// }

// variant 3 - using the arithmetic progresision formula
// function sumTo(n) {
//     return n * (n + 1) / 2;
// }

// console.log(sumTo(5));
// console.log(sumTo(4));
// console.log(sumTo(1000));


// task 2
// function factorial(n) {
//     if (n == 1) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(4));
// console.log(factorial(5));


// task 3 - variant 1 - bad version
// function fib(n) {
//     let fibArr = [1, 1];

//     if (n > 2) {
//         for (let i = 2; i < n; i++) {
//             fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
//         }
//     }

//     return fibArr[n - 1];
// }

// console.log(fib(2));
// console.log(fib(7));
// console.log(fib(77));

// variant 2
// function fib(n) {
//     if (n == 1 || n == 2) return 1;
//     return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(4));
// console.log(fib(7));
// hankarc chbacel //// console.log(fib(77));

// variant 3 - optimal version
// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }

// console.log(fib(4));
// console.log(fib(7));
// console.log(fib(77));


// task 4
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };

// variant 1 - with loop
// function printList(list) {

//     let param = list;
//     while (param) {
//         console.log(param.value);
//         param = param.next;
//     }
// }

// variant 2 - with recursion
// function printList(list) {
//     console.log(list.value);

//     if (list.next) {
//         printList(list.next);
//     }
// }


// printList(list);
// console.log(list);


// task 5
// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };

// function printReverseList(list) {

//     if (list.next) {
//         printReverseList(list.next);
//     }

//     console.log(list.value);
// }

// function printReverseList(list) {
//     let arr = [];
//     let param = list;

//     while (param) {
//         arr.push(param.value);
//         param = param.next;
//     }

//     for (let i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i]);
//     }
// }

// printReverseList(list);



// -----------------------------------
// Rest parameters and spread syntax

// function employeeInfo(firstName, lastName, ...otherInfo) {
//     console.log(firstName + ' ' + lastName);

//     console.log('Other information about employee.');
//     for (let prop of otherInfo) {
//         console.log(prop);
//     }
// }

// employeeInfo('Rita', 'Aslanyan', 22, 'Armenia', 'Front-end engineer', 'el chgitem');


// Average of given numbers 
// function avr(...nums) {
//     let sumOfNums = 0;

//     for (let num of nums) {
//         sumOfNums += num;
//     }

//     return Math.round(sumOfNums / nums.length, 2);
// }

// console.log(avr(1, 5, 4, 6, 12, 25, 8));


// sum of given numbers
// function sumOfAll(...numbers) {
//     let sum = 0;

//     for (let i of numbers) {
//         sum += i;
//     }

//     return sum;
// }

// console.log(sumOfAll(1, 2, 3, 7, 8, 9, 4, 5, 6, 10));


// spread syntax
// console.log(Math.max(1, 25, 9, 8));

// let arr = [1, 5, 75, 68, 25, 3];
// let arr2 = [2, 8, 5, 3, 7, 15, 9];

// console.log(Math.min(arr)); // will be NaN

// console.log(Math.max(...arr));
// console.log(Math.min(...arr2));

// let newArr = [5, 10, ...arr, 8, 7, 11, ...arr2, 100];
// console.log(Math.max(...newArr));

// console.log(Math.min(...arr, ...arr2));


// Copy an array/ object

// let arr = [1, 2, 3, 4];
// let newArr = [...arr];

// console.log(newArr);

// console.log(JSON.stringify(arr) === JSON.stringify(newArr)); // true
// console.log(arr === newArr); // false, because they have not same reference

// arr.push(10);
// console.log(arr);
// console.log(newArr);


// let obj = { name: 'Katrin', age: 25 };
// let newObj = {...obj };

// console.log(JSON.stringify(obj) === JSON.stringify(newObj));
// console.log(obj === newObj); // not same referance

// obj.surname = "Smith";
// console.log(obj);
// console.log(newObj);